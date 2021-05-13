import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(108deg, rgba(19, 44, 51, 1) 0%, rgba(22, 78, 94, 1) 100%);
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form`
    background: #51c4d3;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 50px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #132c33;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const FormInput = styled.input`
    padding: 10px 16px;
    margin-bottom: 12px;
    border: none;
    border-radius: 4px;
    background-color: #d8e3e7;
`;

export const FormInputContent = styled.textarea`
    height: 150px;
    padding: 16px 16px;
    margin-bottom: 32px;
    resize: none;
    border: none;
    border-radius: 4px;
    background-color: #d8e3e7;
`;

export const FormLabelContent = styled.label`
    margin-top: 12px;
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const FormButton = styled.button`
    background: #132c33;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`;

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`;