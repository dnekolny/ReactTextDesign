
const RadioButton = ({ label, id, disabled, ...rest }) => {

    const stateChar = '°';

    return (
        <div style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center"
        }}>

            <input id={id} type="radio" disabled={disabled} {...rest} />
            <span className="stateChar">{stateChar}</span>
            <label htmlFor={id} disabled={disabled}>
                {label}
            </label>
        </div>
    );
};

export default RadioButton;
