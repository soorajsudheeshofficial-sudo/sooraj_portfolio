import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { motion } from "motion/react";

const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Sree Narayana Guru College",
    university: "Bharathiyar University",
    location: "Coimbatore",
    graduationDate: "June 2024",
    major: "Computer Science",
    minors: ["Mathematics", "Psychology"],
    coursework: [
      "Core Computing Fundamentals and Programming",
      "Data Structures and Algorithms",
      "Software Engineering and Software Project Management",
      "Operating Systems and Linux & Shell Programming",
      "Python Programming",
      "Computer Architecture",
    ],
    gradient: "from-blue-600 to-cyan-600",
    icon: GraduationCap,
  },
  {
    degree: "Vocational Higher Secondary Education",
    institution: "G.V.H.S.S Malampuzha",
    location: "Palakkad",
    graduationDate: "March 2021",
    stream: "Livestock Management",
    gradient: "from-green-600 to-emerald-600",
    icon: BookOpen,
  },
  {
    degree: "Indian Certificate of Secondary Education (ICSE)",
    institution: "Nirmala Matha Convent School ,Palakkad",
    graduationDate: "May 2019",
    gradient: "from-orange-600 to-amber-600",
    icon: Award,
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-4">
              <span className="text-orange-400">Education</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Academic Background
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              My educational journey in computer science and technology
            </p>
          </motion.div>

          {/* Education Cards */}
          <div className="space-y-8">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-900/30 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 overflow-hidden">
                    {/* Animated background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${edu.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                    <div className="relative z-10">
                      <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 items-start">
                        {/* Icon */}
                        <div className={`p-4 bg-gradient-to-r ${edu.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>

                        {/* Content */}
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-2xl mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                              {edu.degree}
                            </h3>
                            <p className="text-xl text-slate-300 mb-1">{edu.institution}</p>
                            {edu.university && (
                              <p className="text-slate-400">
                                {edu.university} • {edu.location}
                              </p>
                            )}
                            {!edu.university && edu.location && (
                              <p className="text-slate-400">{edu.location}</p>
                            )}
                          </div>

                          {/* Major/Minor or Stream */}
                          {edu.major && (
                            <div className="flex flex-wrap gap-2">
                              <div className={`px-4 py-2 bg-gradient-to-r ${edu.gradient} bg-opacity-10 border border-white/20 rounded-lg`}>
                                <span className="text-sm">Major: {edu.major}</span>
                              </div>
                              {edu.minors && edu.minors.map((minor, idx) => (
                                <div key={idx} className="px-4 py-2 bg-slate-800/50 border border-white/10 rounded-lg">
                                  <span className="text-sm text-slate-300">Minor: {minor}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {edu.stream && (
                            <div className={`inline-block px-4 py-2 bg-gradient-to-r ${edu.gradient} bg-opacity-10 border border-white/20 rounded-lg`}>
                              <span className="text-sm">{edu.stream}</span>
                            </div>
                          )}

                          {/* Coursework */}
                          {edu.coursework && (
                            <div className="mt-4 p-4 bg-slate-800/30 border border-white/10 rounded-xl">
                              <div className="flex items-center gap-2 mb-3">
                                <BookOpen className="h-4 w-4 text-blue-400" />
                                <h4 className="text-sm text-slate-400">Relevant Coursework</h4>
                              </div>
                              <div className="grid sm:grid-cols-2 gap-2">
                                {edu.coursework.map((course, idx) => (
                                  <div
                                    key={idx}
                                    className="text-sm text-slate-300 flex items-start gap-2"
                                  >
                                    <div className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${edu.gradient}`}></div>
                                    <span>{course}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Date */}
                        <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-white/10 rounded-lg h-fit">
                          <Calendar className="h-4 w-4 text-slate-400" />
                          <span className="text-sm text-slate-300">{edu.graduationDate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Glow effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${edu.gradient} rounded-2xl blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
