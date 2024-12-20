import { useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [result, setResult] = useState('');
	const [isResult, setIsResult] = useState(false);

	const buttons = ['C', '-', '+', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '='];

	const reset = () => {
		setOperand1('');
		setOperator('');
		setOperand2('');
		setResult('');
		setIsResult(false);
	};

	const inputNumber = value => {
		if (operator === '') {
			setOperand1(operand1 + value);
		} else {
			setOperand2(operand2 + value);
		}
	};

	const calculateResult = () => {
		if (operator === '+') {
			setResult(Number(operand1) + Number(operand2));
		} else if (operator === '-') {
			setResult(Number(operand1) - Number(operand2));
		}
		setOperand1('');
		setOperand2('');
		setOperator('');
		setIsResult(true);
	};

	const handleClick = btn => {
		if (btn === '=') {
			calculateResult();
		} else if (btn === 'C') {
			reset();
		} else if (btn === '-') {
			setOperator('-');
		} else if (btn === '+') {
			setOperator('+');
		} else {
			inputNumber(btn);
		}
	};

	return (
		<div className={styles.app}>
			<div className={styles.wrapper}>
				<div className={styles.screen}>
					{isResult ? (
						<span style={{ color: 'chartreuse' }}>{result}</span>
					) : (
						`${operand1}${operator}${operand2}`
					)}
				</div>
				<div className={styles.buttons}>
					{buttons.map((btn, i) => (
						<button
							key={i}
							onClick={() => {
								handleClick(btn);
							}}
						>
							{btn}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};
