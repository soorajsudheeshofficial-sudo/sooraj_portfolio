import { Globe2, Check } from "lucide-react";
import { motion } from "motion/react";

const languages = [
  { 
    name: "English", 
    proficiency: "Professional Working Proficiency",
    level: 85,
    gradient: "from-blue-600 to-blue-700"
  },
  { 
    name: "Malayalam", 
    proficiency: "Native",
    level: 100,
    gradient: "from-green-600 to-green-700"
  },
  { 
    name: "Hindi", 
    proficiency: "Professional Working Proficiency",
    level: 70,
    gradient: "from-orange-600 to-orange-700"
  },
  { 
    name: "Tamil", 
    proficiency: "Elementary Proficiency",
    level: 60,
    gradient: "from-purple-600 to-purple-700"
  },
];

export function Languages() {
  return (
    <section id="languages" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-4">
              <span className="text-indigo-400">Languages</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Language Proficiency
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Multilingual communication skills for global collaboration
            </p>
          </motion.div>

          {/* Languages Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-900/30 border border-white/10 backdrop-blur-xl overflow-hidden"
          >
            {/* Decorative globe icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Globe2 className="h-32 w-32 text-white" />
            </div>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl">
                  <Globe2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl">Communication Languages</h3>
              </div>

              {/* Languages Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="group p-6 rounded-xl bg-slate-800/30 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-xl mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                            {lang.name}
                          </h4>
                          <p className="text-sm text-slate-400">{lang.proficiency}</p>
                        </div>
                        <div className="flex items-center gap-1 text-emerald-400">
                          <Check className="h-4 w-4" />
                          <span className="text-sm">{lang.level}%</span>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className={`h-full bg-gradient-to-r ${lang.gradient} group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-shadow`}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-8 p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-lg"
              >
                <p className="text-slate-300 text-sm text-center">
                  💡 Capable of working effectively in multilingual and multicultural environments
                </p>
              </motion.div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-2xl opacity-0 hover:opacity-10 transition-opacity duration-300 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
