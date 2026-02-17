import { Link } from "react-router-dom";
import { Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import AnimatedLogo from "./AnimatedLogo";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="font-serif text-2xl md:text-3xl max-w-2xl mx-auto mb-6 leading-relaxed">
          Join us in building a generation that is mindful, resilient, and emotionally strong
        </h2>
        <Link
          to="/programs"
          className="inline-block border-2 border-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary-foreground hover:text-primary transition-all duration-300"
        >
          Reach out to us Today!
        </Link>
      </div>

      {/* Info */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <AnimatedLogo size={40} />
            <span className="font-serif text-xl font-bold">
              PAGE<span className="text-brand-teal">4</span>MENTORS
            </span>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center gap-2 text-sm">
            <a href="tel:+917011559098" className="flex items-center gap-2 hover:text-brand-teal transition-colors">
              <Phone className="w-4 h-4" /> +91 7011559098
            </a>
            <a href="mailto:page4mentors@gmail.com" className="flex items-center gap-2 hover:text-brand-teal transition-colors">
              <Mail className="w-4 h-4" /> page4mentors@gmail.com
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4 justify-center md:justify-end">
            {[
              { icon: Facebook, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Youtube, href: "#" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/20 py-4 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Page4Mentors. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
