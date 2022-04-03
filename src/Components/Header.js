// import { Nav, Navbar, Container, NavDropdown,NavLink  } from "react-bootstrap";
import {Link} from "react-router-dom"
function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Enterprise Practice
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link " aria-current="page">
                  Home
                </Link>
              </li>
              

              <li className="nav-item">
                <Link to={"/about"} className="nav-link " aria-current="page">
                  About
                </Link>
              </li>

              
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Practices
                </a>
                <ul name="navbarDropdown" className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to={"/contextconcept"} className="dropdown-item" >
                    Context Concept
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to={"/reducerconcept1"} className="dropdown-item" >
                    Reducer Concept 1
                    </Link>
                  </li>
                  <li>
                    <Link to={"/reducerconcept2"} className="dropdown-item" >
                      Reducer Concept 2
                    </Link>
                  </li>
                  <li>
                    <Link to={"/reducerconcept3"} className="dropdown-item" >
                      Reducer Concept 2
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to={"/reducercontext"} className="dropdown-item" >
                      useReducer and useContext
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to={"/useref"} className="dropdown-item" >
                      useRef
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
     </>
  );
}
export default Header;
