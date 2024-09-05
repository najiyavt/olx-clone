import logo from "./logo.svg";
import "./App.css";
import { firebase, firestore } from "./firebase/config";
import { collection, getDocs ,addDoc } from "firebase/firestore";

function App() {
  const handleClick = async () => {
    try {
      const productRef = await addDoc(collection(firestore, "products") , {
        name: ' Orange' , 
        price: 200
      });
      console.log("Document written with ID", productRef.id );
    } catch (error) {
      console.error("Error fetchin docs", error);
    }
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
