import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
    children: ReactNode
    className?: string
    hover?: boolean
}

const Card = ({ children, className = '', hover = true }: CardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={hover ? { y: -5, scale: 1.02 } : {}}
            className={`glass-card rounded-2xl p-6 ${className}`}
        >
            {children}
        </motion.div>
    )
}

export default Card
