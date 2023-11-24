import { Link } from "react-router-dom";
import { useUserState } from "../state/UserStateHook";


export default function Navbar() {
  const { isLoggedIn, logoutUser } = useUserState();

  return (
    <nav className="navbar">
      <section>
        <Link to="/" className="nav-item">
          <img src="/img/logo.jpg" alt="" width={30} height={30} />
        </Link>
      </section>

      <section style={{ display: "flex" }}>
        {/* conditionally render buttons and links */}
        {!isLoggedIn ? (
          <>
            <input type="checkbox" id="dropdown-toggler" style={{ display: "none" }} />

            <label htmlFor="dropdown-toggler" className="nav-item">
              <i className="fa-solid fa-bars"></i>
              <i className="fa-solid fa-xmark"></i>
            </label>

            <div className="dropdown">
              <Link to="/acc/login" className="nav-item">LOGIN</Link>
              <Link to="/acc/register" className="nav-item">REGISTER</Link>
            </div>

            <Link to="/acc/login" className="nav-item acc">LOGIN</Link>
            <Link to="/acc/register" className="nav-item acc">REGISTER</Link>
          </>
        ) : (
          <>
            <input type="checkbox" id="dropdown-toggler" style={{ display: "none" }} />

            <label htmlFor="dropdown-toggler" className="nav-item">
              My Account&nbsp;
              <i className="fa-solid fa-chevron-down"></i>
            </label>

            <div className="dropdown">
              <Link to="/acc/profile" className="nav-item">
                <i className="fa-solid fa-user"></i>&nbsp;
                PROFILE
              </Link>
              <button onClick={logoutUser} className="nav-item">
                <i className="fa-solid fa-right-from-bracket"></i>&nbsp;
                LOGOUT
              </button>
            </div>
          </>
        )}
      </section>
    </nav>
  )
}
