import { 
    BoldTitle, 
    Title, Container, 
    InputContainer, 
    InputText, 
    InputButton 
} from "./style";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // fontAwesome
import { IconProp } from '@fortawesome/fontawesome-svg-core'; // fontAwesome Props
import { faCheck } from '@fortawesome/free-solid-svg-icons'; // fontAwesome Icons

import { ItemList } from '../ItemList'

import { useState } from "react";

const Header = () => {
    // read input-text value!
    const [itemName, setItemName] = useState<string>('');
    const getItemName = (event: any) => setItemName(event.target.value);

    // create new todo-item
    const [todoItem, setTodoItem] = useState<string[]>(['']);
    const createNewTodoItem = () => {
        setTodoItem([... todoItem, itemName])

        console.log(todoItem)
    }

    return (
        <>
        <Container>
            <Title>what will you do <BoldTitle>today?</BoldTitle></Title>
            <InputContainer>
                <InputText type="text" placeholder="place here!" onChange={getItemName} value={itemName} />
                <InputButton onClick={createNewTodoItem}>
                    <FontAwesomeIcon icon={faCheck as IconProp} />
                </InputButton>
            </InputContainer>

        </Container>
        <Container>
            {todoItem.map(item => <ItemList name={item} />)}
        </Container>
        </>
    )
}

    export default Header;