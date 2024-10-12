import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './index.css'

const Auth=()=>{
    const navigate=useNavigate()
    const [signupUsername, setSignupUsername] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [signupError,setsignupError]=useState('')
    const [signinError,setSigninError]=useState('')

    const handleSignupSubmit = async(e) => {
        e.preventDefault()
        const url="https://event-management-backend-no2a.onrender.com/event/signup";
        const options={
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(
                {username:signupUsername,
                email:signupEmail,
                password:signupPassword}
            )
        
        }

        try{
            const response=await fetch(url,options)
            const data=await response.json()
            if (response.ok){
                console.log("signup successfull")
            }else{
                setsignupError(data.error || 'Sign up Failed Try again Later')

            }
        }catch(error){
            setSignupEmail('Error Signing Up Try Again')
        }
    };

    const handleLoginSubmit = async(e) => {
        e.preventDefault()
        const url="https://event-management-backend-no2a.onrender.com/event/login"
        const options={
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(
                {email:loginEmail,
                password:loginPassword}
            )
        }
        try{
            const response=await fetch(url,options);
            const data=await response.json()
            if(response.ok){
                localStorage.setItem("eventtoken",data.token)
                navigate('/')
            }else{
                setSigninError(data.error || 'Error signing Up Try Again')
            }

        }catch(error){
            setSigninError('Error Signing in Try Again')
        }
        

  };
    return(
    <div className="auth-body">
    <div className='main'>
      <input type='checkbox' id='chk' aria-hidden='true' />

      <div className='signup'>
        <form onSubmit={handleSignupSubmit}>
          <label htmlFor='chk' aria-hidden='true'>
            Sign up
          </label>
          <input
            className="auth-input"
            type='text'
            name='txt'
            placeholder='User name'
            required
            value={signupUsername}
            onChange={(event) => setSignupUsername(event.target.value)}
          />
          <input
            className="auth-input"
            type='email'
            name='email'
            placeholder='Email'
            required
            value={signupEmail}
            onChange={(event) => setSignupEmail(event.target.value)}
          />
          <input
            className="auth-input"
            type='password'
            name='pswd'
            placeholder='Password'
            required
            value={signupPassword}
            onChange={(event) => setSignupPassword(event.target.value)}
          />
          <p className="error">{signupError}</p>
          <button type='submit' className="auth-button">Sign up</button>
        </form>
      </div>

      <div className='login'>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor='chk' aria-hidden='true'>
            Login
          </label>
          <input
            className="auth-input"
            type='email'
            name='email'
            placeholder='Email'
            required
            value={loginEmail}
            onChange={(event) => setLoginEmail(event.target.value)}
          />
          <input
            className="auth-input"
            type='password'
            name='pswd'
            placeholder='Password'
            required
            value={loginPassword}
            onChange={(event) => setLoginPassword(event.target.value)}
          />
          <p className="error">{signinError}</p>
          <button type='submit' className="auth-button">Login</button>
        </form>
      </div>
    </div>
    </div>
    )
}
export default Auth