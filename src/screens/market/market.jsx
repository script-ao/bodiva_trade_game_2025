import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonBet,
  CandlestickChart,
  Timer,
  Investment,
  Label
} from "../../components";
import { useGame } from "../../context";

function Market() {
  const navigate = useNavigate();
  const { saldoAtual, status, result, betChoice, jogadas } = useGame();

  useEffect(() => {
    if (status === "win") navigate("/win");
    if (status === "lose") navigate("/lose");
  }, [status, navigate]);

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
                      <Label text={`${saldoAtual.toLocaleString('pt-PT')} Akz`} />
                    </div>
                  </div>
                  <div className="ma_inputs-container">
                    <Timer />
                    <Investment />
                  </div>
                  <div className="ma_bet-container">
                    <ButtonBet text="Subir" icon="up" className="btn_bet-green"/>
                    <ButtonBet text="Baixar" icon="down" className="btn_bet-red"/>
                  </div>
                  <div style={{marginTop: 16, minHeight: 24, textAlign: 'center'}}>
                    {result && betChoice && (
                      <span>
                        Resultado: {result === betChoice ? "Ganhou!" : "Perdeu!"} ({result === "up" ? "Subiu" : "Baixou"})
                      </span>
                    )}
                    <br/>
                    <span>Jogada {jogadas + 1} de 5</span>
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
