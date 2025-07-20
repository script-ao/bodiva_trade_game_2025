import React from "react";
import { Footer, Button } from "../../components";
import { vectorImages } from "../../assets";

function Register() {
  return (
    <React.Fragment>
      <section className="re_wrapper">
        <main className="re_container">
          <div className="re_board-wrapper">
            <div className="re_board-container">
              <div className="re_board">
                <div className="board">
                  <div className="re_board-content">
                    <div className="re_text-description">
                      <span>INSIRA OS SEUS DADOS</span>
                    </div>

                    <div className="re_capital-container">
                      <div className="button_container">
                        <Button
                          text="50.000,00 AKZ"
                          className="btn btn_green"
                        />
                      </div>
                      <div className="button_container">
                        <Button
                          text="100.000,00 AKZ"
                          className="btn btn_green"
                        />
                      </div>
                    </div>
                    <div className="button_container">
                      <Button text="Enviar" className="btn btn_green" />
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

export { Register };
