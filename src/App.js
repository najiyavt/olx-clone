import logo from "./logo.svg";
import "./App.css";
import { firestore } from "./firebase/config";
import { deleteDoc, doc} from "firebase/firestore";

function App() {
  const handleClick = async (docId) => {
    try {
      const productRef = doc(firestore, "products" , docId );
      await deleteDoc(productRef)
      console.log("Succesfully deleted" );
    } catch (error) {
      console.error("Error deleting docs", error);
    }
  };
  return (
    <div className="App">
      <button onClick={() => handleClick('5PFgAM338Lc70qt2HPFF')}>Delete Document</button>
      </div>
  );
}

export default App;
