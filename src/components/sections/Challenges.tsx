import { motion } from 'framer-motion'
import { Lightbulb, DollarSign, Zap, Target, ArrowRight } from 'lucide-react'

const challenges = [
    {
        title: 'Vision to Reality',
        subtitle: 'Turning your innovative ideas into successful digital products',
        icon: Lightbulb,
        features: [
            'Expert consultation on technology stack',
            'Rapid prototyping and MVP development',
            'Scalable architecture planning'
        ],
        color: 'primary'
    },
    {
        title: 'Resource Optimization',
        subtitle: 'Maximizing ROI while minimizing development costs',
        icon: DollarSign,
        features: [
            'Cost-effective development strategies',
            'Resource allocation optimization',
            'Budget-friendly technology solutions'
        ],
        color: 'green'
    },
    {
        title: 'Time to Market',
        subtitle: 'Accelerating development without compromising quality',
        icon: Zap,
        features: [
            'Agile development methodology',
            'Parallel development tracks',
            'Automated testing & deployment'
        ],
        color: 'blue'
    },
    {
        title: 'Market Fit',
        subtitle: 'Ensuring your solution meets market demands',
        icon: Target,
        features: [
            'Market research & validation',
            'User feedback integration',
            'Competitive analysis'
        ],
        color: 'purple'
    }
]

const Challenges = () => {
    return (
        <section id="challenges" className="py-32 bg-dark relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm"
                    >
                        Common Challenges
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6"
                    >
                        Building Digital Solutions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-400 font-inter leading-relaxed"
                    >
                        We understand the challenges startups and companies face when building digital solutions. Our expertise helps you overcome these hurdles and accelerate your path to success.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Left Side: Challenge Cards */}
                    <div className="lg:col-span-6 space-y-5">
                        {challenges.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-primary/30 cursor-pointer"
                            >
                                <div className="flex gap-5">
                                    <div className={`shrink-0 p-3 h-12 w-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex items-center justify-center`}>
                                        <item.icon size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 mb-3 text-sm leading-relaxed">
                                            {item.subtitle}
                                        </p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                                            {item.features.map((feat, i) => (
                                                <li key={i} className="flex items-center gap-2 text-[11px] text-gray-500">
                                                    <div className="w-1 h-1 rounded-full bg-primary/40" />
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side: Image and Stats Sidebar */}
                    <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-8 items-center h-full">
                        {/* Vertical Stats Sidebar */}
                        <div className="flex flex-col gap-6 order-2 sm:order-1">
                            {[
                                { val: '60%', label: 'Faster Time to Market', color: 'text-primary' },
                                { val: '40%', label: 'Cost Reduction', color: 'text-green-500' },
                                { val: '95%', label: 'Success Rate', color: 'text-white', bg: 'bg-primary/95' }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    whileHover={{ scale: 1.1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className={`${stat.bg || 'bg-dark/90'} backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl cursor-pointer flex flex-col items-center justify-center min-h-[100px] text-center`}
                                >
                                    <div className={`${stat.color} font-black text-2xl`}>{stat.val}</div>
                                    <div className={`text-[9px] ${stat.bg ? 'text-white/80' : 'text-gray-400'} font-bold uppercase tracking-wider mt-1 leading-tight`}>
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* The Image Container */}
                        <div className="order-1 sm:order-2 h-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.02 }}
                                viewport={{ once: true }}
                                className="relative rounded-[2rem] overflow-hidden shadow-[0_0_50px_-12px_rgba(220,38,38,0.2)] border border-white/10 group cursor-pointer h-full"
                            >
                                <img
                                    src="/team-collab.png"
                                    alt="Team Collaborating"
                                    className="w-full h-[400px] sm:h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent opacity-60" />

                                {/* Overlay Content */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <motion.h4
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        className="text-white font-bold flex items-center gap-2 mb-2"
                                    >
                                        <ArrowRight className="text-primary" size={16} /> Team Collaboration
                                    </motion.h4>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-gray-300 text-[10px] italic leading-relaxed"
                                    >
                                        "Our integrated approach ensures seamless communication delivering unparalleled results."
                                    </motion.p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Challenges
