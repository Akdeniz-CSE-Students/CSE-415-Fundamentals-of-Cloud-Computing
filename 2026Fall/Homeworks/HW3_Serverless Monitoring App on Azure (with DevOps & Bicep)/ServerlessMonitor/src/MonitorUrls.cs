// src/MonitorUrls.cs
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using ServerlessMonitor.Models;
using ServerlessMonitor.Services;

namespace ServerlessMonitor
{
    public class MonitorUrls
    {
        private readonly ILogger _logger;
        private readonly UrlChecker _checker;
        private readonly IConfiguration _configuration;

        public MonitorUrls(ILoggerFactory loggerFactory, UrlChecker checker, IConfiguration configuration)
        {
            _logger = loggerFactory.CreateLogger<MonitorUrls>();
            _checker = checker;
            _configuration = configuration;
        }

        [Function("MonitorUrls")]
        [CosmosDBOutput("MonitorDb", "Results", Connection = "CosmosDbConnection", CreateIfNotExists = true)]
        public async Task<MonitorResult[]> Run([TimerTrigger("%ScheduleExpression%")] TimerInfo myTimer)
        {
            _logger.LogInformation($"C# Timer trigger function executed at: {DateTime.Now}");

            // App Configuration'dan URL listesini oku (Örn: "google.com;microsoft.com")
            // Ayar ismi: "MonitoredUrls"
            string urlsConfig = _configuration["MonitoredUrls"];
            var results = new List<MonitorResult>();

            if (string.IsNullOrEmpty(urlsConfig))
            {
                _logger.LogWarning("No URLs found in configuration 'MonitoredUrls'.");
                return Array.Empty<MonitorResult>();
            }

            var urls = urlsConfig.Split(';');

            foreach (var url in urls)
            {
                if (string.IsNullOrWhiteSpace(url)) continue;

                var cleanUrl = url.Trim();
                if (!cleanUrl.StartsWith("http")) cleanUrl = "https://" + cleanUrl;

                _logger.LogInformation($"Checking: {cleanUrl}");
                var result = await _checker.CheckUrlAsync(cleanUrl);
                results.Add(result);
            }

            // Listeyi diziye çevirip döndürüyoruz.
            // Bu sayede Cosmos DB Output binding her bir öğeyi ayrı birer döküman olarak kaydeder.
            return results.ToArray();
        }
    }
}
