import { Container } from './styles';

export function BannerPromotions() {
    return (
        <Container>
            <header>
                <h2>BIG SUMMER SALE</h2>
                {/* <div className="off">
                    <div className="up-img">
                        <img src="assets/off/up.svg" alt="up"/>
                    </div>
                    <div className="amount-img">
                        <img src="assets/off/60.svg" alt="amount"/>
                    </div>
                    <div className="percent-img">
                    <img src="assets/off/percent.svg" alt="percent"/>
                    </div>
                </div> */}
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