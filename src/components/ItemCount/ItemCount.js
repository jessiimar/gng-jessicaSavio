import { useState } from 'react'

const ItemCount = ({ stock }) => {
    const [count, setCount]= useState(0)

    const decrement = () => {
        setCount(prev => prev - 1)
    }

    const increment = () => {
        for(let i = 0; i < 1; i++) {
            setCount(prev => {
                console.log(prev)
                console.log(count)
                return prev + 1
            });
        }
        return
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div>
            <h1>productos en stock</h1>
            <h2>{count}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default ItemCount