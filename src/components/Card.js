import React, { useState } from "react";
import copy from "copy-to-clipboard";

const Card = (props) => {
  const { sitecostructorIo, description, viewProps, className } = props;
  
  const [isBonusActivated, SetBonusActivate] = useState(false);

  const handleCopy = (text) => {
    if (typeof text === "string" || typeof text == "number") {
      copy(text.toString());
      alert("Copied to clipboard");
    } else {
      console.error(
        `Cannot copy typeof ${typeof text} to clipboard, must be a string or number.`
      );
    }
  };

  const View = (props) => {
    const { promocode, copy, itpromocodes, icon } = props;

    return (
      <div className="view">
        <div className="promocode-1 valign-text-bottom roboto-normal-concord-11px">
          {promocode}
        </div>
        <div className="copy" style={{ backgroundImage: `url(${copy})` }}>
          <div className="itpromocodes roboto-normal-shark-15px">
            {itpromocodes}
          </div>
          <img
            className="icon-3"
            src={icon}
            onClick={() => handleCopy(itpromocodes)}
            alt=""
          />
        </div>
      </div>
    );
  };

  const handleActivateBonus = () => {
      SetBonusActivate(true);    
  };

  return (
    <div className={`card-4 ${className || ""}`}>
      <div className="overlap-group1 border-1px-mystic">
        <div className="card-3 border-1px-mystic"></div>
        <View
          promocode={viewProps.promocode}
          copy={viewProps.copy}
          itpromocodes={viewProps.itpromocodes}
          icon={viewProps.icon}
        />
                 <button
            className="x48-primary-btn-1"
            onClick={(e) => handleActivateBonus(e)}
            style={{ backgroundColor: isBonusActivated && "green" }}
          >
            <p className="text-1 roboto-normal-white-19px"> {!isBonusActivated ? "Activate Bonus": "Activated"}</p>
          </button>
        
        <div className="sitecostructorio roboto-light-black-29px">
          {sitecostructorIo}
        </div>
        <div className="description-1 roboto-normal-concord-15px">
          {description}
        </div>
      </div>
    </div>
  );
};
export default Card;
