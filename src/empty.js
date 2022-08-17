import { useEffect } from 'react'
import hillImg from './molehill.png'

export default function Empty(props) {
    useEffect(() => {
        const showMoleAfter = Math.floor(Math.random() * 5000 + 500)
        const timer = setTimeout(() => {
            props.setIsShowing(true)
        }, showMoleAfter);
        return () => {
            clearTimeout(timer)
        }
    })


    return (
        <div>
            <img style={{ 'width': '30vw' }}
                src={hillImg}
                onClick={props.handleClick} />
        </div>
    )
}
