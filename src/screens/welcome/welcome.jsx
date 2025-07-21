import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer, Button } from "../../components";
import { vectorImages } from "../../assets";

function Welcome() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/introdution");
  }
  return (
    <React.Fragment>
      <section className="we_wrapper">
        <main className="we_container">
          <div className="we_board-wrapper">
            <div className="we_board-container">
              <div className="we_board">
                <div className="we_board-content">
                  <div className="we_text-container">
                    <div className="we_text_title-container">
                      <span>Bem-vindo</span>
                      <span>à BODIVA</span>
                    </div>
                    <div className="we_text_subtitle-container">
                      <span>O Jogo do</span>
                      <span>Investidor</span>
                    </div>
                  </div>
                  <div className="button_container">
                    <Button text="Investir agora" className="btn btn_green" onClick={handleClick}/>
                  </div>
                </div>
                <div>
                  <div className="we_logo-container">
                    <img src={vectorImages.logo.brand_logo} alt="" />
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

export { Welcome };
