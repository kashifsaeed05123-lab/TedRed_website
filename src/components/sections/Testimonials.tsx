import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'CEO, TechStart Inc',
            image: 'https://i.pravatar.cc/150?img=1',
            text: 'TedRed transformed our digital presence completely. Their innovative approach and attention to detail exceeded all our expectations. Highly recommended!',
            rating: 5
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Founder, DesignHub',
            image: 'https://i.pravatar.cc/150?img=13',
            text: 'Working with TedRed was an absolute pleasure. They delivered a stunning website that perfectly captures our brand identity. The team is professional and creative.',
            rating: 5
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            role: 'Marketing Director, GrowthCo',
            image: 'https://i.pravatar.cc/150?img=5',
            text: 'The marketing campaign TedRed created for us generated incredible results. Our engagement increased by 300% in just two months. Simply outstanding!',
            rating: 5
        },
    ]

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section id="testimonials" className="py-24 bg-dark relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <SectionTitle subtitle="See what our partners have to say about their experience.">
                        Client Stories
                    </SectionTitle>
                </div>

                <div className="max-w-5xl mx-auto relative">
                    {/* Large Background Quote */}
                    <div className="absolute top-[-50px] left-[-20px] text-white/5 pointer-events-none">
                        <Quote size={200} />
                    </div>

                    <div className="relative z-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                            >
                                {/* Decorative Gradient Line */}
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-purple-500 to-transparent" />

                                <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-center">
                                    {/* Profile Section */}
                                    <div className="flex flex-col items-center text-center md:items-start md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
                                        <div className="relative mb-4 group">
                                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:bg-primary/40 transition-colors duration-300" />
                                            <img
                                                src={testimonials[currentIndex].image}
                                                alt={testimonials[currentIndex].name}
                                                className="relative w-24 h-24 rounded-full border-2 border-white/20 object-cover"
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold text-white font-poppins">{testimonials[currentIndex].name}</h3>
                                        <p className="text-primary text-sm font-medium mb-3">{testimonials[currentIndex].role}</p>
                                        <div className="flex gap-1">
                                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                <Star key={i} size={14} className="fill-warning text-warning" />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Quote Section */}
                                    <div className="relative">
                                        <Quote className="text-primary/30 w-10 h-10 mb-4 inline-block" />
                                        <p className="text-xl md:text-2xl text-gray-200 font-inter italic leading-relaxed">
                                            "{testimonials[currentIndex].text}"
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between mt-8 md:px-12">
                        {/* Dots */}
                        <div className="flex gap-3">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-primary shadow-glow' : 'w-2 bg-white/20 hover:bg-white/40'
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Arrows */}
                        <div className="flex gap-4">
                            <button
                                onClick={prevTestimonial}
                                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
                            >
                                <ChevronLeft className="text-gray-400 group-hover:text-white" size={24} />
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
                            >
                                <ChevronRight className="text-gray-400 group-hover:text-white" size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
