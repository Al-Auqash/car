import { counter } from "../interfaces/counter.interface";

const counterCard = (props: counter) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">The Amount of Car {props.name} is</h6>
                    <h5 className="card-text">{props.counter}</h5>
                </div>
            </div>
        </div>
    )
}
export default counterCard;