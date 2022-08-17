import { useEffect } from 'react'
import moleImg from './mole.png'

export default function Mole(props) {
    useEffect(() => {
        const hideMoleAfter = Math.floor(Math.random() * 5000 + 500)
        const timer = setTimeout(() => {
            props.setIsShowing(false)
        }, hideMoleAfter);
        return () => {
            clearTimeout(timer)
        }
    })

    return (
        <div>
            <img style={{ 'width': '30vw' }}

                src={moleImg}
                onClick={props.moleClicked} />
        </div>
    )
}
