import { MdKeyboardArrowRight } from 'react-icons/md';
import { GoCheck } from 'react-icons/go';
import styled from 'styled-components';


export const ArrowRight = styled(MdKeyboardArrowRight)`
    padding-top: 5px;
`;

export const Check = styled(GoCheck)`
    padding-top: 5px;
    padding-right: 5px;
    color: #51c4d3;
`;

export const homeObjFive = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'This is a partnership',
    headline: 'What Do I Need From You?',
    description: 'Everything is within YOUR power. I’m just the guide that will make the process much faster and more direct for you. But I need you to be open minded and motivated. I will help you get what you want out of life, but I need you to be willing to be up for the challenge of transforming yourself. If you’re close-minded, this won’t work.',
    buttonLabel: 'Start This Partnership',
    showButton: true,
    imgStart: true,
    img: require('../../images/mysvgBenefit2.svg').default,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true,
};


// ------------- //

export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Do you even know?',
    headline: 'As the CEO, what are your responsibilities?',
    description: '',
    bulletDesc: <div>
                    <ul>
                        <li>
                        <ArrowRight/>Implementing systems & resources optimization
                        </li>
                        <li>
                        <ArrowRight/>Budget optimization (unless you’re lifetime wealthy)
                        </li>
                        <li>
                        <ArrowRight/>Time management
                        </li>
                        <li>
                        <ArrowRight/>Decision making
                        </li>
                        <li>
                        <ArrowRight/>Having well definied purpose/goals
                        </li>
                        <li>
                        <ArrowRight/>Defining the mindset to be followed daily (motivation/ambition)
                        </li>
                        <li>
                        <ArrowRight/>Accountability
                        </li>
                    </ul>
                    <p></p>
                </div>,
    buttonLabel: 'Get Free Call',
    imgStart: false,
    img: require('../../images/svg-1.svg').default,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true,
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'So... let’s get to the point',
    headline: 'What Problems Can I Help You With?',
    description: 'You’ve been told what to do your whole entire life by pretty much everyone you’ve ever met. I’m here to help you tell yourself what to do. And I’m here to scream WAKE UP right next to your ear so that the noise from the world no longer confuses you. What I’m bringing you is my systems and resources optimization-oriented way of thinking and having you apply it to your life.',
    buttonLabel: 'Get 4 Free Calls',
    imgStart: false,
    img: require('../../images/mysvgProblem1.svg').default,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true,
};


export const homeObjNine = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'You Already Have Everything You Need',
    headline: 'What Am I Talking About?',
    description: 'I’m here to analyze your life. How you are living it. Then, I will pinpoint your mistakes and we’ll figure out the best course of action for you. You can consider my services like, I’m going to teach you to get a hold of your life and do it well. Everything is within YOUR power. I\'m just a guide',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: require('../../images/svg-1.svg').default,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
};

export const homeObjTen = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Try It Out For Free',
    headline: 'Ready To Change Your Life?',
    description: 'You’ve been told what to do your whole entire life by pretty much everyone you’ve ever met. I’m here to help you tell yourself what to do. And I’m here to scream WAKE UP right next to your ear so that the noise from the world no longer confuses you. What I’m bringing you is my systems and resources optimization-oriented way of thinking and having you apply it to your life.',
    buttonLabel: 'Get 4 Free Calls',
    imgStart: true,
    img: require('../../images/svg-3.svg').default,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true,
};

export const homeObjEleven = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Why Hire Me?',
    headline: 'What are your responsibilities as CEO?',
    description: '',
    bulletDesc: <ul>
                    <li>
                    <ArrowRight/>Shift your mindset to a successful one
                    </li>
                    <li>
                    <ArrowRight/>Make you aware of your standards
                    </li>
                    <li>
                    <ArrowRight/>Optimize productivity and organization
                    </li>
                    <li>
                    <ArrowRight/>Find your why
                    </li>
                    <li>
                    <ArrowRight/>Find the path to doing what feels good
                    </li>
                    <li>
                    <ArrowRight/>Create success habits for yourself
                    </li>
                    <li>
                    <ArrowRight/>Make yourself accountable
                    </li>
                </ul>,
    buttonLabel: 'Get Started',
    imgStart: false,
    img: require('../../images/svg-1.svg').default,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true,
};

export const homeObjTwelve = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Achieve Your Full Potential',
    headline: 'Why Hire Me?',
    description: 'I\'m an optimizer by nature. That means my special talent is looking at systems or resources and figuring out how to make the most out of them. That is why I\'m a great consultant for companies. But my why is helping people. That\'s what I\'m here for.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: require('../../images/svg-2.svg').default,
    alt: 'Piggybank',
    dark: false,
    primary: false,
    darkText: true,
};