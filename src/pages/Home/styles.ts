import styled from 'styled-components'

export const HomeContainer = styled.div`
    main{
        display: flex;
        justify-content: center;
        margin-top: 50px;
        gap: 250px;
        font-size: 15px;
    }
    ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 30px;
    }
    p{
        text-align: center;
        margin-top: 100px;
    }
`
export const TextHome = styled.h1`
    text-align: center;
    padding: 30px;
    font-size: 30px;
`
export const InputsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
`