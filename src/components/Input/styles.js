import styled from 'styled-components'

export const InputContainer = styled.div`
    height: 30px;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    width: 100%;
    background-color: #2D2D37;
    color: #FFFFFF;
    border: none;
    padding: 0px 10px;
    border-radius: 5px;
    height: 30px;
`

export const ErrorText = styled.p`
    color: #FF0000;
    font-size: 12px;
    display: block;
    margin:  -10px 20px 10px 40px;
`