import React from "react";
import { vectorImages } from "../../assets";

function ButtonBet(props) {
  const { text, icon, className } = props;

  return (
    <React.Fragment>
      <div className="btn_bet-wrapper">
        <button
          className={`btn_bet-container ${className}`}
        >
          <div className="btn_bet-content">
            <div className="btn_bet-icon">
              {icon == "down" ? (
                <img src={vectorImages.icons.market.down} alt="Down Icon" />
              ) : (
                <img src={vectorImages.icons.market.up} alt="Up Icon" />
              )}
            </div>
            <div className="btn_bet-text">
              <span>{text}</span>
            </div>
          </div>
        </button>
      </div>
    </React.Fragment>
  );
}

export { ButtonBet };
