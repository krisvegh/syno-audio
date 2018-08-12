import * as React from 'react';
import styled  from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const InputArea = styled.div`
  padding: 10px;
  align-self: center;
  justify-self: center;
  width: 320px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;

const InputField = styled.input`
  width: 80%;
  height: 30px;
  margin: 10px;
`;

class LoginPage extends React.Component {
  public render() {
    return (
      <Wrapper>
        <InputArea>
          <InputField/>
          <InputField/>
          <InputField/>
        </InputArea>
      </Wrapper>
    )
  }
}

export default LoginPage;