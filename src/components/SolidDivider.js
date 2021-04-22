import React from 'react'

const SolidDivider = (props) => {
    const { src } = props;
  
    return (
      <div className="solid-divider">
        <img className="solid" src={src} alt=''/>
      </div>
    );
  }
  export default SolidDivider