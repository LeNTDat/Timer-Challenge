import { forwardRef, useImperativeHandle, useRef } from 'react';
import React from 'react';
const ResultModal = forwardRef(function ResultModal({ result, targetTimer, timerRemain, handleReset }, ref) {
    const dialogRef = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogRef.current.showModal();
            }
        }
    });

    return <dialog ref={dialogRef} className="result-modal" >
        <h2>You {timerRemain <= 0 ? 'Lost' : 'Won'}</h2>
        <p>The target time was <strong>{targetTimer} seconds.</strong></p>
        <p>You stopped the timer with <strong>{timerRemain / 1000} seconds left</strong></p>
        <form method="dialog">
            <button onClick={handleReset}>Close</button>
        </form>
    </dialog>;
})

export default ResultModal;