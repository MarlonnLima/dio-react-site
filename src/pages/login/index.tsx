import React from "react";

import {
  Container,
  Title,
  TitleHighlight,
  Column,
  CriarConta,
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
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { api } from "../../services/api";

import { useForm } from "react-hook-form";

import { IFormData } from './types'
import { toast } from "react-toastify";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Email não é valido")
      .required("Campo Obrigatório"),
    password: yup
      .string()
      .min(6, "No minímo 6 caracteres")
      .required("Campo Obrigatório"),
  })
  .required();

export default function Login() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  console.log(errors, isValid);

  const onSubmit = async (formData: IFormData) => {
    try {
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
      
      if(data.length === 1){
        navigate("/feed");
      }else{
        toast.warn('Email ou senha inválido')
      }

    } catch {
      toast.error('Houve um erro, tente novamente')
    }
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
            <Title variant="secondary">
              Faça seu <TitleHighlight>cadastro</TitleHighlight>
            </Title>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                control={control}
                errorMessage={errors?.email?.message}
                placeholder="E-mail"
                leftIcon={<EmailIcon />}
              />
              <Input
                name="password"
                control={control}
                errorMessage={errors?.password?.message}
                placeholder="Senha"
                type="password"
                leftIcon={<LockIcon />}
              />
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarConta onClick={()=> navigate('/cadastrar')}>Criar Conta</CriarConta>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}
