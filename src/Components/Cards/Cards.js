import { Button, Toolbar, Typography } from "@mui/material";
import "./Cards.css";



function Cards() {
    return (
        <div className="Cards">
            <div className="double-card">
                <div className="card-burger">
                    <a className="card-link" href ="#">
                        <div className="card-content">
                            <p className="card-title">Restaurante</p>
                            <figure className="card-img">
                                <img src="https://static.ifood-static.com.br/image/upload/f_auto/webapp/landingV2/restaurant.png" alt="burger" />   
                            </figure>
                            <p className="card-text">Ver opções</p>
                        </div>
                    </a>
                </div>

                <div className="card-cart">

                </div>
            </div>
        </div>

    );
}

export default Cards;