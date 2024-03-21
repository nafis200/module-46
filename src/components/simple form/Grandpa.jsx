import { createContext } from "react";
import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";


const AssetContext = createContext('gold')

const Grandpa = () => {
    const asset = 'diamond';
    return (
        <div className="m-3 p-3 rounded-2xl border-purple-600">
            <h2 className="text-center mb-8">Grandpa</h2>
            <AssetContext.Provider value="gold">
            <section className="flex space-x-5">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
            </section>
            </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;