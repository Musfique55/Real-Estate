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
        <div className='mx-5 py-7 md:mx-12 lg:mx-20'>
            <div className="navbar p-0">
                <div className="flex justify-between flex-1  lg:flex-none lg:justify-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost pl-0 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 z-50">
                        <NavLink to="/" className={({isActive}) => isActive ? 'text-[#CA9C6A] font-semibold ' : 'text-base font-medium'}>Home</NavLink>
                        {
                            user && 
                            <NavLink to='/saved' className={({isActive}) => isActive ? 'text-[#CA9C6A] font-semibold text-base' : 'font-medium text-base'} >Saved</NavLink>
                        }
                        {
                            user && 
                            <NavLink to='/updateprofile' className={({isActive}) => isActive ? 'text-[#CA9C6A] font-semibold text-base' : 'font-medium text-base'} >Update Profile</NavLink>
                        }
                        {
                            !user &&
                            <NavLink to='/register' className={({isActive}) => isActive ? 'text-[#CA9C6A] font-semibold text-base' : 'font-medium text-base'} >Register</NavLink>
                        }
                        <NavLink to="/contact" className={({isActive}) => isActive ? 'text-[#CA9C6A] font-semibold ' : 'text-base font-medium'}>Contact</NavLink>
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-[rgb(19,19,19)] font-bold text-3xl pl-0">Axel Estate</a>
                </div>
                <div className=" hidden lg:flex lg:flex-1 lg:justify-center lg:items-center">
                    <ul className="flex items-center justify-center flex-1 gap-4 text-base menu menu-horizontal px-1">
                    <NavLink to="/" className={({isActive}) => isActive ? 'text-[#CA9C6A] font-semibold' : 'text-base font-medium'}>Home</NavLink>
                        {
                            user && 
                            <NavLink to='/saved' className={({isActive}) => isActive ? 'text-[#CA9C6A] font-semibold text-base' : 'font-medium text-base'} >Saved</NavLink>
                        }
                        {
                            user && 
                            <NavLink to='/updateprofile' className={({isActive}) => isActive ? 'text-[#CA9C6A] font-semibold text-base' : 'font-medium text-base'} >Update Profile</NavLink>
                        }
                        {
                            !user &&
                            <NavLink to='/register' className={({isActive}) => isActive ? 'text-[#CA9C6A] font-semibold text-base' : 'font-medium text-base'} >Register</NavLink>
                        }
                        <NavLink to="/contact" className={({isActive}) => isActive ? 'text-[#CA9C6A] font-semibold ' : 'text-base font-medium'}>Contact</NavLink>
                    </ul>
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
                            Logout
                        </a>
                        </li>
                    </ul>
                    </div>
                </div> : 
                <Link className='bg-[#CA9C6A] px-5 py-2 rounded-lg text-white font-semibold' to="/login">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;