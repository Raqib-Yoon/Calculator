import React, { useState } from 'react'
import './style.css';
const Calculator = () => {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    // Create numbers from 1 to 9

    const createDigits = () => {
        const digits = [];
        for (let i = 1; i < 10; i++) {
            digits.push(
                <button
                    onClick={() => createCalc(i.toString())}
                    key={i}
                >{i}</button>
            )
        }
        return digits;
    }
    
    const ops = ["*", "/", "-", "+", "."];

    // adding value's to the calculator

    const createCalc = (value) => {

        if ((ops.includes(value) && calc === "") || (ops.includes(value) && ops.includes(calc.slice(-1)))) {
            return;
        }

        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString())
        }
        setCalc(calc + value);
    }

    // calculate all the data

    const calculate = () => {
        setCalc(eval(calc).toString());
    }

    // deleting the data

    const deleteCalc = () => {
        if (calc === '') {
            setResult(0)
            return;
        }
        // const value = calc.slice(0, -1);
        setCalc(calc.slice(0,-1));
    }

    return (
        <>
            <div className="app">
                <div className="calculator">
                    <div className="display">
                        {result ? <span>({result})</span> : ""}  {calc || '0'}
                    </div>
                    <div className="operators">
                        <button onClick={() => createCalc("*")}>*</button>
                        <button onClick={() => createCalc("+")}>+</button>
                        <button onClick={() => createCalc("-")}>-</button>
                        <button onClick={() => createCalc("/")}>/</button>

                        <button onClick={() => deleteCalc()} >DEL</button>
                    </div>
                    <div className="digits">
                        {createDigits()}
                        <button onClick={() => createCalc("0")} >0</button>
                        <button onClick={() => createCalc(".")} >.</button>
                        <button onClick={() => calculate()} > = </button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator;