import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import CreateMovie from './view/createMovie';
import ListMovie from './view/listMovie';
import UpdateMovie from './view/updateMovie';
import CreateGenre from './view/createGenre';
import ListGenre from './view/listGenre';
import UpdateGenre from './view/updateGenre';



function App() {
  return (
    <Router>
      <div className="App ">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link className='navbar-brand' to = '/movie/list'>MyMovies</Link>
          <button class="navbar-toggler" type="button" datatoggle="collapse" data-target="#navbarSupportedContent" ariacontrols="navbarSupportedContent" aria-expanded="false" arialabel="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/movie/list">Movies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movie/create">Add Movie</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/genre/list">Genres</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/genre/create">Add Genre</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div class="container py-4">
          <div class="row">
            <Routes>
              <Route path="/movie/list" element={<ListMovie/>} />
              <Route path="/movie/create" element={<CreateMovie/>} />
              <Route path="/movie/update/:id" element={<UpdateMovie/>} />
              <Route path="/movie/delete/:id"/>
              <Route path="/genre/list" element = {<ListGenre/>}/>
              <Route path="/genre/update/:id" element = {<UpdateGenre/>}/>
              <Route path="/genre/create" element = {<CreateGenre/>}/>
              <Route path="/genre/delete/:id"/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;