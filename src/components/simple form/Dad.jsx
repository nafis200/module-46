import Brother from "./Brother";
import Myself from "./Myself";
import Sister from "./Sister";


const Dad = () => {
    return (
        <div className="bg-yellow-100 p-4">
            <h2>Dad</h2>
            <section className="flex space-x-4">
                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;