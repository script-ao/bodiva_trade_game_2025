import React from "react";
import { Footer, Button } from "../../components";
import { vectorImages } from "../../assets";

function Introdution() {
  return (
    <React.Fragment>
      <section className="in_wrapper">
        <main className="in_container">
          <div className="in_board-wrapper">
            <div className="in_board-container">
              <div className="in_board">
                <div className="board">
                  <div className="in_board-content">
                    <div className="in_logo-container">
                      <img src={vectorImages.logo.brand_logo} alt="" />
                    </div>
                    <div className="in_text-description">
                      <span>Estás prestes a viver uma</span>
                      <span>experiência de investimento</span>
                      <span>em tempo real.</span>
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

export { Introdution };
