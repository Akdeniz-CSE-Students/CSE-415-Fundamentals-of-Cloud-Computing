// src/Models/MonitorResult.cs
using System;

namespace ServerlessMonitor.Models
{
    public class MonitorResult
    {
        public string id { get; set; } = Guid.NewGuid().ToString(); // Cosmos DB unique ID gerektirir
        public string Url { get; set; }
        public string Status { get; set; } // "Up" veya "Down"
        public int StatusCode { get; set; }
        public long ResponseTimeMs { get; set; }
        public DateTime Timestamp { get; set; } = DateTime.UtcNow;
        public string? ErrorMessage { get; set; }
    }
}
