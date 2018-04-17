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
        private AppDbContext _db;

        public StudentsController(ILoggerFactory factory, AppDbContext db)
        {
            this._logger = factory.CreateLogger<StudentsController>();
            _db = db;
        }

        [HttpGet]
        [Route("GetStudents")]
        public IActionResult GetStudents()
        {
            List<Student> students = _db.Students.ToList();
            return this.Ok(students);
        }

        [HttpPost]
        [Route("SaveStudent")]
        public IActionResult SaveStudent([FromBody] Student student)
        {
            // model validation
            student.Id = Guid.NewGuid().ToString();
            _db.Students.Add(student);
            _db.SaveChanges();
            return this.Ok(student);
        }

        [HttpPut]
        [Route("EditStudent")]
        public IActionResult EditStudent([FromBody] Student student)
        {
            //Student dbStudent = _db.Students.Find(student.Id);
            //if (dbStudent==null)
            //{
            //    return NotFound("Student not found");
            //}

            //dbStudent.Name = student.Name;
            //dbStudent.Phone = student.Phone;
            _db.Students.Update(student);
            _db.SaveChanges();
            return Ok(true);
        }

        [HttpDelete]
        [Route("DeleteStudent")]
        public IActionResult DeleteStudent(string id)
        {
            Student student = _db.Students.Find(id);
            if (student==null)
            {
                return NotFound("Object not found");
            }

            _db.Students.Remove(student);
            _db.SaveChanges();
            return this.Ok(id);
        }
    }
}