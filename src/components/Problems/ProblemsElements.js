import styled from 'styled-components';
import { IoDownloadSharp } from 'react-icons/io5';
import { FaDirections, FaLayerGroup } from 'react-icons/fa';
import { RiUserHeartFill, RiUserUnfollowFill, RiTimeFill } from 'react-icons/ri';

export const ServicesContainer = styled.div`
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #d8e3e7;

    @media screen and (max-width: 1000px) {
        height: 1050px;
        padding: 0 40px 0;
    }

    @media screen and (max-width: 768px) {
        height: 1700px;
        padding: 0 40px 0;
    }

    @media screen and (max-width: 540px) {
        height: 1700px;
        padding: 0 40px 0;
    }

    @media screen and (max-width: 420px) {
        height: 1800px;
        padding: 0 20px;
    }

    @media screen and (max-width: 320px) {
        height: 1900px;
        padding: 0 20px;
    }
`;

export const ServicesOuterWrap = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 60px 24px 80px;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        margin: -160px auto 0;
    }

    @media screen and (max-width: 768px) {
        margin: -500px auto 100px;
    }
    
    @media screen and (max-width: 540px) {
        padding: 0;
        margin-top: -500px;
    }

    @media screen and (max-width: 420px) {
        padding: 0;
        margin-top: -690px;
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
        padding-top: 30px;
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ServicesCard = styled.div`
    background: #132c33;
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
        background: #126e82; 
    }

    
`;

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #132c33;
    margin-bottom: 14px;
    text-align: center;
    padding-top: 20px;

    @media screen and (max-width: 1000px) {
        margin-bottom: 34px;
    }

    @media screen and (max-width: 768px) {
        margin-top: -30px;
        padding: 0 20px 0;
        margin-bottom: 24px;
    }

    @media screen and (max-width: 540px) {
        font-size: 2rem;
        text-align: left;
    }
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`;

// myshit //

export const MyIcon1 = styled(FaLayerGroup)`
    color: #51c4d3;
    font-size: 50px;
    margin-bottom: 20px;

    &:hover {
        color: #132c33;
    }
`;

export const MyIcon2 = styled(FaDirections)`
    color: #51c4d3;
    font-size: 50px;
    margin-bottom: 20px;
`;

export const MyIcon3 = styled(IoDownloadSharp)`
    color: #51c4d3;
    font-size: 50px;
    margin-bottom: 20px;
`;

export const MyIcon4 = styled(RiUserUnfollowFill)`
    color: #51c4d3;
    font-size: 50px;
    margin-bottom: 20px;
`;

export const MyIcon5 = styled(RiTimeFill)`
    color: #51c4d3;
    font-size: 50px;
    margin-bottom: 20px;
`;

export const MyIcon6 = styled(RiUserHeartFill)`
    color: #51c4d3;
    font-size: 50px;
    margin-bottom: 20px;
`;


export const PreText = styled.p`
    margin: 0 80px 10px;
    font-size: 1rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        padding: 0 20px 0;
        margin: 0 0 30px;
        text-align: left;
    }

    @media screen and (max-width: 540px) {
        margin-top: 10px;
        margin-bottom: 50px;
    }
`;

export const PreText2 = styled.p`
    margin: 50px 80px 0;
    font-size: 1rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        padding: 0 20px 0;
        margin: 0;
        margin-top: 40px;
        text-align: left;
    }

    @media screen and (max-width: 540px) {
        margin-top: 50px;
    }
`;