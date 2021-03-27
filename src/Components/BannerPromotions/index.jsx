import { Container } from './styles';

export function BannerPromotions() {
    return (
        <Container>
            <header>
                <h2>BIG SUMMER SALE</h2>
                <img src="assets/promotion.svg" alt="promoção 60% off"/>
            </header>
            <div className="cards">
                <div className="first-card">
                    <p>
                        CHANGE OLD BOOK ON NEW
                    </p>
                    <div>
                        <img src="assets/arrow.svg" alt="Seta apontando para a direita"/>
                    </div>
                </div>

                <div className="second-card">
                    <p>
                        TOP 100 BOOKS 2020
                    </p>
                    <div>
                        <img src="assets/arrow.svg" alt="Seta apontando para a direita"/>
                    </div>
                </div>
            </div>
        </Container>
    )
}