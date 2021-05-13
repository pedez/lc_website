import React from 'react';
import Icon1 from '../../images/why3.svg';
import Icon2 from '../../images/how2.svg';
import Icon3 from '../../images/what2.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
 } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Too long, didn't read?</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>WHY</ServicesH2>
                    <ServicesP>I want to help people like you run their lives better. I want to make you a better, happier and prouder CEO of yourself.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>HOW</ServicesH2>
                    <ServicesP>Through my advice and influence, I will change the way you think and help you become the most successful version of yourself.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>WHAT</ServicesH2>
                    <ServicesP>I’ll analyze your life + beliefs and identify what’s holding you back from achieving your full potential and help you figure out your path.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;
