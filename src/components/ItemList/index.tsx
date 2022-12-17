import { Container, Title } from './style'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // fontAwesome
import { IconProp } from '@fortawesome/fontawesome-svg-core'; // fontAwesome Props
import { faSquareCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons'; // fontAwesome Icons

import { useState } from 'react';

type ItemListProps = {
    name: string
}

export const ItemList = (props: ItemListProps) => {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckItem = () => {
        setIsChecked(current => !current)
    }

    return (
        <Container>
            <FontAwesomeIcon icon={faSquareCheck as IconProp} onClick={handleCheckItem} />
            <Title style={{
                textDecoration: isChecked ? 'line-through' : 'none',
                color: isChecked ? '#B0B0B0' : '#808080'
            }}>{props.name}</Title>
        </Container>  
    )
}