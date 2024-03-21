import Hookform from "./components/Hookform";
import Refform from "./components/simple form/Refform";
import Reusableform from "./components/simple form/Reusableform";
import Simpleform from "./components/simple form/Simpleform";
import StatefulForm from "./components/simple form/StatefulForm";


const App = () => {
  const handleSUbmit = data =>{
    console.log(data);
  }
  return (
    <div>
       {/* <Simpleform></Simpleform> */}
       {/* <StatefulForm></StatefulForm> */}
       {/* <Refform></Refform> */}
       {/* <Hookform></Hookform> */}
       <Reusableform formtitle={'sign in'} submtbutton='update' handleSUbmit={handleSUbmit}>
          <div>
            <h2>sign up</h2>
            <p>please sign up right now</p>
          </div>
       </Reusableform>
    </div>
  );
};

export default App;
