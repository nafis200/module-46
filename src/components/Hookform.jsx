import useInputState from "../hooks/usestate";



const Hookform = () => {
    const [name, handleNameChange] = useInputState('rojoni')
    const handleSUbmit = e =>{
        e.preventDefault();
        console.log('name',name);
    }
    return (
        <div>
             <form onSubmit={handleSUbmit} className="mt-[200px] ml-[200px]">
                <input value={name} onChange={handleNameChange} className="bg-red-400" type="text" name="name" />
                <br />
                <input className="bg-yellow-400 mt-5" type="email" name="email" id="" />
                <br />
                <input className="mt-3 bg-blue-700" type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Hookform;