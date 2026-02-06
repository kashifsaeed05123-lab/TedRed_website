import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionTitleProps {
    children: ReactNode
    subtitle?: string
    className?: string
}

const SectionTitle = ({ children, subtitle, className = '' }: SectionTitleProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-center mb-16 ${className}`}
        >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
                {children}
            </h2>
            {subtitle && (
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto mt-6 rounded-full" />
        </motion.div>
    )
}

export default SectionTitle
