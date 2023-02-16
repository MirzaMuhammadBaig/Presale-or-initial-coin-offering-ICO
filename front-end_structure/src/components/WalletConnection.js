import React, { useState } from "react";
import "../App.css";

function WalletConnection() {
    const [walletAddress, setWalletAddress] = useState("");
    const [buttonText, setButtonText] = useState("Connect Your Wallet");

    const [showTx, setTxIsShow] = useState(false);

    async function requestAccount() {
        if (window.ethereum) {
            //   console.log("Detected");
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setWalletAddress(accounts[0]);
                setButtonText("Wallet Connected");
            } catch (error) {
                console.log("Error: ", error);
            }
        } else {
            alert("Metamask not detected");
        }
    }

    const getAvailableAddress = async (e) => {
        setTxIsShow(!showTx);
    };

    return (
        <>
            <h2 className="ms-3 me-3 pt-1 pb-1 background text-center mt-5">
                Connect your Wallet
            </h2>
            {showTx && (
                <div>
                    <table className="table me-3">
                        <td className="table-light text-center ">
                            <h5>Address: </h5>
                            {walletAddress}
                        </td>
                    </table>
                </div>
            )}
            <div className="row">
                <div className="col-3"></div>

                <div className="col-3">
                    <button
                        type="button"
                        className="btn ms-5 btn-primary btn-lg mt-2 mb-3"
                        onClick={getAvailableAddress}
                    >
                        {showTx === true ? "Hide Wallet Address" : "Show Wallet Address"}
                    </button>
                </div>

                <div className="col-3">
                    <button
                        type="button"
                        className="btn ms-5 mt-2 mb-3 btn-primary btn-lg "
                        onClick={requestAccount}
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
            <div className="col-3"></div>
        </>
    );
}

export default WalletConnection;
