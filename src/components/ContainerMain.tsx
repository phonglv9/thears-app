import styled from "styled-components";

const Container = styled.div`
   margin-top: 90px;
`;
const ItemContainer = styled.div`
   max-width: 620px;
   width: 100%;
   margin: 0 auto;
   padding: 20px;
   box-sizing: border-box; 
`;
type ContainerMainProps =  {
    children : React.ReactNode | null;
}
const ContainerMain = ({children}:ContainerMainProps) => {
    return (
        <Container>
            <ItemContainer>
               {children}
            </ItemContainer>
           
        </Container>
    );

}
export default ContainerMain;