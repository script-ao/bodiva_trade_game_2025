import React from "react";
import { Footer, Button } from "../../components";
import { vectorImages } from "../../assets";

function Win() {
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
                      <span>250.000,00 Akz</span>
                    </div>
                    <div className="button_container">
                      <Button text="Recomeçar" className="btn btn_green"/>
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
