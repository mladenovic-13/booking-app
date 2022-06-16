import React from "react";
import styled from "styled-components";

const MailList = () => {
  return (
    <Mail>
      <Container>
        <h1 className="title">Save time, save money!</h1>
        <p className="desc">Sing up and we'll send the best deals to you</p>
        <InputForm>
          <input placeholder="Your email" type="text" className="input" />
          <button className="inputBtn">Subscribe</button>
        </InputForm>
      </Container>
    </Mail>
  );
};

const Mail = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props: any) => props.theme.color["primary-dark"]};
  color: white;
  height: 150px;
  padding: 50px 0;
  margin: 50px 0;
`;
const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    font-size: 30px;
    font-weight: 400;
    margin: 0;
    margin-bottom: 5px;
  }
  .desc {
    margin: 0;
    margin-bottom: 30px;
  }
`;
const InputForm = styled.form`
  display: flex;
  gap: 5px;
  .input {
    font-size: 18px;
    border: none;
    padding: 10px;
    border-radius: 3px;
    width: 300px;
  }
  .inputBtn {
    background-color: ${(props: any) => props.theme.color["primary-light"]};
    /* color: ${(props: any) => props.theme.color["primary-dark"]}; */
    color: white;
    border: none;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 400;
  }
`;

export default MailList;
