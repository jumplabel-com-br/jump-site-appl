using SiteJump.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SiteJump.Data
{
    public class SeedingService
    {
        private WebMVCJump _context;

        public SeedingService(WebMVCJump context)
        {
            _context = context;
        }

        public void Seed()
        {

            if (_context.Email.Any())
            {
                return; //DB has been seeded
            }

            _context.SaveChanges();
        }
    }
}
