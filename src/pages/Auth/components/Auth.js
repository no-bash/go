import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Logo from "../../../assets/img/logo.png";
import { ButtonCustom, ButtonCustomAndArrow, ButtonCustomForm } from "../../../components/ButtonCustom";
import { Input } from "../../../components/InputCustom";
import { regSubmit, loginSubmit } from "../../../store/Auth/actions";

import { EDUCATION_LOGIN, HINTS_LOGIN } from "../../../constants/routes";

import {Buttonslang, laguageVariation} from '../../../language';
import bg from "../../../assets/img/bg.jpg";
import { Error } from "./Error/ErrorServer";
const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #786354;
  background-image: url(${bg});
  background-blend-mode: multiply;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 0px;
`;

const ContainerOne = styled.div`
  background-color: #fff;
  width: 40%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  color: #000;
  justify-content: center;
  align-items: baseline;
  padding: 120px 80px;
  @media (max-width: 908px) {
    width: 95%;
    padding: 20px 10px;
  }
`;

const FormDiv = styled.div`
  display: flex;
  @media (max-width: 908px) {
    display: block;
  }
`;

const Form = styled.form`
  margin-top: 20px;
`;

const Top = styled.div`
  display: flex;
  align-self: flex-start;
  margin-bottom: 49px;
  color: #000;
  font-size: 28px;
  align-items: center;\
`;

const Logotype = styled.img`
  height: auto;
  width: 60px;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Tab = styled.p`
  cursor: pointer;
  font-size: 24px;
  line-height: 28px;
  color: ${(props) => (props.active ? "#000000" : "#838383")};
  font-weight: 700;
`;
const Span = styled.p`
  font-size: 24px;
  line-height: 28px;
  color: #838383;
  font-weight: 700;
  margin-left: 5px;
  margin-right: 5px;
`;

const Left = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
flex-direction: column
`;

const Titlemain = styled.h1`
  color: #000;
  font-size: 28px;
  margin-bottom: 40px;
  flex: 0 0 auto;
`;

const ContantMain = styled.div`
flex: 1 0 auto;
`;

const FooterMain = styled.div`
font-size: 18px;
font-weight: bold;

color: #000;
flex: 0 0 auto;
`;

const Hello = styled.p`
  font-size: 28px;
  color: gray;  
  margin: 10px 0px;
`;
const DecriptionOne = styled.p`
font-size: 28px;
  margin: 10px 0px;
`;
const DecriptionTwo = styled.p`
  font-size: 28px;
  margin: 10px 0px;
`;
const Label = styled.label`
  font-size: 24px;
  margin-top: 20px;
`;

const ErrorWrapper = styled.div`
  position: fixed;
  top: 0;
  left:0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  display: none;
`;

const ErrorBG = styled.div`
  background: #fff;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SubTitle = styled.p`
max-width:400px;
`;

const Auth = ({history, location}) => {
  const [searchType, setSearchType] = useState(location.state?.from ? location.state.from : '');
  const [activeTab, setActiveTab] = useState("reg");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleAuth = async (e) => {
    e.preventDefault();
    if (activeTab === "reg") {
      if (!email || !nickname) {
        setError("Заполните все поля");
      } else {
        setError("");
        await dispatch(regSubmit(nickname, email));
      }
    }
    if (activeTab === "auth") {
      if (!email || !password) {
        setError("Заполните все поля");
      } else {
        setError("");
        // setToken(register(email, nickname)
        await dispatch(loginSubmit(password, email));
      }
    }
  };

  return (
    <Wrapper>
      <ContainerOne>
        <Left>
          <Titlemain>
          <Top>
          <Logotype alt="logo" src={Logo} />
          {laguageVariation["GoStrategist"]}

          <Buttonslang history={history}/>
        </Top>
            <SubTitle>{laguageVariation['EffectiveGuidance']}</SubTitle>
          </Titlemain>
          <ContantMain>
            <ButtonCustomAndArrow  onClick={() => {
                history.push(HINTS_LOGIN);
                setSearchType("");
              }}>{laguageVariation["Hints"]}</ButtonCustomAndArrow>
            <ButtonCustomAndArrow onClick={() => {
                history.push(EDUCATION_LOGIN);
                setSearchType("");
              }}>{laguageVariation["learning"]}</ButtonCustomAndArrow>

          </ContantMain>
          <Container>
        <Left>
          
          
        <Form  onSubmit={handleAuth}>
          <FormDiv>
          <Input
            mt={0}
            mr={20}
            mb={10}
            type="email"
            placeholder="Email"
            onChange={setEmail}
            value={email}
            name="email"
            color="#000"
            background="#ecdfd6"
          />
        
          {activeTab === "reg" ? (
            <Input
              mt={0}
              mb={30}
              placeholder="Nickname"
              onChange={setNickname}
              value={nickname}
              errorMessage={error}
              name="nickname"
              color="#000"
              background="#ecdfd6"
            />
          ) : (
            <Input
              mt={10}
              mb={30}
              placeholder="Password"
              onChange={setPassword}
              value={password}
              errorMessage={error}
              name="password"
              type="password"
              color="#000"
              background="#ecdfd6"
            />
          )}
          </FormDiv>
         
          <ButtonCustomForm type="submit" mb={30}>
          {activeTab === "reg" ? (
            <Span>
              {laguageVariation['Register']}
            </Span>
          ) : (
            <Span>
              {laguageVariation['SignIn']}
            </Span>
          )}

          </ButtonCustomForm>
          <Tabs>
          {activeTab === "reg" ? (
            <Span>
              {laguageVariation['AlreadyRegistered']}
            </Span>
          ) : (
            <Span>
              Ещё не зарегитсрированы?
            </Span>
          )}

           {activeTab === "reg" ? (
            <Tab
            onClick={() => setActiveTab("auth")}
            active={activeTab !== "auth"}
          >
            {laguageVariation['SignIn']}
          </Tab>
          ) : (
            <Tab
              onClick={() => setActiveTab("reg")}
              active={activeTab !== "reg"}
            >
              {laguageVariation['Register']}
            </Tab>
          )}

          </Tabs>
        </Form>
        </Left>
      </Container>
          <FooterMain>
            SGK Team, 2021
          </FooterMain>
          
        </Left>

       
        
      </ContainerOne>
      <ErrorWrapper  id="errorWrapper">
        <ErrorBG>
        <Error
            error="Не удалось подключиться к серверу"
          />
        </ErrorBG>
      </ErrorWrapper>
    </Wrapper>
  );
};

export default Auth;
