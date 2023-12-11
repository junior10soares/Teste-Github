import styled from 'styled-components'

export const LinkContainer = styled.a`
    height: 130px;
    width: 500px;
    padding: 10px;
    cursor: pointer;
    border: 1px solid ${(props) => props.theme['blue']};
    margin-top: 25px;
    text-decoration: none;
    border-radius: 9px;
    font-size: 22px;
    font-weight: bold;
    background: transparent;
    color: ${(props) => props.theme['blue']};

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h2 {
        font-size: 20px;
    }

    strong{
        font-size: 12px;
        border: 1px solid ${(props) => props.theme['base-border']};
        color: ${(props) => props.theme['base-border']};
        padding: 4px;
        border-radius: 9px;
    }

    h6 {
        font-size: 12px;
        margin-top: 16px;
    }

    &:hover {
        color: ${(props) => props.theme['base-text']};
        border: 2px solid ${(props) => props.theme['base-border']};
    }
`
