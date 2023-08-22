import styled, { css } from 'styled-components'
import './types'
import { ITitleStyled, IWrapperStyled } from './types'


export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
`

export const Wrapper = styled.div<IWrapperStyled>`
    max-width: 300px;
    margin: 0 auto;

    ${({variant}) => variant !== "primary" && css`
        max-width: 400px;
    `}
`

export const Column = styled.div`
    flex: 1;
`

export const Title = styled.h1<ITitleStyled>`
    font-size: 32px;
    font-weight: 700;
    line-height: 44px;

    ${({ variant }) => variant !== "primary" && css`
           text-align: center;
           padding-left: 40px;

    ` }
`

export const SubtitleText = styled.p`
    font-size: 16px;
    line-height: 24px;
    margin: 15px 0px;
`

export const HaveAccount = styled.p`
    font-size: 14px;
    line-height: 19px;
`

export const HighlightText = styled.span`
    color: #23DD7A
`