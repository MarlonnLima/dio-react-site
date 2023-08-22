import styled from 'styled-components';
import { ITitleStyled } from './types'

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 300px;
    margin: 0 auto;
`


export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`


export const Title = styled.h2<ITitleStyled>`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 440px;
    margin-bottom: 20px;
    line-height: 44px;
    margin: 0 auto;

    color: #FFF;
`

export const SubtitleLogin = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`

export const EsqueciText = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 35px;
    line-height: 25px;

    color: #E5E044
`

export const CriarConta = styled.a`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 35px;
    line-height: 25px;
    text-decoration: none;

    color: #E23DD7;

    &:hover {
        cursor: pointer;
    }
`


export const TitleHighlight = styled.span`
    color: #E4105D;
`