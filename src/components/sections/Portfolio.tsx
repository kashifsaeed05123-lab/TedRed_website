import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    ExternalLink,
    X,
    ArrowRight,
    CheckCircle2,
    Trophy,
    TrendingUp,
    Clock,
    Target
} from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

// DATA STRUCTURE
const projects = [
    {
        id: 1,
        title: 'Alromaih Cars',
        subtitle: 'Website Transformation & Scaling',
        category: 'Web Development',
        image: '/Alromaih Cars.png',
        stats: [
            { label: 'Page Speed', value: '+180%' },
            { label: 'Engagement', value: '+150%' },
            { label: 'Bounce Rate', value: '-60%' }
        ],
        challenge: 'Alromaih Cars needed to scale their digital presence beyond the limitations of their Webflow site while maintaining SEO rankings and improving performance.',
        solution: 'We developed a custom Next.js application with server-side rendering, dynamic routing, and optimized performance while ensuring a smooth migration from Webflow.',
        features: [
            'Server-side rendering for optimal SEO',
            'Dynamic inventory management',
            'Advanced search and filtering',
            'Real-time availability updates',
            'Multi-language support (Arabic/English)',
            'Integrated booking system'
        ],
        results: [
            'Improved page load speed by 180%',
            'Increased user engagement by 150%',
            'Reduced bounce rate by 60%',
            'Maintained SEO rankings during migration',
            'Enhanced mobile experience with PWA features'
        ],
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel']
    },
    {
        id: 2,
        title: 'Enterprise ERP Implementation',
        subtitle: 'Odoo Integration & Customization',
        category: 'Enterprise',
        image: '/ERP.png',
        stats: [
            { label: 'Efficiency', value: '+200%' },
            { label: 'Costs', value: '-40%' },
            { label: 'Uptime', value: '99.9%' }
        ],
        challenge: "The client needed a unified system to manage their business operations with custom requirements that off-the-shelf solutions couldn't address.",
        solution: 'Implemented a customized Odoo ERP system with tailored modules, workflows, and integrations specific to the client\'s business processes.',
        features: [
            'Custom module development',
            'Automated workflows',
            'Real-time reporting',
            'Integration with existing systems',
            'Mobile accessibility',
            'Advanced security features'
        ],
        results: [
            'Doubled process efficiency',
            'Reduced operational costs by 40%',
            'Achieved 99.9% system uptime',
            'Streamlined operations across departments',
            'Improved data accuracy and reporting'
        ],
        tech: ['Odoo', 'Python', 'PostgreSQL', 'XML', 'JavaScript']
    },
    {
        id: 3,
        title: 'Finance Management',
        subtitle: 'Integrated Odoo & Web Solution',
        category: 'Finance',
        image: '/Finance.png',
        stats: [
            { label: 'Processing', value: '+300%' },
            { label: 'Time', value: '-70%' },
            { label: 'Satisfaction', value: '+250%' }
        ],
        challenge: 'The client needed an efficient system to manage car financing applications with integration between their website and back-office operations.',
        solution: 'Developed a comprehensive solution combining Odoo\'s robust backend with a custom web interface for application processing and management.',
        features: [
            'Automated application processing',
            'Credit scoring integration',
            'Document management system',
            'Real-time status tracking',
            'Customer portal',
            'Automated notifications'
        ],
        results: [
            'Tripled application processing capacity',
            'Reduced processing time by 70%',
            'Increased customer satisfaction by 250%',
            'Improved application accuracy',
            'Enhanced compliance tracking'
        ],
        tech: ['Odoo', 'React', 'Python', 'Docker', 'AWS']
    },
    {
        id: 4,
        title: 'Dynamic SEO & Lead Management',
        subtitle: 'No-Code Automation & WhatsApp Integration',
        category: 'Digital Marketing',
        image: '/Dynamic SEO & Lead Management.png', // Note: Careful with spaces in path
        stats: [
            { label: 'Conversion', value: '+450%' },
            { label: 'Response Rate', value: '+320%' },
            { label: 'Response Time', value: '-85%' }
        ],
        challenge: 'The client needed an efficient system to automate their SEO content generation and lead management process while providing instant responses through WhatsApp.',
        solution: 'Implemented a no-code automation ecosystem using Make.com and n8n, integrated with WhatsApp Business API for automated lead management and customer segmentation.',
        features: [
            'Automated content publishing workflow',
            'WhatsApp Business API integration',
            'Lead scoring and segmentation',
            'Automated response system',
            'Custom audience targeting',
            'Performance analytics dashboard'
        ],
        results: [
            'Increased lead conversion by 450%',
            'Improved response rate by 320%',
            'Reduced response time by 85%',
            'Automated 95% of routine tasks',
            'Enhanced lead qualification accuracy'
        ],
        tech: ['Make.com', 'n8n', 'WhatsApp API', 'OpenAI', 'Airtable']
    }
]

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
    const [filter, setFilter] = useState('All Projects')

    const categories = ['All Projects', ...Array.from(new Set(projects.map(p => p.category)))]

    const filteredProjects = filter === 'All Projects'
        ? projects
        : projects.filter(p => p.category === filter)

    return (
        <section id="portfolio" className="py-24 bg-dark relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-dark to-dark pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm"
                    >
                        Client Results
                    </motion.div>
                    <SectionTitle subtitle="Trackable results for clients across dozens of industries.">
                        Transforming Businesses
                    </SectionTitle>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat, idx) => (
                        <motion.button
                            key={cat}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === cat
                                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                                }`}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                            className="group relative h-[450px] w-full rounded-3xl overflow-hidden cursor-pointer shadow-2xl border border-white/10 bg-dark-lighter"
                        >
                            {/* Background Image with Zoom Effect - Darkened */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110 brightness-[0.4]"
                                style={{ backgroundImage: `url('${project.image}')` }}
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col">
                                <div className="flex justify-between items-start mb-auto">
                                    {/* Category Badge */}
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium text-primary">
                                        {project.category}
                                    </span>
                                </div>

                                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                                    <h3 className="text-3xl font-bold font-poppins text-white mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 font-inter mb-6 text-lg">
                                        {project.subtitle}
                                    </p>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-3 gap-2 mb-6">
                                        {project.stats.map((stat, i) => (
                                            <div key={i} className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/5 text-center">
                                                <div className="text-primary font-bold text-lg md:text-xl">{stat.value}</div>
                                                <div className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                                        {project.tech.slice(0, 4).map((t, i) => (
                                            <span key={i} className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/5">
                                                {t}
                                            </span>
                                        ))}
                                        {project.tech.length > 4 && (
                                            <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/5">+{project.tech.length - 4}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-dark border border-white/10 rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto relative shadow-2xl shadow-primary/5 flex flex-col md:flex-row overflow-hidden"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-30"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Left Side: Image & Key Stats */}
                            <div className="w-full md:w-2/5 relative min-h-[300px] md:min-h-full">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url('${selectedProject.image}')` }}
                                />
                                <div className="absolute inset-0 bg-black/60 md:bg-black/40" />
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                        <h4 className="text-primary font-bold uppercase tracking-wider text-xs mb-4">Key Results</h4>
                                        <div className="space-y-4">
                                            {selectedProject.stats.map((stat, i) => (
                                                <div key={i} className="flex justify-between items-center border-b border-white/10 pb-2 last:border-0 last:pb-0">
                                                    <span className="text-gray-300 text-sm">{stat.label}</span>
                                                    <span className="text-xl font-bold text-white">{stat.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Content */}
                            <div className="w-full md:w-3/5 p-8 md:p-12 bg-dark overflow-y-auto">
                                <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">{selectedProject.category}</span>
                                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-2">{selectedProject.title}</h2>
                                <p className="text-xl text-gray-400 mb-8">{selectedProject.subtitle}</p>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                            <Target className="text-primary w-5 h-5" /> The Challenge
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">{selectedProject.challenge}</p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                            <TrendingUp className="text-primary w-5 h-5" /> Our Solution
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">{selectedProject.solution}</p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Key Features</h3>
                                            <ul className="space-y-2">
                                                {selectedProject.features.map((feat, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                                        {feat}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Technologies</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.tech.map((t, i) => (
                                                    <span key={i} className="text-sm px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Portfolio
