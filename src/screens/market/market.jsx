import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  ButtonBet,
  CandlestickChart,
  Timer,
  Investment,
} from "../../components";
import { vectorImages } from "../../assets";

function Market() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/register");
  }
  return (
    <React.Fragment>
      <section className="ma_wrapper">
        <main className="ma_container">
          <div className="ma_board-container">
            <main className="ma_graphic-container">
              <div className="ma_graphic-content">
                <div className="ma_graphic">
                  <CandlestickChart />
                </div>
              </div>
            </main>
            <div className="ma_sidebar-container">
              <div className="ma_sidebar">
                <div className="ma_balance-container">
                  <div className="ma_balance">
                    <div className="ma_balance-title">
                      <span>Saldo Actual</span>
                    </div>
                    <div className="ma_balance-value">
                      <Button text="50.000,00 Akz" className="btn btn_green" />
                    </div>
                  </div>
                  <div className="ma_inputs-container">
                    <Timer />
                    <Investment />
                  </div>
                  <div className="ma_bet-container">
                    <ButtonBet text="Baixar" icon="up" className="btn_bet-green"/>
                    <ButtonBet text="Subir" icon="down" className="btn_bet-red"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Market };
