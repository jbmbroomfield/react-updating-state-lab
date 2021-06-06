import React from 'react'

export default class YouTubeDebugger extends React.Component {

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    updateBitrate = event => {
        this.setState(previousState => {
            return {
                ...previousState,
                settings: {
                    ...previousState.settings,
                    bitrate: 12,
                },
            }
        })
    }

    updateResolution = event => {
        this.setState(previousState => {
            return {
                ...previousState,
                settings: {
                    ...previousState.settings,
                    video: {
                        ...previousState.settings.video,
                        resolution: '720p'
                    },
                },
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.updateBitrate} className='bitrate'>Bit Rate</button>
                <button onClick={this.updateResolution} className='resolution'>Resolution</button>
            </div>
        )
    }
}