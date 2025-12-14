using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using System.Net;
using ServerlessMonitor.Models;
using ServerlessMonitor.Services;

namespace ServerlessMonitor
{
    public class ManualCheck
    {
        private readonly ILogger<ManualCheck> _logger;
        private readonly UrlChecker _checker;

        public ManualCheck(ILogger<ManualCheck> logger, UrlChecker checker)
        {
            _logger = logger;
            _checker = checker;
        }

        [Function("ManualCheck")]
        public async Task<MultiResponse> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post")] HttpRequestData req)
        {
            _logger.LogInformation("Manual check triggered via HTTP.");

            // Query string'den URL'i al
            var query = System.Web.HttpUtility.ParseQueryString(req.Url.Query);
            string url = query["url"];

            var response = req.CreateResponse(HttpStatusCode.OK);

            if (string.IsNullOrEmpty(url))
            {
                response.StatusCode = HttpStatusCode.BadRequest;
                await response.WriteStringAsync("Please provide a 'url' query parameter.");
                return new MultiResponse { HttpResponse = response };
            }

            // URL kontrolü yap
            var result = await _checker.CheckUrlAsync(url);
            
            // Sonucu JSON olarak HTTP yanıtına yaz
            await response.WriteAsJsonAsync(result);

            // Hem HTTP yanıtı dön, hem Cosmos DB'ye yaz
            return new MultiResponse
            {
                HttpResponse = response,
                CosmosResult = result
            };
        }
    }

    public class MultiResponse
    {
        [CosmosDBOutput("MonitorDb", "Results", Connection = "CosmosDbConnection", CreateIfNotExists = true)]
        public MonitorResult? CosmosResult { get; set; }

        public HttpResponseData HttpResponse { get; set; }
    }
}
