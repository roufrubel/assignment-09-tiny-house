import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { IoLogoGoogle } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { Helmet } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const Login = () => {
  const [loginError, setLoginError] = useState('')  
  const [view, setView] = useState(false)  
    const {signIn, googleSignIn, gitHubSignIn, loading} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    if(loading){
      return <span className="loading loading-spinner loading-lg text-center"></span>
    }

    const handleGoogleSignIn = ( ) => {
      googleSignIn (auth, googleProvider)
      .then(() => {
        // navigate after register
        navigate(location?.state ? location.state : '/');
     }).catch((error) => {
       toast(error.message);
     }); 
    }

    const handleGitHubSignIn = ( ) => {
      gitHubSignIn (auth, gitHubProvider)
      .then(() => {
        // navigate after register
        navigate(location?.state ? location.state : '/');
     }).catch((error) => {
       toast('Ops!', error);
     }); 
    }
  
      const handleLogin = e => {
          e.preventDefault();
          // console.log(e.currentTarget);
          const form = new FormData(e.currentTarget);
          const email = form.get('email');
          const password = form.get('password');

          if(password.length < 6) {
            setLoginError('Password must be at least 6 characters long.')
            return;
          }
          else if(!/[A-Z]/.test(password)) {
            setLoginError('Password must be at least one Uppercase character.')
            return;
          }
          else if(!/[a-z]/.test(password)) {
            setLoginError('Password must be at least one Lowercase character.')
            return;
          }

          signIn(email, password)
          .then(result => {
            if(result.user){
              toast('You have logged in Successfully !');   
            }
            // navigate after login
           if(result.user.email){         
            navigate(location?.state ? location.state : '/');
           }
          })
          .catch(error => {
            toast(error.message);
          })
      }


      return (
          <>
          <Helmet>
                <title>Login | Tiny House</title>
            </Helmet>
            {
              loginError && toast(loginError)
            }
          <div className="w-3/5  mx-auto mt-10">
              <div className="bg-slate-100 p-6">
                  <h4 className="text-center">Please Login</h4>
          <form onSubmit={handleLogin}>
            <input className="w-full"  type="email" name="email" placeholder="your email" id="" /><br /><br/>
            <input className="w-full" 
            type={view? "text" : "password" }
             name="password" placeholder="your password" id="" />
             <span className="flex justify-end -mt-5 mr-2" onClick={() => setView(!view)}>{view ? <FaEye/> : <FaEyeSlash/>}</span>
              <br /><br/>
            <input className="w-full bg-blue-200 font-semibold cursor-pointer" type="submit" value="Submit" />
          </form>
          <p className="mt-6">Do not have account? <Link to='/register' className="text-blue-700 font-semibold">Register</Link></p>
        </div>
        
        <div className="flex justify-center border-t mt-6 pt-6 mb-1"><button className="btn btn-primary flex items-center " onClick={handleGoogleSignIn}><IoLogoGoogle/> Google Sign In</button></div>
        <div className="flex justify-center mt-1 pt-6 mb-6"><button className="btn btn-primary flex items-center " onClick={handleGitHubSignIn}><FaGithub/> GitHub Sign In</button>  
      </div>
        <ToastContainer />
          </div>
          </>
      );
  };
  
  export default Login;