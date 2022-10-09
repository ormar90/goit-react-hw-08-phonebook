import styled from 'styled-components'
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
    cursor: pointer;
    margin: 0 auto;
    border-radius: 10px; 
    width: 50%;
    padding: 8px;

`;


