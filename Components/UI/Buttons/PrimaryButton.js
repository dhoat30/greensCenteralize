import React from 'react'
import { motion } from 'framer-motion'

function PrimaryButton({ children, className, onClick }) {

    return (
        <motion.button
            onClick={onClick}
            style={buttonStyle}
            whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 8px var(--green)"
            }}
            className={className}>
            {children}
        </motion.button>
    )
}

export default PrimaryButton
const buttonStyle = {
    border: "1px solid var(--green)",
    background: "var(--green)",
    color: "white",
    padding: "5px 30px",
    marginTop: "20px"
}
