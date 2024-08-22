


const Input = ({name, type, value, handleChange}) => {
    return(
        <>
            <label htmlFor={name}>{name}</label>
            <input name={name} type={type} value={value} onChange={handleChange} />
        </>
    );
}

export default Input;