import { Code2, Database, Wrench, Globe, User } from "lucide-react";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const technicalSkills = [
  {
    category: "Programming",
    icon: Code2,
    skills: ["Python", "JavaScript", "SQL"],
    level: 90,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    category: "Frameworks",
    icon: Globe,
    skills: ["Django", "React.js", "Node.js", "Bootstrap"],
    level: 85,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["MySQL", "SQLite"],
    level: 80,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: ["SQL Yog", "Visual Studio Code", "Apache Tomcat"],
    level: 75,
    gradient: "from-orange-500 to-red-500",
  },
  {
    category: "Web Development",
    icon: Globe,
    skills: ["HTML", "CSS", "RESTful APIs", "Graphics & Multimedia", "MVC Architecture"],
    level: 88,
    gradient: "from-indigo-500 to-blue-500",
  },
];

const softSkills = [
  { name: "Problem Solving", level: 95 },
  { name: "Communication", level: 90 },
  { name: "Team Collaboration", level: 88 },
  { name: "Time Management", level: 85 },
  { name: "Critical Thinking", level: 92 },
  { name: "Decision Making", level: 87 },
  { name: "Self-Motivation", level: 93 },
  { name: "Conflict Resolution", level: 82 },
  { name: "Creativity", level: 90 },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4">
              <span className="text-purple-400">Skills & Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Technical Arsenal
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable web applications
            </p>
          </motion.div>

          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-slate-900/50 border border-white/10 p-1">
              <TabsTrigger value="technical" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 text-white">
                Technical Skills
              </TabsTrigger>
              <TabsTrigger value="soft" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 text-white">
                Soft Skills
              </TabsTrigger>
            </TabsList>

            <TabsContent value="technical" className="mt-0 text-white">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technicalSkills.map((skillGroup, index) => {
                  const Icon = skillGroup.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                      className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-900/30 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${skillGroup.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                      <div className="relative z-10 text-white">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`p-3 bg-gradient-to-r ${skillGroup.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold">{skillGroup.level}%</div>
                            <div className="text-xs">Proficiency</div>
                          </div>
                        </div>

                        <h4 className="text-lg mb-4">{skillGroup.category}</h4>

                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden mb-4">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skillGroup.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className={`h-full bg-gradient-to-r ${skillGroup.gradient}`}
                          />
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {skillGroup.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="bg-slate-800/50 border border-white/10 hover:border-white/20 transition-colors text-white px-3 py-1"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="soft" className="mt-0">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto text-white">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-900/30 border border-white/10 backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl text-white">Interpersonal Skills</h3>
                  </div>

                  <div className="space-y-6">
                    {softSkills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-sm text-white">{skill.level}%</span>
                        </div>
                        <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.05 }}
                            className="h-full bg-gradient-to-r from-purple-600 to-pink-600 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-shadow"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
