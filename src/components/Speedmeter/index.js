import {Component} from "react"

import './index.css' 


class Speedmeter extends Component {
    state ={
        speed: 0,
    } 

    onClickAccelerateButton =() => {
        const {speed} = this.state 

        if (speed < 200) {
            this.setState(PervState => ({speed : PervState.speed +10}))
        } 
    } 
    onClickBreakButton = () => { 
        const {speed} = this.state 
        if (speed > 0) {
            this.setState(PrevState => ({speed : PrevState.speed - 10})) 

        }

    }




render() { 
    const {speed} = this.state
    return (
        <div className='speedometer-container'>
            <h1 className='main-heading'>SPEEDOMETER</h1>
            <img src ="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="image" alt ="speedometer"/>
            <h className="sub-heading">Speed is <span className='sub-heading'>{speed}</span>mph</h>
            <p className='sub-description'>Min Limit is 0mph ,Max Limit is 200mph</p>

            <div className='button-container'>
                <button onClick ={this.onClickAccelerateButton} className='accelerate-button'>Accelerate</button> 
                 
                 
                <button onClick ={this.onClickBreakButton} className='apply-button' o>Apply Brake</button>
            </div>
        </div>
    )
} 
}
export default Speedmeter  
