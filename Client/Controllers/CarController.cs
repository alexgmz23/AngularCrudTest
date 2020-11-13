using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Client.Models;
using Microsoft.AspNetCore.Mvc;

namespace Client.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        readonly string WebApiUrl = "https://localhost:8001/api/Car";

        [HttpGet("")]
        public async Task<Car[]> Get()
        {
            using var httpClient = new HttpClient();
            using var response = await httpClient.GetAsync(WebApiUrl);
            string apiResponse = await response.Content.ReadAsStringAsync();
            return JsonSerializer.Deserialize<Car[]>(apiResponse);
        }

        [HttpGet("{carId}")]
        public async Task<Car> Get(int carId)
        {
            using var httpClient = new HttpClient();
            using var response = await httpClient.GetAsync($"{WebApiUrl}/{carId}");
            string apiResponse = await response.Content.ReadAsStringAsync();
            return JsonSerializer.Deserialize<Car>(apiResponse);
        }

        [HttpPost]
        public async Task<int> Post([FromBody] Car car)
        {
            string jsonCar = JsonSerializer.Serialize(car);
            var content = new StringContent(jsonCar, Encoding.UTF8, "application/json");

            using var httpClient = new HttpClient();
            using var response = await httpClient.PostAsync(WebApiUrl, content);

            string postResponse = await response.Content.ReadAsStringAsync();
            int.TryParse(postResponse, out int result);

            return result;
        }

        [HttpPut]
        public async Task<int> Put([FromBody] Car car)
        {
            string jsonCar = JsonSerializer.Serialize(car);
            var content = new StringContent(jsonCar, Encoding.UTF8, "application/json");

            using var httpClient = new HttpClient();
            using var response = await httpClient.PutAsync(WebApiUrl, content);

            string postResponse = await response.Content.ReadAsStringAsync();
            int.TryParse(postResponse, out int result);

            return result;
        }

        [HttpDelete("{carId}")]
        public async Task<int> Delete(int carId)
        {
            using var httpClient = new HttpClient();
            using var response = await httpClient.DeleteAsync($"{WebApiUrl}/{carId}");

            string postResponse = await response.Content.ReadAsStringAsync();
            int.TryParse(postResponse, out int result);

            return result;
        }
    }
}
