import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
}

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}: ButtonProps) => {
    const baseStyles = 'font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2'

    const variants = {
        primary: 'bg-primary hover:bg-primary-light text-white shadow-lg hover:shadow-xl glow-effect',
        secondary: 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    }

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    }

    const { onDrag, onDragStart, onDragEnd, onDragOver, onAnimationStart, ...rest } = props

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...rest}
        >
            {children}
        </motion.button>
    )
}

export default Button
