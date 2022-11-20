import styled from 'styled-components'

export const ListItem = styled.li`
display: flex;
justify-content: space-between;
    list-style: none;
    padding: 6px;

    span {
        font-weight: bold;
        text-transform: capitalize;
    }
    
    button {
        display: inline-block;
        margin-left: 42px;
        border-radius: 10px;
    }
`; 
