const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
    return (
        <div className='form-row'>
            <label htmlFor={name} className='form-label'>
                {labelText || name}
            </label>
            <select
                name={name}
                value={value}
                onChange={handleChange}
                className='form-select'
            >
                {list.map((newsSource, index) => {
                    return (
                        <option key={index} value={newsSource.id}>
                            {newsSource.name}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default FormRowSelect
