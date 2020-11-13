using Server.Models;
using System.Collections.Generic;
using System.Linq;

namespace Server.Data
{
    public class CarInitializer
    {
        public static void Seed(CarContext context)
        {
            context.Database.EnsureCreated();

            if (context.Cars.Any())
            {
                return;
            }

            var cars = new List<Car>
            {
                new Car { Brand = "Nissan", Model = "Altima", Year = 2015 },
                new Car { Brand = "Nissan", Model = "Maxima", Year = 2020 },
                new Car { Brand = "Ford", Model = "Fiesta", Year = 2018 },
                new Car { Brand = "Ford", Model = "Focus", Year = 2010 },
                new Car { Brand = "VW", Model = "Jetta", Year = 2019 }
            };

            cars.ForEach(c => context.Cars.Add(c));
            context.SaveChanges();
        }
    }
}
