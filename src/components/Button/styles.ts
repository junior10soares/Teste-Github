import styled from "styled-components";

export const ButtonSearch = styled.button`
    width: auto;
    height: 35px;
    border-radius: 7px;
    padding: 6px;
    font-size: 15px;
    background: transparent;
    cursor: pointer;
    border: 1px solid ${(props) => props.theme['base-border']};
`