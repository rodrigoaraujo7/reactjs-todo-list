import { 
    BoldTitle, 
    Title, Container, 
    InputContainer, 
    InputText, 
    InputButton 
} from "./style";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <Container>
            <Title>what will you do <BoldTitle>today?</BoldTitle></Title>
            <InputContainer>
                <InputText type="text" placeholder="place here!" />
                <InputButton><FontAwesomeIcon icon={faCheck as IconProp} /></InputButton>
            </InputContainer>
        </Container>
    )
}

export default Header;