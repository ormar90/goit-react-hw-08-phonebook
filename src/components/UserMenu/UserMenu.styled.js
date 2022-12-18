import styled from "styled-components";

export const UserMenuWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;

    & p {
        margin: 0;
    }
`;

export const Button = styled.button`
    cursor: pointer;
    border-radius: 10px; 
    width: 20%;
    padding: 8px;
`;