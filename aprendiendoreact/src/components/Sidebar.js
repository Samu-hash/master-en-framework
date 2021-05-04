import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <aside id="sidebar">
        <div id="nav-blog" className="sidebar-item">
          <h3>Puerdes hacer esto</h3>
          <a href="#" className="btn btn-success">
            Crear articulo
          </a>
        </div>

        <div id="search" className="sidebar-item">
          <h3>Buscador</h3>
          <p>Encuentra el articulo que buscar</p>
          <form>
            <input type="text" name="search" />
            <input type="submit" name="submit" className="btn" value="Buscar" />
          </form>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
