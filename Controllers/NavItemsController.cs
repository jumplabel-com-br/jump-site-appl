﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SiteJump.Models;

namespace Oficial_Jump.Controllers
{
    public class NavItemsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }


        public IActionResult Solucoes()
        {
            return View();
        }

        public IActionResult Consultoria()
        {
            return View();
        }

        public IActionResult Treinamentos() { 
            return View();
        }

        public IActionResult Tecnologias()
        {
            return View();
        }
        
        public IActionResult OneTrustLGPD()
        {
            return View();
        }

        public IActionResult Alteryx()
        {
            return View();
        }

        public IActionResult SAS()
        {
            return View();
        }

        public IActionResult sitemap()
        {
            return View();
        }

       
    }
}