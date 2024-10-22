const Input = ({ inputId, label, value, onChange }) => {
	return (
		<>
			<label htmlFor={inputId}>{label}</label>
			<input id={inputId} type='text' value={value} onChange={onChange} />
		</>
	);
};

export default Input;
