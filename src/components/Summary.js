function Summary({ transactions }) {
  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const expense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const balance = income - expense;

  return (
    <div className="summary">
      <div className="summarybox">
        <h3>INCOME</h3>
        <h2>RS.{income}</h2>
      </div>
      <div className="summarybox">
        <h3>EXPENSE</h3>
        <h2>RS.{expense}</h2>
      </div>
      <div className="summarybox">
        <h3>BALANCE</h3>
        <h2> RS.{balance}</h2>
      </div>
    </div>
  );
}

export default Summary;
