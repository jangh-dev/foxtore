import React from 'react';
import ReactPlayer from 'react-player';
import '../scss/SubVideo.scss';

function SubVideo({ size, className, ...rest}) {
    return (
        <>
            <div className="wrap">
                <ReactPlayer
                controls
                className="subVideo"
                url="https://youtu.be/0SQOmwa25dw"
                width="332px"
                height="220px"
                />
            </div>
        </>
    )
}

// 영상 사이즈로 교체
SubVideo.defaultProps = {
    size: 'medium'
} 


export default SubVideo
