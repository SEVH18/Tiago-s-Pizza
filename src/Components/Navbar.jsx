import { Button } from "react-bootstrap";


const Navbar = () => {
    const total = 25000;
    const token = false;
    return (
      <nav className="navBar">
        <div className="containerNav">
          <h5 className="tituloNav">Tiago's Pizzas</h5>
          <Button variant="outline-light">&#127829;Home</Button>
          <Button variant="outline-light">
            {token == false ? <>Login &#128272;</> : <>Profile &#128275;</>}
          </Button>
          <Button variant="outline-light">
            {token == false ? <>Register &#128272;</> : <>Logout &#128274;</>}
          </Button>
        </div>
        <Button variant="outline-primary">
          &#128722;Total: {total.toLocaleString()}
        </Button>
      </nav>
    );
}

export default Navbar