import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../Input/Input'
import TextArea from '../Input/TextArea'
import PrimaryButton from '../Buttons/PrimaryButton'
import Errors from '../Notifications/Errors/Errors'
import LoadingOverlay from '../LoadingOverlay/LoadingOverlay'
import Select from '../Input/Select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/pro-duotone-svg-icons'

function ContactForm({ emailTo, emailRouteUrl, cancelPass, dropShadow, className }) {
    const [enteredName, setEnteredName] = useState('')
    const [enteredNameTouched, setEnteredNameTouched] = useState(false)

    const [enteredPhone, setEnteredPhone] = useState('')
    const [enteredPhoneTouched, setEnteredPhoneTouched] = useState(false)

    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

    const [enteredProduct, setEnteredProduct] = useState('BellaBot')

    const [enteredCompany, setEnteredCompany] = useState('')

    const [enteredMessage, setEnteredMessage] = useState('')

    const [showLoading, setShowLoading] = useState('')


    // submission message
    const [buttonMessage, setButtonMessage] = useState('Send Message')
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    // validate phone
    const enteredNameIsValid = enteredName.length > 2
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

    // validate phone
    const enteredPhoneIsValid = enteredPhone.length > 6
    const phoneInputIsInvalid = !enteredPhoneIsValid && enteredPhoneTouched

    // validate email
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    let enteredEmailIsValid = pattern.test(enteredEmail)
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched

    // submit handler
    const submitHandler = (e) => {
        e.preventDefault()
        console.log("button clicked")
        setEnteredNameTouched(true)
        setEnteredPhoneTouched(true)
        setEnteredEmailTouched(true)
        if (!enteredPhoneIsValid && !enteredEmailIsValid && !enteredNameIsValid) {
            return
        }
        // sending a request to api 
        const body = {
            name: enteredName,
            email: enteredEmail,
            phone: enteredPhone,
            product: enteredProduct,
            company: enteredCompany,
            message: enteredMessage,
            emailTo: emailTo
        }

        setShowLoading(true)
        setButtonMessage("Sending...")
        setErrorMessage('')

        fetch(emailRouteUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res === 200) {
                    setEnteredName('')
                    setEnteredEmail('')
                    setEnteredPhone('')
                    setEnteredProduct('BellaBot')
                    setEnteredCompany('')
                    setEnteredMessage('')
                    setEnteredNameTouched(false)
                    setEnteredEmailTouched(false)
                    setEnteredPhoneTouched(false)
                    setSuccessMessage('Message Sent!')
                    setButtonMessage("Sent")
                    setShowLoading(false)
                }
                else if (res === 400) {
                    setShowLoading(false)
                    setErrorMessage('Something went wrong. Please try again.')
                    setButtonMessage("Send Message")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={submitHandler} dropShadow={dropShadow} className={className}>

            <Content>
                <InputContainer>
                    <Input
                        label="Name"
                        isInvalid={nameInputIsInvalid}
                        type="text"
                        placeholder="Enter your name"
                        value={enteredName}
                        inputChange={(e) => setEnteredName(e.target.value)}
                        blurChange={() => setEnteredNameTouched(true)}

                    />
                    {nameInputIsInvalid ? <Errors>Please enter your name</Errors> : null}
                </InputContainer>

                <InputContainer>
                    <Input
                        label="Email"
                        isInvalid={emailInputIsInvalid}
                        type="email"
                        placeholder="Enter your email"
                        value={enteredEmail}
                        inputChange={(e) => setEnteredEmail(e.target.value)}
                        blurChange={() => setEnteredEmailTouched(true)}
                    />
                    {emailInputIsInvalid ? <Errors>Entered email address is not valid</Errors> : null}
                </InputContainer>

                <InputContainer>
                    <Input
                        label="Phone Number"
                        isInvalid={phoneInputIsInvalid}
                        type="text"
                        placeholder="Enter your phone number"
                        value={enteredPhone}
                        inputChange={(e) => setEnteredPhone(e.target.value)}
                        blurChange={() => setEnteredPhoneTouched(true)}

                    />
                    {phoneInputIsInvalid ? <Errors>Entered phone number is not valid</Errors> : null}
                </InputContainer>

                <InputContainer>
                    <Select
                        label="Choose Product"
                        value={enteredProduct}
                        onChange={(e) => setEnteredProduct(e.target.value)}
                    />
                </InputContainer>

                <InputContainer>
                    <Input
                        label="Company Name"
                        type="text"
                        placeholder="Enter your company name"
                        value={enteredCompany}
                        inputChange={(e) => setEnteredCompany(e.target.value)}
                    />
                </InputContainer>

                <InputContainer>
                    <TextArea
                        label="Message"
                        value={enteredMessage}
                        onChange={(e) => setEnteredMessage(e.target.value)}
                        placeholder="Message"
                    />
                </InputContainer>

            </Content>

            <ButtonContainer>
                <PrimaryButton>
                    {showLoading && <IconStyle spin icon={faSpinner} />}
                    {buttonMessage}
                </PrimaryButton>
                <Errors>{errorMessage}</Errors>
            </ButtonContainer>
        </Form>
    )
}

export default ContactForm

const Form = styled.form`
min-height: 200px;
width: 100%;
box-shadow: ${props => !props.dropShadow ? null : "rgba(149, 157, 165, 0.2) 0px 8px 24px"};
border-radius: 10px;
padding: 30px 50px;
@media (max-width: 500px){ 
padding: 30px 10px;
}
`
const Content = styled.div`

`
const ButtonContainer = styled.div`
margin-top: 0px;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: flex-end;
`

const InputContainer = styled.div`
margin: 15px 0; 
width: 100%; 
`
const IconStyle = styled(FontAwesomeIcon)`
margin-right: 5px;
`