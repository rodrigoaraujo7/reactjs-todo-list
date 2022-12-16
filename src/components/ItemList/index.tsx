import { Container, Title } from './style'

type ItemListProps = {
    name: string
}

export const ItemList = (props: ItemListProps) => {
    return (
        <Container>
            <div>
                <Title>{props.name}</Title>
            </div>
        </Container>  
    )
}