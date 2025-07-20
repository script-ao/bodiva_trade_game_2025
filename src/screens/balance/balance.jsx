import React from "react";
import { Footer, Button } from "../../components";
import { vectorImages } from "../../assets";

function Balance() {
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
                      <Button text="50.000,00 AKZ" className="btn btn_green"/>
                    </div>
                    <div className="button_container">
                      <Button text="100.000,00 AKZ" className="btn btn_green"/>
                    </div>
                    </div>
                    <div className="button_container">
                      <Button text="Começar" className="btn btn_green"/>
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
