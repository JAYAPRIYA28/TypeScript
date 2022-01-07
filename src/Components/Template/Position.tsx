import React from 'react'

type horizontalPosition = 'left' | 'center' | 'right'

type verticalPosition = 'top' | 'center' | 'bottom'

type wholePosition = {
    position: 
    Exclude<`${horizontalPosition}- ${verticalPosition}`, 'center-center'> | 'center'


}

function Position(props:wholePosition) {
    return (
        <div >
           the container -{props.position}
        </div>
    )
}

export default Position
