const footerLinks = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Team", href: "/team" },
      { label: "Projects", href: "/#projects" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Web Development", href: "/pricing" },
      { label: "Mobile Apps", href: "/pricing" },
      { label: "Full-Stack", href: "/pricing" },
      { label: "Book a Call", href: "https://calendly.com/kaowserpro/30min" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "GitHub", href: "https://github.com/kaowser" },
      { label: "Twitter / X", href: "https://x.com/kaowser" },
      { label: "LinkedIn", href: "https://linkedin.com/in/kaowser" },
      { label: "WhatsApp", href: "https://wa.me/8801890273459" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f]">
      {/* Main footer grid */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        {/* Brand col */}
        <div className="col-span-2 md:col-span-1">
          <a href="/" className="text-lg font-bold text-white hover:text-orange-400 transition-colors">
            Kaowser <span className="text-orange-400">Pro</span>
          </a>
          <p className="text-gray-500 text-xs leading-relaxed mt-3 max-w-[180px]">
            App & Web Developer. Building fast, modern digital experiences.
          </p>
          <div className="flex items-center gap-1.5 mt-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-xs font-medium">Available for projects</span>
          </div>
        </div>

        {/* Link columns */}
        {footerLinks.map((col) => (
          <div key={col.heading}>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
              {col.heading}
            </p>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-gray-400">Kaowser Ahmed</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" className="hover:text-gray-400 transition-colors">Privacy</a>
            <span>·</span>
            <a href="/terms" className="hover:text-gray-400 transition-colors">Terms</a>
            <span>·</span>
            <a href="/cookie-policy" className="hover:text-gray-400 transition-colors">Cookies</a>
            <span>·</span>
            <a href="/refund-policy" className="hover:text-gray-400 transition-colors">Refunds</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
