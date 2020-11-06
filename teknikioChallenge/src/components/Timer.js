import { StyleSheet, css } from 'aphrodite';
import React, { useEffect, useState } from "react";

let Timer = (props)=>{
    let {setTimer,trigger,connection} = props.sharedState
    let [seconds,setSeconds] = useState(10)
    const [isActive, setIsActive] = useState(false);

    const styles = StyleSheet.create({
        timer:{
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            alignItems:'center',
            height:'150px',
            width:'150px',
            backgroundColor:'#738283',
            borderRadius:'10px',
            color:'#D6D6B1',
            fontFamily:'helvetica',
            
        },
        select:{
            display:'flex',
            flexDirection:'column'
        },
        seconds:{
            fontSize:'40px',
            margin:'0px'
        }
    })
    useEffect(() => {
        let interval,timeout = null;
        if(trigger && connection){setIsActive(true)}
        if (isActive) {
            interval = setInterval(() => {
                if(seconds!=0){setSeconds(seconds - 1)}
                if(seconds === 1){
                    setIsActive(false)
                    setTimer(true)
                    timeout = setTimeout(()=>{
                        setTimer(false)
                    },1000)
                }
            }, 1000);
        } 
        else if (!isActive && seconds !== 0) {clearInterval(interval)}
        return () => {clearInterval(interval)}
    },[isActive,seconds,trigger,connection]);

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

    //make icons a function
    return (
        <div className={css(styles.timer)}>
            <i onClick={()=>{incrTime()}} class="fas fa-chevron-up fa-3x" style={{cursor:'pointer'}}></i>
            <h1 className={css(styles.seconds)}>{seconds}</h1>
            <i onClick={()=>{decrTime()}} class="fas fa-chevron-down fa-3x" style={{cursor:'pointer'}}></i>
            
        </div>
    )
}

export default Timer