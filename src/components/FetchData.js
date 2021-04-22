import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Balance from "../components/Balance";
import FooterDashboard from "../components/Footer";
//import { getPromoData } from "../services/promocodesdata";
import { getPromoData } from "../Data/Promodata";

const FetchData = () => {
  const [promoCodesData, SetPromoCodesData] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      const data = getPromoData();
      SetPromoCodesData(data);
    }
    return () => (mounted = false);

    // let mounted = true;
    // getPromoData()
    //   .then(data => {
    //     if(mounted) {
    //       SetPromoCodesData(data)
    //     }
    //   })
    // return () => mounted = false;
  }, []);

  const solidDividerData = {
    src: promoCodesData.src,
  };

  const footerDashboardData = {
    solidDividerProps: solidDividerData,
  };

  const PromoData = {
    glyph: promoCodesData.glyph,
    icon: promoCodesData.icon,
    topBarMenu: promoCodesData.topBarMenu,
    title: promoCodesData.title,
    filter: promoCodesData.filterSearch,
    overlapGroup: promoCodesData.overlapGroup,
    body: promoCodesData.body,
    reset: promoCodesData.reset,
    reset2: promoCodesData.reset2,
    description: promoCodesData.description,
    text5: promoCodesData.text5,
    footerDashboardProps: footerDashboardData,
  };

  const {
    glyph,
    icon,
    topBarMenu,
    title,
    filter,
    overlapGroup,
    text5,
    footerDashboardProps,
  } = PromoData;

  const ResetInput = () => {    
    setValue("");
  };

  return (
    <div className="promocodesmanager">
      <div className="sidebar-menu-collapsed">
        <img className="glyph" src={glyph} alt="" />
        <img className="icon" src={icon} alt="" />
        <img className="icon-1" src={icon} alt="" />
        <img className="icon-2" src={icon} alt="" />
        <img className="icon-1" src={icon} alt="" />
        <img className="icon-2" src={icon} alt="" />
        <img className="icon-2" src={icon} alt="" />
        <img className="icon-2" src={icon} alt="" />
        <img className="icon-2" src={icon} alt="" />
      </div>

      <div className="flex-col">
        <div
          className="top-bar-menu"
          style={{ backgroundImage: `url(${topBarMenu})` }}
        >
          <Balance
            balance={promoCodesData.balance}
            balanceAmount={promoCodesData.bamount}
          />
          <Balance
            balance={promoCodesData.payout && promoCodesData.payout}
            balanceAmount={promoCodesData.pamount}
            className={promoCodesData.className}
          />
        </div>
        <h1 className="title rubik-light-shark-39px">{title}</h1>
        <div className="flex-row">
          <div className="filter">
            <div className="filter-1 valign-text-bottom roboto-normal-concord-11px">
              {filter}
            </div>
            <div
              className="overlap-group"
              style={{ backgroundImage: `url(${overlapGroup})` }}
            >
              <input
                className="body"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Filter by service name"
              />
            </div>
          </div>
          <button className="reset-1" onClick={ResetInput}>
            <p className="roboto-normal-shark-15px">Reset</p>
          </button>
        </div>
        {promoCodesData.cardData &&
          promoCodesData.cardData
            .filter((item) => {
              if (!value) return true;
              if (item.ServiceName.includes(value)) {
                return true;
              }
            })
            .map((promolist, index) => (
              <Card
                key={index}
                sitecostructorIo={promolist.ServiceName}
                description={promolist.Description}
                viewProps={promolist.ViewData}
              />
            ))}

        <div className="footer">
          <div className="overlap-group5">
            <div className="text-5 valign-text-middle roboto-normal-quick-silver-13px">
              {text5}
            </div>
            <FooterDashboard
              solidDividerProps={footerDashboardProps.solidDividerProps}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FetchData;
