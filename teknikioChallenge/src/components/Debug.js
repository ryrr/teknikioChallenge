import { StyleSheet, css } from 'aphrodite';
import React from "react";

let Debug=(props)=>{
    let {timer,trigger,position,setPosition} = props.sharedState
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
            marginBottom:'50px',
            marginLeft:'10px',
            marginRight:'10px'
        }
    })

    let moveLeft = ()=>{
        if(position!=0){
            setPosition(position-1)
        }
    }
    let moveRight = ()=>{
        if(position!=2){
            setPosition(position+1)
        }
    }

    if(position===1){
        return(
            <div className={css(styles.debug)}>
                <i onClick={()=>{moveLeft()}} class="fas fa-chevron-left fa-3x" style={{cursor:'pointer'}}></i>
                <div className={css(styles.infoDiv)}>
                    <h2>trigger {trigger.toString()}</h2>
                    <h2>timer {timer.toString()}</h2>
                </div>
                <i onClick={()=>{moveRight()}} class="fas fa-chevron-right fa-3x" style={{cursor:'pointer'}}></i>
            </div>
        ) 
    }
    else{
        return(
            <div className={css(styles.debug)}>
                <i onClick={()=>{moveLeft()}} class="fas fa-chevron-left fa-3x" style={{cursor:'pointer'}}></i>
                <div className={css(styles.infoDiv)}>
                    <i class="fas fa-arrow-circle-down fa-2x" style={{cursor:'pointer'}}></i>
                    {(position===0)?<h2 className={css(styles.output)}>{trigger.toString()}</h2> : <h2 className={css(styles.output)}>{timer.toString()}</h2>}
                </div>
                <i onClick={()=>{moveRight()}} class="fas fa-chevron-right fa-3x" style={{cursor:'pointer'}}></i>
            </div>
        )
    }
}

export default Debug