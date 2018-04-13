using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApiApp.Controllers
{
    [Produces("application/json")]
    [Route("api/Courses")]
    public class CoursesController : Controller
    {
        [HttpPost]
        [Route("GetCourses")]
        public string GetCourses()
        {
            return DateTime.Now.ToString();
        }

        [Route("GetPublicCourses")]
        public IActionResult GetPublicCourses()
        {
            IActionResult actionResult = this.Ok(DateTime.Now);
            return actionResult;
        }
    }
}