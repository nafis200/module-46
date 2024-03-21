import { createContext, useState } from "react";
import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";

export const AssetContext = createContext("gold");

export const MoneyContext = createContext(100);
const Grandpa = () => {
  const [money,setMoney] = useState(1000)
  const asset = "diamond";
  return (
    <div className="m-3 p-3 rounded-2xl border-purple-600">
      <h2 className="text-center mb-8">Grandpa</h2>
      <p>net Money;{money}</p>
      <MoneyContext.Provider value={[money,setMoney]}>
        <AssetContext.Provider value="gold">
          <section className="flex space-x-5">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
