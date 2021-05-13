import React from 'react'
import { Button } from '../ButtonElements';
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TextWrapper2,
    TopLine,
    Heading,
    Subtitle,
    TextUL, 
    TextLi,
    CheckIcon 
} from './ResponsabilitiesElements'

const Responsabilities = ({ 
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description,
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine lightText={lightText}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <TextWrapper2>
                                <TextUL>
                                    <TextLi><CheckIcon />Systems & resources optimization</TextLi>
                                    <TextLi><CheckIcon />Budget optimization (unless you’re lifetime wealthy)</TextLi>
                                    <TextLi><CheckIcon />Time management</TextLi>
                                    <TextLi><CheckIcon />Decision-making</TextLi>
                                    <TextLi><CheckIcon />Having well defined purpose/goals</TextLi>
                                    <TextLi><CheckIcon />Defining the mindset to be followed daily (motivation/ambition)</TextLi>
                                    <TextLi><CheckIcon />Setting standards/boundaries</TextLi>
                                </TextUL>
                            </TextWrapper2>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Responsabilities;