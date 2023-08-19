import { Container, Column, Title, TitleHighlight } from "./styles";
import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";
import Header from "../../components/Header";

export default function Feed() {
  return (
    <>
      <Header auth={true} />
      <Container>
        <Column flex={3}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>

        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={80}
            name="Marlon Lima"
            image="https://avatars.githubusercontent.com/u/102876942?v=4"
          />
          <UserInfo
            percentual={27}
            name="Marlon Lima"
            image="https://avatars.githubusercontent.com/u/102876942?v=4"
          />
          <UserInfo
            percentual={35}
            name="Marlon Lima"
            image="https://avatars.githubusercontent.com/u/102876942?v=4"
          />
          <UserInfo
            percentual={48}
            name="Marlon Lima"
            image="https://avatars.githubusercontent.com/u/102876942?v=4"
          />
          <UserInfo
            percentual={60}
            name="Marlon Lima"
            image="https://avatars.githubusercontent.com/u/102876942?v=4"
          />
        </Column>
      </Container>
    </>
  );
}
