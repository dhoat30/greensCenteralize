import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function ColumnTitle(props) {
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

    let colorClass = props.theme === 'dark' ? 'light-strong-color' : null
    return (
        <motion.div ref={ref}
            variants={variants}
            animate={animation}
            initial="hidden"
        >
            <Container

                color={props.color}
                dangerouslySetInnerHTML={{ __html: props.children }}
                fontWeight={props.fontWeight}
                className={`${props.className} ${colorClass}`}
                align={props.align}>
            </Container>
        </motion.div>
    )
}
export default ColumnTitle

const Container = styled.div`
  font-size: 2rem;
  line-height: 2.5rem;
    font-weight: ${props => props.fontWeight ? props.fontWeight : "500"};
    margin: 0;
    text-align: ${props => props.align ? props.align : "left"};
    color: ${props => props.color ? props.color : "var(--darkGrey)"}
`
