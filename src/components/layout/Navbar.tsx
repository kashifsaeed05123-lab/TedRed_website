import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Our Work', href: '#portfolio' },
        { name: 'Company', href: '#testimonials' },
        { name: 'Resources', href: '#contact' },
    ]

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="flex items-center gap-3 group"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="bg-gradient-to-br from-primary to-primary-dark p-1.5 rounded-lg shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                            <img src="/tedred-logo.png" alt="TedRed" className="h-7 w-7 object-contain" />
                        </div>
                        <span className="text-xl font-bold font-sans tracking-tight text-white group-hover:text-primary transition-colors">TEDRED</span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-4 lg:gap-8">
                        {navLinks.map((link) => (
                            <motion.button
                                key={link.name}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection(link.href)}
                                className="text-gray-200 hover:text-white transition-colors duration-200 font-bold text-sm tracking-wide relative group whitespace-nowrap"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                            </motion.button>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button
                            size="sm"
                            onClick={() => scrollToSection('#contact')}
                            className="lg:hidden hover:scale-105 active:scale-95 transition-transform whitespace-nowrap"
                        >
                            Work With Us
                        </Button>
                        <Button
                            onClick={() => scrollToSection('#contact')}
                            className="hidden lg:flex hover:scale-105 active:scale-95 transition-transform"
                        >
                            Let's Build Something Amazing
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, y: -20 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="md:hidden absolute top-full left-0 right-0 bg-dark/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl overflow-hidden"
                        >
                            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    {navLinks.map((link) => (
                                        <motion.button
                                            key={link.name}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => scrollToSection(link.href)}
                                            className="text-gray-300 hover:text-primary transition-all duration-200 font-bold text-lg text-left py-3 px-4 rounded-xl hover:bg-white/5 border border-transparent active:bg-white/10"
                                        >
                                            {link.name}
                                        </motion.button>
                                    ))}
                                </div>
                                <div className="pt-4 border-t border-white/5">
                                    <Button
                                        onClick={() => scrollToSection('#contact')}
                                        className="w-full py-4 text-lg shadow-lg shadow-primary/20"
                                    >
                                        Let's Build Something Amazing
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    )
}

export default Navbar
