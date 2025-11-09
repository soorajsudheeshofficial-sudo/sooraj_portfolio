import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const experiences = [
  {
    title: "Python MERN Full Stack Intern",
    company: "TECOLAS TECHNOLOGY INSTITUTION",
    location: "Palakkad",
    duration: "6 months",
    period: "2025",
    responsibilities: [
      "Collaborated on full-stack web development projects using Python, Django, HTML, CSS, JavaScript, and Bootstrap.",
      "Built and integrated RESTful APIs with frontend frameworks, ensuring smooth data flow.",
      "Designed database schemas and managed backend systems using MySQL and SQLite.",
      "Implemented debugging, unit testing, and deployment best practices, reducing application errors by 15%.",
      "Developed and maintained responsive user interfaces and dynamic web pages.",
    ],
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    title: "Admission Executive Member",
    company: "Kites Career Guidance and Education Service",
    location: "Palakkad",
    duration: "2 years",
    period: "2022 - 2024",
    responsibilities: [
      "Guided and counseled 100+ students on course options, eligibility, and admission requirements.",
      "Managed end-to-end admission processes, ensuring accurate documentation and timely enrollments.",
      "Supervised and trained junior team members in handling student inquiries, document collection, and follow-up activities.",
      "Maintained consistent communication with students and parents, improving application completion rate 15%.",
    ],
    gradient: "from-purple-600 to-pink-600",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-4">
              <span className="text-green-400">Work Experience</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Professional Journey
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              My career path in technology and education sectors
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-6 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${exp.gradient} border-4 border-slate-950 z-10 shadow-lg`}>
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${exp.gradient} animate-ping opacity-75`}></div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-900/30 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 ml-12 md:ml-0"
                    >
                      {/* Company badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${exp.gradient} bg-opacity-10 border border-white/20 rounded-full mb-4`}>
                        <Briefcase className="h-4 w-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                        {exp.title}
                      </h3>

                      {/* Company & Location */}
                      <div className="space-y-2 mb-6">
                        <p className="text-slate-300">{exp.company}</p>
                        <div className="flex items-center gap-4 text-slate-400 text-sm">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-3 text-slate-300"
                          >
                            <CheckCircle2 className={`h-5 w-5 mt-0.5 flex-shrink-0 text-green-400`} />
                            <span>{resp}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
