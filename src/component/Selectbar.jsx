function Selectbar({name, options, onHandle, currValue}) {
    return (
        <div>
            <label htmlFor={name}>{name}</label>
            <select id={name} name={name} onChange={onHandle} value={currValue} >
                <option  defaultValue={null} >{name}</option>
                {
                    options.map((ele,i)=>{
                        return <option key={i} value={ele}>{ele}</option>
                    })
                }
            </select>
        </div>
    )
}

export default Selectbar
