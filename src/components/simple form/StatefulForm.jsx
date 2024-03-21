import { useState } from "react";


const StatefulForm = () => {
    const [email,setEmail] = useState(null);
    const [Passwords,setPasswords] = useState(null)
    const [error,setError] = useState('')
    const [names,setNames] = useState('Roja')
    const handleSUbmit = e =>{
        e.preventDefault()
        if(Passwords.length < 6){
            setError('password must be 6 character')
        }
        else{
            setError('')
            console.log(names,email,Passwords);
        }
  }

  const handleChange = e =>{
       console.log(e.target.value);
       setEmail(e.target.value)
  }
  const handlepassword = e =>{
      console.log(e.target.value);
      setPasswords(e.target.value)
  }

  const handlename = e =>{
    setNames(e.target.value)
  }
    return (
        <div>
            <form onSubmit={handleSUbmit} className="mt-[200px] ml-[200px]">
                <input onChange={handlename} className="bg-red-400" type="text" value="roja" name="name" />
                <br />
                <input onChange={handleChange} className="bg-yellow-400 mt-5" type="email" name="email" id="" />
                <br />
                <input
                onChange={handlepassword}
                className="bg-orange-700 mt-5" type="password" name="password" id="" required />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;