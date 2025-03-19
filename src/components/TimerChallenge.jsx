import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge(props) {
    const [timerStart, setTimerStart] = useState(false)
    const [timerExpired, setTimerExpired] = useState(false)
    const timer = useRef();
    const dialogRef = useRef();
    const handleStart = () => {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            setTimerStart(false)
            dialogRef.current.showModal()
        }, props.targetTime * 1000);
        setTimerStart(true)
    }

    const handlerStop = () => {
        clearTimeout(timer.current);
    }

    return <>
       <ResultModal ref ={dialogRef} targetTimer={props.targetTime} result={"Lost"}/>
        <section className="challenge">
            <h2>{props.title}</h2>
            <p className="challenge-time">
                {props.targetTime} second{props.targetTime > 1 && 's'}
            </p>
            <p>
                <button onClick={timerStart ? handlerStop : handleStart}>
                    {!timerStart ? 'Start' : 'Stop'} Challenge
                </button>
            </p>
            <p className={timerStart ? 'active' : undefined}>
                {timerStart ? 'Time is running' : 'Timer inactive'}
            </p>
        </section>
    </>
}