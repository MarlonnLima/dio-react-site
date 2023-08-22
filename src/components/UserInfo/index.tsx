import React from 'react'
import {
Container,
NameText,
Progress,
UserPicture
} from './styles'

import { IUserInfo } from './types' 


export default function UserInfo({name, image, percentual} : IUserInfo) {
  return (
    <Container>
        <UserPicture src={image}/>
        <div>
            <NameText>{name}</NameText>
            <Progress percentual={percentual}/>
        </div>
    </Container>
  )
}
