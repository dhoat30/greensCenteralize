import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function SectionTitle(props) {
    const { ref, inView } = useInView()
    const animation = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                opacity: 1,
                transition: {
                    duration: 1
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
    let colorClass = props.theme === 'dark' ? 'light-strong-color' : null
    return (
        <motion.div ref={ref}
            variants={variants}
            animate={animation}
            initial="hidden"
        >
            <Container
                align={props.align}
                fontWeight={props.fontWeight}
                color={props.color}
                dangerouslySetInnerHTML={{ __html: props.children }}
                showUnderline={props.showUnderline}
                className={`${props.className} ${colorClass}`}
            >
            </Container>

        </motion.div>
    )
}

export default SectionTitle
const Container = styled.div`
margin: 10px 0;
font-size: 4rem;
  line-height: 4rem;
font-weight: ${props => props.fontWeight ? props.fontWeight : "600"};
text-align: ${props => props.align ? props.align : "left"};
color: ${props => props.color ? props.color : "var(--darkGrey)"}; 
@media (max-width: 500px) {
    font-size: 2.5rem;
    line-height: 2.5rem;
}
`
