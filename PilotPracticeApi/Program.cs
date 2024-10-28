using Microsoft.EntityFrameworkCore;
using PilotPracticeApi.Data;
using PilotPracticeApi.Controllers;

namespace PilotPracticeApi
{
    public class Program
    {
        public static void Main( string[] args )
        {
            var CorsPolicy = "";
            var builder = WebApplication.CreateBuilder( args );
            builder.Services.AddCors( options =>
            {
                options.AddPolicy ( name: CorsPolicy,
                                    policy =>
                                    {
                                    policy.AllowAnyOrigin()
                                            .AllowAnyHeader()
                                            .AllowAnyMethod();
                                    });
            });

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();


            builder.Services.AddDbContext<Context>(options =>
            {
                options.UseSqlServer(builder.Configuration.GetConnectionString("Azure"));
            });

            var app = builder.Build();
            app.UseCors( CorsPolicy );
            if( app.Environment.IsDevelopment() )
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.MapControllers();
            app.MapGet( "/" , () => $"PilotPracticeApi running: {DateTime.Now}");
            app.Run();
        }
    }
}
