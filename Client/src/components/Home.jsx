import React, { useContext } from "react";
import Loader from "./Loader";
import { DetailsContext } from "../context/DetailsContext";
const Home = () => {
  const { connectWallet, account, handleChange, handleSubmit, isLoading } =
    useContext(DetailsContext);

  return (
    <div className="main_container">
      <div className="section_container">
        <div className="leftSection">
          <h1>Send and Receive cryptocurrencies easily on Cryptico</h1>
          <p>Fast and easy - you want to be more secure send and receives</p>
          {!account && (
            <button className="btn connect-btn" onClick={connectWallet}>
              Connect Account
            </button>
          )}
        </div>
        <div className="rightSection">
          <div className="inputBox">
            {account && <p>{account} </p>}
            <input
              type="text"
              placeholder="Receiver's address"
              name="receiverAddress"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="number"
              placeholder="Enter the amount"
              name="amount"
              step="0.0001"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              placeholder="Enter your message"
              name="message"
              onChange={(e) => handleChange(e)}
            />

            <hr />
            {isLoading ? (
              <Loader />
            ) : (
              <button className="btn send-btn" onClick={handleSubmit}>
                Send Eth
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
