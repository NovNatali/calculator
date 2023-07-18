import React, { useState } from 'react';
import styles from './Calculator.module.css';

const Calculator = () => {
	const [displayValue, setDisplayValue] = useState('');
	const [firstValue, setFirstValue] = useState(null);
	const [operator, setOperator] = useState(null);

	const handleNumberClick = (number) => {
		if (displayValue === 'Result') {
			setDisplayValue('');
		}
		setDisplayValue(`${displayValue}${number}`);
	};

	const handleOperatorClick = (operatorType) => {
		if (firstValue === null) {
			setFirstValue(parseInt(displayValue));
			setDisplayValue('');
			setOperator(operatorType);
		} else {
			switch (operator) {
				case '+':
					setFirstValue(firstValue + parseInt(displayValue));
					break;
				case '-':
					setFirstValue(firstValue - parseInt(displayValue));
					break;
				default:
					break;
			}
			setDisplayValue('');
			setOperator(operatorType);
		}
	};

	const handleResetClick = () => {
		setDisplayValue('');
		setFirstValue(null);
		setOperator(null);
	};

	const handleEqualsClick = () => {
		switch (operator) {
			case '+':
				setDisplayValue(`${firstValue + parseInt(displayValue)}`);
				break;
			case '-':
				setDisplayValue(`${firstValue - parseInt(displayValue)}`);
				break;
			default:
				break;
		}
		setFirstValue(null);
		setOperator(null);
	};

	const displayColor = firstValue !== null ? styles.result : '';

	return (
		<div className={styles.calculator}>
			<div className={`${styles.display} ${displayColor}`}>{displayValue || 0}</div>
			<div className={styles.row}>
				<button onClick={() => handleNumberClick(7)}>7</button>
				<button onClick={() => handleNumberClick(8)}>8</button>
				<button onClick={() => handleNumberClick(9)}>9</button>
				<button
					className={styles.operator}
					onClick={() => handleOperatorClick('+')}
				>
					+
				</button>
			</div>
			<div className={styles.row}>
				<button onClick={() => handleNumberClick(4)}>4</button>
				<button onClick={() => handleNumberClick(5)}>5</button>
				<button onClick={() => handleNumberClick(6)}>6</button>
				<button
					className={styles.operator}
					onClick={() => handleOperatorClick('-')}
				>
					-
				</button>
			</div>
			<div className={styles.row}>
				<button onClick={() => handleNumberClick(1)}>1</button>
				<button onClick={() => handleNumberClick(2)}>2</button>
				<button onClick={() => handleNumberClick(3)}>3</button>
				<button onClick={handleResetClick}>C</button>
			</div>
			<div className={styles.row}>
				<button onClick={() => handleNumberClick(0)}>0</button>
				<button onClick={handleEqualsClick}>=</button>
			</div>
		</div>
	);
};

export default Calculator;
