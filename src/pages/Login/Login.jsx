import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { IoLogoGoogle } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const {signIn, googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
  
      const handleLogin = e => {
          e.preventDefault();
          // console.log(e.currentTarget);
          const form = new FormData(e.currentTarget);
          const email = form.get('email');
          const password = form.get('password');
          signIn(email, password)
          .then(result => {
                       // navigate after login
           if(result.user.email){            
           toast('You have logged in Successfully !');
            navigate(location?.state ? location.state : '/');
           }
          })
          .catch(error => {
            alert(error.message);
          })
      }


      return (
          <>
          <div className="w-3/5  mx-auto mt-10">
              <div className="bg-slate-100 p-6">
                  <h4 className="text-center">Please Login</h4>
          <form onSubmit={handleLogin}>
            <input className="w-full"  type="email" name="email" placeholder="your email" id="" /><br /><br/>
            <input className="w-full" type="password" name="password" placeholder="your password" id="" /> <br /><br/>
            <input className="w-full bg-blue-200 font-semibold cursor-pointer" type="submit" value="Submit" />
          </form>
          <p className="mt-6">Do not have account? <Link to='/register' className="text-blue-700 font-semibold">Register</Link></p>
        </div>
        
        <div className="flex justify-center border-t mt-6 pt-6 mb-16"><button className="btn btn-primary flex items-center " onClick={googleSignIn}><IoLogoGoogle/> Google Sign In</button></div>
        <ToastContainer />
          </div>
          </>
      );
  };
  
  export default Login;