import { StyleSheet, css } from 'aphrodite';
import React, { useEffect, useRef, useState } from "react";

let Trigger =(props)=>{
    const styles = StyleSheet.create({
        trigger:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            height:'100px',
            width:'100px',
            border:'solid',
            
        },
        button:{
            color:'green',  
        }
    })
    let triggerTheTrigger = () =>{
        let {setTrigger} = props.sharedState
        setTrigger(true)
        const timer = setTimeout(() => {
            setTrigger(false)
        }, 400);
    }
    return(
        <div className={css(styles.trigger)}>
            <button onClick={()=>{triggerTheTrigger()}} className={css(styles.button)}>activate</button>
        </div>
    )
}

export default Trigger