import { MagnifyingGlass } from '@phosphor-icons/react';
import styled from 'styled-components'

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const InputSearch = styled.input`
    width: 350px;
    height: 35px;
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 7px;
    padding: 6px;
    font-size: 15px;

    ::placeholder {
        color: ${(props) => props.theme['base-text']};
    }
`
export const MagnifyingGlassIcon = styled(MagnifyingGlass)`
  width: 20px;
  height: 20px;
  margin-left: -30px;
`
