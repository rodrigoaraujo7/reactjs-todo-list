import { Container, Title } from './style'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // fontAwesome
import { IconProp } from '@fortawesome/fontawesome-svg-core'; // fontAwesome Props
import { faSquareCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons'; // fontAwesome Icons

type ItemListProps = {
    name: string
}

export const ItemList = (props: ItemListProps) => {
    return (
        <Container>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <FontAwesomeIcon icon={faSquareCheck as IconProp} />
                <Title>{props.name}</Title>
            </div>
            <FontAwesomeIcon icon={faTrashCan as IconProp} />
        </Container>  
    )
}