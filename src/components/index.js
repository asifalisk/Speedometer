import { Component } from 'react'
import './index.css';
class Speedometer extends Component {

        state={speed:0}
        onClickAccelerate=()=>{
            if(this.state.speed<200){
                this.setState(prevspeed =>({speed:prevspeed.speed+10}))  
            }
        }
       onClickBreak = () => {
        if(this.state.speed>0)
            this.setState(prevspeed =>({speed:prevspeed.speed-10}))
        }

    render(){
        const {speed}=this.state
        return(
            <div className='container'>
                <h1>Speedometer</h1>
                <img className='image' src='https://assets.ccbp.in/frontend/react-js/speedometer-img.png' alt='Speedometer'/>
                <h2>Speed is {speed}mph</h2>
                <p>Min limit is 0mph and max limit is 200mph</p>
                <div className='btn'>
                    <button className='accelerate' onClick={this.onClickAccelerate}>Accelerate</button>
                    <button className='break' onClick={this.onClickBreak}>Apply Break</button>
                </div>
            </div>
        )
    }
}

export default Speedometer