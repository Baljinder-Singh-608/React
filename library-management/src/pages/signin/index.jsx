import { useState } from "react"
import { Link } from "react-router-dom"
import ButtonComponent from "../../components/Button"
import Input from "../../components/input"

const SignIn = () => {
    const [signIn, setSignIn] = useState([]);
    const [error, setError] = useState(false);

    // Sign in input function
    const handleChange = (e) => {
        let name = e.target.name;
        setSignIn({ ...signIn, [`${name}`]: e.target.value })
        console.log(name, signIn)
    }

    //
    const handleSignIn = (e) => {
        e.preventDefault();
        let getMemberList = JSON.parse(localStorage.getItem('memberArr'));
        const matchSignIn = getMemberList.filter((list) => list.username === signIn.username && list.pass === signIn.pass)
        console.log(matchSignIn);
        if (matchSignIn.length) {
            window.location = '/signup';
            setError(false);
        }
        else {
            setError(true);
        }
    }
    return (
        <div className="mt-9 w-2/6 m-auto">
            <form action="#" method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">
                    {/* Page Header */}
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 items-center flex">
                        <h1 className="font-bold text-lg">Sign in to your account</h1>
                    </div>
                    <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                           { error && <span className="col-span-12 text-xs text-red-600 -mb-4">Please enter valid Username and Password</span>}
                            {/* User name */}
                            <Input type="text" classN="col-span-12" name="username" id="user-name" autoComplete="given-name" label="Username" value={signIn.username || ''} onChange={handleChange} />
                            {/* Password */}
                            <Input type="password" classN="col-span-12" name="pass" id="password" label="Password" value={signIn.pass || ''} onChange={handleChange} />

                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 items-center flex">
                        <span className="inline-block text-gray-400 text-sm">If have you not any account? <br /> Please <Link to="/signUp" className="text-indigo-600 hover:text-indigo-500">Sign Up</Link> first.</span>
                        <ButtonComponent type="submit" text="Sign in" handler={handleSignIn} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignIn