import { useSelector, useDispatch } from "react-redux";
import './Counter.css'

export default function Counter (){
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    const show = useSelector((state) => state.showCounter);

    const incrementHandler = () => {
        dispatch({ type: "increment" });
    }

    const increaseHandler = (num) => {
        return{ type: "increase", amount: num };
    }

    const decrementHandler = () => {
        dispatch({ type: "decrement" });
    }

    const zeroHandler = () => {
        dispatch({ type: "returnToZero" });
    }

    const toggleCounterHandler = () => {
        dispatch({ type: "toggle" });
    }

    return(
        <div className="counter">
            {show && <h3>{counter}</h3>}
            <div className="btn-container">
                <button className="btn-count" onClick={incrementHandler}>+</button>
                <button className="btn-count" onClick={() => dispatch(increaseHandler(5))}>+ 5</button>
                <button className="btn-count" onClick={() => dispatch(increaseHandler(10))}>+ 10</button>
                <button className="btn-count" onClick={decrementHandler}>-</button>
                <button className="btn-count" onClick={zeroHandler}>0</button>
            </div>
            <button className="btn-toggle" onClick={toggleCounterHandler}>Toggle Counter</button>
        </div>
    )
}