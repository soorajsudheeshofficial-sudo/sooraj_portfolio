import { MapPin, Phone, Mail, Linkedin, Download, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { toast } from "sonner@2.0.3";
import appu1 from '../images/appu1.jpg';

const socialLinks = [
  {
    icon: Mail,
    href: "mailto:sooraj.sudheeshofficial@gmail.com",
    label: "Email",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Phone,
    href: "tel:+918921423742",
    label: "Phone",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/soorajs2002",
    label: "LinkedIn",
    color: "from-blue-600 to-blue-700",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <Sparkles className="h-5 w-5 text-yellow-400" />
                  <span className="text-slate-400">Welcome to my portfolio</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-7xl font-bold"
                >
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Sooraj S
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap items-center gap-3"
                >
                  <div className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Full Stack Developer
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <MapPin className="h-4 w-4" />
                    <span>Palakkad, Kerala</span>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-slate-400">Available for work</span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-slate-400 leading-relaxed"
                >
                  Crafting scalable web applications with modern technologies.
                  Specialized in Python, Django, React.js, and full-stack development
                  with a passion for creating exceptional user experiences.
                </motion.p>
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 rounded-xl bg-gradient-to-r ${social.color} hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </motion.a>
                  );
                })}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-blue-500/50"
                  asChild
                >
                  <a href="#contact">Let's Talk</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-blue-500/50"
                  asChild
                >
                  <a href="/CV.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-40 animate-pulse"></div>

                {/* Image container */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  <img
                    src={appu1}
                    alt="Sooraj Sudheesh"
                    className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-slate-900"
                  />

                  {/* Status indicator */}
                  <div className="absolute bottom-8 right-8 flex items-center gap-2 px-4 py-2 bg-slate-900/90 backdrop-blur-sm rounded-full border border-white/20">
                    <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm">Available</span>
                  </div>

                  {/* Floating badges */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -left-4 px-4 py-2 bg-slate-900/90 backdrop-blur-sm border border-blue-500/30 rounded-lg"
                  >
                    <span className="text-sm">6+ Months Experience</span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-4 -right-4 px-4 py-2 bg-slate-900/90 backdrop-blur-sm border border-purple-500/30 rounded-lg"
                  >
                    <span className="text-sm">15+ Projects</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="h-5 w-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
