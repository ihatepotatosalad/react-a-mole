import { useState } from 'react'
import Empty from './empty';
import Mole from './Mole'

export default function MoleContainer(props) {
    const [isShowing, setIsShowing] = useState(false);
    const handleMoleClicked = () => {
        if (isShowing) {
            props.addToScore(1);
            setIsShowing(false)
        }
    }
    return (
        <div>

            {isShowing ? <Mole setIsShowing={setIsShowing} moleClicked={handleMoleClicked} /> : <Empty setIsShowing={setIsShowing} />}
        </div>
    )
}
