import React from "react";

import { Container, TextContent, Title, TitleHighlight } from "./styles";
import { useNavigate } from 'react-router-dom'

import banner from "../../assets/emerging-technologies.png";
import Button from "../../components/Button/index";
import Header from "../../components/Header";

export default function Home() {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login')
  }

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Codifique <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button title="Começar" variant="secondary" onClick={handleClickSignIn} />
        </div>

        <div>
          <img src={banner} alt="Imagem Banner" />
        </div>
      </Container>
    </>
  );
}
