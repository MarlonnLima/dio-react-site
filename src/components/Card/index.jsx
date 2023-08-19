import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function Card() {
  return (
    <CardContainer>
     <ImageBackground src="https://icapps.com/uploads/site/what-is-the-right-background-for-a-react-native-developer/_1200x630_crop_center-center_82_none/React_Native_image.jpg?mtime=1594715542" />
     <Content>
        <UserInfo>
            <UserPicture src="https://avatars.githubusercontent.com/u/102876942?v=4"/>
            <div>
                <h4>Pablo Henrique</h4>
                <p>Há 8 minutos</p>
            </div>
        </UserInfo>
        <PostInfo>
            <h4>Projeto para curso de HTML e CSS</h4>
            <p>Projeto feito o curso de html e css no bootcamp dio global avanade...<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
            <h4>#HTML #CSS #JAVASCRIPT</h4>
            <p>
                <ThumbUpIcon /> 10
            </p>
        </HasInfo>
     </Content>
    </CardContainer>
  ) 
}
