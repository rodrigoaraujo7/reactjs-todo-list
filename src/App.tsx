import { useEffect, useState } from 'react'

import { Container, GlobalStyle } from './globalStyles';
import { 
  BoldTitle, 
  Title, 
  HeaderContainer, 
  InputContainer, 
  InputText, 
  InputButton
} from "./style";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // fontAwesome
import { IconProp } from '@fortawesome/fontawesome-svg-core'; // fontAwesome Props
import { 
  faCheck, 
  faSquareCheck, 
  faTrashCan 
} from '@fortawesome/free-solid-svg-icons'; // fontAwesome Icons

import { ItemList } from './components/ItemList';

const App = () => {
  // read input-text value!
  const [itemName, setItemName] = useState();
  const getItemName = (event: any) => setItemName(event.target.value);

  // create new todo-item
  const [todoItem, setTodoItem] = useState<any[]>([]);
  const createNewTodoItem = () => {
      setTodoItem([itemName, ...todoItem])
  }

  return (
    <Container>
      <GlobalStyle />

      {/* Header */}
      <HeaderContainer>
            <Title>what will you do <BoldTitle>today?</BoldTitle></Title>
            <InputContainer>
                <InputText type="text" placeholder="place here!" onChange={getItemName} value={itemName} />
                <InputButton onClick={createNewTodoItem}>
                    <FontAwesomeIcon icon={faCheck as IconProp} />
                </InputButton>
            </InputContainer>
        </HeaderContainer>

        {/* Todo List */}
        {todoItem.map(item => <ItemList name={item} />)}
    </Container>
  )
}

export default App
