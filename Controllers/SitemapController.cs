using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml;
using Microsoft.AspNetCore.Mvc;
using MvcSiteMapProvider;

namespace SiteJump.Controllers
{
    public class SitemapController : Controller
    {
        [Route("/sitemap.xml")]
        public void SitemapXml()
        {
            //string host = Request.Scheme + "://" + Request.Host;
            Response.ContentType = "application/xml";

            using (var xml = XmlWriter.Create(Response.Body, new XmlWriterSettings { Indent = true }))
            {
                xml.WriteStartDocument();
                xml.WriteStartElement("urlset", "http://www.sitemaps.org/schemas/sitemap/0.9");

                xml.WriteStartElement("url");
                xml.WriteElementString("loc", "https://jumplabel.com.br/");
                xml.WriteElementString("changefreq", "daily");
                xml.WriteElementString("priority", "1.00");
                xml.WriteEndElement();

                xml.WriteStartElement("url");
                xml.WriteElementString("loc", "https://jumplabel.com.br/NavItems/Solucoes");
                xml.WriteElementString("changefreq", "daily");
                xml.WriteElementString("priority", "0.85");
                xml.WriteEndElement();

                xml.WriteStartElement("url");
                xml.WriteElementString("loc", "https://jumplabel.com.br/NavItems/Consultoria");
                xml.WriteElementString("changefreq", "daily");
                xml.WriteElementString("priority", "0.85");
                xml.WriteEndElement();

                xml.WriteStartElement("url");
                xml.WriteElementString("loc", "https://jumplabel.com.br/NavItems/Treinamentos");
                xml.WriteElementString("changefreq", "daily");
                xml.WriteElementString("priority", "0.85");
                xml.WriteEndElement();

                xml.WriteStartElement("url");
                xml.WriteElementString("loc", "https://jumplabel.com.br/NavItems/Tecnologias");
                xml.WriteElementString("changefreq", "daily");
                xml.WriteElementString("priority", "0.85");
                xml.WriteEndElement();

                xml.WriteStartElement("url");
                xml.WriteElementString("loc", "https://jumplabel.com.br/NavItems/OneTrustLGPD");
                xml.WriteElementString("changefreq", "daily");
                xml.WriteElementString("priority", "0.85");
                xml.WriteEndElement();

                xml.WriteStartElement("url");
                xml.WriteElementString("loc", "https://blog.jumplabel.com.br/");
                xml.WriteElementString("changefreq", "daily");
                xml.WriteElementString("priority", "0.85");
                xml.WriteEndElement();
            }
        }
    }
}