import { StyleSheet, css } from 'aphrodite';
import React from "react";

let Debug=(props)=>{
    let {timer,trigger,position,setPosition,connectionQueue,setConnectionQueue} = props.sharedState
    const styles = StyleSheet.create({
        debug:{
            display:'flex',
            justifyContent:'center',
            flexDirection:'row',
            alignItems:'center',
            height:'150px',
            width:'150px',
            fontFamily:'helvetica',
            backgroundColor:'#738283',
            borderRadius:'10px',
            color:'#D6D6B1',
            
        },
        infoDiv:{
            display:'flex',
            flexDirection:'column',
            textAlign:'center',
            justifyContent:'space-between'
        },
        output:{
            marginLeft:'10px',
            marginRight:'10px'
        },
    })

    
    if(position===2){
        return(
            <div className={css(styles.debug)}>
                <div className={css(styles.infoDiv)}>
                    <h2>null</h2>
                </div>
                <i className="fas fa-link fa-2x" onClick={()=>{setConnectionQueue([...connectionQueue,"debug"])}} style={{position:'absolute',bottom:'0px',left:'0px',color:'#d6d6b1',cursor:"pointer"}}></i>
            </div>
        )
    }
    return(
        <div className={css(styles.debug)}>
            <div className={css(styles.infoDiv)}>
                {position ?<h2>{trigger.toString()}</h2>:<h2>{timer.toString()}</h2>}
            </div>
            <i className="fas fa-link fa-2x" onClick={()=>{setConnectionQueue([...connectionQueue,"debug"])}} style={{position:'absolute',bottom:'0px',left:'0px',color:'#d6d6b1',cursor:"pointer"}}></i>
        </div>
    ) 
    
   
}

export default Debug