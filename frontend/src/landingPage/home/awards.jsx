import React from 'react';

function Awards () {
    return ( 
        <div className='container mt-5'>
            <div className="row">
                <div className="col-6">
                    <img src='Images/largestBroker.svg'/>
                </div>
                <div className='col-6'>
             <h1 className='mb-3'><b>Best Learning Platform in India</b></h1>
             <div className='mb-5'>
             <b>Learn how to trade stocks easily with our website...</b>
            

             <b> <span className='p-1' style={{backgroundColor: "black" , color:"white"   }}>Integrated AI</span> to help you understand the market and start trading with confidence</b>
             </div>
             <div className="row mt-3">
                <div className="col-6">
                    <ul>
                        <li>
                            <p>Futures and Options</p>

                        </li>
                        <li>
                            <p>Commodity Derivatives</p>
                        </li>
                        <li>
                            <p>Currency Derivatives</p>
                        </li>
                    </ul>
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            <p>Stocks and IPOs</p>
                        </li>
                        <li>
                            Direct Mutual Funds
                        </li>
                        <br />
                        <li>
                          <p>Goverment Bonds and Gold</p>
                        </li>
                    </ul>
                </div>
             </div>
             < div className='mt-4'>       
                   <img src="Images/pressLogos.png" /> 
             </div>
                </div>
            </div>
        </div>
     );
}

export default Awards;