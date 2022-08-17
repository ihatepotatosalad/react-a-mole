import { useState } from 'react'
import Mole from './Mole'
import MoleContainer from './MoleContainer'
import Empty from './empty'

function App() {
  let [score, setScore] = useState(0)
  function addToScore(addPoint) {
    setScore(score + addPoint)
  }
  function createMoleHills(count) {
    const moles = []
    for (let i = 0; i < count; i++) {
      moles.push(<MoleContainer key={i} addToScore={addToScore} />)
    }
    return moles
  }
  return (
    <div className='App'>
      <h2>score{score}</h2>
      <div className='.mole-mounts'>
        {createMoleHills(9)}
      </div>

    </div>
  )
}


export default App
