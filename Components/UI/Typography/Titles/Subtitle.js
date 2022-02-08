import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
function MediumTitle({ children, align, color, className, fontWeight, theme }) {
    const { ref, inView } = useInView()
    const animation = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.5,
                    delay: 0.6
                }
            })
        }

    }, [inView])

    const variants = {
        hidden: {
            y: 100,
            opacity: 0
        }
    }
    let colorClass = theme === 'dark' ? 'light-strong-color' : null
    return (
        <motion.div ref={ref}
            variants={variants}
            animate={animation}
            initial="hidden"
        >
            <Container
                color={color}
                dangerouslySetInnerHTML={{ __html: children }}
                fontWeight={fontWeight}
                className={`${className} ${colorClass}`}
                align={align}
            >
            </Container>
        </motion.div>
    )
}

export default MediumTitle
const Container = styled.div`
    font-weight: ${props => props.fontWeight ? props.fontWeight : "500"};
    text-align: ${props => props.align ? props.align : "left"};
    margin: 10px 0;
    text-transform: capitalize;
    color: ${props => props.color ? props.color : "var(--darkGrey)"};
`