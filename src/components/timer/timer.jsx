import React from "react";
import { vectorImages } from "../../assets";
import { useGame } from "../../context";

function Timer() {
  const { tempo, setTempo, isCounting, countdown } = useGame();
  return (
    <React.Fragment>
      <div className="ti_wrapper">
        <div className="ti_title">Tempo</div>
        <div className="ti_container">
          <div className="ti_btn-container">
            <button onClick={() => setTempo(-5)} disabled={isCounting || tempo <= 5}>
              <img src={vectorImages.icons.market.minor} alt="-5s" />
            </button>
          </div>
          <div className="ti_value_timer-container">
            <span>{String(isCounting ? countdown : tempo).padStart(2, '0')}s</span>
          </div>
          <div className="ti_btn-container">
            <button onClick={() => setTempo(5)} disabled={isCounting || tempo >= 30}>
              <img src={vectorImages.icons.market.plus} alt="+5s" />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { Timer };
