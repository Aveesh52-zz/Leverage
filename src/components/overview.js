import React from 'react';
import {round} from '../utils/index';

const Overview = (props) => {

  const {tokenIn, leverageToken, amount, deposit, borrow, mode, price, leverageFactor} = props;

  const collateral = deposit * price;
  const interestMode = mode == 1 ? 'Stable' : 'Variable';

	return(
    <div id="overview">
      <h5>POSITION ON AAVE</h5>
      <div id="overview-container">
        <div className="overview-box">
          <p>COLLATERAL:</p>
          <div className="overview-value-container">
            <p>{round(collateral)}</p>
            <img className="overview-icon" src={`/images/${leverageToken.toLowerCase()}.svg`} />
          </div>
        </div>
        <div className="overview-box">
          <p>BORROW</p>
          <div className="overview-value-container">
            <p>{round(borrow)}</p>
            <img className="overview-icon" src={`/images/${tokenIn.toLowerCase()}.svg`} />
          </div>
        </div>
        <div className="overview-box">
          <p>INTEREST MODE:</p>
          <div className="overview-value-container">
            <p>{interestMode}</p>
          </div>
        </div>
        <div className="overview-box">
          <div className="overview-value-container">
            <img className="overview-icon-lev" src={`/images/${leverageToken.toLowerCase()}.svg`} />
            <p>LEVERAGE FACTOR</p>
          </div>
          <p><b>~{round(leverageFactor, 1)}x</b></p>
        </div>
      </div>
    </div>
  );
  
}

export default Overview;