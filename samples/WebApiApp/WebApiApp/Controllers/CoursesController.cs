using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace WebApiApp.Controllers
{
    [Produces("application/json")]
    [Route("api/Courses")]
    public class CoursesController : Controller
    {
        private ILogger _logger;

        public CoursesController(ILoggerFactory factory)
        {
            _logger = factory.CreateLogger<CoursesController>();
        }

        [Route("GetCourses")]
        public string GetCourses()
        {
            _logger.LogError("get courses");
            return DateTime.Now.ToString();
        }

        [Route("GetPublicCourses")]
        public IActionResult GetPublicCourses()
        {
            _logger.LogDebug("get public courses debug");
            _logger.LogCritical("get public courses critical");
            _logger.LogTrace("get public courses trace");
            _logger.LogWarning("get public courses warning");          
            IActionResult actionResult = this.Ok(DateTime.Now);
            return actionResult;
        }
    }
}