import styled from "styled-components";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FormSearch = styled.div`
        display: flex;
        align-items: center;
        width:500px;
        height:60px;
        background-color:#0A0A0A;
        border-radius: 50px;
        border: 1px solid #494949;
`;
const InputSearch = styled.input.attrs({
    placeholder: "Search"
  })`
        width:400px;
        height:36px;
        padding: 1px 2px 1px 2px;
        background-color:#0A0A0A;
        color:rgb(243, 245, 247);
        font-size: 14px;
        border: none;
`;
const IconSearch = styled.label`
       margin: 0px 20px 0px 20px;
        color:#959595;
`;
const Search: React.FC = () => {
    return (
        <FormSearch>
            <IconSearch><FontAwesomeIcon icon={faMagnifyingGlass} /></IconSearch>
            <InputSearch />
        </FormSearch>
    )
}
export default Search;