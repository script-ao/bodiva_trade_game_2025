// components/CandlestickChart.jsx
import React, { useRef, useEffect } from "react";
import { createChart, CandlestickSeries } from "lightweight-charts";

function CandlestickChart() {
  const chartRef = useRef(null);
  const candleSeriesRef = useRef(null);
  const data = useRef([
    { time: Math.floor(Date.now() / 1000) - 60 * 5, open: 70, high: 72, low: 68, close: 71 },
  ]);

  useEffect(() => {
    const chart = createChart(chartRef.current, {
      width: chartRef.current.clientWidth,
      height: chartRef.current.clientHeight,
      layout: {
        background: { color: "#0e1117" },
        textColor: "#d1d4dc",
      },
      grid: {
        vertLines: { color: "#2B2B43" },
        horzLines: { color: "#363C4E" },
      },
      priceScale: {
        borderColor: "#485c7b",
      },
      timeScale: {
        borderColor: "#485c7b",
        timeVisible: true,
        secondsVisible: true,
        barSpacing: 15
      },
    });

    const candleSeries = chart.addSeries(CandlestickSeries, {
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });

    candleSeries.setData(data.current);
    candleSeriesRef.current = candleSeries;

    // Adicionar novos candles aleatórios
    const interval = setInterval(() => {
      const last = data.current[data.current.length - 1];
      const time = last.time + 60; // próximo minuto
      const open = last.close;
      const close = +(open + (Math.random() - 0.5) * 2).toFixed(2);
      const high = Math.max(open, close) + Math.random();
      const low = Math.min(open, close) - Math.random();
      const newCandle = {
        time,
        open,
        high: +high.toFixed(2),
        low: +low.toFixed(2),
        close,
      };
      data.current.push(newCandle);
      candleSeriesRef.current.update(newCandle);
    }, 2000);

    // Responsivo
    const resizeObserver = new ResizeObserver(() => {
      setTimeout(() => {
        if (chartRef.current) {
          chart.applyOptions({
            width: chartRef.current.clientWidth,
            height: chartRef.current.clientHeight,
          });
        }
      }, 0);
    });
    resizeObserver.observe(chartRef.current);

    return () => {
      clearInterval(interval);
      resizeObserver.disconnect();
      chart.remove();
    };
  }, []);

  return (
    <div
      ref={chartRef}
      className="c_ca_wrapper"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export { CandlestickChart };
