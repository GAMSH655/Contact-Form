import { useState } from 'react'
import './App.css'

function App() {
  const [formvalue , setformvalue ] = useState({
    firstName : "",
    lastName :"",
    textArea : ""
  })
   const handleSubmit =(e)=>{
     e.preventDefault();
     
   }
   const handleInput = (e)=>{
    const {name , value } = e.target
    setformvalue({...formvalue , [name]:value })
    console.log(formvalue)
   }
   
   
   
   
   
   return (
    <div className="bg-lightGreen flex justify-center w-full px-4 py-6">
  <div className="w-full max-w-4xl">
    <h3 className="font-bold capitalize text-2xl md:text-3xl text-center">contact us</h3>

    <form action="" className="mt-8 bg-white p-4 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:space-x-4">
        
        <div className="m-4 w-full md:w-1/2 input">
          <h3 className="font-semibold capitalize mb-2">first name*</h3>
          <input type="text" className="w-full bg-transparent p-2 border border-gray-300 rounded-md focus:outline-none " value={formvalue.firstName} name="firstName" onChange={handleInput} />
        </div>

        <div className="m-4 w-full md:w-1/2">
          <h3 className="font-semibold capitalize mb-2">first name*</h3>
          <input type="text" className="w-full bg-transparent p-2 border border-gray-300 rounded-md focus:outline-none" value={formvalue.lastName} name="lastName" onChange={handleInput} />
        </div>
      
      </div>


      <div className="m-4">
        <h3 className="font-semibold capitalize mb-2">email address*</h3>
        <input type="email" className="w-full bg-transparent p-2 border border-gray-300 rounded-md focus:outline-none" />
      </div>
    
          <div className="flex flex-col md:flex-row md:space-x-4">
      <div className="w-full md:w-1/2 mb-4 md:mb-0 border border-gray-700 rounded-lg p-4">
        <input type="radio" className="mr-2" name="requestType" />
        <label className="font-semibold capitalize">general request</label>
      </div>
      
      <div className="w-full md:w-1/2 border border-gray-700 rounded-lg p-4">
        <input type="radio" className="mr-2" name="requestType" />
        <label className="font-semibold capitalize">support request</label>
      </div>
    </div>

      <div className="m-4">
        <h3 className="font-semibold capitalize mb-2">message*</h3>
        <textarea className="w-full border border-gray-300 rounded-md p-3 h-32 resize-none bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"  value={formvalue.textArea} name='textArea' onChange={handleInput} ></textarea>
      </div>

      <div className="m-4 flex items-center">
        <input type="checkbox" className="mr-2" />
        <label className="font-semibold capitalize text-sm sm:text-base md:text-lg lg:text-xl block sm:inline">
       I consent to be contacted by the team
      </label>

      </div>

      <button className="w-full bg-darkGreen text-white capitalize p-3  rounded-md">submit</button>
    </form>
  </div>
</div>

   
  )
}

export default App
