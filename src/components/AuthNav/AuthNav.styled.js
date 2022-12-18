import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    gap: 8px;
`;

export const Link = styled(NavLink)` 
text-decoration: none;
    background-color: #fff; 
    text-align: center ;
    cursor: pointer;
    border-radius: 10px; 
    width: 50%;
    padding: 8px;

    &.active {
        background-color: #1E90FF;
        color: white;
    }
`;