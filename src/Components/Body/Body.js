import { Button, Toolbar, Typography } from "@mui/material";
import "./Body.css";


function Body() {
    return (        
        <div className='merc'>
            <div className="header-mercado">
                <h1 className='header-title'>Faça mercado no ifood</h1>
                <p className='entrega-text'>Entregamos tudo o que precisa na porta da sua casa, de hortifruti a itens de limpeza</p>
            </div>
            <form className='form'>
                <div className='form-group'>
                <div className='input-group'>
                    <svg width="48px" height="48px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"></svg>
                    <input className="end-input" type='text' placeholder='Em qual endereço você está' />
                </div>
                <button className="mercados-btn"> Ver mercados próximos</button>
                </div>
            </form>
            <div className="tag-itens">
                <button className='item-wrapper'>Frios</button>
                <button className='item-wrapper'>Laticínios</button>
                <button className='item-wrapper'>Feira</button>
                <button className='item-wrapper'>Bebidas</button>
                <button className='item-wrapper'>Doces</button>
                <button className='item-wrapper'>Massas frescas</button>
                <button className='item-wrapper'>Limpeza</button>
                <button className='item-wrapper'>Padaria</button>
                <button className='item-wrapper'>Higiene</button>
                <button className='item-wrapper'>Congelados</button>
                <button className='item-wrapper'>Carnes</button>
                <button className='item-wrapper'>Cerveja</button>
            </div>
</div>
);



}


export default Body;