import styled from 'styled-components'
import ClipLoader from "react-spinners/ClipLoader";

import { Form, Field } from 'formik';


export const FormStyled = styled(Form)`    
    display: flex;
    flex-direction: column;
`;

export const FieldStyled = styled(Field)`
    display: block;
    align-items: center;
    padding: 8px;
    border-radius: 10px;
    width: 90%;
    margin: 0 auto;
`;

export const Label = styled.label`
    margin-bottom: 16px;
`;

export const Message = styled.div`
    max-width: 100%;
    font-size: 12px;
    color: red;
`;

export const Button = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 auto;
    height: 45px;
    border-radius: 10px; 
    width: 50%;
    padding: 8px;
`;

export const Spiner = styled(ClipLoader)`
    position: absolute;
    right: 20px;
    color: #2A2E35;
    max-width: 16px;
    max-height: 16px;   
`;


