import CardPizza from "./CardPizza";
import Header from "./Header";

const Home = () => {
  return (
    <main>
      <Header />
      <div className="cardContainer">
        <CardPizza
          name="Pizza napolitana"
          price={5950}
          ingredients={["tomates, ", "jamón, ", "orégano."]}
          img="https://plus.unsplash.com/premium_photo-1733266807710-f8f8de34416f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <CardPizza
          name="Pizza española"
          price={6950}
          ingredients={["gorgonzola, ", "parmesano, ", "provolone."]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
        />
        <CardPizza
          name="Pizza de pepperoni"
          price={6950}
                  ingredients={["mozzarella, ", "pepperoni, ", "orégano."]}
          img="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </main>
  );
};

export default Home;
