import React, { useState } from 'react'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler=(e)=>{
        e.preventDefault()
        console.log("email is",email)
        console.log("password is",password);
        
    }

   
  return (
    <div className="flex h-screen w-screen items-center justify-center">
        <div className='border-2 border-emerald-600 rounded-xl'>
            <form onSubmit={(e)=>{
                  submitHandler(e)
                }}
                className=" flex flex-col items-center justify-center p-20 " >
                
                <input value={email}
                 onChange={(e)=>{
                    setEmail(e.target.value)
                }} required className="text-white border-2 outline-none bg-transparent border-emerald-600 py-3 px-5 rounded-full text-xl placeholder:text-gray-600" type="email" placeholder="Enter your email" />
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)

                }}
                 required className="text-white border-2 outline-none bg-transparent border-emerald-600 py-3 px-5 rounded-full text-xl placeholder:text-gray-600 mt-5" type="password" placeholder="Enter your password" />
                <button className="text-white  outline-none bg-emerald-600 py-2 px-16 rounded-full text-xl placeholder:text-white mt-5">Log in</button>
            </form>
        </div>
      
    </div>
  )
}

export default Login
