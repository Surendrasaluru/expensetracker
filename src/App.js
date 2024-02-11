import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import Summary from "./components/Summary";

function App() {
  const [transactions, setTransactions] = useState([]);
  const addTransaction = (newTranscation) => {
    setTransactions([...transactions, newTranscation]);
  };
  return (
    <div>
      <div className="App">
        <div className="formcontainer">
          <Form addTransaction={addTransaction} />
        </div>
        <div className="listbox">
          <List transactions={transactions} />
          <Summary transactions={transactions} />
        </div>
      </div>
    </div>
  );
}

export default App;
