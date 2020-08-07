import React, { useState } from 'react'


export default function Login({ login }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function formHandler(e){
        e.preventDefault();
        if(email === 'admin@admin.com' && password === 'admin'){
            login();
        }
    }
    
    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full">
        <div>
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-white">
            Sign in to your account
        </h2>
        </div>
        <form className="mt-8" action="#" onSubmit={(e) => formHandler(e)} method="POST">
            <input type="hidden" name="remember" value="true"/>
            <div className="rounded-md shadow-sm">
                <div>
                    <input onChange={(e) => setEmail(e.target.value)} aria-label="Email address" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address"/>
                </div>
                <div className="-mt-px">
                    <input onChange={(e) => setPassword(e.target.value)} aria-label="Password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password"/>
                </div>
            </div>
            <div className="mt-6">
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-white text-sm leading-5 font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-black focus:outline-none focus:shadow-outline-white active:bg-gray-300 transition duration-150 ease-in-out">
                    Sign in
                </button>
            </div>
            <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center">
                    <input id="remember_me" type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
                    <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-white">
                        Remember me
                    </label>
                </div>
            </div>
        </form>
    </div>
</div>

    )
}

