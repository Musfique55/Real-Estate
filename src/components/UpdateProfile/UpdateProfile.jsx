
import { Helmet } from 'react-helmet';
import { AuthContext } from './../AuthProvider/AuthProvider';
import { useContext } from 'react';

const UpdateProfile = () => {
    const {user,updateUserProfile} = useContext(AuthContext);
    const handleSubmit = (e) => {
        const name = e.target.name.value;
        const url = e.target.photourl.value;
        updateUserProfile(name,url);
    }
    // updateUserProfile()
    return (
        <div>
            <Helmet>
                <title>Alex Estate | Update-Profile</title>
            </Helmet>
            <div className="hero my-12 ">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Update Profile</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered" defaultValue={user.displayName} required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name='email' className="input input-bordered" defaultValue={user.email} />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name='photourl' className="input input-bordered" defaultValue={user.photoURL} required />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Update Profile</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;