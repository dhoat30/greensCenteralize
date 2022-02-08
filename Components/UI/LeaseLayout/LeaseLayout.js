import React, { useState } from 'react'
import styled from 'styled-components'
import PrimaryButton from '../Buttons/PrimaryButton'
import ContactModal from '../ContactForm/ContactModal'
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer'
import RowTitle from '../Typography/Titles/RowTitle'
import Overlay from '../../UI/Overlay/Overlay'
function LeaseLayout({ leaseOptions }) {
    const [showContactModal, setShowContactModal] = useState(false)
    const leaseOptionList = leaseOptions.map((item, index) => {
        return <ListItem key={index}>{item.lease_options}</ListItem>
    })
    return (
        <React.Fragment>
            <MaxWidthContainer backgroundColor="var(--silver)">
                <Container>
                    <Border />
                    <Content>
                        <RowTitle>Lease</RowTitle>
                        <List>
                            {leaseOptionList}
                            <PrimaryButton onClick={() => setShowContactModal(true)}>Order Now</PrimaryButton>
                        </List>
                    </Content>
                    <Border />
                </Container>
            </MaxWidthContainer >
            {showContactModal &&
                <ContactModal
                    emailTo="info@grobotics.co.nz"
                    emailRouteUrl="https://greensrobotics.co.nz/wp-json/webduel/v1/home-contact-email"
                    title="Get A Quote"
                    showModal={showContactModal}
                    setShowContactModal={setShowContactModal}
                />
            }
            {showContactModal &&
                <Overlay onClick={() => setShowContactModal(false)} />
            }


        </React.Fragment>
    )
}

export default LeaseLayout
const Container = styled.section`
padding: 50px 0;
position: relative;
&::before{ 
    width: 500px;
    height: 2px;
    background-color: var(--darkGrey);
    position: absolute;
    top: 0;
    left: 0;
}
`

const Border = styled.div`
border-top: 1px solid rgba(0,0,0,0.2);
margin: 50px 0;
`
const Content = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`
const List = styled.ul``
const ListItem = styled.li`
font-size: 2rem;
margin-top: 5px;
@media (max-width: 600px){ 
    font-size: 1.2rem;
}
`