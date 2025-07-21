import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer, Button } from "../../components";
import { useGame } from "../../context";

function Register() {
  const navigate = useNavigate();
  const { setUser } = useGame();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setUser(nome, email);
    navigate("/balance");
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
                      <form onSubmit={handleSubmit}>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          placeholder="Nome:*"
                          required
                          value={nome}
                          onChange={e => setNome(e.target.value)}
                        />

                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email:*"
                          required
                          value={email}
                          onChange={e => setEmail(e.target.value)}
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
