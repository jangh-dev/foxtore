import classNames from 'classnames';
import React from 'react';
import '../scss/SubVideo.scss';

function SubVideo({ size, className, ...rest}) {
    return (
        <div className={classNames('subVideo',size, className)}{...rest}>
            {SubVideo}
        </div>
    )
}

export default SubVideo
