import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer, Button } from "../../components";
import { useGame } from "../../context";

function Balance() {
  const navigate = useNavigate();
  const { setCapital } = useGame();
  const [selected, setSelected] = useState(null);

  function handleSelect(value) {
    setSelected(value);
    setCapital(value);
  }

  function handleContinue() {
    if (selected) {
      navigate("/market");
    }
  }
  return (
    <React.Fragment>
      <section className="ba_wrapper">
        <main className="ba_container">
          <div className="ba_board-wrapper">
            <div className="ba_board-container">
              <div className="ba_board">
                <div className="board">
                  <div className="ba_board-content">
                    <div className="ba_text-description">
                      <span>SELECCIONE O</span>
                      <span>CAPITAL INICIAL</span>
                    </div>

                    <div className="ba_capital-container">
                      <div className="button_container">
                        <Button
                          text="50.000,00 AKZ"
                          className={`btn btn_green${selected===50000?" selected":""}`}
                          onClick={() => handleSelect(50000)}
                        />
                      </div>
                      <div className="button_container">
                        <Button
                          text="100.000,00 AKZ"
                          className={`btn btn_green${selected===100000?" selected":""}`}
                          onClick={() => handleSelect(100000)}
                        />
                      </div>
                    </div>
                    <div className="button_container">
                      <Button
                        text="Continuar"
                        className="btn btn_green"
                        onClick={handleContinue}
                        disabled={!selected}
                      />
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

export { Balance };
