import React, { createContext, useContext, useState, useEffect } from 'react';

const GameContext = createContext();

const initialState = {
  nome: '',
  email: '',
  capitalInicial: 0,
  saldoAtual: 0,
  jogadas: 0,
  tempo: 10, // segundos
  investimento: 10000,
  status: 'playing', // 'playing' | 'win' | 'lose'
};

function getStorage() {
  try {
    const data = localStorage.getItem('bodiva_game');
    return data ? JSON.parse(data) : initialState;
  } catch {
    return initialState;
  }
}

function setStorage(state) {
  localStorage.setItem('bodiva_game', JSON.stringify(state));
}

export function GameProvider({ children }) {
  const [state, setState] = useState(getStorage());
  const [isCounting, setIsCounting] = useState(false);
  const [countdown, setCountdown] = useState(state.tempo);
  const [betChoice, setBetChoice] = useState(null); // 'up' | 'down'
  const [result, setResult] = useState(null); // 'up' | 'down' | null

  // Persist state
  useEffect(() => {
    setStorage(state);
  }, [state]);

  // Reset countdown when tempo changes or new round
  useEffect(() => {
    setCountdown(state.tempo);
  }, [state.tempo, state.jogadas]);

  // Countdown logic
  useEffect(() => {
    if (isCounting && countdown > 0) {
      const timer = setTimeout(() => setCountdown(c => c - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (isCounting && countdown === 0) {
      finishRound();
    }
  }, [isCounting, countdown]);

  // Handlers
  const setUser = (nome, email) => {
    setState(s => ({ ...s, nome, email }));
  };

  const setCapital = (capital) => {
    setState(s => ({ ...s, capitalInicial: capital, saldoAtual: capital }));
  };

  const setTempo = (delta) => {
    setState(s => {
      let t = s.tempo + delta;
      if (t < 5) t = 5;
      if (t > 30) t = 30;
      return { ...s, tempo: t };
    });
  };

  const setInvestimento = (delta) => {
    setState(s => {
      let inv = s.investimento + delta;
      if (inv < 10000) inv = 10000;
      if (inv > s.saldoAtual) inv = s.saldoAtual;
      inv = Math.floor(inv / 10000) * 10000;
      return { ...s, investimento: inv };
    });
  };

  const startRound = (choice) => {
    if (isCounting || state.saldoAtual < state.investimento) return;
    setBetChoice(choice);
    setIsCounting(true);
    setResult(null);
  };

  const finishRound = () => {
    // Simula resultado
    const random = Math.random() > 0.5 ? 'up' : 'down';
    setResult(random);
    let saldo = state.saldoAtual;
    let jogadas = state.jogadas + 1;
    if (betChoice === random) {
      saldo += state.investimento; // Ganha o valor investido (totaliza o dobro)
    } else {
      saldo -= state.investimento; // Perde o investido
    }
    let status = 'playing';
    if (jogadas >= 5) {
      status = saldo > state.capitalInicial ? 'win' : 'lose';
    }
    setState(s => ({
      ...s,
      saldoAtual: saldo,
      jogadas,
      status,
    }));
    setIsCounting(false);
    setBetChoice(null);
  };

  const resetGame = () => {
    localStorage.removeItem('bodiva_game');
    setState(initialState);
    setIsCounting(false);
    setCountdown(initialState.tempo);
    setBetChoice(null);
    setResult(null);
  };

  return (
    <GameContext.Provider
      value={{
        ...state,
        isCounting,
        countdown,
        betChoice,
        result,
        setUser,
        setCapital,
        setTempo,
        setInvestimento,
        startRound,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
