import styled from 'styled-components';

export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #126e82;

    @media screen and (max-width: 1000px) {
        height: 1000px;
    }

    @media screen and (max-width: 768px) {
        height: 1250px;
        padding: 0 40px 0;
    }

    @media screen and (max-width: 480px) {
        height: 1450px;
        padding: 0 20px;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        margin-bottom: 40px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
        margin-top: -20px;
    }
`;

export const ServicesCard = styled.div`
    background: #51c4d3;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 480px) {
        max-height: 400px; /* ??????????????????????????????????? PROB REMOVE */
    }
`;

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 15px;
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 768px) {
        padding: 50px 20px 0;
        font-size: 2.25rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ServicesH2 = styled.h2`
    color: #132c33;
    font-size: 1rem;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        color: #fafafa;
    }
`;

export const ServicesP = styled.p`
    color: #fafafa;
    font-size: 1rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        color: #132c33;
    }
`;