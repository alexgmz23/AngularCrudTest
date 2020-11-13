using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Models;

namespace Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CarController : ControllerBase
    {
        private readonly CarContext _carContext;

        public CarController(CarContext carContext)
        {
            _carContext = carContext;
        }

        [HttpGet("")]
        public async Task<Car[]> Get()
        {
            return await _carContext.Cars.ToArrayAsync();
        }

        [HttpGet("{carId}")]
        public async Task<Car> Get(int carId)
        {
            return await _carContext.Cars.SingleAsync(c => c.Id == carId);
        }

        [HttpPost]
        public async Task<int> Post([FromBody] Car car)
        {
            await _carContext.Cars.AddAsync(car);
            return await _carContext.SaveChangesAsync();
        }

        [HttpPut]
        public async Task<int> Put([FromBody] Car car)
        {
            _carContext.Cars.Update(car);
            return await _carContext.SaveChangesAsync();
        }

        [HttpDelete("{carId}")]
        public async Task<int> Delete(int carId)
        {
            var car = await _carContext.Cars.SingleAsync(c => c.Id == carId);
            _carContext.Cars.Remove(car);
            return await _carContext.SaveChangesAsync();
        }
    }
}