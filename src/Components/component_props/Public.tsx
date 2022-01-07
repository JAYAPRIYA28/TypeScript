import React from 'react'

export type publicComponent = {
    name: string
}

function Public(props:publicComponent) {
    return (
        <div>
            public page name:{props.name} 
        </div>
    )
}

export default Public
