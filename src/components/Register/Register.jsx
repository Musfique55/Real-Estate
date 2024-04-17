// import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { Helmet } from "react-helmet";
const Register = () => {
    const {createUser,updateUserProfile,logOut} =  useContext(AuthContext);
    const [show,setShow] = useState(false);
    const navigate = useNavigate();

      const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const imgUrl = e.target.imgurl.value;
        const password = e.target.password.value;

        
        if(password.length < 6) {
            return toast.error('Password must be 6 characters or more');
        }
        if(!/^(?=.*[a-z]).+$/.test(password)){
            return toast.error('Must have an lowercase letter in the password');
        }
        
        if(!/^(?=.*[A-Z]).+$/.test(password)){
            return toast.error('Must have an Uppercase letter in the password');
        }

        
        createUser(email,password)
        .then(() => {
            toast.success('Successfully Registered');
            updateUserProfile(name,imgUrl)
            .then(() => {
                logOut();
                navigate('/login');              
                })   
            })
    }
    return (
        <div>
            <Helmet>
              <title>Alex Estate | Register</title>
            </Helmet>
            <div className="hero my-12">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered"  required/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image Url</span>
                        </label>
                        <input type="text" name="imgurl" placeholder="Image Url" className="input input-bordered"  required/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                            <input type={show ? 'text' : "password"} name="password" placeholder="password" className="input w-full input-bordered" required/>
                            <span onClick={() => setShow(!show)} className="absolute top-4 right-3">
                                {
                                    show ? 
                                    <IoMdEyeOff className="text-lg"></IoMdEyeOff> : 
                                    <IoEye className="text-lg"></IoEye>
                                }
                            </span>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                        </div>
                    <p>Already have an account? <Link className="text-blue-600" to="/login">Login</Link></p>
                    </form>
                   <Toaster></Toaster>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;