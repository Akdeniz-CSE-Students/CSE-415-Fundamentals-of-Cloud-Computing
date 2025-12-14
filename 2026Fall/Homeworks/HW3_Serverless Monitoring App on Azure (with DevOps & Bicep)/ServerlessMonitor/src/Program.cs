using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Azure.Identity;
using ServerlessMonitor.Services;

var host = new HostBuilder()
    .ConfigureFunctionsWorkerDefaults() // Standart isolated worker
    .ConfigureAppConfiguration((context, config) =>
    {
        var settings = config.Build();
        var appConfigConn = settings["AppConfigConnectionString"];

        if (!string.IsNullOrEmpty(appConfigConn))
        {
            config.AddAzureAppConfiguration(options =>
            {
                options.Connect(appConfigConn)
                       // Key Vault referanslarını çözmek için Credential ayarla
                       // Bu yöntem daha güvenilirdir ve eski/yeni SDK fark etmez
                       .ConfigureKeyVault(kv =>
                       {
                           kv.SetCredential(new DefaultAzureCredential());
                       });
            });
        }
    })
    .ConfigureServices(services =>
    {
        services.AddApplicationInsightsTelemetryWorkerService();
        services.ConfigureFunctionsApplicationInsights();
        services.AddHttpClient();
        services.AddSingleton<UrlChecker>();
    })
    .Build();

host.Run();
