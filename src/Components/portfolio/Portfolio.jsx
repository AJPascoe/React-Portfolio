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
          <img className="bankimg" src="assets/weatherapp.jpg" alt="" />
          <a href="https://master--weatherapi-reactapp.netlify.app/" target="_blank" rel="noopenner">Weather API App</a>
        </div>
        <div className="item">
          <img className="bankimg" src="assets/todolist.jpg" alt="" />
          <a href="https://main--todo-list-2-app.netlify.app/" target="_blank" rel="noopenner">To-Do List App</a>
        </div>
        <div className="item">
          <img className="bankimg" src="assets/drumkit.jpg" alt="" />
          <a href="https://ajpascoe.github.io/DrumKitChallenge/" target="_blank" rel="noopenner">Drum Kit App</a>
        </div>
        <div className="item">
          <img className="bankimg" src="assets/eventkey.jpg" alt="" />
          <a href="https://ajpascoe.github.io/Key-Code-Challenge/" target="_blank" rel="noopenner">Event Key App</a>
        </div>
        {/* <div className="item">
          <img className="bankimg" src="assets/bankapp.jpg" alt="" />
          <h3>Project 5</h3>
        </div>
        <div className="item">
          <img className="bankimg" src="assets/bankapp.jpg" alt="" />
          <h3>Project 6</h3>
        </div> */}
      </div>
    </div>
  );
}
