import React, { useContext } from "react";
import { DetailsContext } from "../context/DetailsContext";
const Transactions = () => {
  const { transactions } = useContext(DetailsContext);

  const makeItShort = (str) => {
    return str.slice(0, 6) + "..." + str.slice(str.length - 4, str.length);
  };

  return (
    <div>
      <div className="transaction-header">
        <h1>
          Transactions
          <span>All transactions</span>
        </h1>
      </div>
      <table className="table-fill">
        <thead>
          <tr>
            <th className="text-left">Sender</th>
            <th className="text-left">Receiver</th>
            <th className="text-left">Message</th>
            <th className="text-left">Amount</th>
            <th className="text-left">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {transactions &&
            transactions.map((transaction, idx) => (
              <tr>
                <td className="text-left">
                  <a
                    href={`https://sepolia.etherscan.io/address/${transaction.sender}`}
                    target="_blank"
                  >
                    {makeItShort(transaction.sender)}
                  </a>
                </td>
                <td className="text-left">
                  <a
                    href={`https://sepolia.etherscan.io/address/${transaction.receiver}`}
                    target="_blank"
                  >
                    {makeItShort(transaction.receiver)}
                  </a>
                </td>
                <td className="text-left">{transaction.message}</td>
                <td className="text-left">
                  {parseInt(transaction.amount._hex) / 10 ** 18}
                </td>
                <td className="text-left">
                  {new Date(
                    transaction.timestamp.toNumber() * 1000
                  ).toLocaleString()}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
