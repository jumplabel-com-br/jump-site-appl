using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SiteJump.Helpers
{
    public class SEOPageMetaHelper
    {
        public static IEnumerable<Tuple<string, string, string, string>> Collections
        {
            get
            {
                return new List<Tuple<string, string, string, string>>
                    {
                       new Tuple<string, string, string, string>("NavItems/Index", "Home | Jump Label Solutions", "Index Description","keyword1,keyword2"),
                       new Tuple<string, string, string, string>("NavItems/Consultoria", "Consultoria | Jump Label Solutions",  "Consultoria Description","keyword3,keyword4"),
                       new Tuple<string, string, string, string>("NavItems/OneTrustLGPD", "OneTrustLGPD | Jump Label Solutions", "OneTrustLGPD Description","keyword5,keyword6"),
                       new Tuple<string, string, string, string>("NavItems/Solucoes", "Solucoes | Jump Label Solutions", "Solucoes Description","keyword7,keyword8"),
                       new Tuple<string, string, string, string>("NavItems/Tecnologias", "Tecnologias | Jump Label Solutions", "Tecnologias Description","keyword9,keyword10")
                    };
            }
        }
    }
}
