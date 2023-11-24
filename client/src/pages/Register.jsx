import { useState } from "react";
import { useUserState } from "../state/UserStateHook";
import RegisterStruct from "../components/LoginStruct";
import RegisterStepTwo from "../components/RegisterStepTwo";
import RegisterStepThree from "../components/RegisterStepThree";
import { validRegister } from "../tools/validate-register";

 /**
   * todo: validate email before going step 2
   */

export default function Register() {
  const { registerUser } = useUserState();
  
  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);


  // step 1
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // step 2
  const [role, setRole] = useState("user"); // user | artist
  const [bio, setBio] = useState("");

  // step 3
  const [artTypes, setArtTypes] = useState([]); // multiple options
  const [artStyles, setArtStyles] = useState([]); // multiple options



  const handleCompleteSubmit = (e) => {
    // e is the event object that automatically gets recorded on event handler functions
    // here I tell JS that I don't want the default bahaviour of form submit
    e.preventDefault();
    
    registerUser({ firstname, lastname, email, password, role, bio, artTypes, artStyles });
  };


  const stepOneDone = () => {
    if(validRegister({ firstname, lastname, email, password })){
      setStepOne(false);
      setStepTwo(true);
    }else{
      alert(`Correct all the fields!\nEmail must be of form "example@domainname"\nPassword must have at least 8 characters`);
    }
  };
  const stepTwoDone = () => {
    if(firstname && lastname && email && password){
      setStepTwo(false);
      setStepThree(true);
    }else{
      alert("At least provide a role!");
    }
  };  


  const backTostepOne =  () => {
    setStepTwo(false);
    setStepOne(true);
  };
  const backTostepTwo =  () => {
    setStepThree(false);
    setStepTwo(true);
  };


  return (
    <main>
      <form onSubmit={handleCompleteSubmit}>
        {stepOne && (
          <RegisterStruct 
            title="REGISTER"
            fields={[
              {
                id: "firstname-field",
                type: "text",
                label: "Firstname",
                required: true,
                maxLength: 30,
                state: firstname,
                setState: setFirstname,
              },
              {
                id: "lastname-field",
                type: "text",
                label: "Lastname",
                required: true,
                maxLength: 30,
                state: lastname,
                setState: setLastname,
              },
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
            btnCallback={stepOneDone} 
            btnLabel="Go to step 2"
            fallback="register" 
          />
        )}

        {stepTwo && (
          /**
           * the syntax { ...{ role, bio } } abbreviates the syntax role={role}, bio={bio}
           */
          <RegisterStepTwo 
            { ...{ role, bio, setRole, setBio } }
            goBack={backTostepOne}
            goNext={stepTwoDone}
          />
        )}

        {stepThree && (
          <RegisterStepThree 
            setArtStyles={setArtStyles} 
            setArtTypes={setArtTypes}
            goBack={backTostepTwo}
          />
        )}
      </form>
    </main>
  )
}
