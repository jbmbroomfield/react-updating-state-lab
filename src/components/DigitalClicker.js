import React from 'react'

export default class DigitalClicker extends React.Component {

    state = {
        timesClicked: 0,
    }

    handleClick = event => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1,
            }
        })
    }

    render() {
        const state = this.state
        return (
            <div>
                <button onClick={this.handleClick}>{state.timesClicked}</button>
            </div>
        )
    }
}