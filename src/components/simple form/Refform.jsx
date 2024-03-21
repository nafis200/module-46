import { useEffect, useRef } from "react";

const Refform = () => {
  
    const nameRef = useRef(null)
    const emailRef = useRef(null);
    const passwordRef = useRef(null)

    useEffect(()=>{
          nameRef.current.focus();
    },[])

    const handleSUbmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
  }
    return (
        <div>
             <form onSubmit={handleSUbmit} className="mt-[200px] ml-[200px]">
                <input defaultValue={'nafis'} ref={nameRef} className="bg-red-400" type="text" name="name" />
                <br />
                <input ref={emailRef} className="bg-yellow-400 mt-5" type="email" name="email" id="" />
                <br />
                <input ref={passwordRef} className="bg-green-400 mt-3" type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Refform;