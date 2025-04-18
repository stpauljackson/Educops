import Image from "next/image";
import Link from "next/link";
import { Twitter, Facebook, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-primary/10 bg-background py-6 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/placeholder.svg?height=32&width=32" width={32} height={32} alt="Educops Logo" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Educops
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Streamline your workflow and boost productivity with our all-in-one platform.
            </p>
          </div>

          {/* Navigation Links */}
          <FooterColumn
            title="Product"
            links={[
              { label: "Features", href: "#features", isSmoothScroll: true },
              { label: "Pricing", href: "#pricing", isSmoothScroll: true },
            ]}
          />
          <FooterColumn
            title="Company"
            links={[
              { label: "About", href: "#" },
              { label: "Blog", href: "#" },
              { label: "Contact", href: "#" },
            ]}
          />
          <FooterColumn
            title="Legal"
            links={[
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Service", href: "#" },
            ]}
          />
        </div>

        {/* Copyright & Social Links */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-primary/10 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Educops. All rights reserved.
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

// Reusable Footer Column Component
interface FooterColumnProps {
  title: string;
  links: { label: string; href: string; isSmoothScroll?: boolean }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-base font-medium text-primary">{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                if (link.isSmoothScroll) {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Social Media Links Component
const SocialLinks = () => {
  const socialIcons = [
    { Icon: Twitter, label: "Twitter" },
    { Icon: Facebook, label: "Facebook" },
    { Icon: Instagram, label: "Instagram" },
    { Icon: Linkedin, label: "LinkedIn" },
    { Icon: Github, label: "GitHub" },
  ];

  return (
    <div className="flex gap-4">
      {socialIcons.map(({ Icon, label }, index) => (
        <Link key={index} href="#" className="text-muted-foreground hover:text-primary transition-colors">
          <Icon className="h-5 w-5" />
          <span className="sr-only">{label}</span>
        </Link>
      ))}
    </div>
  );
};

export default Footer;
