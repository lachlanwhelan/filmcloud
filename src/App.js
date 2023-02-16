import { Route, Routes } from "react-router-dom";

import 'normalize.css';
import './styles/resets.scss';
import './styles/global.scss';

import Layout from "./components/layout/layout.component";
import Home from "./pages/home/home.component";
import Movies from "./pages/movies/movies.component";
import NotFound from "./pages/notfound/notfound.component";
import People from "./pages/people/people.componet";
import Shows from "./pages/shows/shows.component";



const App = () => {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="movies/*" element={<Movies/>}/>
            <Route path="shows/*" element={<Shows/>}/>
            <Route path="people" element={<People/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
