import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text, FormInputContent, FormLabelContent } from './ContactElements'

const Contact = () => {
    return (
        <>
            <Container id='contact'>
                <FormWrap>
                    <Icon to="/">Upself</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Send Me a Message</FormH1>
                            <FormLabel htmlFor='for'>Your Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Subject</FormLabel>
                            <FormInput type='text' required />
                            <FormLabelContent htmlFor='for'>Content</FormLabelContent>
                            <FormInputContent type='text' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default Contact;
