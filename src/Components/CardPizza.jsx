import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";

function CardPizza({name, price, ingredients, img}) {
    return (
      <div className="cards">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>
              <h2>{name}</h2>
            </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <h4>Ingredientes:</h4>
              <p className="prueba">&#127829;{ingredients}</p>
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <h3>Precio: ${price}</h3>
            <div className="containerButtons">
              <Button variant="secondary">Ver más &#128064;</Button>
              <Button variant="dark">Añadir &#128722;</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
}

export default CardPizza;

