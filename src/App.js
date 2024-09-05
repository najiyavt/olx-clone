import logo from "./logo.svg";
import "./App.css";
import { firebase, firestore } from "./firebase/config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const handleClick = async () => {
    try {
      const productRef = collection(firestore, "products");
      const snapshot = await getDocs(productRef);
      snapshot.forEach((doc) => {
        console.log(doc.data(),doc.id);
      });
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
