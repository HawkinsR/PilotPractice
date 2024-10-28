using Microsoft.EntityFrameworkCore;
using PilotPracticeApi.Models;

namespace PilotPracticeApi.Data
{
    public class Context : DbContext
    {
        public DbSet<Question> Questions => Set<Question>();

        public Context( DbContextOptions<Context> options ) : base( options)
        {}
    }
}
