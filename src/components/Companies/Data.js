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

export const companiesObj = {
    id: 'discover',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Who are you?',
    headline: 'All Companies Are Unique, Just Like People',
    description: 'Companies are in different markets/niches, just like people have different interests and enjoy different things in life. They also have different purposes, goals… And, of course, different (life) philosophies.',
    buttonLabel: 'Get Free Call',
    imgStart: true,
    img: require('../../images/mysvg1.svg').default,
    alt: 'Piggybank',
    dark: true,
    primary: true,
    darkText: false,
};