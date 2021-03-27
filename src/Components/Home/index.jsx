import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Cards } from "../Cards";
import { Sidebar } from "../SideBar";
import { Container } from "./styles";

export function Home() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        api.get('books').then(response => setBooks(response.data));
    }, []);

    return (
        <Container>
            <Sidebar 
                books={books.map(book => { return book })}
            />
            <Cards 
                books={books.map(book => book)}
            />
        </Container>
    )
}