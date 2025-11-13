import { shoes } from "../Data";
import Navbar from "./Navbar";
import ShoeCard from "./ShoeCard";
import "../styles/Homepage.css"; // no need to assign to a variable
import { useNavigate } from "react-router";
import ShopPage from "./ShopPage";

const App = () => {
  const shoe = shoes[1];
  const navigate = useNavigate();

  return (
    <div class="home-page">
      <div style={{ backgroundColor: "", minHeight: "100vh" }}>
        <div className="container">
          <div className="left">
            <h1>
              The most <span className="lefttext">beautiful</span> and{" "}
              <span className="lefttext">high-quality</span> sneakers in the
              whole world
            </h1>
            <p className="homepagep">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tempora expedita consectetur tenetur veritatis eligendi. Veritatis
              laboriosam quos cum optio?
            </p>
            <button
              className="Explore"
              onClick={() => navigate("/ShopPage")}
              style={{ cursor: "pointer" }}
            >
              Explore Now
            </button>
          </div>
          <div className="right">
            <ShoeCard
              className="shoe-card"
              name={shoe.name}
              price={shoe.price}
              tag={shoe.tag}
              image={shoe.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
