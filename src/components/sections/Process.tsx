import { motion } from 'framer-motion'
import { Eye, PenTool, Cpu, BarChart3 } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

const processSteps = [
    {
        id: '01',
        title: 'Discovery',
        description: 'We dive deep into your goals, audience, and challenges to identify opportunities for innovation.',
        icon: Eye
    },
    {
        id: '02',
        title: 'Strategy',
        description: 'We craft a data-driven digital roadmap tailored to your brand\'s unique objectives.',
        icon: PenTool
    },
    {
        id: '03',
        title: 'Implementation',
        description: 'Our experts design, build, and deploy with precision using the latest tech stack.',
        icon: Cpu
    },
    {
        id: '04',
        title: 'Optimization',
        description: 'We continuously analyze performance, adapt, and enhance to ensure sustainable growth.',
        icon: BarChart3
    }
]

const Process = () => {
    return (
        <section id="process" className="py-24 bg-dark relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24">
                    <SectionTitle subtitle="From discovery to optimization — we transform ideas into impact.">
                        How We Work
                    </SectionTitle>
                </div>

                <div className="relative">
                    {/* Connecting Line - Desktop */}
                    <div className="hidden md:block absolute top-[20px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative group pt-10"
                            >
                                {/* Step Number Bubble */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-dark border border-primary/50 text-white font-bold rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(220,38,38,0.5)] group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                    {step.id}
                                </div>

                                {/* Connection Dot on Line (Visual aid for perfect alignment) */}
                                <div className="hidden md:block absolute top-[16px] left-1/2 -translate-x-1/2 w-12 h-12 bg-primary/20 rounded-full blur-md -z-10 group-hover:bg-primary/40 transition-colors" />

                                {/* Card */}
                                <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group-hover:bg-white/10 group-hover:border-primary/50 transition-all duration-500 relative overflow-hidden group-hover:shadow-[0_0_30px_-5px_rgba(220,38,38,0.3)]">
                                    {/* Inner Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10">
                                        <div className="mb-6 text-primary group-hover:text-white transition-colors duration-300 transform group-hover:scale-110 origin-left inline-block">
                                            <step.icon size={40} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-xl font-bold font-poppins text-white mb-4 group-hover:text-primary transition-colors">{step.title}</h3>
                                        <p className="text-gray-400 font-inter text-sm leading-relaxed group-hover:text-gray-300">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Vertical Connector for mobile */}
                                {index !== processSteps.length - 1 && (
                                    <div className="md:hidden absolute bottom-[-32px] left-1/2 -translate-x-1/2 w-[2px] h-[32px] bg-gradient-to-b from-primary/50 to-transparent" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process
