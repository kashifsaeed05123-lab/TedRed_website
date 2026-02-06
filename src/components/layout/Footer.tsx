import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Instagram, Mail, Send, Globe, Shield, Lock } from 'lucide-react'
import { useState } from 'react'

const Footer = () => {
    const [email, setEmail] = useState('')

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Newsletter signup:', email)
        setEmail('')
        alert('Thank you for subscribing!')
    }

    const footerLinks = [
        {
            title: 'SOLUTIONS',
            links: ['For HR Teams', 'For Sales Teams', 'For Marketing Teams', 'For Startups', 'For Enterprise']
        },
        {
            title: 'PRODUCT TYPES',
            links: ['Analytics Tools', 'Productivity Tools', 'Sales Tools', 'Marketplace']
        },
        {
            title: 'RESOURCES',
            links: ['Documentation', 'API Reference', 'Case Studies', 'Blog']
        }
    ]

    const socialLinks = [
        { icon: Github, href: '#', label: 'GitHub' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Instagram, href: '#', label: 'Instagram' },
    ]

    return (
        <footer className="bg-dark pt-24 pb-12 relative overflow-hidden border-t border-white/5">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Newsletter Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 p-8 md:p-12 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                                Ready to scale your <span className="text-primary">digital presence?</span>
                            </h3>
                            <p className="text-gray-400 text-lg">
                                Subscribe to our newsletter for the latest tech insights and project updates.
                            </p>
                        </div>
                        <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors" size={20} />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full pl-12 pr-4 h-14 bg-dark/50 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="h-14 px-8 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
                            >
                                Join Now
                                <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                            </button>
                        </form>
                    </div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
                    {/* Brand Info */}
                    <div className="lg:col-span-4 space-y-8">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 w-fit cursor-pointer group"
                        >
                            <img src="/tedred-logo.png" alt="TedRed Logo" className="h-10 w-auto brightness-200 group-hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-all" />
                            <span className="text-2xl font-black text-white tracking-tighter group-hover:text-primary transition-colors">TEDRED</span>
                        </motion.div>
                        <p className="text-gray-400 leading-relaxed text-sm max-w-xs italic">
                            "Made with passion in the digital realm. Empowering businesses with cutting-edge technology and innovative solutions."
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-white/10 transition-all shadow-lg"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Link Columns */}
                    <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-12">
                        {footerLinks.map((column, idx) => (
                            <div key={idx} className="space-y-6">
                                <h4 className="text-white font-black text-xs tracking-[0.2em] uppercase">{column.title}</h4>
                                <ul className="space-y-4">
                                    {column.links.map((link, linkIdx) => (
                                        <li key={linkIdx}>
                                            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-medium group flex items-center gap-2">
                                                <div className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3 space-y-6">
                        <h4 className="text-white font-black text-xs tracking-[0.2em] uppercase">CONTACT US</h4>
                        <div className="group">
                            <a
                                href="mailto:hello@tedred.com"
                                className="flex items-center gap-3 py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-primary hover:border-primary/50 transition-all text-sm font-bold group-hover:bg-white/10 w-fit"
                            >
                                <Mail size={16} className="shrink-0 group-hover:scale-110 transition-transform" />
                                hello@tedred.com
                            </a>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-gray-600 font-bold uppercase tracking-widest pt-4">
                            <Globe size={12} className="shrink-0" /> Global HQ • Remote First
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-gray-500 text-xs font-medium">
                        © {new Date().getFullYear()} <span className="text-white font-bold">TedRed Inc.</span> All rights reserved.
                        <span className="mx-2 text-gray-800">|</span>
                        Built with ✨ for the future.
                    </p>
                    <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest">
                        <a href="#" className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2">
                            <Shield size={14} /> Terms
                        </a>
                        <a href="#" className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2">
                            <Lock size={14} /> Privacy
                        </a>
                        <a href="#" className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

