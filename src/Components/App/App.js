import CardList from "../CardList/CardList";
import "./App.css";
import db from "../../data_bases/cat_foods.json";

function App() {
  return (
    <div className="app">
      <div className="app__title">Ты сегодня покормил кота?</div>
      <CardList foodlist={db.food} />
    </div>
  );
}

export default App;
