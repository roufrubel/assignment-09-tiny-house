import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { IoLogoGoogle } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";


const Register = () => {
    const {createUser, googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password);

        // create user
        createUser(email, password)
        .then(result => {
          toast('You have registered successfully!');
          console.log(result.user);
          const user = result.user;          
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
        .catch(error => {
            alert(error.message)
        })
    }

    return (
        <>
        <div className="w-3/5 mx-auto mt-10">
            <div className="bg-slate-100 p-6">
             <h4 className="text-center">Please Register</h4>
        <form onSubmit={handleRegister}>
          <input className="w-full" type="text" name="name" placeholder="your name" id="" /><br /><br/>
          <input className="w-full" type="text" name="photo" placeholder="your photo" id="" /><br /><br/>
          <input className="w-full"  type="email" name="email" placeholder="your email" id="" /><br /><br/>
          <input className="w-full" type="password" name="password" placeholder="your password" id="" /> <br /><br/>
          <input  className="w-full bg-blue-200 font-semibold cursor-pointer" type="submit" value="Submit" />
          <ToastContainer />
        </form>
        <p>Already have account? <Link to='/login' className="text-blue-700 font-semibold">Login</Link></p>
      </div>
      <div className="flex justify-center border-t mt-6 pt-6"><button className="btn btn-primary flex items-center " onClick={googleSignIn}><IoLogoGoogle/> Google Sign In</button>
     
      
      </div>
      
        </div>
        </>
    );
};

export default Register;