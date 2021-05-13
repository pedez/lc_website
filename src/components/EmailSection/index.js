import React from 'react';
import { 
    EmailContainer,
    EmailContent,
    EmailTitle,
    EmailDescription,
    EmailForm,
    EmailFormWrapper,
    EmailLabel,
    EmailInput,
    EmailButton
} from './EmailElements';

const EmailSection = () => {
    return (
        <EmailContainer>
            <EmailContent>
                <EmailTitle>
                    Subscribe
                </EmailTitle>
                <EmailDescription>
                    Get my newsletter.
                </EmailDescription>
                <EmailForm>
                    <EmailFormWrapper>
                        <EmailLabel>
                            <EmailInput type="email" placeholder="Enter your email" id="email"/>
                        </EmailLabel>
                        <EmailButton>Subscribe</EmailButton>
                    </EmailFormWrapper>
                </EmailForm>
            </EmailContent>
        </EmailContainer>
    );
};

export default EmailSection;
