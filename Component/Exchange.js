import React, { useEffect, useState } from "react";
// import Heart from "../public/Heart.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import { Tab, Tabs } from "react-bootstrap";
import UseIsMounted from "./hook/UseIsMounted";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";

const Exchange = () => {
  const mounted = UseIsMounted();
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();

  const [tokenDataFetch, setTokenDataFetch] = useState();

  async function tokenData() {
    // import axios from 'axios';

    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://api.1inch.io/v4.0/1/tokens",
      headers: {},
    };

    console.log(config, "to see the result of config");

    axios(config)
      .then(function (response) {
        const data = JSON.stringify(response?.data?.tokens, "res is here");
        console.log(data,"to get the data to show the result")
        const newData = Object.values(JSON.parse(data))
        console.log(newData,"to see whether the data is converted or not")
        // const data = (response.data);
        setTokenDataFetch(newData);
      })

      .catch(function (error) {
        console.log(error, "error is here");
      });
  }
  console.log(tokenDataFetch, "dta here");

  useEffect(() => {
    tokenData();
  }, []);

  const router = useRouter();

  const notify = (msg) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyError = (msg) =>
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div>
      <section className="profile-sec ">
        <div className="container">
          <div className="row justify-content-center">
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <form className="input-sec input-top p-0" id="bar-top">
              <div className="input-line iptset-line" id="index-line"></div>
              <div className="token-head">
                <div className="rapper-between" id="token-form-padding">
                  <h5
                    style={{ cursor: "pointer" }}
                    onClick={() => router.back()}
                  >
                    {" "}
                    <i className="bi bi-chevron-left" id="back-btn-icon"></i>
                  </h5>
                  <h5> Select a token </h5>
                  <h5 className="hide-text">1</h5>
                </div>
                <div className="input-group mb-1" id="search-bar">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-search"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by name or past address"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="token-ancher-head">
                  <a className="ancher-style" href="">
                    {" "}
                    <img className="eth-ancher-img" src="/eth.webp"></img>ETH
                  </a>
                  <a className="ancher-style" href="">
                    {" "}
                    <img className="eth-ancher-img" src="/welth.webp"></img>WETH
                  </a>
                  <a className="ancher-style" href="">
                    {" "}
                    <img className="eth-ancher-img" src="/usdc.webp"></img>USDC
                  </a>
                  <a className="ancher-style" href="">
                    {" "}
                    <img className="eth-ancher-img" src="/dai.webp"></img>DAI
                  </a>
                  <a className="ancher-style" href="">
                    {" "}
                    <img className="eth-ancher-img" src="/usdt.webp"></img>USDT
                  </a>
                  <a className="ancher-style" href="">
                    {" "}
                    <img className="eth-ancher-img" src="/wbtc.webp"></img>WBTC
                  </a>
                  <a className="ancher-style" href="">
                    {" "}
                    <img className="eth-ancher-img" src="/1inch.webp"></img>
                    1INCH
                  </a>
                </div>
              </div>


              <div className="token-parts">
              {tokenDataFetch?.map ((item,id)=>{
                return(
                <div key={id} className="parts-head">
                  <div className="left-part">
                    <img
                      src={item?.logoURI}
                      className="left-part-image"
                    ></img>
                    <div className="left-side-text">
                      <h5 className="left-text-eth">{item?.name}</h5>
                      <p className="grey-text">{item?.symbol}</p>
                    </div>
                  </div>
                  <div className="right-part">
                    <h5 className="right-text-eth">{item?.decimals}</h5>
                    <p>
                      <i
                        className="bi bi-pin-angle-fill"
                        id="pin-dark-icon"
                      ></i>
                    </p>
                  </div>
                </div>    )
              })}
                {/* );  
                    })
                  } */}

                {/* <div className="parts-head">
                  <div className="left-part">
                    <img src="/usdc.webp" className="left-part-image"></img>
                    <div className="left-side-text">
                      <h5 className="left-text-eth">USD Coin </h5>
                      <p className="grey-text">USDC</p>
                    </div>
                  </div>
                  <div className="right-part">
                    <h5 className="right-text-eth">0</h5>
                    <p>
                      <i
                        className="bi bi-pin-angle-fill"
                        id="pin-dark-icon"
                      ></i>
                    </p>
                  </div>
                </div>
                <div className="parts-head">
                  <div className="left-part">
                    <img src="/dai.webp" className="left-part-image"></img>
                    <div className="left-side-text">
                      <h5 className="left-text-eth">Dai Stablecoin</h5>
                      <p className="grey-text">DAI</p>
                    </div>
                  </div>
                  <div className="right-part">
                    <h5 className="right-text-eth">0</h5>
                    <p>
                      <i
                        className="bi bi-pin-angle-fill"
                        id="pin-dark-icon"
                      ></i>
                    </p>
                  </div>
                </div>
                <div className="parts-head">
                  <div className="left-part">
                    <img src="/usdt.webp" className="left-part-image"></img>
                    <div className="left-side-text">
                      <h5 className="left-text-eth">Tether USD</h5>
                      <p className="grey-text">USDT</p>
                    </div>
                  </div>
                  <div className="right-part">
                    <h5 className="right-text-eth">0</h5>
                    <p>
                      <i
                        className="bi bi-pin-angle-fill"
                        id="pin-dark-icon"
                      ></i>
                    </p>
                  </div>
                </div>
                <div className="parts-head">
                  <div className="left-part">
                    <img src="/wbtc.webp" className="left-part-image"></img>
                    <div className="left-side-text">
                      <h5 className="left-text-eth">Wrapped BTC</h5>
                      <p className="grey-text">WETH</p>
                    </div>
                  </div>
                  <div className="right-part">
                    <h5 className="right-text-eth">0</h5>
                    <p>
                      <i
                        className="bi bi-pin-angle-fill"
                        id="pin-dark-icon"
                      ></i>
                    </p>
                  </div>
                </div>
                <div className="parts-head">
                  <div className="left-part">
                    <img src="/welth.webp" className="left-part-image"></img>
                    <div className="left-side-text">
                      <h5 className="left-text-eth">Wrapped Ether</h5>
                      <p className="grey-text">WETH</p>
                    </div>
                  </div>
                  <div className="right-part">
                    <h5 className="right-text-eth">0</h5>
                    <p>
                      <i
                        className="bi bi-pin-angle-fill"
                        id="pin-dark-icon"
                      ></i>
                    </p>
                  </div>
                </div> */}
              </div>
            

              {/* <div className="wallet-byn-head">
        <button onClick={openConnectModal} type="button">
          Open Connect Modal
        </button>
     
                </div> */}

              {/* <a href="#about" className="get-started-btn scrollto" id="connect-btn"><i className="bi bi-wallet"></i> Connect wallet</a> */}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exchange;
