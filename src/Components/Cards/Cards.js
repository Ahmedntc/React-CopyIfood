import { Button, Toolbar, Typography } from "@mui/material";
import "./Cards.css";



function Cards() {
    return (
        <section className="Cards">
            <div className="double-card">
                <div className="maincards">
                    <div className="bigcard">
                        <a className="burger">
                            <div className="container-bigcard">
                                <p className="bigcard-title">Restaurante</p>
                                <figure className="img-container">
                                    <img className="img" src="https://static.ifood-static.com.br/image/upload/f_auto/webapp/landingV2/restaurant.png" alt="burger" />
                                </figure>
                                <div className="btn-like">Ver opções</div>
                            </div>
                        </a>
                    </div>

                <div className="bigcard--cart">
                        <a className="cart">
                            <div className="container-bigcard">
                                <p className="bigcard-title">Mercado</p>
                                <figure className="img-container">
                                    <img className="img" src="https://static.ifood-static.com.br/image/upload/f_auto/webapp/landingV2/market.png" alt="mercado" />
                                </figure>
                                <div className="btn-like--cart">Buscar lojas</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="card-carousel">

            </div>

        </section>

    );
}

export default Cards;