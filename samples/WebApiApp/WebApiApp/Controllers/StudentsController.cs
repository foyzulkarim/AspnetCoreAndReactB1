using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApiApp.Controllers
{
    using Microsoft.Extensions.Logging;

    using WebApiApp.Models;

    [Produces("application/json")]
    [Route("api/Students")]
    public class StudentsController : Controller
    {
        private ILogger _logger;

        private AppDbContext db;

        public StudentsController(ILoggerFactory factory, AppDbContext db)
        {
            this._logger = factory.CreateLogger<StudentsController>();
            this.db = db;
        }

        [HttpGet]
        [Route("GetStudents")]
        public IActionResult GetStudents()
        {
            List<Student> students = new List<Student>();
            students.Add(new Student() { Id = Guid.NewGuid().ToString(), Name = "ABC", Phone = "123" });
            students.Add(new Student() { Id = Guid.NewGuid().ToString(), Name = "DEF", Phone = "456" });

            return this.Ok(students);
        }

        [HttpPost]
        [Route("SaveStudent")]
        public IActionResult SaveStudent([FromBody] Student student)
        {
            student.Id = Guid.NewGuid().ToString();
            return this.Ok(student);
        }

        [HttpDelete]
        [Route("DeleteStudent")]
        public IActionResult DeleteStudent(string id)
        {
            return this.Ok(id);
        }
    }
}