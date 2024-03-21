import Cousin from "./Cousin";


const Aunty = () => {
    return (
        <div className=" bg-slate-100 p-4">
           <h2>Aunty</h2> 
           <section className="flex space-x-5">
              <Cousin name={'afra'}></Cousin>
              <Cousin name={'modu mala'}></Cousin>
           </section>
        </div>
    );
};

export default Aunty;