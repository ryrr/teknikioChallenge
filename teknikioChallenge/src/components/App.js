import { useBetween } from "use-between";
import React, { useState , useRef,useEffect} from "react";
import Timer from './Timer.js'
import Trigger from './Trigger.js'
import Debug from './Debug.js'
import { StyleSheet, css } from 'aphrodite';
import Draggable from 'react-draggable';
import Xarrow from "react-xarrows";


const blockState = () => {
	const [trigger, setTrigger] = useState(false);
	const [timer, setTimer] = useState(false);
	const [position,setPosition] = useState(2)
	const [connection,setConnection] = useState(false)
	const [connectionQueue,setConnectionQueue] = useState([])
	return {
		trigger, setTrigger, timer, setTimer, position, setPosition,connection,setConnection,connectionQueue,setConnectionQueue
	};
};

const useSharedState = () => useBetween(blockState);

const App = () => {
	const [didMove, setDidMove] = useState(false);

	let {connection,setConnection,position,setPosition,connectionQueue,setConnectionQueue} = useSharedState()

	const styles = StyleSheet.create({
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
			alignItems:'center',
			flexDirection:'row'
		}
	})
	
	useEffect(() => {
		if(connectionQueue.length == 2){
			if(connectionQueue.includes('timer')&&connectionQueue.includes('trigger')){
				if (connection){setConnection(false)}
				
				else{setConnection(true)}
			}
			else if(connectionQueue.includes('debug')&&connectionQueue.includes('trigger')){
				if(position===1){setPosition(2)}
				
				else{setPosition(1)}
			}
			else if(connectionQueue.includes('debug')&&connectionQueue.includes('timer')){
				if(position===0){setPosition(2)}
				
				else{setPosition(0)}
			}
			else{
				alert('invalid connection')
			}
			setConnectionQueue([])
		}
	},[connectionQueue]);

	const triggerRef = useRef(null);
	const timerRef = useRef(null);
	const debugRef = useRef(null);


	let renderArrows = ()=>{
		if(position==2){
			return(
				<div>
					{connection?<Xarrow start={triggerRef} end={timerRef}/> : null}
				</div>
			)
		}
		else{
			return(
				<div>
					{connection ? <Xarrow start={triggerRef} end={timerRef}/> : null}
					{position ? <Xarrow start={triggerRef} end={debugRef}/> : <Xarrow start={timerRef} end={debugRef}/>}
				</div>
			)
		}	
	}

	return(
		<div className={css(styles.app)}>
			<Draggable onDrag={()=>{setDidMove(false)}} onStop={()=>{setDidMove(true)}}>
				<div ref={triggerRef}>
					<Trigger sharedState={useSharedState()}></Trigger>
				</div>
			</Draggable>
			<Draggable onDrag={()=>{setDidMove(false)}} onStop={()=>{setDidMove(true)}}>
				<div ref={timerRef}>
					<Timer sharedState={useSharedState()}></Timer>
				</div>
			</Draggable>
			<Draggable onDrag={()=>{setDidMove(false)}} onStop={()=>{setDidMove(true)}}>
				<div ref={debugRef}>
					<Debug sharedState={useSharedState()}></Debug>
				</div>
			</Draggable>
			{didMove ? renderArrows() : null}
		</div>
	);
}

export default App
