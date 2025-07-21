Claro, Eládio! Aqui está um README.md profissional, claro e bem estruturado para o teu projeto React do Jogo do Investidor da Bodiva, pronto para colocar na raiz do repositório:

⸻


# 📈 Jogo do Investidor — Bodiva (FILDA 2025)

Este é um jogo interativo educativo desenvolvido para a **Bodiva (Bolsa de Valores de Angola)**, com apresentação na **FILDA 2025**. O objetivo é permitir aos visitantes simular experiências de investimento em tempo real de forma lúdica, usando dados e valores fictícios.

---

## 🧠 Sobre o Jogo

O jogo foi desenvolvido com **React** e simula uma experiência simplificada de trading, com foco em tomada de decisão, risco e recompensa. O jogador passa por diferentes etapas — desde o registo até decisões de investimento — e no final, ganha ou perde com base nas suas escolhas e em resultados aleatórios simulando o mercado.

---

## 🧩 Fluxo do Jogo

1. **Welcome** — Tela inicial com botão "Invista Agora"
2. **Introdução** — Explica brevemente a experiência
3. **Register** — O jogador insere nome e email
4. **Balance** — Seleção do capital inicial (50.000 Kz ou 100.000 Kz)
5. **Market** — Tela principal:
   - Definição do tempo da jogada (5 a 30 segundos)
   - Valor a investir (mínimo 10.000 Kz, máximo saldo atual)
   - Botões “Subir” ou “Baixar”
6. **Win** — Tela de vitória, caso o jogador termine com saldo maior que o capital inicial
7. **Lose** — Tela de derrota, caso o jogador perca dinheiro

---

## ⚙️ Tecnologias Usadas

- [React](https://reactjs.org/)
- `useState`, `useEffect` (hooks)
- `localStorage` para persistência temporária
- Roteamento opcional com React Router

---

## 📌 Funcionalidades

- Navegação entre telas
- Controle de jogadas (máximo de 5 por jogador)
- Simulação de gráfico (resultado aleatório)
- Lógica de ganhos e perdas por jogada
- Controlo do tempo e do valor do investimento
- Reset completo dos dados ao reiniciar

---

## ♻️ Comportamento no Evento

- O jogo é feito para ser usado por vários visitantes no mesmo dispositivo.
- Ao clicar em “Recomeçar”:
  - Todos os dados no `localStorage` são eliminados
  - O estado do jogo volta à estaca zero
  - Permite um novo jogador começar do início

---

## 📁 Estrutura Recomendada

src/
├── components/
│   └── TimerInput.jsx
│   └── InvestmentInput.jsx
│   └── MarketControls.jsx
├── screens/
│   └── Welcome.jsx
│   └── Introduction.jsx
│   └── Register.jsx
│   └── Balance.jsx
│   └── Market.jsx
│   └── Win.jsx
│   └── Lose.jsx
├── context/
│   └── GameContext.jsx (opcional)
├── App.jsx
├── index.jsx

---

## 🧪 Como executar

```bash
# Instala as dependências
npm install

# Inicia a aplicação localmente
npm run dev


⸻

🛡️ Nota

Este jogo é totalmente fictício e não representa qualquer plataforma real de investimento. Nenhum valor real está envolvido.

⸻

👨🏽‍💻 Desenvolvido por

Eládio Tchinhemba
Para a Bodiva — Bolsa de Valores de Angola
Apresentado na FILDA 2025
