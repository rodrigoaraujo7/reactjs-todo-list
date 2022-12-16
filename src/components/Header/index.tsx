import { 
    BoldTitle, 
    Title, Container, 
    InputContainer, 
    InputText, 
    InputButton 
} from "./style";

const Header = () => {
    return (
        <Container>
            <Title>what will you do <BoldTitle>today?</BoldTitle></Title>
            <InputContainer>
                <InputText type="text" placeholder="place here!" />
                <InputButton>V</InputButton>
            </InputContainer>
        </Container>
    )
}

export default Header;