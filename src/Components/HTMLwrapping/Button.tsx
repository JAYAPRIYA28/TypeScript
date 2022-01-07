import React from 'react'


type buttonProps = {
    varient: 'Primary' | 'Secondary'
    children: string
}&Omit< React.ComponentProps<'button'>, 'children'>

function Button({varient, children,...rest}: buttonProps) {
    return (
        <div>
            <button className= {`class-with-${varient}`} {...rest} >{children}</button> 
        </div>
    )
}

export default Button
