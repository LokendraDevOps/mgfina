import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import BrandLogo from '@/components/common/BrandLogo';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="page-shell grid gap-10 py-14 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
        <div className="space-y-5">
          <BrandLogo variant="full" tone="light" className="h-10 w-auto" />
          <p className="max-w-md text-sm leading-6 text-slate-300">
            Premium finance support for people and businesses who want clarity, confidence, and a cleaner borrowing journey.
          </p>
          <div className="flex items-center gap-3 text-slate-200">
            {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, index) => (
              <button
                key={index}
                type="button"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/15"
                aria-label="Social link"
              >
                <Icon className="text-sm" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-200">Quick Links</h3>
          <div className="grid gap-3 text-sm text-slate-300">
            <a href="#home">Home</a>
            <a href="#loan-products">Loan Products</a>
            <a href="#calculators">Calculators</a>
            <a href="#blogs">Blogs</a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-200">Loan Categories</h3>
          <div className="grid gap-3 text-sm text-slate-300">
            <span>Personal Loan</span>
            <span>Business Loan</span>
            <span>Home Loan</span>
            <span>Loan Against Property</span>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-200">Contact</h3>
          <div className="grid gap-3 text-sm text-slate-300">
            <span className="inline-flex items-start gap-2">
              <FiPhoneCall className="mt-0.5" />
              +91 98765 43210
            </span>
            <span className="inline-flex items-start gap-2">
              <FiMail className="mt-0.5" />
              hello@mgfina.com
            </span>
            <span className="inline-flex items-start gap-2">
              <FiMapPin className="mt-0.5" />
              India
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="page-shell flex flex-col gap-3 py-5 text-xs leading-5 text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            Disclaimer: MGFINA acts as a loan facilitation and comparison platform. Final approval is always subject to lender policy and eligibility.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#home">Privacy</a>
            <a href="#home">Terms</a>
            <span>© {new Date().getFullYear()} MGFINA Fincare Services LLP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
