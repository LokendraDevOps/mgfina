import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiPhoneCall, FiMail } from 'react-icons/fi';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';
import BrandLogo from '@/components/common/BrandLogo';
import Button from '@/components/ui/Button';

const navItems = [['Home', '/'], ['Loans', '/loans'], ['Compare', '/compare'], ['Calculators', '/emi-calculator'], ['Blogs', '/blogs'], ['Contact', '/contact']];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
      <div className="border-b border-slate-200/70 bg-slate-950 text-white">
        <div className="page-shell flex flex-col gap-3 py-3 text-xs font-medium sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-slate-200">
            <span className="inline-flex items-center gap-2">
              <FiPhoneCall className="text-[13px]" />
              +91 98765 43210
            </span>
            <span className="inline-flex items-center gap-2">
              <FiMail className="text-[13px]" />
              hello@mgfina.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden text-slate-300 md:inline">
              Limited-time offer: Compare loan options with a single premium review.
            </span>
            <div className="flex items-center gap-2 text-slate-200">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <button
                  key={index}
                  type="button"
                  className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/15"
                  aria-label="Social link"
                >
                  <Icon className="text-[12px]" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="page-shell flex items-center justify-between py-4 lg:py-5">
        <Link to="/" className="flex items-center gap-3">
          <BrandLogo variant="full" tone="brand" className="h-9 w-auto sm:h-10" />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-2 shadow-sm lg:flex">
          {navItems.map(([label, path]) => (
            <Link
              key={path}
              to={path}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button as={Link} to="/apply" className="hidden sm:inline-flex">
            Apply Now
          </Button>
          <button
            type="button"
            className="inline-flex rounded-full border border-slate-200 p-3 text-slate-700 transition hover:bg-slate-100 lg:hidden"
            aria-label="Open navigation"
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="page-shell flex flex-col gap-4 py-4">
            <nav className="grid gap-2">
              {navItems.map(([label, path]) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <Button as={Link} to="/apply" className="w-full">
              Apply Now
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
