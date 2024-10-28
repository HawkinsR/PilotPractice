using Microsoft.EntityFrameworkCore;

namespace PilotPracticeApi.Models
{
    public class Question
    {
        int ID { get; set; }
        string title { get; set; } = "";
        string questionText { get; set; } = "";
        string[] answers { get; set; } = [""];
        int correctAnswer {get; set; }
    }
}
