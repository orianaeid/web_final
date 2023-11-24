import { useUserState } from "../state/UserStateHook";
import { Link } from "react-router-dom";


export default function HomeEntry() {
  const { isLoggedIn } = useUserState();

  return (
    <div className="home-entry">
      <section className="img-flip">
        <img src="/img/art3.jpg" alt="" width="100%" />
      </section>

      <section className="welcomer">
        <div style={{ width: "fit-content" }}>
          <article className="">
            <span id="art-counter" className="main-title">1500</span>
            &nbsp;pieces of art as of today
          </article>

          <p style={{ 
            color: "var(--clr-prime)",
            fontWeight: "500",
            fontSize: "clamp(16px, 4vw, 28px)"
          }} >Let&apos;s draw up something for you</p>
          <input type="text" placeholder="get creative..." />
          
          <div className="center-it" style={{ maxWidth: "350px" }}>
            {isLoggedIn ? (
              <button onClick={() => console.log("Paintings fused!")} className="btn-fuse">FUSE</button>
            ) : (
              <Link to="/acc/login" className="btn-fuse">FUSE</Link>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
