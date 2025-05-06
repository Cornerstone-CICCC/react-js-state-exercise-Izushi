import './App.css'
import { useState } from 'react';
import LightToggle from './components/LightToggle'
import LottoNumbers from './components/LottoNumbers'
import ClickCounter from './components/ClickCounter';

const App = () => {
  const [isLightOn, setIsLightsOn] = useState<boolean>(false)
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([])
  const [count, setCount] = useState<number>(0)

  const toggleLights = () => {
    setIsLightsOn((prev) => !prev)
  }

  return (
    <div>
      <h2>Light Toggle</h2>
      <LightToggle isLightOn={isLightOn} toggleLights={toggleLights} />
      <div>Change this background color using the style attribute</div>

      <h2>Lotto Numbers</h2>
      <LottoNumbers setLottoNumbers={setLottoNumbers} />
      <div className="output">{lottoNumbers}</div>

      <h2>Click Counter</h2>
      <ClickCounter setCount={setCount} />
      <div className="output">{count}</div>
    </div>
  )
}

export default App