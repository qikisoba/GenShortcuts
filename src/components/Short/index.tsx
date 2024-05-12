import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hook'
import { decrement, selectShort } from '../../store/shortSlice'

const Short: React.FC = () => {
    const short = useAppSelector(selectShort)
    const dispatch = useAppDispatch()
    return (
        <>
            {short.map((el, i) => <div key={i}>
                {el.path.split('\\').pop()}<input type="text" readOnly value={el.path} />
                <button>{Object.values(el.short).map((item: { text: string }) => item.text).join(" + ")}</button>
                <button onClick={() => dispatch(decrement(i))}>x</button>
            </div>)}
        </>
    )
}

export default Short