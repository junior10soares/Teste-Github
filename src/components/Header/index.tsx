import imgLogo from '../../assets/logogit.png'

import { HeaderContainer } from './styles'

export function Header() {
    return (
        <HeaderContainer>
            <img
                src={imgLogo}
                alt="Logo"
                style={{ height: '50px', width: '50px' }}
            />
        </HeaderContainer>
    )
}