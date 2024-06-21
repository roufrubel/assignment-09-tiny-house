import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleUpdateProfile = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        if (user) {
            updateProfile(user, {
              displayName: name, 
              photoURL: photo, 
              email: email, 
              password: password,
            }).then(() => {
                toast('You have registered successfully!');
                // navigate after update profile
                    navigate(location?.state ? location.state : '/');
            }).catch((error) => {
                toast('Ops!', error);
            });
          }
            }

    return (
        <div>
          <div className="w-3/5 mx-auto mt-20 mb-32">
            <div className="bg-slate-100 p-6">
             <h4 className="text-center">Please Update Your Profile</h4>
        <form onSubmit={handleUpdateProfile}>
          <input className="w-full" type="text" name="name" defaultValue={user.displayName} placeholder="your name" id="" /><br /><br/>
          <input className="w-full" type="text" name="photo" defaultValue={user.photoURL} placeholder="your photo" id="" /><br /><br/>
          <input className="w-full"  type="email" name="email" defaultValue={user.email} placeholder="your email" id="" /><br /><br/>
          <input className="w-full" type="password" defaultValue={user.password} name="password" placeholder="your password" id="" /> <br /><br/>
          <input  className="w-full bg-blue-200 font-semibold cursor-pointer" type="submit" value="Submit" />
          <ToastContainer />
        </form>
      </div>
            
        </div>
        </div>
    );
};

export default Update;