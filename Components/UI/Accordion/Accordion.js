import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import styled from 'styled-components';
import MediumTitle from '../Typography/Titles/MediumTitle'
import Paragraph from '../Typography/Paragraph/Paragraph'
function AccordionComponent({ faq }) {
    if (faq.length === 0) {
        return null
    }
    const faqs = faq.reverse().map((item, index) => {
        return <Accordion.Item eventKey={index} key={index}>
            <Accordion.Header >
                <div dangerouslySetInnerHTML={{ __html: item.title.rendered }} fontWeight="500" color="var(--darkGrey)">
                </div >

            </Accordion.Header>
            <Accordion.Body>
                <div dangerouslySetInnerHTML={{ __html: item.acf.answer }} fontWeight="300" color="var(--darkGrey)">
                </div >
            </Accordion.Body>
        </Accordion.Item>
    })
    return (
        <Container>
            <Accordion >
                {faqs}
            </Accordion>
        </Container>

    )
}

export default AccordionComponent

const Container = styled.div`
max-width: 1000px;
margin: 30px auto 0 auto;
`