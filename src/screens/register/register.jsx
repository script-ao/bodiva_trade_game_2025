import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer, Button } from "../../components";

function Register() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/market");
  }
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

                    <div className="re_form-container">
                      <form action="market" method="post" onSubmit={handleClick}>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          placeholder="Nome:*"
                          required
                        />

                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email:*"
                          required
                        />

                        <div className="re_button_container">
                          <Button
                            text="Enviar"
                            className="btn btn_green"
                          />
                        </div>
                      </form>
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
