using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
//using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using SiteJump.Models;
using SiteJump.Services;

namespace SiteJump.Controllers
{
    public class SendEmailController : Controller
    {
        private readonly IEmailSender _emailSender;
        private readonly WebMVCJump _context;

        public SendEmailController(IEmailSender emailSender, WebMVCJump context, IHostingEnvironment env)
        {
            _emailSender = emailSender;
            _context = context;
        }


        public async Task EnviaEmail(Email email)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    EnvioEmail(email.Destino, email.Assunto, email.Mensagem).GetAwaiter();
                }
                catch (Exception)
                {
                   
                }
            }
        }

        public async Task EnvioEmail(string email, string assunto, string mensagem)
        {
            try
            {
                //email destino, assunto do email, mensagem a enviar
                await _emailSender.SendEmailAsync(email, assunto, mensagem);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task EnviaEmailTreinamento(Email email)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    EnvioEmail(email.Destino, email.Assunto, email.Mensagem).GetAwaiter();
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                }
            }

        }
    }
}