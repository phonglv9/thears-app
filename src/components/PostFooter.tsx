import React, { useState } from 'react';
import styled from 'styled-components';
import { faHeart,faComment ,faPaperPlane} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = styled.div`
  margin: 10px 10px 10px 0px;
`;

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin: 10px 10px 10px 0px;
  color:rgb(243, 245, 247);
  font-size:15px;
    &:hover {
        border-radius: 10px;
        background-color: #f39c12; 
    }
`;

interface likes {
   
}

const PostFooter: React.FC = () => {
    const [likes, setLikes] = useState<number>(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <Footer>
            <Button onClick={handleLike}>  <FontAwesomeIcon icon={faHeart} /> {likes}</Button>
            <Button > <FontAwesomeIcon icon={faComment} /></Button>
            <Button > <FontAwesomeIcon icon={faPaperPlane} /></Button>
          
        </Footer>
    );
};

export default PostFooter;
