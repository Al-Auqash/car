import axios from "axios";
import { useEffect, useState } from "react";
import { Vin } from "../interfaces/interface";

const Main = () => {
    const [car, setCar] = useState<Vin[]>();
    const getCar = () => {
        axios
            .get('https://vpic.nhtsa.dot.gov/api/vehicles/decodevinextended/5UXWX7C5*BA?format=json&modelyear=2011')
            .then((response) => {
                // @ts-ignore
                setCar(response.data.Results);
                // @ts-ignore
                console.log(response.data.Results);
            })
            .catch((error) => {
                console.log(error);
            })

    }

    useEffect(() => {
        getCar()
    }, [])
    return (
        <div>
            {car?.map((data) => (
                <p>{data.Variable}</p>
            ))}
        </div>
    )
}

export default Main;