type Props = {
  isLightOn: boolean
  toggleLights: () => void
}

const LightToggle = (props: Props) => {
  const { isLightOn, toggleLights } = props

  return (
    <div style={{ backgroundColor: isLightOn ? "white" : "black"}}>
      <button onClick={toggleLights}>
        Toggle Light
      </button>
    </div>
  )
}

export default LightToggle