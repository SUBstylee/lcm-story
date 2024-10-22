const Select = ({ options, label, selectId, setNum, num }) => {
	const handleSelect = (e) => {
		setNum(Number(e.target.value));
	};
	return (
		<div>
			<label htmlFor={selectId}>{label}</label>
			<select id={selectId} onChange={handleSelect} value={num}>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
