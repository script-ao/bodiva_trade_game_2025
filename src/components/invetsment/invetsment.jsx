import React from "react";
import { vectorImages } from "../../assets";

function Investment() {
  return (
    <React.Fragment>
      <div className="inv_wrapper">
        <div className="inv_title">Investimento</div>
        <div className="inv_container">
          <div className="inv_btn-container">
            <button>
              <img src={vectorImages.icons.market.minor} alt="" />
            </button>
          </div>
          <div className="inv_value_finance-container">
            <span>300.000</span>
          </div>
          <div className="inv_btn-container">
            <button>
              <img src={vectorImages.icons.market.plus} alt="" />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { Investment };
