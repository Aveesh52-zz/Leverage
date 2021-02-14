import React from 'react';
import {connect} from 'react-redux';
import {getUserData} from "../actions/index";
import {fromWei} from '../utils/index';

class Status extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.dispatch(getUserData());
  }
  
  render(){

    const {deposits, borrows} = this.props.reserve;
    const ifDeposits = deposits.length > 0;
    const ifBorrows = borrows.length > 0;

    return(
      <div id="status">
        <div id="status-container">
        <div id="status-container-head">
          <h5>USER POSITION ON AAVE</h5>
          </div>
          <div id="status-container-top">
            <h6>CURRENT DEPOSITS</h6>
            {ifDeposits ?
              deposits.map((deposit) => (
                <div>
                  <img className="status-icon" src={`/images/${deposit.symbol.toLowerCase()}.svg`} />
                  <span className="status-amount">{fromWei(deposit.amount)}</span>
                </div>
              )) : <p>NO DEPOSITS</p>
            }
          </div>
          <div id="status-container-bottom">
            <h6>CURRENT BORROWS</h6>
          {ifBorrows ?
            borrows.map((borrow) => (
              <div>
                <img className="status-icon" src={`/images/${borrow.symbol.toLowerCase()}.svg`} />
                <span className="status-amount">{fromWei(borrow.amount)}</span>
              </div>
            )) : <p>NO BORROWS</p>}
          </div>
        </div>
      </div>
    );

  }
  
}

const mapStateToProps = (state) => {
	return{
		account: state.account,
    reserve: state.reserve
	};
};

export default connect(mapStateToProps)(Status);