import styled from 'styled-components';
import { AiFillCheckCircle } from 'react-icons/ai';

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#d8e3e7' : '#132c33')};

    @media screen and(max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        padding-top: 80px;
        height: 700px;
    }
    
    @media screen and (max-width: 768px) {
        padding-top: 0;
        height: 1030px;
    }

    @media screen and (max-width: 480px) {
        height: 1130px;
    }
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    padding-top: 80px;

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;

    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }

    @media screen and (max-width: 480px) {
        padding: 0;
    }

    
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        padding: 0 20px 0;
    }

    @media screen and (max-width: 480px) {
        padding: 0;
    }
`;

export const TopLine = styled.p`
    color: ${({lightText}) => (lightText ? '#51c4d3' : '#126e82')};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 43px;
    line-height: 1.1.%;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#132c33')};

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    
    @media screen and (max-width: 480px) {
        font-size: 30px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#132c33' : '#fff')};
`;

export const Bullets = styled.div`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#132c33' : '#fff')};

    & li {
        list-style: none;
        line-height: 39px;
        color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
    }
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

// mah shit //

export const TextWrapper2 = styled.div`
    background-color: #132c33;
    max-width: 540px;
    padding: 27px 10px 18px;
    margin-bottom: 70px;
    border-radius: 25px;

    @media screen and (max-width: 768px) {
        padding: 27px 0px 18px;
    }
`;

export const TextUL = styled.ul`
    margin-left: 25px;
`;

export const TextLi = styled.li`
    list-style: none;
    max-width: 440px;
    margin-bottom: 15px;
    font-size: 18px;
    line-height: 24px;
`;

export const CheckIcon = styled(AiFillCheckCircle)`
    color: #51c4d3;
    margin-top: 5px;
    margin-right: 10px;
`;