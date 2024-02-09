import React from 'react'

function ButtonArea(props) {
    const { isCompletedScreen, setIscompletedScreen } = props;
    return (
        <div className="btn-area">
            <button className={`secondaryBtn ${isCompletedScreen === false && 'active'}`}
                onClick={() => setIscompletedScreen(false)} >Todo</button>
            <button className={`secondaryBtn ${isCompletedScreen === true && 'active'}`}
                onClick={() => setIscompletedScreen(true)}>Completed</button>
        </div>
    )
}

export default ButtonArea;
