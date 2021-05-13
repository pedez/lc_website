import { MdKeyboardArrowRight } from 'react-icons/md';
import styled from 'styled-components';


export const ArrowRight = styled(MdKeyboardArrowRight)`
    padding-top: 5px;
`;

export const cTAObject = {
    id: 'discover',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Become the best version of yourself',
    headline: 'Book Your Free Call Now And Get',
    description: '',
    bulletDesc: <div>
                    <ul>
                        <li>
                        <ArrowRight/>An immediate action plan
                        </li>
                        <li>
                        <ArrowRight/>Learning how to be self-accountable
                        </li>
                        <li>
                        <ArrowRight/>An analysis on your life and where it’s headed
                        </li>
                        <li>
                        <ArrowRight/>Learning how to self-analyse
                        </li>
                        <li>
                        <ArrowRight/>Tips & tricks to get what/where you want faster
                        </li>
                    </ul>
                    <br></br>
                    <p>Hit the button below to see my scheduling availability. Pick the best time for you and I’ll see you on our call. Let’s do this shit.</p>
                </div>,
    buttonLabel: 'Get Your Free Call Now',
    imgStart: true,
    img: require('../../images/callToAction2.png').default,
    alt: 'Piggybank',
    dark: true,
    primary: true,
    darkText: false,
};