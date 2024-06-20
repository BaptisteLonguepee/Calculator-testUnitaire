import React, { useState } from 'react';

function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);

    const handleInput = (e) => setInput(e.target.value);

    const calculate = () => {
        try {
            // Valider l'expression pour ne contenir que des chiffres et des opérateurs mathématiques de base
            if (/^[0-9+\-*/(). ]+$/.test(input)) {
                const res = eval(input); // Évalue l'expression mathématique dans l'input
                setResult(res);
            } else {
                setResult('Invalid input');
            }
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div>
            <input type="text" value={input} onChange={handleInput} data-testid="calculator-input" />
            <button onClick={calculate} data-testid="calculator-button">Calculate</button>
            {result !== null && <div data-testid="calculator-result">Result: {result}</div>}
        </div>
    );
}

export default Calculator;
