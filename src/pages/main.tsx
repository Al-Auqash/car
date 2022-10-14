import { useEffect, useState } from "react";

import MakesServices from "../api/makes.services";
import ModelsServices from "../api/models.services";

import Navbar from "../components/navbar";
import CounterCard from "../components/counterCard";
import BarChart from "../components/barChart";

const Main = () => {
    const [counterMaker, setCounterMaker] = useState();
    const [counterModels, setCounterModels] = useState();
    const [labels, setLabels] = useState<any[]>(
        [
            'Toyota', 'Daihatsu', 'Honda', 'BMW', 'Mitsubishi', 'Cadillac', 'GT', 'Ferrari', 'Lamborghini', 'McLaren'
        ]
    );
    const [customLabels, setCustomLabels] = useState<any[]>(
        [
            'Toyota', 'Daihatsu', 'Honda', 'BMW', 'Mitsubishi', 'Cadillac', 'GT', 'Ferrari', 'Lamborghini', 'McLaren'
        ]
    );
    const [check, setCheck] = useState<boolean>(true);

    //get car's maker
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

    //get car's models
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

    //handle change for form filter
    const handleChecked = (e: any) => {
        const label = labels[e.target.dataset.id];
        let newCustomLabels = customLabels.filter(item => item !== label);
        if (e.target.checked) newCustomLabels.push(label);
        setCustomLabels(newCustomLabels);
    };

    useEffect(() => {
        getMaker();
        getModels();
    }, [])

    // console.log(customLabels)
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
                    <div>
                        <form>
                            {labels.map((data, id) =>
                                <div className="form-check" key={id}>
                                    <input className="form-check-input" defaultChecked={check} data-id={id} onChange={handleChecked} type="checkbox" value={data} id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        {data}
                                    </label>
                                </div>
                            )}
                        </form>
                    </div>
                    <div className="w-50">
                        <BarChart customLabels={customLabels} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main;