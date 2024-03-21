import Friend from "./Friend";
import Special from "./Special";


const Cousin = ({name,asset}) => {
    return (
        <div className="space-x-2">
          <h2>Cousin</h2>  
          <p>{name}</p>
          <section>
            {asset && <Special asset={asset}></Special>}
            {name === 'modu mala' && <Friend></Friend> }
          </section>
        </div>
    );
};

export default Cousin;