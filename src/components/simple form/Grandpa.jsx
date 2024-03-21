import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";



const Grandpa = () => {
    return (
        <div className="m-3 p-3 rounded-2xl border-purple-600">
            <section className="flex space-x-5">
            <Dad></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;