import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";
const Register = () => {
    const {createUser,updateUserProfile,logOut,user} =  useContext(AuthContext);
    const [show,setShow] = useState(false);
    const [error,setError] = useState(null);
    const navigate = useNavigate();
    console.log(user);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {

        const {name,email,password,imgUrl} = data;
        createUser(email,password)
        .then(() => {
            toast('Successfully Registered');
            updateUserProfile(name,imgUrl)
            .then(() => {
                logOut();
                navigate('/login');
                
            })

          })
        .catch(error => {
         setError(error.message);
        })
    }
        
    return (
        <div>
            <Helmet>
              <title>Alex Estate | Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="text" placeholder="Name" className="input input-bordered"  
                        {...register("name", { required: true })} 
                        />
                        {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image Url</span>
                        </label>
                        <input type="text" name="text" placeholder="Image Url" className="input input-bordered"  
                        {...register("imgUrl", { required: true })} 
                        />
                        {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered"
                        {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                        <input type={show ? 'text' : "password"} name="password" placeholder="password" className="input w-full input-bordered" {...register("password",  
                        {required: true,pattern:/^(?=.*[a-z])(?=.*[A-Z]){6}.{6,15}$/})}/>
                        <span onClick={() => setShow(!show)} className="absolute top-4 right-3">
                            {
                                show ? 
                                <IoMdEyeOff className="text-lg"></IoMdEyeOff> : 
                                <IoEye className="text-lg"></IoEye>
                            }
                            </span>
                        {errors.password && <p className="text-red-500">Must have an Uppercase & Lowercase letter & must be altleast 6 characters</p>}
                        {error && <p className="text-red-500">{error}</p>}
                        </div>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                        </div>
                    <p>Already have an account? <Link className="text-blue-600" to="/login">Login</Link></p>
                    </form>
                    <ToastContainer></ToastContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;