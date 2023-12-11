import styled from 'styled-components'

export const HeaderContainer = styled.header`
    background: ${(props) => props.theme['gray']};
    display: flex;
    height: 100px;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme['base-border']};
`

