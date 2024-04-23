import "./App.css";
import { useState, useRef, useEffect, useLayoutEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [sectionStyle, setSectionStyle] = useState({});
  const sectionRef = useRef();

  useLayoutEffect(() => {
    const random = Math.floor(Math.random() * 500);

    for (let i = 0; i <= 100000000; i++) {
      if (i === 100000000) setSectionStyle({ paddingTop: `${random}px` });
    }
  }, [number]);
  return (
    <main className="App">
      <section ref={sectionRef} style={sectionStyle}>
        <p>{number}</p>
        <button onClick={() => setNumber((n) => n + 1)}>+</button>
        <button onClick={() => setNumber((n) => n - 1)}>-</button>
      </section>
    </main>
  );
}

export default App;
