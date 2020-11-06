import { useBetween } from "use-between";
import React, { useState } from "react";
import Timer from './Timer.js'
import Trigger from './Trigger.js'
import Debug from './Debug.js'
import { StyleSheet, css } from 'aphrodite';


const blockState = () => {
	const [trigger, setTrigger] = useState(false);
	const [timer, setTimer] = useState(false);
	const [connection,setConnection] = useState(true)
	const [position,setPosition] = useState(1)
	return {
		trigger, setTrigger, timer, setTimer, position, setPosition,connection,setConnection
	};
};

const useSharedState = () => useBetween(blockState);

const App = () => {

	const styles = StyleSheet.create({
		center:{
			display:'flex',
			justifyContent:'center',
			width:'60%',
		},
		left:{
			display:'flex',
			justifyContent:'left',
			width:'60%',
		},
		right:{
			display:'flex',
			justifyContent:'flex-end',
			width:'60%',
		},
		blockDiv:{
			display:'flex',
			flexDirection:'row',
			justifyContent:'space-between',
			alignItems:'center',
			width:'60%',
			marginBottom:'30px'
		},
		app:{
			display:'flex',
			justifyContent:'center',
			alignItems:'center',
			flexDirection:'column'
		}
	})

	let {connection,setConnection,position} = useSharedState()

	let getPosition = ()=>{
		if(position === 1){return styles.center}
		else if(position === 0){return styles.left}
		else {return styles.right}
	}
	
	return(
	  <div className={css(styles.app)}>
		  <div className={css(styles.blockDiv)}>
			  <Trigger sharedState={useSharedState()}></Trigger>
			  {connection?<i onClick={()=>{setConnection(!connection)}}style={{color:'#738283',cursor:'pointer'}}class="fas fa-arrow-circle-right fa-3x"></i>:<i onClick={()=>{setConnection(!connection)}} style={{color:'#738283',cursor:'pointer'}} class="fas fa-times-circle fa-3x"></i>} 
			  <Timer sharedState={useSharedState()}></Timer>
		  </div>
		  <div className={css(getPosition())}>
			  <Debug sharedState={useSharedState()}></Debug>
		  </div>
	  </div>
	);
}

export default App
