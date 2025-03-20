import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const countDownTime = 10;
const secondPoint = 1000;


export default function TimerChallenge(props) {

    const [timeRemain, setTimeRemain] = useState(props.targetTime * secondPoint)
    const timer = useRef();
    const dialogRef = useRef();

    let timerIsActive = timeRemain > 0 && timeRemain < props.targetTime * secondPoint;

    if (timeRemain <= 0) {
        clearInterval(timer.current);
        dialogRef.current.open();
    }
    const handleStart = () => {
        timer.current = setInterval(() => {
            setTimeRemain(prev => prev - countDownTime)
        }, countDownTime);
    }

    const handleReset = ()=>{
        setTimeRemain(props.targetTime * 1000);
    }

    const handlerStop = () => {
        clearInterval(timer.current);
        dialogRef.current.open();
    }

    return <>
        <ResultModal
            ref={dialogRef}
            targetTimer={props.targetTime}
            timerRemain={timeRemain}
            handleReset = {handleReset}
        />
        <section className="challenge">
            <h2>{props.title}</h2>
            <p className="challenge-time">
                {props.targetTime} second{props.targetTime > 1 && 's'}
            </p>
            <p>
                <button onClick={timerIsActive ? handlerStop : handleStart}>
                    {!timerIsActive ? 'Start' : 'Stop'} Challenge
                </button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
                {timerIsActive ? 'Time is running' : 'Timer inactive'}
            </p>
        </section>
    </>
}