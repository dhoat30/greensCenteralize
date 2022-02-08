import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


function ExtraLargeTitle({ children, align, color, className, theme }) {
    const { ref, inView } = useInView()
    const animation = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                opacity: 1,
                transition: {
                    duration: 1,
                    when: "beforeChildren",
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
        <motion.div ref={ref}
            variants={variants}
            animate={animation}
            initial="hidden"
        >
            <Container
                dangerouslySetInnerHTML={{ __html: children }}
                className={className}
                align={align}
                color={color}>
            </Container>
        </motion.div>
    )
}

export default ExtraLargeTitle
const Container = styled.h1`
font-size: 8rem;
font-weight: 700;
margin: 10px 0;
line-height: 5rem;
color: ${props => props.color ? props.color : 'var(--darkGrey)'};
text-align: ${props => props.align ? props.align : "left"};
@media (max-width: 600px ){ 
   font-size: 5rem;
   line-height: 2rem;

}
@media (max-width: 400px ){ 
   font-size: 4rem;
   line-height: 1rem;

}
`
