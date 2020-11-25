import { StyleSheet, css } from 'aphrodite';
import React, { useRef } from "react";

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
            height:'50%',
            width:'50%',
            ':focus': {outline:0},
            cursor:'pointer'
        },
        link:{
            position:"absolute",
            bottom:'0px',
            left:'0px'
        }
    })
    let {setTrigger,connectionQueue,setConnectionQueue} = props.sharedState

    let triggerTheTrigger = () =>{
        setTrigger(true)
        const timer = setTimeout(() => {
            setTrigger(false)
        }, 200);
    }
    return(
        <div className={css(styles.trigger)}  >
            <button onClick={()=>{triggerTheTrigger()}} className={css(styles.button)}></button>
            <i className="fas fa-link fa-2x" onClick={()=>{setConnectionQueue([...connectionQueue,"trigger"])}} style={{position:'absolute',bottom:'0px',left:'0px',color:'#d6d6b1',cursor:"pointer"}}></i>
        </div>
    )
}

export default Trigger