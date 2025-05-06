type Props = {
  setCount: (count: number) => void
}

const ClickCounter = (props: Props) => {
  const { setCount } = props

  const handleCount = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div>
      <button onClick={handleCount}>Click me</button>
    </div>
  )
}

export default ClickCounter