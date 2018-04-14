using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace WebApiApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            IWebHost webHost = BuildWebHost(args);
            webHost.Run();
        }

        public static IWebHost BuildWebHost(string[] args)
        {
            IWebHostBuilder webHostBuilder = WebHost
                .CreateDefaultBuilder(args)
                .ConfigureLogging(
                    (context, builder) =>
                        {
                            builder.AddFile("C:/Temp/Logs/log-{Date}.txt");
                        })
                .UseStartup<OurnewStartup>();
            return webHostBuilder.Build();
        }
    }
}
