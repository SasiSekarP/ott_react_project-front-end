import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./style/navlink.css";
import "./style/app.css";
import "./style/loading.css";
import "./style/home.css";
import "./style/trending.css";

import Login from "./component/login";
import Home from "./component/home";
import Trending from "./component/trending";
import Notfound from "./notfound";
import Movie from "./component/movie";
import Game from "./component/game";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/trending" Component={Trending} />
        <Route path="/movie" Component={Movie} />
        <Route path="/game" Component={Game} />
        <Route path="*" Component={Notfound} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
