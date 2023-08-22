import Header from "../../components/Header";
import Input from "../../components/Input";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import {
  Column,
  Container,
  HighlightText,
  SubtitleText,
  Title,
  Wrapper,
  HaveAccount
} from "./styles";
import Button from "../../components/Button";
import { toast } from "react-toastify";
import React from "react";

const schema = yup
  .object({
    name: yup.string().min(10, "Coloque seu nome completo").required(),
    email: yup
      .string()
      .email("Email não é valido")
      .required("Campo Obrigatório"),
    senha: yup
      .string()
      .min(6, "No minímo 6 caracteres")
      .required("Campo Obrigatório"),
  })
  .required();

export default function Cadastrar() {

  const navigate = useNavigate();

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  
  const onSubmit = (formData) => {
    if (formData) {
      api
      .post("/users", formData)
      .then((response) => {
        console.log(response);
        reset({ name: '', senha: '', email: ''});
        toast.success('Cadastro feito com sucesso, agora vamos logar!')
        
        const toLogin = setInterval(() => {
          navigate('/login')
          clearInterval(toLogin)
        }, 5000);
      })
      .catch((error) => {
        toast.error("Houve um erro no seu cadastro, tente novamente")
      });
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Wrapper>
            <Title variant="primary">
              A plataforma para você aprender com experts, dominar as principais
              tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
          </Wrapper>
        </Column>

        <Column>
          <Title>Comece agora grátis</Title>
          <Wrapper variant="primary">
            <SubtitleText>Crie sua conta e make the change._</SubtitleText>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="name"
                control={control}
                errorMessage={errors?.name?.message}
                placeholder="Nome Completo"
                leftIcon={<PersonIcon />}
              />
              <Input
                name="email"
                control={control}
                errorMessage={errors?.email?.message}
                placeholder="E-mail"
                leftIcon={<EmailIcon />}
              />
              <Input
                name="senha"
                control={control}
                errorMessage={errors?.senha?.message}
                placeholder="Senha"
                type="password"
                leftIcon={<LockIcon />}
              />

              <Button
                variant="secondary"
                title="Criar Minha Conta"
                type="submit"
              />
            </form>

            <SubtitleText>
              Ao clicar em "criar minha conta grátis", declaro que aceito as
              Políticas de Privacidade e os Termos de Uso da DIO.
            </SubtitleText>

            <HaveAccount>
              Já tenho conta.{" "}
              <Link to="/login">
                <HighlightText>Fazer Login</HighlightText>
              </Link>
            </HaveAccount>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}
