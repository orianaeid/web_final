/* eslint-disable react/prop-types */
import LoginStruct from "./LoginStruct";


export default function RegisterStepTwo({ role, setRole, bio, setBio, goBack, goNext }) {
  return (
    // I made the LoginStruct flexible so I can manipulate it freely
    <LoginStruct 
      title="Your art journey"
      removeDefaultBtn
      fallback="register"
    >
      {/* custom (non-supported) fields */}
      <div>
        <label>Role </label>

        <section className="multiple-choice-field">
          <div>
            <input
              id="role-user"
              type="radio"
              value="user"
              checked={role === "user"}
              onChange={e => setRole(e.target.value)}
            />
            <label htmlFor="role-user">user</label>
          </div>

          <div>
            <input
              id="role-artist"
              type="radio"
              checked={role === "artist"}
              value="artist"
              onChange={e => setRole(e.target.value)}
            />
            <label htmlFor="role-artist">artist</label>
          </div>
        </section>
      </div>
      
      <section>
        <label htmlFor="bio">Bio</label>
        <textarea
          id="bio"
          value={bio}
          onChange={e => setBio(e.target.value)}
          style={{ resize: "vertical" }}
        ></textarea>
      </section>


      {/* buttons */}
      <section className="submit-sect">
        <button type="button" onClick={goBack}>Go back</button>
        <button type="button" onClick={goNext}>Go to step 3</button>
      </section>
    </LoginStruct>
  )
}
