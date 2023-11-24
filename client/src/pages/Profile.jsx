import { useUserState } from "../state/UserStateHook";
import { Link } from "react-router-dom";


export default function Profile() {
  const { isLoggedIn, user } = useUserState();

  return (
    <main>
      <h1 className="main-title">Profile</h1>

      {!isLoggedIn ? (
        <div>
          <Link to="/acc/login" className="is-link" style={{ color: "var(--clr-dark)"}}>Login</Link> to view your profile information.
        </div>
      ) : (
        <div>
          <table className="profile-table">
            <tbody>
              <tr>
                <th>Firstname</th>
                <td>{user?.firstname}</td>
              </tr>

              <tr>
                <th>Lastname</th>
                <td>{user?.lastname}</td>
              </tr>

              <tr>
                <th>Email</th>
                <td>{user?.email}</td>
              </tr>

              <tr>
                <th>Role</th>
                <td>{user?.role ?? "user"}</td>
              </tr>
              
              <tr>
                <th>Bio</th>
                <td>{user?.bio}</td>
              </tr>
              
              <tr>
                <th>Art types</th>
                <td>{`${user?.art_types.join(", ")}` ?? "none"}</td>
              </tr>
              
              <tr>
                <th>Art styles</th>
                <td>{`${user?.art_styles.join(", ")}` ?? "none"}</td>
              </tr>

              <tr>
                <th>Registered</th>
                <td>{new Date(user?.reg_date).toLocaleDateString("en-UK")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </main>
  )
}
