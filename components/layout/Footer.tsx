import Link from "next/link";
import {
  Rocket,
  Twitter,
  Linkedin,
  Mail,
  Github,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/constants";

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-background dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Rocket className="h-6 w-6 text-primary" />
              </motion.div>
              <span className="font-bold text-xl text-foreground">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              {SITE_CONFIG.description}. Building the future of entrepreneurship
              through meaningful connections.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  icon: Twitter,
                  href: SITE_CONFIG.links.twitter,
                  label: "Twitter",
                },
                {
                  icon: Linkedin,
                  href: SITE_CONFIG.links.linkedin,
                  label: "LinkedIn",
                },
                {
                  icon: Github,
                  href: SITE_CONFIG.links.github,
                  label: "GitHub",
                },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Mail, href: "#", label: "Email" },
              ].map((social, index) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={social.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-4 text-foreground">Platform</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Startups", href: "/startups" },
                { name: "Mentors", href: "/mentors" },
                { name: "Investors", href: "/investors" },
                { name: "Events", href: "/events" },
              ].map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-4 text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Blog", href: "/blog" },
                { name: "Guides", href: "/guides" },
                { name: "Templates", href: "/templates" },
                { name: "Support", href: "/support" },
              ].map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "About", href: "/about" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/contact" },
                { name: "Privacy", href: "/privacy" },
              ].map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-muted-foreground text-sm">
              © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
              reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/cookies"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
