import React from "react"
import Display from './Display'

class Dashboard extends React.Component {
    constructor(){
        super();
        this.state = {
            strikes: 0,
            balls: 0
        }
    }
     strike = () => {
        
        this.setState({
            strikes: this.state.strikes+1});
        if(this.state.strikes > 1){
            this.setState({strikes: 0, balls: 0})
        }
    }
     ball = () => {
        this.setState({balls: this.state.balls+1})
        if (this.state.balls > 2){
            this.setState({strikes: 0, balls: 0})
        }
        console.log('after: ' + this.state.balls);
      }

      foul = () => {
          if(this.state.strikes < 2){
              this.setState({strikes: this.state.strikes+1})
          }
      }

      hit = () => {
          this.setState({strikes:0, balls: 0})
      }
    
    render() {
        return (

            <>
                <Display strikes={this.state.strikes}
                balls = {this.state.balls}    
                />
                <div className='buttons'>
                    <h2>Dashboard</h2>
                    <button onClick={ this.strike}>Strike</button>
                    <button onClick={this.ball}>Ball</button>
                    <button onClick={this.foul}>Foul</button>
                    <button onClick={this.hit}>Hit</button>
                </div>
            </>
        )
    }
}

export default Dashboard