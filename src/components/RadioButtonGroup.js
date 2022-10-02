import RadioButton from "./RadioButton";

const RadioButtonGroup = ({ options, onChange }) => {
    function renderOptions() {
        return options.map(({ label, name, disabled }, index) => {
            const shortenedOptionLabel = label.replace(/\s+/g, "");
            const optionId = `radio-option-${shortenedOptionLabel}`;

            return (
                <RadioButton
                    value={label}
                    label={label}
                    key={optionId}
                    id={optionId}
                    name={name}
                    disabled={disabled}
                    defaultChecked={index === 0}
                    onChange={onChange}
                />
            );
        });
    }
    return (
        <div className="t-radio-group">
            {renderOptions()}
        </div>
    );
};
export default RadioButtonGroup;
