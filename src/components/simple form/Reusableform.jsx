

import React from 'react';

const Reusableform = ({formtitle,handleSUbmit,submtbutton ='submit',children}) => {
   
    const handleLocalSubmit = e =>{
         e.preventDefault();
         const data = {
            name : e.target.name.value,
            email: e.target.email.value
         }
         handleSUbmit(data)
    }

    return (
        <div>
            <form onSubmit={handleLocalSubmit} className="mt-[200px] ml-[200px]">
            <h2 className='mb-3'>{formtitle}</h2>
                {children}
                <input className="bg-red-400" type="text" name="name" />
                <br />
                <input className="bg-yellow-400 mt-5" type="email" name="email" id="" />
                <br />
                <input type="submit" value={submtbutton} />
            </form>
        </div>
    );
};

export default Reusableform;