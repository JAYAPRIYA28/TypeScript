import React from 'react'


type ListPops<T> = {
    items: T[]
    onClick : (value:T) => void
}

function List<T extends {id:number} >(props:ListPops<T>) {
    return (
        <div>
           { props.items.map((item, index)=>{
            return(
                <div >
              <button key={item.id} onClick={() => props.onClick(item)}>click</button>
              {item}
              </div>
            )
            })
        }
        </div>
    )
}

export default List
