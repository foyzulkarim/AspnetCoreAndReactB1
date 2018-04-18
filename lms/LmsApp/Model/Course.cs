using System;
using System.Collections.Generic;
using System.Text;
using Common;
using Common.Model;

namespace Model
{
    public class Course : Entity
    {
        public string Name { get; set; }

        public string ImageUrl { get; set; }

        public string TrainerName { get; set; }

        //public string TrainerId { get; set; }

        public double AverageRating { get; set; }

        public int EnrolledCount { get; set; }

        public double RegularPrice { get; set; }

        public double DiscountedPrice { get; set; }

        public bool IsFree { get; set; }

        public string Topic { get; set; }

        public int TotalDurationHour { get; set; }

        public int TotalLectureCount { get; set; }

        public StudentLevel StudentLevel { get; set; }

        public string Language { get; set; }

        public int ViewCount { get; set; }
    }

    public enum StudentLevel
    {
        Beginner = 0,
        Intermediate,
        Expert
    }
}
