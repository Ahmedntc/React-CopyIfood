import { Button, Toolbar, Typography } from "@mui/material";
import "./AppBar.css";


function AppBar() {
  return (
    <div className = "toolbarDiv">
      <Toolbar className = "toolbar">
        <div className="navLinks">
          <img src='https://imagensemoldes.com.br/wp-content/uploads/2020/06/Imagem-Ifood-PNG-1536x1536.png' alt="logo" className="logo" />
          <Typography href="#" className="link">Entregador</Typography>
          <Typography href="#" className="link">Restaurante e mercado</Typography>
          <Typography href="#" className="link">Carreiras</Typography>
          <Typography href="#" className="link">iFood Card</Typography>
        </div>
        <div className="btnGroup">
          <Typography href="#" className="criar">Criar conta</Typography>
          <Button  className="btn btn_red" variant = "contained">Entrar</Button>
        </div>

      </Toolbar>
    </div>
  );
}


export default AppBar;