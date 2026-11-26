import Button from "./assets/component/pages/button";
import Data from "./assets/component/pages/Data";

export default function Shop() {
  return (
    <>
      <div className="shophead">
        <h1>
          Welcome to the <i>Shop</i>
        </h1>
        <p>
          shop the best products Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Rerum officiis doloremque fuga excepturi iusto quis
          nam eligendi aspernatur, perferendis vero aut dolor sed sapiente dicta
          molestiae cum voluptas animi autem.
        </p>
      </div>
      <div className="shopcontainer">
        {Data.map((obj) => {
          return <Card d={obj} key={obj.id} />;
        })}
      </div>
    </>
  );
}

function Card({ d }) {
  return (
    <>
      <div className="card">
        <h3>{d.title}</h3>
        <img src={d.images[0]} alt={d.title} />
        <h2><small>$</small>{d.price}</h2>
        <Button value={"Add to card"} color="var(--icon)"/> 
        <p>{d.description}</p>
      </div>
    </>
  );
}
