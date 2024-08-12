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

const ContainerMain: React.FC = () => {
    return (
        <Container>
            <ItemContainer>
                Here, we used styled-components in another way. We imported PageText as NavText from the helper folder. In place of the element’s name, we used NavText.
                Note that when using an existing component, we didn’t include a dot. Instead of writing styled.NavText, we wrote styled(NavText). We also created default styles for our component.
                The lines of code inside the component mean that if a color or font-size prop is specified when using the component, then color and font-size are equal to the specified one, Otherwise, the text component uses the default values stated therein.
            </ItemContainer>
           
        </Container>
    );

}
export default ContainerMain;