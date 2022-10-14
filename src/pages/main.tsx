import { useEffect, useState } from "react";

import MakesServices from "../api/makes.services";
import ModelsServices from "../api/models.services";

import Navbar from "../components/navbar";
import CounterCard from "../components/counterCard";
import BarChart from "../components/barChart";

const Main = () => {
    const [counterMaker, setCounterMaker] = useState();
    const [counterModels, setCounterModels] = useState();

    // ---------- get car's maker ---------- //
    const getMaker = () => {
        MakesServices.getAllMakes()
            .then((response) => {
                // @ts-ignore
                setCounterMaker(response.data.Results.length);
                // @ts-ignore
                // console.log(response.data.Results.length);
                // console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })

    }

    // ---------- get car's models ---------- //
    const getModels = () => {
        ModelsServices.getModelsByMake()
            .then((response) => {
                // @ts-ignore
                setCounterModels(response.data.Results.length);
                // @ts-ignore
                // console.log(response.data.Results.length);
                // console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getMaker();
        getModels();
    }, [])

    return (
        <div>
            <Navbar />
            <div className="container p-4">
                <div className="d-flex flex-row align-items-center justify-content-around">
                    <div className="text-center">
                        <CounterCard title="Maker" name="Maker" counter={counterMaker} />
                    </div>
                    <div className="text-center">
                        <CounterCard title="Models" name="Models" counter={counterModels} />
                    </div>
                </div>

                <div className="card p-4 d-flex flex-row align-items-center justify-content-center mt-4">
                    <div className="w-100">
                        <BarChart />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main;