import React, { useState } from 'react';

function App() {
	const [result, setResult] = useState(0);
	const [input, setInput] = useState('');
	const [lastAction, setLastAction] = useState('');
	const [formula, setFormula] = useState('');

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	const handleAddition = () => {
		setResult(result + Number(input));
		setFormula(formula + '+');
		setInput('');
		setLastAction('+');
	};

	const handleSubtraction = () => {
		if (result) setResult(result - Number(input));
		else setResult(Number(input));
		setFormula(formula + '-');
		setInput('');
		setLastAction('-');
	};

	const handleReset = () => {
		setResult(0);
		setInput('');
		setFormula('');
		setLastAction('');
	};

	const handleEqual = () => {
		if (lastAction !== '=') {
			let res = 0;
			if (lastAction === '+') res = result + Number(input);
			else if (lastAction === '-') res = result - Number(input);

			setResult(res);
			setInput('');
			setFormula(formula + '=' + res);
			setLastAction('=');
		}
	};

	const handleNumber = (number) => {
		if (lastAction == '=') {
			handleReset();
		}
		setInput(input + number);
		setFormula(formula + number);
	};

	const classColor = () => (lastAction === '=' ? 'red' : 'black');

	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

	const buttonList = numbers.map((num) => (
		<>
			<button key={num} onClick={() => handleNumber(num)}>
				{num}
			</button>
			{(num + 1) % 3 === 1 && num !== 0 ? <br /> : null}
		</>
	));

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}
		>
			<div style={{ border: '1px solid black', padding: '20px' }}>
				<h1>Калькулятор</h1>
				<p className={classColor()}>Результат: {result} </p>
				<p>Формула: {formula}</p>
				<input type="number" value={input} />
				<br />
				{buttonList}
				<br />
				<button onClick={handleReset}>C</button>
				<button onClick={handleAddition}>+</button>
				<button onClick={handleSubtraction}>-</button>
				<button onClick={handleEqual}>=</button>
			</div>
		</div>
	);
}

export default App;
