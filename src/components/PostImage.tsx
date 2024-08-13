import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  border-bottom: 1px solid #ddd;
`;

interface PostImageProps {
  image: string;
}

const PostImage: React.FC<PostImageProps> = ({ image }) => {
  return <Image src={image} alt="Post content" />;
};

export default PostImage;
