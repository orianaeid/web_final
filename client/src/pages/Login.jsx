import { useState } from 'react';
import { useUserState } from '../state/UserStateHook';
import LoginStruct from '../components/LoginStruct';


export default function Login() {
  const { loginUser } = useUserState();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = e => {
    // e is the event object that automatically gets recorded on event handler functions
    // here I tell JS that I don't want the default bahaviour of form submit
    e.preventDefault();

    // this function is responsible for state changes and re-renders
    loginUser({ email, password });
  };


  return (
    <main>
      <form onSubmit={handleSubmit}>
        <LoginStruct 
          title="LOGIN"
          fields={[
            {
              id: "email-field",
              type: "email",
              label: "Email",
              state: email,
              setState: setEmail,
            },
            {
              id: "password-field",
              type: "password",
              label: "Password",
              required: true,
              minLength: 8,
              state: password,
              setState: setPassword,
            },
          ]} 
          btnType='submit'
          btnLabel="LOGIN"
          fallback="login" 
        />
      </form>
    </main>
  );
}
