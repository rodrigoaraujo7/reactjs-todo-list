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

    const handleClick = () => {
        setIsChecked(current => !current)
    }

    return (
        <Container>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <FontAwesomeIcon icon={faSquareCheck as IconProp} onClick={handleClick} />
                <Title style={{
                    textDecoration: isChecked ? 'line-through' : 'none',
                    color: isChecked ? '#B0B0B0' : '#808080'
                }}>{props.name}</Title>
            </div>
            <FontAwesomeIcon icon={faTrashCan as IconProp} />
        </Container>  
    )
}