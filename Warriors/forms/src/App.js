import React,{useRef, useState} from 'react';
import './styles/index.css'



const App =React.memo(() => {
  let usermail = useRef(null);
  let userPassword = useRef(null);
  let userPasswordConfirmation = useRef(null);

   const [userEmail, setEmail] = useState('')
  // const [userPassword, setPassword] = useState('')
  // const [userPasswordConfirmation, setPasswordConfirmation] = useState('')
  
  
  const onChangeValue = event => {
    event.preventDefault();
    setEmail({
      userEmail : event.target.value
     })
     
    
  }
  console.log(userEmail);
  
  const onSubmit = () => {
  //    setEmail({
  //      userEmail : usermail.current.value
  //     })
  console.log(userPassword.current.value)
    // console.log(userPasswordConfirmation.current.value)
  }
  //console.log(usermail)
  //console.log(userEmail);
  return (
    
    
    <div className="w-3/4  m-auto" >
    <div className="w-full m-auto mt-10 max-w-md" >
      <form action="" className=" bg-gray-200 shadow-md rounded px-8 py-8 pt-8">
        <div className=" px-4 pb-4">
          <label htmlFor="email" className="text-sm block font-bold  pb-2">EMAIL ADDRESS</label>
          <input type="email" 
          name="email" 
          id="" 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 " placeholder="Johnbull@example.com"
          ref={usermail}
          onChange={onChangeValue}
          //value = {usermail}
          />
        </div>

        <div  className="px-4 pb-4">
          <label htmlFor="password" className="text-sm block font-bold pb-2">PASSWORD</label>
          <input type="password" name="password" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" placeholder="Enter your password"
          ref={userPassword}
          //value = {userPassword}
          />
        </div>

        <div  className="px-4 pb-4">
          <label htmlFor="password" className="text-sm block font-bold pb-2">PASSWORD CONFIRMATION</label>
          <input type="password" name="passwordConfirm" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" placeholder="Confirm your password"
          ref={userPasswordConfirmation}
          //value = {userPasswordConfirmation}
          />
        </div>

        <div className="w-3/4 m-auto ">
          <button className="w-full m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={onSubmit}>Submit</button>
        </div>

      </form>
    </div>
  </div>
  );
})

export default App;
