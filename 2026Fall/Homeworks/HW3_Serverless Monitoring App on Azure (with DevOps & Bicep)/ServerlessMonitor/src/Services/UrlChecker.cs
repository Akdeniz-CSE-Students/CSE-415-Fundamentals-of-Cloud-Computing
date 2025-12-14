// src/Services/UrlChecker.cs
using System.Diagnostics;
using ServerlessMonitor.Models;

namespace ServerlessMonitor.Services
{
    public class UrlChecker
    {
        private readonly HttpClient _httpClient;

        public UrlChecker(IHttpClientFactory httpClientFactory)
        {
            _httpClient = httpClientFactory.CreateClient();
            _httpClient.Timeout = TimeSpan.FromSeconds(10); // 10 sn timeout
        }

        public async Task<MonitorResult> CheckUrlAsync(string url)
        {
            var result = new MonitorResult { Url = url };
            var stopwatch = Stopwatch.StartNew();

            try
            {
                var response = await _httpClient.GetAsync(url);
                stopwatch.Stop();

                result.StatusCode = (int)response.StatusCode;
                result.ResponseTimeMs = stopwatch.ElapsedMilliseconds;

                // 200-299 arası başarılı sayalım
                result.Status = response.IsSuccessStatusCode ? "Up" : "Down";
            }
            catch (Exception ex)
            {
                stopwatch.Stop();
                result.ResponseTimeMs = stopwatch.ElapsedMilliseconds;
                result.Status = "Down";
                result.StatusCode = 0;
                result.ErrorMessage = ex.Message;
            }

            return result;
        }
    }
}
