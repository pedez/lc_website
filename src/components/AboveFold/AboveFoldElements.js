import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#d8e3e7' : '#132c33')};

    @media screen and(max-width: 768px) {
        padding: 100px 0;
    }

    @media screen and (max-width: 480px) {
        padding: 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        padding-top: 120px;
        height: 760px;
    }

    @media screen and (max-width: 768px) {
        padding-top: 40px;
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        padding: 30px 10px 0;
        height: 900px;
    }
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
        padding-top: 100px;
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

    @media screen and (max-width: 480px) {
        padding: 0;
        margin: 0;
    }
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;

    @media screen and (max-width: 480px) {
        padding: 0;
        margin: 0;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-left: 20px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        padding: 20px 20px 40px;
    }
`;

export const TopLine = styled.p`
    color: ${({lightText}) => (lightText ? '#51c4d3' : '#126e82')};
    font-size: 14.7px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#132c33')};
    
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 17.5px;
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
    /*background: ${({imgWrap}) => (imgWrap ? '#000' : '#676387')};*/
    max-width: 555px; /* prevValue: 555px */
    height: 100%;

    @media screen and (max-width: 768px) {
        padding: 20px 20px 40px;
    }
`;

export const Img = styled.img`
    width: 95%; /* prevValue: 95% */
    margin: 0 0 80px 0;
    padding-right: 0;
`;