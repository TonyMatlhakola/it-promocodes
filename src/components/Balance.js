import React from 'react'


const Balance = (props) => {
    const { balance, balanceAmount, className } = props;
  
    return (
      <div className={`balance ${className || ""}`}>
        <div className="balance-1 valign-text-middle roboto-normal-concord-13px">
          {balance}
        </div>
        <div className="phone valign-text-middle rubik-normal-shark-19px">
          {balanceAmount}
        </div>
      </div>
    );
  }
  export default Balance;