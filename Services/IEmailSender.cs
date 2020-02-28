using System.Threading.Tasks;
namespace SiteJump.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}