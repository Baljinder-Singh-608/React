const Input = ({label, type, id, name, infoText, autoComplete, onChange, value, classN, error}) => {
    return (
        <div className={classN}>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
            {label}
            </label>
            <input
                type={type}
                name={name}
                id={id}
                autoComplete ={autoComplete}
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-0.5 px-2 focus:border-indigo-500"
                placeholder={infoText}
                onChange={onChange}
                value={value}
            />
            { error &&
            <span className="text-xs text-red-600">{error}</span> }
        </div>
    )
}
export default Input