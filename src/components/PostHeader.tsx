import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom:10px
 
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

const Username = styled.span`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Caption = styled.span`
  font-size: 15px;
`;

interface User {
  name: string;
  avatar: string;
}

interface PostHeaderProps {
  user: User;
}

const PostHeader: React.FC<PostHeaderProps> = ({ user }) => {
  return (
    <Header>
      <Avatar src={user.avatar} alt={user.name} />
      <UserInfo>
        <Username>{user.name}</Username>
        <Caption>You can speak?You can speak English?</Caption>
      </UserInfo>
    </Header>
  );
};

export default PostHeader;
