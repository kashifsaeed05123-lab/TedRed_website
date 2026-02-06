import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import {
    Cpu,
    Palette,
    Video,
    BarChart3,
    X,
    ArrowRight,
    CheckCircle2,
    Cloud,
    Smartphone,
    Globe,
    Layout,
    Shield,
    Image,
    Film,
    Share2,
    FileText,
    Target,
    Search,
    Mail,
    Bot,
    Server,
    Layers,
    Monitor
} from 'lucide-react'

// DATA STRUCTURE
const servicesData = [
    {
        id: 'tech',
        title: 'TedRed Tech',
        subtitle: 'Empowering businesses with advanced AI, automation, and enterprise solutions',
        icon: Cpu,
        image: '/TedRed_Tech.png',
        categories: [
            {
                title: 'AI & Automation',
                desc: 'Intelligent automation solutions',
                icon: Bot,
                features: ['Custom AI Agent Development', 'Workflow Automation', 'Process Optimization', 'Chatbots & Virtual Assistants', 'Intelligent Document Processing'],
                tech: ['OpenAI', 'LangChain', 'Botpress', 'Make.com', 'n8n', 'Power Automate']
            },
            {
                title: 'ERP Solutions',
                desc: 'Enterprise resource planning',
                icon: Server,
                features: ['Business Process Management', 'Financial Management', 'Inventory Control', 'HR Management', 'Custom Module Development'],
                tech: ['Odoo', 'ERPNext', 'Zoho One', 'SAP Business One', 'Microsoft Dynamics']
            },
            {
                title: 'No-Code Development',
                desc: 'Rapid application development',
                icon: Layers,
                features: ['Visual App Development', 'Database Design', 'Workflow Automation', 'API Integration', 'Custom Plugins'],
                tech: ['Bubble.io', 'Webflow', 'Airtable', 'Adalo', 'FlutterFlow']
            },
            {
                title: 'Web Development',
                desc: 'Custom web applications',
                icon: Globe,
                features: ['Full-stack Development', 'Progressive Web Apps', 'E-commerce Solutions', 'CMS Development', 'API Integration'],
                tech: ['React', 'Node.js', 'Python', 'MongoDB', 'AWS']
            },
            {
                title: 'Mobile Apps',
                desc: 'Native and cross-platform apps',
                icon: Smartphone,
                features: ['iOS Development', 'Android Development', 'Cross-platform Solutions', 'App Store Optimization', 'Mobile UI/UX Design'],
                tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
            },
            {
                title: 'Cloud Solutions',
                desc: 'Scalable cloud infrastructure',
                icon: Cloud,
                features: ['Cloud Migration', 'Serverless Architecture', 'DevOps Implementation', 'Microservices', 'Cloud Security'],
                tech: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes']
            }
        ]
    },
    {
        id: 'design',
        title: 'TedRed Design',
        subtitle: 'We create stunning visual experiences that captivate audiences and strengthen brand identity.',
        icon: Palette,
        image: '/TedRed_design.png',
        categories: [
            {
                title: 'UI/UX Design',
                desc: 'User-centered design solutions',
                icon: Layout,
                features: ['User Research & Analysis', 'Wireframing & Prototyping', 'Interaction Design', 'Usability Testing', 'Design Systems'],
                tech: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle']
            },
            {
                title: 'Brand Identity',
                desc: 'Comprehensive branding',
                icon: Shield,
                features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy', 'Marketing Collateral'],
                tech: ['Adobe Creative Suite', 'Illustrator', 'Photoshop', 'After Effects', 'InDesign']
            },
            {
                title: 'Graphic Design',
                desc: 'Visual content creation',
                icon: Image,
                features: ['Print Design', 'Digital Graphics', 'Illustration', 'Packaging Design', 'Infographic Design'],
                tech: ['Illustrator', 'Photoshop', 'Procreate', 'Affinity Designer', 'CorelDRAW']
            },
            {
                title: 'Motion Design',
                desc: 'Animated content',
                icon: Film,
                features: ['2D Animation', 'Motion Graphics', 'Video Effects', 'Character Animation', 'Animated Logos'],
                tech: ['After Effects', 'Cinema 4D', 'Premiere Pro', 'Blender', 'DaVinci Resolve']
            }
        ]
    },
    {
        id: 'media',
        title: 'TedRed Media',
        subtitle: 'We create compelling media content that engages audiences and drives meaningful connections.',
        icon: Video,
        image: '/TedRed_media.png',
        categories: [
            {
                title: 'Video Production',
                desc: 'Professional video content',
                icon: Video,
                features: ['Commercial Production', 'Corporate Videos', 'Product Showcases', 'Event Coverage', 'Aerial Videography'],
                tech: ['Premiere Pro', 'Final Cut Pro', 'DaVinci Resolve', 'RED Cameras', 'DJI Drones']
            },
            {
                title: 'Social Media',
                desc: 'Social media management',
                icon: Share2,
                features: ['Content Strategy', 'Community Management', 'Social Analytics', 'Influencer Partnerships', 'Campaign Management'],
                tech: ['Hootsuite', 'Buffer', 'Sprout Social', 'Later', 'Canva']
            },
            {
                title: 'Content Creation',
                desc: 'Digital content strategy',
                icon: FileText,
                features: ['Blog Writing', 'Copywriting', 'Content Planning', 'SEO Content', 'Technical Writing'],
                tech: ['WordPress', 'Contentful', 'Grammarly', 'SEMrush', 'Yoast SEO']
            },
            {
                title: 'Creative Strategy',
                desc: 'Strategic planning',
                icon: Target,
                features: ['Brand Storytelling', 'Campaign Planning', 'Market Analysis', 'Audience Research', 'Performance Tracking'],
                tech: ['Google Analytics', 'Tableau', 'Asana', 'Miro', 'Monday.com']
            }
        ]
    },
    {
        id: 'marketing',
        title: 'TedRed Marketing',
        subtitle: 'We deliver data-driven marketing strategies that increase visibility and drive growth.',
        icon: BarChart3,
        image: '/TedRed_Marketing.png',
        categories: [
            {
                title: 'Digital Marketing',
                desc: 'Online marketing campaigns',
                icon: Monitor,
                features: ['PPC Advertising', 'Social Media Marketing', 'Content Marketing', 'Display Advertising', 'Conversion Optimization'],
                tech: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'HubSpot', 'Mailchimp']
            },
            {
                title: 'Market Research',
                desc: 'Data-driven insights',
                icon: Search,
                features: ['Market Analysis', 'Competitor Research', 'Consumer Behavior', 'Trend Analysis', 'Brand Positioning'],
                tech: ['SurveyMonkey', 'Qualtrics', 'Google Analytics', 'SEMrush', 'Ahrefs']
            },
            {
                title: 'SEO',
                desc: 'Search engine optimization',
                icon: Search,
                features: ['Technical SEO', 'On-page Optimization', 'Link Building', 'Local SEO', 'Content Strategy'],
                tech: ['SEMrush', 'Ahrefs', 'Moz', 'Screaming Frog', 'Google Search Console']
            },
            {
                title: 'Email Marketing',
                desc: 'Email campaign management',
                icon: Mail,
                features: ['Campaign Strategy', 'Email Automation', 'List Management', 'A/B Testing', 'Performance Analytics'],
                tech: ['Mailchimp', 'Klaviyo', 'SendGrid', 'ActiveCampaign', 'Constant Contact']
            }
        ]
    }
]

