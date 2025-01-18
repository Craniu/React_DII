import Button from "react-bootstrap/Button";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="cardPizza">
      <img src={img}></img>
      <h2>{name}</h2>
      <hr />
      <div className="ingredientes">
        <h2>Ingredientes:</h2>
        <p>
          🍕{ingredients[0]}, {ingredients[1]}, {ingredients[2]},{" "}
          {ingredients[3]}
        </p>
      </div>
      <hr />
      <h1>Precio: ${price}</h1>
      <div className="botonHeader">
        <Button variant="light">Ver Mas👀</Button>
        <Button variant="dark">Añadir🛒</Button>
      </div>
    </div>
  );
};

export default CardPizza;
