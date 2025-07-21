import React from "react";
import { vectorImages } from "../../assets";
import { useGame } from "../../context";

function Investment() {
  const { investimento, setInvestimento, saldoAtual, isCounting } = useGame();
  return (
    <React.Fragment>
      <div className="inv_wrapper">
        <div className="inv_title">Investimento</div>
        <div className="inv_container">
          <div className="inv_btn-container">
            <button onClick={() => setInvestimento(-10000)} disabled={isCounting || investimento <= 10000}>
              <img src={vectorImages.icons.market.minor} alt="-10k" />
            </button>
          </div>
          <div className="inv_value_finance-container">
            <span>{investimento.toLocaleString('pt-PT')} Akz</span>
          </div>
          <div className="inv_btn-container">
            <button onClick={() => setInvestimento(10000)} disabled={isCounting || investimento >= saldoAtual}>
              <img src={vectorImages.icons.market.plus} alt="+10k" />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { Investment };
