import { StyleSheet, css } from 'aphrodite';
import React, { useEffect, useRef, useState } from "react";

let Trigger =(props)=>{
    const styles = StyleSheet.create({
        trigger:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            height: '150px',
            width:'150px',
            backgroundColor:'#738283',
            borderRadius:'10px',
        },
        button:{
            backgroundColor:'#738283',  
            borderRadius:'10px',
            height:'90%',
            width:'90%',
            ':focus': {outline:0}
        }
    })

    let triggerTheTrigger = () =>{
        let {setTrigger} = props.sharedState
        setTrigger(true)
        const timer = setTimeout(() => {
            setTrigger(false)
        }, 1000);
    }
    return(
        <div className={css(styles.trigger)}>
            <button onClick={()=>{triggerTheTrigger()}} className={css(styles.button)}></button>
        </div>
    )
}

export default Trigger