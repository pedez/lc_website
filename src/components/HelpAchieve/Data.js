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

export const helpAchieve = {
    id: 'benefits',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: '',
    headline: 'Here’s what I can help you achieve',
    description: '',
    bulletDesc: <ul>
                    <li>
                    <Check/>Reshape your mindset into a successful one
                    </li>
                    <li>
                    <Check/>Make you aware of your standards
                    </li>
                    <li>
                    <Check/>Optimize your productivity and organization
                    </li>
                    <li>
                    <Check/>Find your why/purpose
                    </li>
                    <li>
                    <Check/>Find the path to doing what feels good/right
                    </li>
                    <li>
                    <Check/>Create success habits for yourself
                    </li>
                    <li>
                    <Check/>Make yourself accountable
                    </li>
                </ul>,
    showButton: true,
    buttonLabel: 'Take The Step Towards Improvement',
    imgStart: false,
    img: require('../../images/mysvgBenefit6.svg').default,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
};