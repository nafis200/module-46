import Cousin from "./Cousin";


const Uncle = () => {
    return (
        <div className="bg-red-100 p-4">
            <h2>Uncle</h2>
            <section className="flex space-x-2">
               <Cousin name={'rafsan'}></Cousin>
               <Cousin name={'Sohan'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;