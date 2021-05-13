import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const EmailContainer = styled.div`
    background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.1) 100%), url('./images/email.jpg') no-repeat center;
    background-size: cover;
    height: 450px;
    width: 100%;
    padding: 5rem calc((100vw - 1300px) / 2);
    color: #fff;
    display: none;
    justify-content: center;
    align-items: center;
`;

export const EmailContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const EmailTitle = styled.h1`
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
`;

export const EmailDescription = styled.p`
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
`;

export const EmailForm = styled.form`
    z-index: 10;
`;

export const EmailFormWrapper = styled.div`
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 1rem;
    }
`;

export const EmailLabel = styled.label`
`;

export const EmailInput = styled.input`
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 50px;
    border: none;
    margin-right: 1rem;
    border-radius: 4px;

    @media screen and (max-width: 768px) {
        margin-bottom: 1rem;
        width: 100%;
        margin-right: 0;
    }
`;

export const EmailButton = styled.button`
    padding: 1rem 3rem;
    border: none;
    background: #132c33;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    outline: none;
    transition: 0.3s ease;
    text-decoration: none;
    border-radius: 4px;
    
    &:hover {
    background: #fff;
    color: #132c33;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        min-width: 350px;
    }

    @media screen and (max-width: 400px) {
        width: 100%;
        min-width: 250px;
    }

`;