import React from "react";
// import Heart from "../public/Heart.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import { Tab, Tabs } from "react-bootstrap";
import UseIsMounted from "./hook/UseIsMounted";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import {useConnectModal, useAccountModal, useChainModal} from '@rainbow-me/rainbowkit';


  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 4000));
  }


const HomePage = () => {
  const mounted = UseIsMounted();
  const { openConnectModal } = useConnectModal();

  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();


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
            <form
              className="input-sec input-top p-0"
              id="bar-top"
            >
              <div className="input-line iptset-line" id="index-line"></div>
              <div className="p-0">
                

                <div className="input-item">              
                  <div className="tabs-head">

<div className="icons-settings">
<i className="bi bi-arrow-clockwise"></i>
<i className="bi bi-plus-lg"></i>
<i className="bi bi-sliders"></i>
</div>
                <Tabs
                eventKey="Wallet"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
               
<Tab   
  eventKey="Swap"
  className="btn-ajayaar"
  title="Swap"
  style={{ height: "50px" }}
>
<div className="sell-div">

  <div className="rapper-between">
  <p className="grey-text">You sell</p>
  <p className="grey-text">Balance: 0</p>
  </div>

  <div className="rapper-between">
  <a href="exchange" className="welt-text">
  <img src="/eth.webp"></img>
    WETH <i className="bi bi-chevron-down" id="weth-icon"></i></a>
  <p className="no-text">1 556.135079</p>
  </div>

  <div className="rapper-between">
  <p className="grey-text">Wrapped Ether</p>
  <p className="grey-text">~$2 449 870</p>
  </div>
</div>
<div className="down-set">
<a href="" className="arrow-rotate"> <i className="bi-bold bi-arrow-down-short" id="rotate-down"></i></a>
</div>
<div className="sell-div" id="dai-div">
  <p className="grey-text">You buy</p>
  <div className="rapper-between">
  <a href="exchange" className="welt-text"> 
  <img src="/dai.webp"></img>
  DAI <i className="bi bi-chevron-down" id="weth-icon"></i></a>
  <p className="no-text">1 556.135079</p>
  </div>

  <div className="rapper-between">
  <p className="grey-text">Dai Stablecoin</p>
  <p className="grey-text">~$2 449 870</p>
  </div>
</div>
                <div className="wallet-byn-head">
                {/* <button
                  variant="primary"
                  className="btn btn-round btn-warning w-50 p-0 "
                  style={{ marginTop: "5px" }}
                  id="form-btn"
                  type="submit"
                  
                >
               <i className="bi bi-wallet" style={{marginRight:"10px"}}></i> Connect wallet
                </button> */}

{/* {openConnectModal && ( */}
        <button onClick={openConnectModal} className="get-started-btn scrollto" id="connect-form-btn" type="button">
        <i className="bi bi-wallet"></i> Connect wallet
        </button>
      {/* // )} */}
          {/* {openAccountModal && ( */}
        {/* <button onClick={openAccountModal} type="button">
          Open Account Modal
        </button> */}
      {/* // )} */}

      {/* {openChainModal && ( */}
        {/* <button onClick={openChainModal} type="button">
          Open Chain Modal
        </button> */}
        {/* // )} */}

                {/* {mounted ? (
        <ConnectButton
          chainStatus={"none"}
          accountStatus={"address"}
          className="btn btn-round btn-warning w-100 p-0 "
          showBalance={false}
          id="form-btn"

        >
          <i className="bi bi-wallet"></i> 

        </ConnectButton>
      ) : null} */}

                </div>
</Tab>

               
<Tab   
  defaultActiveKey="Limit"
  className="btn-ajayaar"
  title="Limit"
  style={{ height: "50px" }}
>
<h3>Two</h3>
</Tab>
<Tab
                defaultActiveKey="P2P"
                id="uncontrolled-tab-example"
                className="mb-3"
                title="P2P"

              >
                <h3>Two</h3>
               </Tab>


</Tabs>



</div>

                </div>



{/* <a href="#about" className="get-started-btn scrollto" id="connect-btn"><i className="bi bi-wallet"></i> Connect wallet</a> */}


              </div>
    
            </form>
          </div>
        </div>
       
      </section>
    </div>
  );
};

export default HomePage;
