import { Container } from "./styles";
import { api } from '../../services/api';
import { useState, useEffect } from 'react';

export function Sidebar() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        api.get('books').then(response => setBooks(response.data));
    }, []);

    console.log(books);

    return (
        <Container>
            <ul>
                <li>Categories</li>
                {books.map(
                    book => {
                        return (
                            <li key={book.id}>{book.category}</li>
                        )
                    }
                )}
            </ul>
        </Container>
    )
}