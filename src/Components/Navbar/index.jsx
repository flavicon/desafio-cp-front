import { Container } from './styles';
import { PermIdentity, ShoppingBasket, Search } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export function Navbar() {

    return(
        <Container>
            <div className="logo">
                <Link to="/">Bookstore</Link>
            </div>

            <div className="menu">
                <ul>
                    <li>
                        <Link to="/Books">BOOKS</Link>
                    </li>
                    <li>AUDIOBOOKS</li>
                    <li>STATIONERY &amp; GIFTS</li>
                    <li>BLOG</li>
                </ul>
            </div>

            <div className="options">
                <ul>
                    <li><PermIdentity /></li>
                    <li><Search /></li>
                    <li><ShoppingBasket /></li>
                </ul>
            </div>
        </Container>
    )
}