import React from 'react';
import '../scss/MainVideo.scss';
import ReactPlayer from 'react-player';

function MainVideo() {
    return (
        <div className="mainVideo">
            <ReactPlayer 
                className="video"
                url='https://youtu.be/ciaDaXiImW8'
                width='100%'
                height='100%'
                controls
            /> 
        </div>
    )
}

export default MainVideo