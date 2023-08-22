import React from "react"

export interface IUserInfo {
    name: string,
    image?: string,
    percentual: number,
}

export interface IProgressStyled extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    percentual: number
}