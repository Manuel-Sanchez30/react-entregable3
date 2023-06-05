import { useRef } from "react"
import getRandomNumber from "../utils/getRandomNumber"


const FormSearch = ({setIdLocation}) => {

    const ideLOcationValue = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const inputValue = ideLOcationValue.current.value.trim()

        if(inputValue === ""){
            setIdLocation(getRandomNumber(126))
        }else{
            setIdLocation(inputValue)

        }

    }

    return (
        <form className="input-btn" onSubmit={handleSubmit}>
        
            <input className="input-search" ref={ideLOcationValue} type="text" placeholder="Enter id location" />
            <button className="input-search-btn">Search</button>
        
        </form>
    )
}

export default FormSearch