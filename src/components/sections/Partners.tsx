import { motion } from 'framer-motion'
import { Rocket, Code, Users, Briefcase, Building2, UserCheck, Laptop } from 'lucide-react'

const growthStats = [
    {
        title: 'Startup Growth Rate',
        value: '180%',
        description: 'Average growth for startup clients',
        icon: Rocket,
        color: 'from-orange-500/20 to-red-600/20',
        textColor: 'text-red-500',
        glow: 'shadow-red-500/20'
    },
    {
        title: 'Development Speed',
        value: '65%',
        description: 'Faster time to market',
        icon: Code,
        color: 'from-purple-500/20 to-indigo-600/20',
        textColor: 'text-purple-400',
        glow: 'shadow-purple-500/20'
    },
    {
        title: 'Client Retention',
        value: '94%',
        description: 'Long-term partnerships',
        icon: UserCheck,
        color: 'from-blue-500/20 to-cyan-600/20',
        textColor: 'text-blue-400',
        glow: 'shadow-blue-500/20'
    }
]

const partnerTypes = [
    {
        title: 'Tech Startups',
        subtitle: 'SaaS & Technology',
        description: 'Helping innovative startups scale',
        icon: Rocket
    },
    {
        title: 'Mid-Size Companies',
        subtitle: 'Various Sectors',
        description: 'Digital transformation partners',
        icon: Building2
    },
    {
        title: 'Service Providers',
        subtitle: 'Professional Services',
        description: 'Enhancing service delivery',
        icon: Briefcase
    },
    {
        title: 'Digital Agencies',
        subtitle: 'Creative & Marketing',
        description: 'Powering creative solutions',
        icon: Laptop
    }
]

const Partners = () => {
    return (
        <section id="partners" className="py-24 bg-dark relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                {/* PART 1: Growth Stats (Section 2 from user request) */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-xs tracking-wider uppercase"
                        >
                            Our Partners in Innovation
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6"
                        >
                            Empowering Growth-Focused Businesses
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 max-w-2xl mx-auto leading-relaxed"
                        >
                            Trusted technology partner for startups and mid-sized companies driving digital innovation
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {growthStats.map((stat, index) => (
                            <motion.div
                                key={stat.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl ${stat.glow} transition-all duration-300`}
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${stat.color} text-white group-hover:scale-110 transition-transform`}>
                                        <stat.icon size={28} />
                                    </div>
                                    <div className="flex gap-1 h-6 items-end">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div
                                                key={i}
                                                className={`w-1.5 rounded-full bg-white/20 transition-all duration-500 group-hover:bg-white/40`}
                                                style={{ height: `${20 + (i * 20)}%` }}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white/90 mb-2 truncate">{stat.title}</h3>
                                <div className={`${stat.textColor} text-6xl font-black mb-4 tracking-tight`}>
                                    {stat.value}
                                </div>
                                <p className="text-gray-500 text-sm font-medium">
                                    {stat.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* PART 2: Partner Types (Section 1 from user request) */}
                <div>
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold font-poppins text-white mb-4"
                        >
                            Partnering with Forward-Thinking Businesses
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {partnerTypes.map((partner, index) => (
                            <motion.div
                                key={partner.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center group cursor-pointer transition-colors"
                            >
                                <div className="mx-auto w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.2)]">
                                    <partner.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{partner.title}</h3>
                                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">
                                    {partner.subtitle}
                                </p>
                                <p className="text-gray-500 text-sm italic">
                                    {partner.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-16 flex justify-center"
                    >
                        <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-primary/50 transition-colors">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                <Users size={16} />
                            </div>
                            <span className="text-gray-300 text-sm font-medium">Driving Success for 100+ Growing Businesses</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Partners
