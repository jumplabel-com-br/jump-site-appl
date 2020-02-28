using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SiteJump.Models
{
    public class Email
    {
        [Display(Name = "Nome")]
        public string Nome { get; set; }

        [Display(Name = "Remetente"), EmailAddress]
        public string Remetente { get; set; }


        [Display(Name = "Telefone")]
        public string Telefone { get; set; }

        [Display(Name = "Mensagem")]
        public string Mensagem { get; set; }

        [Display(Name = "Email de destino"), EmailAddress]
        public string Destino { get; set; }

        [Display(Name = "Assunto")]
        public string Assunto { get; set; }
    }
}
