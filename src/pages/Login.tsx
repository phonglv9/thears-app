import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
interface LoginProps { }

const ContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #101010;
  padding: 0 100px;
`;
const Container = styled.div`
  width: 100%;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
 position: absolute;
 margin-top: 30vh;
`;
const Banner = styled.img`
  width: 100%;

`;
const Title = styled.h1`
  font-size: 16px;
  color: #ffffff;
  margin: 0;
  text-align: center;
  margin-bottom: 20px;
`;
const InputGroup = styled.div`
    width: 100%;
  margin-bottom: 15px;
  padding-top: 15px;
`;
const Input = styled.input`
  width: 370px;
  padding: 10px;
  height:25px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  background-color:#1e1e1e;
  color: #ffffff;
`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  color: #101010;
  background-color: #ffffff;
  font-size: 15px;
  cursor: pointer;
  font-weight: bold;

  
`;

const Login: React.FC<LoginProps> = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        
        navigate('/');
    };

    return (
        <ContainerAll>
            <Banner src='https://static.cdninstagram.com/rsrc.php/v3/ye/r/YVr3E4VYzmE.png' alt='Instagram' />
            <Container>
                <Title>Log in with your Instagram account</Title>
                <form onSubmit={handleSubmit}>
                    <InputGroup>
                        <Input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </InputGroup>
                    <InputGroup>
                        <Input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </InputGroup>
                    <InputGroup><Button type="submit">Log In</Button></InputGroup>

                </form>
            </Container>
        </ContainerAll>
    );
};

export default Login;
