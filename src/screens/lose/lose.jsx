import React from "react";
import { Footer, Button } from "../../components";
import { vectorImages } from "../../assets";
import { useGame } from "../../context";
import { useNavigate } from "react-router-dom";

function Lose() {
  const { resetGame } = useGame();
  const navigate = useNavigate();

  function handleRestart() {
    resetGame();
    navigate("/");
  }

  return (
    <React.Fragment>
      <section className="lo_wrapper">
        <main className="lo_container">
          <div className="lo_board-wrapper">
            <div className="lo_board-container">
              <div className="lo_board">
                <div className="board">
                  <div className="lo_board-content">
                    <div className="lo_logo-container">
                      <img src={vectorImages.logo.brand_logo} alt="" />
                    </div>
                    <div className="lo_text-description">
                      <span>Infelizmente</span>
                      <span>Não foi desta</span>
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

export { Lose };
