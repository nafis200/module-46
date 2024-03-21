

const Simpleform = () => {
    const handleSUbmit = e =>{
          e.preventDefault();
          console.log('form submitted');
          console.log(e.target.name.value);
          console.log(e.target.email.value);
    }
    return (
        <div>
            <form onSubmit={handleSUbmit} className="mt-[200px] ml-[200px]">
                <input className="bg-red-400" type="text" name="name" />
                <br />
                <input className="bg-yellow-400 mt-5" type="email" name="email" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Simpleform;