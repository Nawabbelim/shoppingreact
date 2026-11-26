export default function App() {
  return (
    <>
      <div id="box">
        <h1>
          Welcome to <i>beginning.</i>
        </h1>
      </div>

      <div id="imgs">
        <Img/>
        <img src="./favicon.svg" alt="logo" />
        <img src="./1.png" alt="logo2" />
        <img src="./hero.png" alt="logo3" />

        {/* if your img is in public forder "./" by default means public folder. if in asset or somehwere direct it to that folder ../ means go back */}
      </div>
    </>
  );
}

function Img() {
  return (
    <div className="product">
      <img src="./favicon.svg" alt="logo" />
      <h3>Logo A</h3>
    </div>
  );
}
