import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { IoLogoGoogle } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { Helmet } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";



const Register = () => {
  
  const [registerError, setRegisterError] = useState('')  
  const [view, setView] = useState(false)  
  const {createUser, googleSignIn, loading} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();

    if(loading){
      return <span className="loading loading-spinner loading-lg text-center"></span>
    }

    const handleGoogleSignIn = ( ) => {
      googleSignIn (auth, googleProvider)
      .then(() => {
        // navigate after register
        navigate(location?.state ? location.state : '/');
     }).catch((error) => {
       toast('Ops!', error);
     }); 
    }

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password);
        if(password.length < 6) {
          setRegisterError('Password must be at least 6 characters long.')
          return;
        }
        else if(!/[A-Z]/.test(password)) {
          setRegisterError('Password must be at least one Uppercase character.')
          return;
        }
        else if(!/[a-z]/.test(password)) {
          setRegisterError('Password must be at least one Lowercase character.')
          return;
        }

        // create user
        createUser(email, password)
        .then(result => {
          const user = result.user; 
          if(user){
            toast('You have registered successfully!');
          }         
          if(user){         
          updateProfile(user, {
            displayName: name,
            photoURL: photo,
          }).then(() => {
             // navigate after register
             navigate(location?.state ? location.state : '/');
          }).catch((error) => {
            toast('Ops!', error);
          });         
         }
        })
    }

    return (
        <>
        <Helmet>
                <title>Register | Tiny House</title>
            </Helmet>
            {
              registerError && toast(registerError)
            }
        <div className="w-3/5 mx-auto mt-10">
            <div className="bg-slate-100 p-6">
             <h4 className="text-center">Please Register</h4>
        <form onSubmit={handleRegister}>
          <input className="w-full" type="text" name="name" placeholder="your name" id="" /><br /><br/>
          <input className="w-full" type="text" name="photo" placeholder="your photo" id="" /><br /><br/>
          <input className="w-full"  type="email" name="email" placeholder="your email" id="" /><br /><br/>
          <input className="w-full" 
          type={view? "text" : "password" }
          name="password" 
          placeholder="your password" id="" /> 
          <span className="flex justify-end -mt-5 mr-2" onClick={() => setView(!view)}>{view ? <FaEye/> : <FaEyeSlash/>}</span>
          <br /><br/>
          <input  className="w-full bg-blue-200 font-semibold cursor-pointer" type="submit" value="Submit" />
          <ToastContainer />
        </form>
        <p className="mt-6">Already have account? <Link to='/login' className="text-blue-700 font-semibold">Login</Link></p>
      </div>
      <div className="flex justify-center border-t mt-6 pt-6 mb-12"><button className="btn btn-primary flex items-center " onClick={handleGoogleSignIn}><IoLogoGoogle/> Google Sign In</button>
     
      
      </div>
      
        </div>
        </>
    );
};

export default Register;