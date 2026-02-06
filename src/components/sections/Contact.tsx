import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, MessageSquare, Clock, Target, Users, Shield, Zap, CheckCircle2, Linkedin, Twitter, Github } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const contactSchema = z.object({
    fullName: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    companyName: z.string().optional(),
    serviceCategory: z.string().min(1, 'Please select a category'),
    specificService: z.string().min(1, 'Please select a service'),
    budgetRange: z.string().min(1, 'Please select budget range'),
    projectTimeline: z.string().optional(),
    projectType: z.string().optional(),
    referralSource: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const whyChooseUs = [
    {
        icon: Users,
        title: 'Expert Team',
        desc: 'Skilled professionals with years of experience',
        color: 'text-red-500'
    },
    {
        icon: Zap,
        title: 'Custom Solutions',
        desc: 'Tailored to your specific needs',
        color: 'text-purple-500'
    },
    {
        icon: Target,
        title: 'Proven Track Record',
        desc: 'Successful projects across industries',
        color: 'text-yellow-500'
    },
    {
        icon: MessageSquare,
        title: 'Ongoing Support',
        desc: "We're with you every step of the way",
        color: 'text-green-500'
    },
    {
        icon: Shield,
        title: 'Security First',
        desc: 'Your data is always protected',
        color: 'text-blue-500'
    },
    {
        icon: Clock,
        title: 'Fast Delivery',
        desc: 'Quick turnaround without compromising quality',
        color: 'text-indigo-500'
    }
]

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            serviceCategory: '',
            specificService: '',
            budgetRange: '',
            projectTimeline: '',
            projectType: '',
            referralSource: ''
        }
    })

    const onSubmit = async (data: ContactFormData) => {
        console.log('Form submitted:', data)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSubmitted(true)
        reset()
        setTimeout(() => setIsSubmitted(false), 5000)
    }

    return (
        <section id="contact" className="py-24 bg-dark relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-12 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-xs tracking-wider uppercase"
                    >
                        Get Started
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black font-poppins text-white mb-6"
                    >
                        Let's Build Something Amazing
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Tell us about your project and we'll help bring your vision to life.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Why Choose Us & Info */}
                    <div className="lg:col-span-5 space-y-12">
                        {/* Why Choose Us First */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-4">Why Choose Us</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                                {whyChooseUs.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 group hover:bg-white/10 transition-all duration-300 cursor-default"
                                    >
                                        <div className={`p-3 rounded-xl bg-white/5 ${item.color} group-hover:scale-110 transition-transform`}>
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-sm tracking-wide">{item.title}</p>
                                            <p className="text-gray-500 text-[11px] font-medium leading-tight">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Information Second */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-4">Contact Information</h3>
                            <div className="space-y-6">
                                <motion.a
                                    href="mailto:hi@tedred.com"
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-4 text-gray-400 hover:text-primary transition-all group w-fit"
                                >
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <Mail size={20} />
                                    </div>
                                    <span className="font-medium">hi@tedred.com</span>
                                </motion.a>
                                <div>
                                    <p className="text-xl font-bold text-white mb-4">Connect With Us</p>
                                    <div className="flex gap-4">
                                        {[Linkedin, Twitter, Github].map((Icon, i) => (
                                            <motion.a
                                                key={i}
                                                href="#"
                                                whileHover={{ scale: 1.2, rotate: 5 }}
                                                className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-primary hover:border-primary/50 transition-all"
                                            >
                                                <Icon size={20} />
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Expanded Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-3xl"
                        >
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormGroup label="Full Name *" error={errors.fullName?.message}>
                                        <input {...register('fullName')} className={inputStyles} placeholder="John Doe" />
                                    </FormGroup>
                                    <FormGroup label="Email Address *" error={errors.email?.message}>
                                        <input {...register('email')} className={inputStyles} placeholder="john@example.com" />
                                    </FormGroup>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormGroup label="Phone Number" error={errors.phone?.message}>
                                        <input {...register('phone')} className={inputStyles} placeholder="+1 (555) 123-4567" />
                                    </FormGroup>
                                    <FormGroup label="Company Name" error={errors.companyName?.message}>
                                        <input {...register('companyName')} className={inputStyles} placeholder="Your Company" />
                                    </FormGroup>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormGroup label="Service Category *" error={errors.serviceCategory?.message}>
                                        <select {...register('serviceCategory')} className={inputStyles}>
                                            <option value="" disabled>Select a category</option>
                                            <option value="web">Web Development</option>
                                            <option value="mobile">Mobile Apps</option>
                                            <option value="design">UI/UX Design</option>
                                            <option value="strategy">Digital Strategy</option>
                                        </select>
                                    </FormGroup>
                                    <FormGroup label="Specific Service *" error={errors.specificService?.message}>
                                        <select {...register('specificService')} className={inputStyles}>
                                            <option value="" disabled>Select a service</option>
                                            <option value="frontend">Frontend Development</option>
                                            <option value="backend">Backend Development</option>
                                            <option value="fullstack">Full Stack</option>
                                            <option value="consulting">Consulting</option>
                                        </select>
                                    </FormGroup>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormGroup label="Budget Range *" error={errors.budgetRange?.message}>
                                        <select {...register('budgetRange')} className={inputStyles}>
                                            <option value="" disabled>Select budget range</option>
                                            <option value="<5k">Less than $5,000</option>
                                            <option value="5k-15k">$5,000 - $15,000</option>
                                            <option value="15k-30k">$15,000 - $30,000</option>
                                            <option value="30k+">$30,000+</option>
                                        </select>
                                    </FormGroup>
                                    <FormGroup label="Project Timeline" error={errors.projectTimeline?.message}>
                                        <select {...register('projectTimeline')} className={inputStyles}>
                                            <option value="" disabled>Select timeline</option>
                                            <option value="urgent">Urgent (Less than 1 month)</option>
                                            <option value="standard">1 - 3 months</option>
                                            <option value="flexible">Flexible</option>
                                        </select>
                                    </FormGroup>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormGroup label="Project Type" error={errors.projectType?.message}>
                                        <select {...register('projectType')} className={inputStyles}>
                                            <option value="" disabled>Select project type</option>
                                            <option value="new">New Project</option>
                                            <option value="redesign">Redesign/Upgrade</option>
                                            <option value="maintenance">Maintenance</option>
                                        </select>
                                    </FormGroup>
                                    <FormGroup label="How did you hear about us?" error={errors.referralSource?.message}>
                                        <select {...register('referralSource')} className={inputStyles}>
                                            <option value="" disabled>Select option</option>
                                            <option value="search">Search Engine</option>
                                            <option value="social">Social Media</option>
                                            <option value="referral">Word of Mouth</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </FormGroup>
                                </div>

                                <FormGroup label="Project Details *" error={errors.message?.message}>
                                    <textarea
                                        {...register('message')}
                                        className={`${inputStyles} h-32 resize-none pt-4`}
                                        placeholder="Please describe your project, goals, and any specific requirements..."
                                    />
                                </FormGroup>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-16 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>

                                <p className="text-center text-gray-500 text-xs mt-6">
                                    By submitting this form, you agree to our <a href="#" className="text-primary hover:underline">Privacy Policy</a> and <a href="#" className="text-primary hover:underline">Terms of Service</a>.
                                </p>

                                {isSubmitted && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex items-center gap-3 justify-center p-4 bg-green-500/10 border border-green-500/20 rounded-2xl text-green-400"
                                    >
                                        <CheckCircle2 size={20} />
                                        <span className="font-bold">Message sent successfully! We'll get back to you soon.</span>
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const FormGroup = ({ label, children, error }: any) => (
    <div className="space-y-2">
        <label className="text-white font-bold text-sm tracking-wide ml-1">{label}</label>
        {children}
        {error && <p className="text-primary text-[10px] font-bold ml-1 uppercase tracking-wider">{error}</p>}
    </div>
)

const inputStyles = "w-full bg-dark/50 border border-white/10 rounded-xl px-4 h-12 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-gray-600 appearance-none selection:bg-primary/30"

export default Contact

