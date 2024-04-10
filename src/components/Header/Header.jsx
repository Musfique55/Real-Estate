import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    const handleEnter = () => {
       const profile = document.querySelector('.profile');
       profile.classList.remove('hidden');
    }
    const handleOut = () => {
      const profile = document.querySelector('.profile');
      profile.classList.add('hidden');
    }
    return (
        <div className='mx-12'>
            <div className="flex justify-between items-center ">
                <div>
                    <a className="btn btn-ghost text-xl">Axel Estate</a>
                </div>
                <div className="flex gap-6 items-center">
                    <NavLink className={({isActive}) => isActive ? 'text-green-500 font-semibold text-base' : 'font-medium text-base'} to='/'>Home</NavLink>
                    {
                        user && 
                    <NavLink to='/updateprofile' className={({isActive}) => isActive ? 'text-green-500 font-semibold text-base' : 'font-medium text-base'} >Update Profile</NavLink>
                    }
                    {
                        !user &&
                    <NavLink to='/register' className={({isActive}) => isActive ? 'text-green-500 font-semibold text-base' : 'font-medium text-base'} >Register</NavLink>
                    }
                </div>
                
                {  
                    user ? <div className="flex-none gap-2" onMouseOver={() => { handleEnter()}} onMouseOut={() => {handleOut()}}>
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button"  className="btn btn-ghost btn-circle avatar" >
                        <div className="w-10 rounded-full">
                            <img src={user.photoURL} alt="" />
                        </div>
                    </div>
                    <ul  className="mt-3 profile p-2 shadow menu menu-sm  bg-base-100 rounded-box w-52 hidden absolute right-0 top-9 z-50">
                        <li>
                        <a className="justify-between">
                         {user.displayName}
                        </a>
                        </li>
                        <li  onClick={logOut}>
                        <a className="justify-between">
                            LogOut
                        </a>
                        </li>
                    </ul>
                    </div>
                </div> : 
                <Link className='bg-green-500 px-5 py-2 rounded-lg text-white font-semibold' to="/login">Login</Link>
                }
                 
            </div>
        </div>
    );
};

export default Header;