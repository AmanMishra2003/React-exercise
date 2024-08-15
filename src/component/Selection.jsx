import { useState } from "react"
import Selectbar from "./Selectbar"

function SelectionComponent({data}) {
    const [formData, setFormData] = useState({continent:'',country:'',state:'',city:''})

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setFormData(currData=>{
            return {
                ...currData,
                [name]: value
            }
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const address = `${formData.city}, ${formData.state}, ${formData.country}, ${formData.continent}`;
        console.log(address)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Selectbar name="continent" options={Object.keys(data)} onHandle={handleChange} currValue={formData.continent}/>
            {
                formData.continent
                &&
                <Selectbar name="country" options={Object.keys(data[formData.continent])} onHandle={handleChange} currValue={formData.country}/>
            }
            {
                formData.country
                &&
                <Selectbar name="state" options={Object.keys(data[formData.continent][formData.country])} onHandle={handleChange} currValue={formData.state}/>
            }
            {
                formData.state
                &&
                <Selectbar name="city" options={data[formData.continent][formData.country][formData.state]} onHandle={handleChange} currValue={formData.city}/>
            }
            <button type="submit">Submit</button>
        </form>
    )
}

export default SelectionComponent
