import Button from "../Button";
import logo from "../../assets/LOGO-DIO-COLOR.png";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  BuscarInputContainer,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
  Logo,
  UserPicture,
} from "./styles";

export default function Header({ auth }) {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login");
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to="/"><Logo src={logo} alt="Logo da Dio" /></Link>
          {auth ? (
            <>
              <BuscarInputContainer placeholder="Buscar..." />
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {auth ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/102876942?v=4" />
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar" onClick={handleClickSignIn} />
              <Button title="Cadastrar" onClick={handleClickSignIn} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
}
