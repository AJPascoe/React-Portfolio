import {  useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img className="bankimg" src="assets/bankapp.jpg" alt="" />
          <a href="https://master--weatherapi-reactapp.netlify.app/" target="_blank" rel="noopenner">Weather API App</a>
        </div>
        <div className="item">
          <img className="bankimg" src="assets/bankapp.jpg" alt="" />
          <h3>Project 2</h3>
        </div>
        <div className="item">
          <img className="bankimg" src="assets/bankapp.jpg" alt="" />
          <h3>Project 3</h3>
        </div>
        <div className="item">
          <img className="bankimg" src="assets/bankapp.jpg" alt="" />
          <h3>Project 4</h3>
        </div>
        <div className="item">
          <img className="bankimg" src="assets/bankapp.jpg" alt="" />
          <h3>Project 5</h3>
        </div>
        <div className="item">
          <img className="bankimg" src="assets/bankapp.jpg" alt="" />
          <h3>Project 6</h3>
        </div>
      </div>
    </div>
  );
}
