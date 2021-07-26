import React from 'react'

function MainVdieo({ mainVdieo, className, ...rest }) {
    return (
        <div className={className(mainVdieo, className, {...rest})}>
        
        </div>
    )
}

MainVdieo.defaultProps = {
    
}

export default MainVdieo