const Services = () => {
    const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null)

    return (
        <section id="services" className="py-24 bg-dark relative overflow-hidden">
            {/* Background elements if needed */}
            <div className="container mx-auto px-4 z-10 relative">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-poppins mb-4"
                    >
                        Comprehensive Solutions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 font-inter"
                    >
                        Transform your business with our integrated services
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={service.id}
                            id={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedService(service)}
                            className="group relative h-[500px] w-full rounded-3xl overflow-hidden cursor-pointer shadow-xl border border-white/10"
                        >
                            {/* Background Image with Zoom Effect */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                                style={{ backgroundImage: `url(${service.image})` }}
                            />

                            {/* Gradient Overlay for Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="mb-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-4 group-hover:translate-y-0 text-right">
                                    <div className="inline-flex items-center gap-2 text-primary font-bold bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-primary/20">
                                        View Details <ArrowRight size={16} />
                                    </div>
                                </div>

                                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                                    <div className="mb-4 inline-block p-3 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/20">
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-3xl font-bold font-poppins mb-3 text-white group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-300 font-inter mb-6 line-clamp-2 text-lg">
                                        {service.subtitle}
                                    </p>

                                    {/* Mini Grid for Categories */}
                                    <div className="grid grid-cols-2 gap-3">
                                        {service.categories.slice(0, 4).map((cat, i) => (
                                            <div key={i} className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5 backdrop-blur-sm">
                                                <cat.icon className="w-3 h-3 text-primary" />
                                                <span className="text-xs font-semibold text-gray-200 truncate">{cat.title}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedService(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-dark border border-white/10 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative shadow-2xl shadow-primary/10"
                        >
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-20"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="p-8 md:p-12">
                                <div className="flex items-center gap-4 mb-2">
                                    <selectedService.icon className="w-10 h-10 text-primary" />
                                    <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white">
                                        {selectedService.title}
                                    </h2>
                                </div>
                                <p className="text-xl text-gray-400 font-inter mb-12 max-w-3xl">
                                    {selectedService.subtitle}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                                    {selectedService.categories.map((category, idx) => (
                                        <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                                            <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                                            <p className="text-sm text-gray-400 mb-6">{category.desc}</p>

                                            <div className="mb-6">
                                                <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Key Features</h4>
                                                <ul className="space-y-2">
                                                    {category.features.map((feat, fIdx) => (
                                                        <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-300">
                                                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                                            {feat}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Technologies</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {category.tech.map((tech, tIdx) => (
                                                        <span key={tIdx} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 text-gray-300 border border-white/5">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 flex justify-center">
                                    <button
                                        onClick={() => {
                                            setSelectedService(null)
                                            setTimeout(() => {
                                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                                            }, 300)
                                        }}
                                        className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105 active:scale-95"
                                    >
                                        Get Started with {selectedService.title}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Services
