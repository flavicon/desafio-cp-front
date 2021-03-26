import { Container } from './styles';
import { PermIdentity, ShoppingBasket, Search } from '@material-ui/icons';

export function NavBar() {

    return(
        <Container>
            <div className="logo">
                Bookstore
            </div>

            <div className="menu">
                <ul>
                    <li>BOOKS</li>
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