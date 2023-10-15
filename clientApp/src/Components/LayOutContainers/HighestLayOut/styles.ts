import {styled} from "@mui/system";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const SFontAwesome = styled(FontAwesomeIcon)`
  font-size: 3rem;
  color: white;
  margin: 0 1rem;
  transition: all 1s ease-in-out;
  cursor: pointer;
  &:hover{
    color: #ccc;
    transform:scaleY(3rem);
  }
`