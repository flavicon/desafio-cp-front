import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from '../../services/api';

export function Cards() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        api.get('books').then(response => setBooks(response.data));
    }, []);

    return (
        <Container>
            {books.map(
                book => {
                    return(
                        <div className="card">
                            <div className="card-img">
                                <img src={book.image_url} alt={book.title}/>
                            </div>
                            <div className="card-description">
                                <p>{book.author}</p>
                                <h3>{book.title}</h3>
                                <span>avaliation</span>
                                <p>{book.description}</p>
                                <div className="price">
                                    <span>R${book.prince_discount}</span>
                                    <span className="discount">R${book.price}</span>
                                </div>
                                <button>BUY NOW</button>
                            </div>
                        </div>
                    )
                }
            )}
        </Container>
    )

}