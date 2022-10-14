import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import ModelsServices from '../api/models.services';

import { labelsDataInterface } from '../interfaces/counter.interface';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = () => {

    // ---------- datepicker ---------- //
    const [startDate, setStartDate] = useState<any>();

    // ---------- provide static labels ---------- //
    const [labels, setLabels] = useState<any[]>(
        [
            'Toyota', 'Daihatsu', 'Honda', 'BMW', 'Mitsubishi', 'Cadillac', 'GT', 'Ferrari', 'Lamborghini', 'McLaren'
        ]
    );

    // ---------- provide dynamic labels ---------- //
    const [customLabels, setCustomLabels] = useState<any[]>(
        [
            'Toyota', 'Daihatsu', 'Honda', 'BMW', 'Mitsubishi', 'Cadillac', 'GT', 'Ferrari', 'Lamborghini', 'McLaren'
        ]
    );

    // ---------- chart's labels data state ---------- //
    const [labelsData, setLabelsData] = useState<labelsDataInterface[]>([]);
    const [check, setCheck] = useState<boolean>(true);

    // ---------- handle check filter ---------- //
    const handleChecked = (e: any) => {
        labelsData.length = 0;
        const label = labels[e.target.dataset.id];
        let newCustomLabels = customLabels.filter(item => item !== label);
        if (e.target.checked) newCustomLabels.push(label);
        setCustomLabels(newCustomLabels);
        loopGetModel();
    };

    // ---------- handle change on year ---------- //
    const handleChangeYear = (e: React.FormEvent<HTMLInputElement>) => {
        var year = e.currentTarget.value;
        setStartDate(year)
        loopGetModel();
        console.log(year)
    }

    // ---------- get models by manufacturer ---------- //
    const getModelsByMake = async (manufacturer: string) => {
        await ModelsServices.getModelsByMake(manufacturer)
            .then((response) => {
                // labelsData.push({ name: manufacturer, count: response.data.Count })
                setLabelsData((prev) => [
                    ...prev,
                    {
                        name: manufacturer,
                        count: response.data.Count,
                    }
                ])
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // ---------- get models by manufacturer and year ---------- //
    const getModelsByMakeAndModelYear = async (manufacturer: string, modelYear: number) => {
        await ModelsServices.getModelsByMakeAndModelYear(manufacturer, modelYear)
            .then((response) => {
                // labelsData.push({ name: manufacturer, count: response.data.Count })
                setLabelsData((prev) => [
                    ...prev,
                    {
                        name: manufacturer,
                        count: response.data.Count,
                    }
                ])

                // console.log("called")
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // NOTES: There is no options from API to get models by manufacturer and model year with "0" as model year as if in query, 
    // so that I declared 2 function for get models only by manufacturer and get models by manufacturer and model year

    // ---------- loop to get every length of manufacturers ---------- //
    const loopGetModel = () => {
        if (startDate) {
            for (const e of customLabels) {
                getModelsByMakeAndModelYear(e, startDate);
            }
        } else {
            for (const e of customLabels) {
                getModelsByMake(e);
            }
        }
    }

    useEffect(() => {
        loopGetModel();
    }, [])

    // ---------- sort labels data state by name ---------- //
    labelsData.sort((a: { name: string; }, b: { name: string; }) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

    // ---------- set labels data to delete duplicates using ES6 Set ---------- //
    // let set = new Set(labelsData.map((data: any) => data.name));
    // let setValues = set.values();
    // let result: any[] = Array.from(setValues);

    // ---------- option for the chart ---------- //
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom' as const,
            },
            title: {
                display: true,
                text: 'Amount of Models Cars',
            },
        },
    };

    // ---------- data for the chart ---------- //
    const data = {
        labels: labelsData.map((data: { name: any; }) => data.name),
        datasets: [
            {
                label: 'Car',
                data: labelsData.map((data: { count: any; }) => data.count),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return (
        <div className="row">
            <div className="col">
                <div>
                    Notes: The Checkbox filter feature need several clicks to be able to fully functional
                </div>
                <form>
                    {labels.sort().map((data, id) =>
                        <div className="form-check" key={id}>
                            <input className="form-check-input" defaultChecked={check} data-id={id} onChange={handleChecked} type="checkbox" value={data} id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                {data}
                            </label>
                        </div>
                    )}
                    <div className="input-group mb-3">
                        <label className='py-2 me-2'>Model Year: </label>
                        <input className="form-check-input w-50 p-3 rounded" type="number" min="1995" max="2022" defaultValue="2015" onChange={handleChangeYear} />
                    </div>
                </form>
            </div>
            <div className="col">
                <Bar options={options} data={data} />
            </div>
        </div>
    )
}

export default BarChart;