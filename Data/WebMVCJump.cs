using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SiteJump.Models;


namespace SiteJump.Models
{
    public class WebMVCJump : DbContext
    {
        public WebMVCJump (DbContextOptions<WebMVCJump> options) : base(options)
        {

        }
        public DbSet<SiteJump.Models.Email> Email { get; set; }
    }
}
