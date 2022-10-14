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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = (props: { customLabels: any[]; }) => {

    // chart's labels
    const [labels, setLabels] = useState<any[]>([props.customLabels]);

    // chart's labels data state
    const [labelsData, setLabelsData] = useState<any>([]);

    // chart's options
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

    // get models by manufacturer
    const getModelsByMake = async (manufacturer: string) => {
        await ModelsServices.getModelsByMake(manufacturer)
            .then((response) => {
                // labelsData.push({ name: manufacturer, count: response.data.Count })
                setLabelsData({ name: manufacturer, count: response.data.Count })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // labels.forEach((label) => {
    //     getModelsByMake(label);
    // })

    useEffect(() => {

        // loop to get every length of manufacturers
        for (const e of labels) {
            getModelsByMake(e);
        }

    }, [])

    // sort labels data state by name
    // labelsData.sort()
    // labelsData.sort((a: { name: string; }, b: { name: string; }) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

    // set labels data to delete duplicates
    let set = new Set(labelsData);
    let setValues = set.values();
    let result: any[] = Array.from(setValues);

    // console.log(labelsData)
    // console.log(props.customLabels)
    // console.log(result)
    // console.log(prop)
    console.log(labels)

    // data of chart
    const data = {
        labels: result.map((data: { name: any; }) => data.name),
        datasets: [
            {
                label: 'Car',
                data: result.map((data: { count: any; }) => data.count),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return (
        <Bar options={options} data={data} />
    )
}

export default BarChart;