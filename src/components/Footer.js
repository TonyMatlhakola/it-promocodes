import React from 'react'
import SolidDivider from './SolidDivider'

const Footer = (props) => {
    const { solidDividerProps } = props;
  
    return (
      <div className="footer-dashboard">
        <SolidDivider src={solidDividerProps.src} />
      </div>
    );
  }
export default Footer;