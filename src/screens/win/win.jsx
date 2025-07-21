import React from "react";
import { Footer, Button } from "../../components";
import { vectorImages } from "../../assets";
import { useGame } from "../../context";
import { useNavigate } from "react-router-dom";

function Win() {
  const { resetGame, saldoAtual } = useGame();
  const navigate = useNavigate();

  function handleRestart() {
    resetGame();
    navigate("/");
  }

  return (
    <React.Fragment>
      <section className="wi_wrapper">
        <main className="wi_container">
          <div className="wi_board-wrapper">
            <div className="wi_board-container">
              <div className="wi_board">
                <div className="board">
                  <div className="wi_board-content">
                    <div className="wi_logo-container">
                      <img src={vectorImages.logo.brand_logo} alt="" />
                    </div>
                    <div className="wi_text-description">
                      <span>Boa jogada!</span>
                      <span>Você Aculumou:</span>
                      <span>{saldoAtual.toLocaleString('pt-PT')} Akz</span>
                    </div>
                    <div className="button_container">
                      <Button text="Recomeçar" className="btn btn_green" onClick={handleRestart}/>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Win };
