import React, { useState } from 'react';
import Card from './Card';

const Form = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (input1.length < 3 || input1.startsWith(' ')) {
      setError('Por favor chequea que la información sea correcta');
      setSubmittedData(null);
      return;
    }

    if (input2.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      setSubmittedData(null);
      return;
    }

    // Si las validaciones son exitosas, guardamos los datos y reseteamos el error
    setSubmittedData({ input1, input2 });
    setError('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Input 1"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Input 2"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>

      {error && <p>{error}</p>}

      {submittedData && <Card data={submittedData} />}
    </div>
  );
};

export default Form;
