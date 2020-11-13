using System.Text.Json.Serialization;

namespace Client.Models
{
    public class Car
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("brand")]
        public string Brand { get; set; }

        [JsonPropertyName("model")]
        public string Model { get; set; }

        [JsonPropertyName("year")]
        public int Year { get; set; }
    }
}
