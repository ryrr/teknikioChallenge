import { StyleSheet, css } from 'aphrodite';
import React, { useEffect, useRef, useState } from "react";

let Timer = (props)=>{
    let {setTimer,trigger} = props.sharedState
    let [seconds,setSeconds] = useState(10)
    const [isActive, setIsActive] = useState(false);

    const styles = StyleSheet.create({
        timer:{
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            alignItems:'center',
            height:'100px',
            width:'100px',
            border:'solid',
            
        },
    })
    useEffect(() => {
        let interval,interval2 = null;
        if(trigger){setIsActive(true)}
        if (isActive) {
            interval = setInterval(() => {
                if(seconds!=0){setSeconds(seconds - 1)}
                if(seconds === 0){
                    setIsActive(false)
                    setTimer(true)
                    interval2 = setInterval(()=>{
                        setTimer(false)
                    },1000)
                }
            }, 1000);
        } 
        else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    },[isActive,seconds,trigger]);

    let incrTime = ()=>{
        if(seconds<10){
            setSeconds(seconds+1)
        }
    }
    let decrTime = ()=>{
        if(seconds>1){
            setSeconds(seconds-1)
        }
    }
    return (
        <div className={css(styles.timer)}>
            <h1>{seconds}</h1>
            <button onClick={()=>{incrTime()}}>incr</button>
            <button onClick={()=>{decrTime()}}>decr</button>
        </div>
    )
}

export default Timer