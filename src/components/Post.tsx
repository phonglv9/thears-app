import React from 'react';
import styled from 'styled-components';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostFooter from './PostFooter';

const PostContainer = styled.div`
    border-bottom: solid 1px #595959;
    max-width: 572px;
    margin: 20px auto;
`;

interface User {
    name: string;
    avatar: string;
}

interface PostProps {
    user: User;
    image: string;
    caption: string;
}

const Post: React.FC<PostProps> = ({ user, image, caption }) => {
    return (
        <>
            <PostContainer>
                <PostHeader user={user} />           
                <PostImage image={image} />
                <PostFooter/>         
            </PostContainer>
            <PostContainer>
                <PostHeader user={user} />
                <PostImage image={image} />
                <PostFooter  />
            </PostContainer>
        </>


    );
};

export default Post;
