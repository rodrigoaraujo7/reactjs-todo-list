import { useState } from 'react'

import { Container, GlobalStyle } from './globalStyles';
import { 
  BoldTitle, 
  Title, 
  HeaderContainer, 
  InputContainer, 
  InputText, 
  InputButton,
  TodoItemContainer,
  TodoItemTitle
} from "./style";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // fontAwesome
import { IconProp } from '@fortawesome/fontawesome-svg-core'; // fontAwesome Props
import { 
  faCheck, 
  faSquareCheck, 
  faTrashCan 
} from '@fortawesome/free-solid-svg-icons'; // fontAwesome Icons

const App = () => {
  // read input-text value!
  const [itemName, setItemName] = useState();
  const getItemName = (event: any) => setItemName(event.target.value);

  // create new todo-item
  const [todoItem, setTodoItem] = useState<any[]>([]);
  const createNewTodoItem = () => {
      setTodoItem([itemName, ...todoItem])
  }

  // check item
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckItem = () => {
      setIsChecked(current => !current)
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
        <HeaderContainer style={{ height: '70%' }}>
            {todoItem.map(item => (
              <TodoItemContainer>
                <FontAwesomeIcon icon={faSquareCheck as IconProp} onClick={handleCheckItem} />
                <TodoItemTitle style={{
                    textDecoration: isChecked ? 'line-through' : 'none',
                    color: isChecked ? '#B0B0B0' : '#808080'
                }}>{item}</TodoItemTitle>
              </TodoItemContainer> 
            ))}
        </HeaderContainer>
    </Container>
  )
}

export default App
