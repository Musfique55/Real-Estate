import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="flex justify-between bg-base-100">
                <div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex gap-6 items-center">
                    <NavLink className={`${({isActive}) => isActive ? '' : '' }`} to='/'>Home</NavLink>
                    <NavLink to='/login'>Update Profile</NavLink>
                    <NavLink to='/register'>Register</NavLink>
                </div>
                 <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li>Anonymous</li>
                        <button>LogOut</button>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;