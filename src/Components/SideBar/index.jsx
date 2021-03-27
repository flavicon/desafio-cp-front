import { Container } from "./styles";

export function Sidebar(props) {

    return (
        <Container>
            <ul>
                <li>Categories</li>
                {props.books.map(
                    prop => {
                        return (
                            <li>{prop.category}</li>
                        )
                    }
                )}
            </ul>
        </Container>
    )
}