/* eslint-disable react/prop-types */
import LoginStruct from './LoginStruct';

/**
 * note: to improve code readability, maintainability and scalability, i used the map()
 * function in an array, as the return result of it will be a JSX element,
 * the one specified between the paranthesis ().
 *
 * the map() function takes as argument a callback,
 * this callback() takes the arguments: currentValue of array, and the index we are in,
 *
 * and as react has its rules, we need to specify a key attribute for the parent
 * element enclosing the JSX, i gave it the index as a key (good practice)
 *
 * <div key={idx}>...</div>
 */

export default function RegisterStepThree({
  setArtTypes,
  setArtStyles,
  goBack,
}) {
  const handleCheckbox = (e, setState) => {
    // `other` is the current array
    if (e.target.checked) {
      setState(other => [...other, e.target.value]);
    } else {
      // the filter function will remove the unchecked art type
      setState(other => other.filter(type => type !== e.target.value));
    }
  };

  // these 2 arrays makes work more efficient
  const ART_TYPES = ['traditional', 'digital'];
  const ART_STYLES = [
    'abstract',
    'minimalism',
    'surrealism',
    'impressionism',
    'realism',
    'cubism',
    'pop_art',
  ];

  return (
    <LoginStruct
      title="Your interests"
      removeDefaultBtn
      fallback="register"
      withPolicyAgreement
    >
      <div>
        <label>Types of visual art </label>

        <section className="multiple-choice-field">
          {ART_TYPES.map((type, idx) => (
            <div key={idx}>
              <input
                id={`art-type-${type}`}
                type="checkbox"
                value={type}
                onChange={e => handleCheckbox(e, setArtTypes)}
              />

              <label htmlFor={`art-type-${type}`}>{type}</label>
            </div>
          ))}
        </section>
      </div>

      <div>
        <label>Styles of visual art </label>

        <section className="multiple-choice-field">
          {ART_STYLES.map((type, idx) => (
            <div key={idx}>
              <input
                id={`art-style-${type}`}
                type="checkbox"
                value={type}
                onChange={e => handleCheckbox(e, setArtStyles)}
              />

              <label htmlFor={`art-style-${type}`}>{type}</label>
            </div>
          ))}
        </section>
      </div>

      {/* policy agreement */}
      <section style={{ marginTop: '12px' }}>
        <input
          id="policy-agree"
          type="checkbox"
          required
        />
        <label htmlFor="policy-agree" style={{ display: 'inline' }}>
          <b>Agree to terms and conditions and privacy policy</b>
        </label>
      </section>

      {/* buttons */}
      <section className="submit-sect">
        <button type="button" onClick={goBack}>
          Go back
        </button>
        <button type="submit">REGISTER</button>
      </section>
    </LoginStruct>
  );
}
