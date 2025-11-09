import { Code2, Database, Rocket, Users, Award, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Expertise",
    description: "Python, Django, React.js, Node.js",
    color: "blue",
    stat: "15+",
    statLabel: "Technologies",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "MySQL, SQLite, RESTful APIs",
    color: "green",
    stat: "5+",
    statLabel: "DB Systems",
  },
  {
    icon: Rocket,
    title: "Project Success",
    description: "15% reduction in application errors during intenship",
    color: "purple",
    stat: "15%",
    statLabel: "Error Reduction",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Strong communication & problem-solving during my service at Kites Career Guidance and Education Service as admission executive member",
    color: "orange",
    stat: "100+",
    statLabel: "Clients Helped",
  },
];

const stats = [
  { label: "Years Experience", value: "6+ months" },
  { label: "Projects Completed", value: "15+" },
  { label: "Technologies", value: "20+" },
  { label: "Happy Clients", value: "100+" },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
              <span className="text-blue-400">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Building Digital Experiences
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              A passionate full-stack developer dedicated to creating scalable, user-friendly applications
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Main About Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-900/30 border border-white/10 backdrop-blur-xl overflow-hidden group hover:border-white/20 transition-all duration-300">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl">Professional Summary</h3>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Detail-oriented Full Stack Developer with hands-on experience in Python, Django, React.js, Node.js, HTML,
                    CSS, JavaScript, Bootstrap, and SQL. Skilled in building responsive web applications, RESTful APIs, and
                    database-driven solutions using MySQL and SQLite.
                  </p>
                  
                  <p className="text-slate-300 leading-relaxed">
                    Experienced in frontend and backend development, debugging, and deployment practices. Strong problem-solving, 
                    collaboration, and communication skills with a proven ability to deliver scalable and user-friendly applications 
                    through academic projects and industry internship.
                  </p>

                  {/* Achievement Badge */}
                  <div className="mt-6 flex items-center gap-2 text-emerald-400">
                    <TrendingUp className="h-5 w-5" />
                    <span className="text-sm">Reduced application errors by 15% through best practices</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-900/30 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Highlight Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              const colorClasses = {
                blue: "from-blue-600 to-blue-700",
                green: "from-green-600 to-green-700",
                purple: "from-purple-600 to-purple-700",
                orange: "from-orange-600 to-orange-700",
              };
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative p-6 rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-900/30 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 overflow-hidden"
                >
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${colorClasses[item.color as keyof typeof colorClasses]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex p-3 bg-gradient-to-r ${colorClasses[item.color as keyof typeof colorClasses]} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <h4 className="text-lg mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm mb-4">{item.description}</p>
                    
                    <div className="flex items-end gap-2">
                      <span className="text-2xl font-bold text-white">{item.stat}</span>
                      <span className="text-slate-500 text-xs mb-1">{item.statLabel}</span>
                    </div>
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
