import { useContext } from "react"
import useContextApi from "./Usecontext"

const UseCustomsApi = () => {
    return (
        useContext(useContextApi)
    )
}

export default UseCustomsApi