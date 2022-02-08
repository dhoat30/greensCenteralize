import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function LargeTitle(props) {
    let colorClass = props.theme === 'dark' ? 'light-strong-color' : null
    const { ref, inView } = useInView()
    const animation = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                opacity: 1,
                transition: {
                    duration: 1,
                    ease: "easeOut"
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
    return (
        <motion.div
            style={style}
            ref={ref}
            variants={variants}
            animate={animation}
            initial="hidden"
        >
            <Container

                dangerouslySetInnerHTML={{ __html: props.children }}
                className={`${props.className}`} align={props.align} color={props.color}>
            </Container>
        </motion.div>
    )
}

export default LargeTitle
const Container = styled.div`
font-size: 6rem !important;
margin: 10px 0;
line-height: 5rem;
color: ${props => props.color ? props.color : 'var(--darkGrey)'};
text-align: ${props => props.align ? props.align : "left"} !important;
`
const style = {
    margin: "0 auto"
}