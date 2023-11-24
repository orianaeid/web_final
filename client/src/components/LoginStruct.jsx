/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';


export default function LoginStruct({
  children,
  title,
  fields = [],
  btnType = 'button',
  btnCallback = undefined,
  btnLabel,
  fallback = 'login',
  removeDefaultBtn = false,
}) {
  return (
    <div className="login-form step-1">
      <h2>{title}</h2>

      {fields.map((field, idx) => (
        <section key={idx}>
          <label htmlFor={field.id}>{field.label}</label>

          {/* simple state control */}
          <input
            id={field.id}
            type={field.type}
            required={field?.required ?? false}
            value={field.state}
            maxLength={field?.maxLength}
            minLength={field?.minLength}
            onChange={e => field.setState(e.target.value)}
          />
        </section>
      ))}

      {/* the children component property is preserved if you want to add additional custom JSX inside */}
      {children}

      {!removeDefaultBtn && (
        <section className="submit-sect">
          <button type={btnType} onClick={btnCallback}>
            {btnLabel}
          </button>
        </section>
      )}

      <p className="fallback-msg">
        {fallback === 'register' ? (
          <>
            Already have an account?&nbsp;
            <Link to="/acc/login" className="is-link">
              login
            </Link>
          </>
        ) : (
          <>
            Don&apos;t have an account?&nbsp;
            <Link to="/acc/register" className="is-link">
              register
            </Link>
          </>
        )}
      </p>      
    </div>
  );
}
