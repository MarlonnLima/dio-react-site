import {
  Container,
  Title,
  TitleHighlight,
  Column,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  Wrapper,
} from "./styles";

import { useNavigate } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import Button from "../../components/Button/index";
import Input from "../../components/Input";
import Header from "../../components/Header";

export default function Home() {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/feed");
  };
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>

        <Column>
          <Wrapper>
            <Title>
              Faça seu <TitleHighlight>cadastro</TitleHighlight>
            </Title>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form>
              <Input placeholder="E-mail" leftIcon={<EmailIcon />} />
              <Input
                placeholder="Senha"
                type="password"
                leftIcon={<LockIcon />}
              />
              <Button
                title="Entrar"
                variant="secondary"
                onClick={handleClickLogin}
                type="button"
              />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}
