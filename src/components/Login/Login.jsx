import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Login = () => {
    const {loginUser,googleLogin,githubLogin} =  useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        const {email,password} = data;
        loginUser(email,password)
        .then(() => {
            navigate(location?.state ? location.state :'/');    
            toast.success('Logged in successfully');
        })
        .catch(() => {
            toast.error('Invalid Email or Password');
        })

    }
    const handleGlogin = () => {
        googleLogin()
        .then(() => {
            toast.success('Logged in successfully');
            navigate(location?.state ? location.state : '/');
        })
        .catch((error) => {
            toast.error(error.message);
        })
    }
        
    const handleGithubLogin = () => {
        githubLogin()
        .then(() => {
            toast.success('Logged in Successfully');
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            toast.error(error);
        })
    }
    return (
        <div>
            <Helmet>
                <title>Alex Estate | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" 
                        {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" 
                        {...register("password", { required: true })} />
                        {errors.password && <span className="text-red-500">This field is required</span>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>     
                    </form>
                         <div className="px-8 pb-8">
                            <button onClick={handleGlogin} className="btn w-full bg-transparent border-blue-500 text-blue-500">
                                <FaGoogle className="text-blue-500"></FaGoogle>
                                Login With Google
                            </button>
                            <button onClick={handleGithubLogin} className="btn w-full bg-transparent border-black mt-3">
                                <FaGithub></FaGithub>
                                Login With Github
                            </button>
                            
                            <p className="text-center mt-3">Do not have an account? <Link className="text-blue-600 " to="/register">Register</Link></p>

                         </div>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Login;