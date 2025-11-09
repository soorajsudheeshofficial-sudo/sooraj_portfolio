import { Mail, Phone, MapPin, Linkedin, Send, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { toast } from "sonner@2.0.3";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "sooraj.sudheeshofficial@gmail.com",
    href: "mailto:sooraj.sudheeshofficial@gmail.com",
    gradient: "from-blue-500 to-cyan-500",
    description: "Send me an email",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8921423742",
    href: "tel:8921423742",
    gradient: "from-green-500 to-emerald-500",
    description: "Give me a call",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Palakkad, Kerala, India",
    href: "#",
    gradient: "from-purple-500 to-pink-500",
    description: "My location",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/soorajs2002",
    href: "https://www.linkedin.com/in/soorajs2002",
    gradient: "from-blue-600 to-blue-400",
    description: "Connect with me",
  },
];

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full mb-4">
              <span className="text-pink-400">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, projects, or just having a conversation about technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-900/30 border border-white/10 backdrop-blur-xl overflow-hidden">
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl">Contact Information</h3>
                  </div>

                  <p className="text-slate-300 leading-relaxed">
                    Feel free to reach out through any of these channels. I typically respond within 24 hours.
                  </p>

                  <div className="space-y-4">
                    {contactMethods.map((method, index) => {
                      const Icon = method.icon;
                      return (
                        <motion.a
                          key={index}
                          href={method.href}
                          target={method.href.startsWith("http") ? "_blank" : undefined}
                          rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ x: 10 }}
                          className="group flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 border border-white/10 hover:border-white/20 hover:bg-slate-800/50 transition-all duration-300"
                        >
                          <div className={`p-3 bg-gradient-to-r ${method.gradient} rounded-lg group-hover:scale-110 transition-transform`}>
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <p className="text-slate-400 text-sm">{method.label}</p>
                              <span className="text-xs text-slate-500">{method.description}</span>
                            </div>
                            <p className="text-slate-200 break-all">{method.value}</p>
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>

                  {/* Social proof */}
                  <div className="pt-6 border-t border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 border-2 border-slate-900"></div>
                        ))}
                      </div>
                      <div>
                        <p className="text-slate-300 text-sm">100+ Happy Clients</p>
                        <div className="flex items-center gap-1 text-yellow-400">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-0 hover:opacity-10 transition-opacity duration-300 -z-10"></div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-900/30 border border-white/10 backdrop-blur-xl space-y-6">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/50 transition-all"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>

                <p className="text-xs text-slate-500 text-center">
                  By submitting this form, you agree to be contacted regarding your inquiry.
                </p>
              </form>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-white/10 text-center"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                SS
              </div>
              <p className="text-slate-400">
                © 2025 Sooraj S. All rights reserved.
              </p>
              <p className="text-slate-500 text-sm">
                Built with React, TypeScript, and Tailwind CSS
              </p>
            </div>
          </motion.footer>
        </div>
      </div>
    </section>
  );
}
