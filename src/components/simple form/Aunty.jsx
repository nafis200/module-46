import { useContext } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./Grandpa";


const Aunty = () => {
    const [money,setMoney] = useContext(MoneyContext)
    return (
        <div className=" bg-slate-100 p-4">
           <h2>Aunty</h2> 
           <section className="flex space-x-5">
              <Cousin name={'afra'}></Cousin>
              <Cousin name={'modu mala'}></Cousin>
           </section>
           <p>Money:{money}</p>
           <button onClick={() => setMoney(money + 1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Aunty;
