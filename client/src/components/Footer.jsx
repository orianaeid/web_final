import { Link } from 'react-router-dom';

export default function Footer() {

  return (
    <footer className="footer">
      <section className="social-media">
        <h2>Social media</h2>

        <a
          href="http://instagram.com/_u/username/"
          target="_blank"
          rel="noreferrer"
          className="is-link"
        >
          <i className="fa-brands fa-instagram">&nbsp;</i>
          Intagram
        </a>

        <a
          href="https://www.facebook.com/PageName/"
          target="_blank"
          rel="noreferrer"
          className="is-link"
        >
          <i className="fa-brands fa-square-facebook">&nbsp;</i>
          Facebook
        </a>

        <a
          href="https://twitter.com/@user?s=20"
          target="_blank"
          rel="noreferrer"
          className="is-link"
        >
          <i className="fa-brands fa-x-twitter">&nbsp;</i>
          X
        </a>
        
        <a
          href="mailto:fusart@gmail.com"
          className="is-link"
        >
          <i className="fa-solid fa-envelope">&nbsp;</i>
          Email
        </a>
      </section>

      <section className="useful-links">
        <h2>Useful links</h2>

        <Link to="/acc/login" className="is-link">
          Login
        </Link>

        <Link to="/acc/register" className="is-link">
          Register
        </Link>

        <a href="#about" className="is-link">
          About Us
        </a>
      </section>
    </footer>
  );
}
