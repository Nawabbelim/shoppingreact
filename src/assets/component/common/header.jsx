import { Link } from "react-router-dom";
export default function header() {
  return (
    <div>
      <ul id="uList">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/Career">Career</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
    </div>
  );
}
