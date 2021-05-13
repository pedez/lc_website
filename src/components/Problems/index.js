import React from 'react';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesOuterWrap,
    ServicesP,
    MyIcon1,
    MyIcon2,
    MyIcon3,
    MyIcon4,
    MyIcon5,
    MyIcon6,
    PreText,
    PreText2
 } from './ProblemsElements';

const Problems = () => {
    return (
        <ServicesContainer id="problems">
            <ServicesOuterWrap>
                <ServicesH1>So, What Problems Can I Help You With?</ServicesH1>
                <PreText>I can’t pinpoint how I can specifically help YOU because your situation is unique, just like everyone else’s. But here are the most common problems I have helped people with in the past:</PreText>
                <ServicesWrapper>
                    <ServicesCard>
                        <MyIcon1/>
                        <ServicesP>Lack of self-discipline & organization</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <MyIcon2/>
                        <ServicesP>Lack of purpose, goals & motivation</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <MyIcon3/>
                        <ServicesP>Lack of systems & resources optimization</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <MyIcon4/>
                        <ServicesP>Lack of accountability</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <MyIcon5/>
                        <ServicesP>Poor time management</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <MyIcon6/>
                        <ServicesP>Low self-confidence</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
                <PreText2>To know how I can help YOU specifically, just schedule a free call with me. Not only will you be able to explain your unique situation to me, but I’ll also give you advice on what you can improve in the call. We’ll define an action plan and you don’t need to give ANYTHING in return (although I would always appreciate your feedback).</PreText2>
            </ServicesOuterWrap>
        </ServicesContainer>
    );
};

export default Problems;
