import { StyleSheet, css } from 'aphrodite';
import React, { useEffect, useRef, useState } from "react";

let Debug=(props)=>{
    let {timer,trigger} = props.sharedState
    const styles = StyleSheet.create({
        debug:{
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            alignItems:'center',
            height:'300px',
            width:'300px',
            border:'solid',
            
        },
    })
    return(
        <div className={css(styles.debug)}>
            <h1>TRIGGER {trigger.toString()}</h1>
            <h1>TIMER {timer.toString()}</h1>
        </div>
    )
}

export default Debug