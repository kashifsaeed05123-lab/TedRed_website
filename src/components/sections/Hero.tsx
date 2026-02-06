import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import Button from '../ui/Button'

const Hero = () => {
    const heroImages = [
        { src: '/AI & Automation.png', alt: 'AI & Automation', target: '#tech' },
        { src: '/App Development.png', alt: 'App Development', target: '#tech' },
        { src: '/Design & Branding.png', alt: 'Design & Branding', target: '#design' },
        { src: '/Global Reach&Clients.png', alt: 'Global Reach & Clients', target: '#marketing' },
        { src: '/Innovation&Future Tech.png', alt: 'Innovation & Future Tech', target: '#tech' },
        { src: '/Marketing & Growth.png', alt: 'Marketing & Growth', target: '#marketing' },
        { src: '/Motion & Media.png', alt: 'Motion & Media', target: '#media' },
        { src: '/Web Development.png', alt: 'Web Development', target: '#tech' },
    ]

    const keywords = [
        'Smart Solution',
        'Intelligent Systems',
        'Limitless Innovation',
        'Next-Gen Tech',
        'Creative Strategy',
        'Global Reach'
    ]

    const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0)
    const [radius, setRadius] = useState(220)

    useEffect(() => {
        const handleResize = () => {
            setRadius(window.innerWidth < 768 ? 140 : 220)
        }
        handleResize()
        window.addEventListener('resize', handleResize)

        const interval = setInterval(() => {
            setCurrentKeywordIndex((prev) => (prev + 1) % keywords.length)
        }, 2000)

        return () => {
            window.removeEventListener('resize', handleResize)
            clearInterval(interval)
        }
    }, [])

    const handleImageClick = (target: string) => {
        const element = document.querySelector(target)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,77,90,0.1),transparent_50%)]" />

            {/* Animated Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-2 mb-6"
                        >
                            <Sparkles className="text-primary" size={20} />
                            <span className="text-sm uppercase tracking-wider text-gray-400">
                                Innovating the Future of Technology
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mb-8"
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins leading-tight">
                                Transforming Ideas into
                            </h1>
                            <div className="h-10 md:h-20 overflow-hidden relative mt-2">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentKeywordIndex}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -20, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "backOut" }}
                                        className="text-3xl md:text-5xl lg:text-6xl font-bold font-poppins italic text-primary absolute top-0 left-0"
                                    >
                                        {keywords[currentKeywordIndex]}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Button
                                size="lg"
                                className="group"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Let's Build Something Amazing
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - 3D Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative flex items-center justify-center mt-12 lg:mt-0"
                    >
                        {/* Central Eye/Circle */}
                        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] flex items-center justify-center scale-90 sm:scale-100">
                            {/* Outer Rings */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-0 rounded-full border border-primary/20"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-24 rounded-full border border-primary/40"
                            />

                            {/* Central Glow - Removed for transparency */}
                            {/* <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute w-32 h-32 rounded-full bg-gradient-radial from-primary/50 to-transparent blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            /> */}

                            {/* Center Logo */}
                            {/* Center Logo */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-32 h-32 flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    className="w-full h-full rounded-full flex items-center justify-center overflow-hidden"
                                >
                                    <img src="/tedred-logo.png" alt="TedRed Logo" className="w-full h-full object-cover drop-shadow-[0_0_15px_rgba(255,77,90,0.5)]" />
                                </motion.div>
                            </div>

                            {/* Rotating Image Container */}
                            <motion.div
                                className="absolute inset-0 z-10"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            >
                                {heroImages.map((img, i) => {
                                    // Calculate position on the circle
                                    // Radius = 200px (half of container width/height approx minus padding)
                                    const angle = (i * 360) / 8 - 90;
                                    const radian = (angle * Math.PI) / 180;
                                    const x = Math.cos(radian) * radius;
                                    const y = Math.sin(radian) * radius;

                                    return (
                                        <div
                                            key={i}
                                            style={{
                                                top: '50%',
                                                left: '50%',
                                                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                            }}
                                            className="absolute w-14 h-14 md:w-20 md:h-20"
                                        >
                                            {/* Counter-rotate content to keep it upright */}
                                            <motion.div
                                                animate={{ rotate: -360 }}
                                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                                whileHover={{ scale: 1.2, zIndex: 50 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={() => handleImageClick(img.target)}
                                                className="w-full h-full bg-dark/80 backdrop-blur-md border-[1.5px] border-primary/30 rounded-2xl flex items-center justify-center p-3 cursor-pointer shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)] hover:border-primary transition-all duration-300 group"
                                            >
                                                <img
                                                    src={img.src}
                                                    alt={img.alt}
                                                    className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                                                />
                                            </motion.div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
                >
                    <div className="w-1 h-2 bg-primary rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero
