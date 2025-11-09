import { Award, Calendar, CheckCircle, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";

const certifications = [
  {
    title: "Microsoft Office Fundamentals",
    issuer: "Microsoft",
    program: "Naan Mudhalvan Program",
    organization: "Tamil Nadu Skill Development Corporation",
    date: "May 2025",
    gradient: "from-blue-600 to-blue-700",
    certificateUrl: "/certificate/NM_Certificate1.pdf",
    skills: [
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft PowerPoint",
      "Microsoft Outlook",
    ],
  },
  {
    title: "Foundation on Cloud",
    issuer: "IBM Skills Build",
    program: "Naan Mudhalvan Program",
    organization: "Tamil Nadu Skill Development Corporation",
    date: "July 2025",
    gradient: "from-cyan-600 to-blue-600",
    certificateUrl: "/certificate/NM_Certificate2.pdf",
    skills: [
      "Cloud Computing",
      "Cloud Services",
      "IBM Cloud",
      "Cloud Architecture",
    ],
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
              <span className="text-emerald-400">Certifications</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Professional Certifications
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Continuous learning and professional development achievements
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, rotateY: 5 }}
                className="group"
              >
                <div className={`relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-900/30 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 overflow-hidden h-full`}>
                  {/* Animated background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${cert.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  {/* Certificate badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`p-3 bg-gradient-to-r ${cert.gradient} rounded-full group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}>
                      <Award className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <div className="relative z-10 space-y-6">
                    {/* Header */}
                    <div>
                      <h3 className="text-2xl mb-3 pr-16 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                        {cert.title}
                      </h3>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                          <p className="text-slate-300">{cert.issuer}</p>
                        </div>
                        <p className="text-slate-400 text-sm pl-6">{cert.program}</p>
                        <p className="text-slate-400 text-sm pl-6">{cert.organization}</p>
                      </div>
                    </div>

                    {/* Skills learned */}
                    {cert.skills && (
                      <div>
                        <h4 className="text-sm text-slate-400 mb-3">Skills Acquired</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, idx) => (
                            <div
                              key={idx}
                              className="px-3 py-1 bg-slate-800/50 border border-white/10 rounded-lg text-sm text-slate-300 hover:border-white/30 transition-colors"
                            >
                              {skill}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Date and Verify button */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{cert.date}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-slate-400 hover:text-white group-hover:text-blue-400"
                        asChild
                      >
                        <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                          <span>Verify</span>
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${cert.gradient} rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-900/30 border border-white/10 backdrop-blur-xl">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl mb-4">Committed to Continuous Learning</h3>
                <p className="text-slate-400 mb-6">
                  I'm constantly expanding my skill set through professional certifications and staying updated with the latest technologies in software development.
                </p>
                <Button
                  className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:shadow-lg hover:shadow-emerald-500/50"
                  asChild
                >
                  <a href="#contact">Let's Connect</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
