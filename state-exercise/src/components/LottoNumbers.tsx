type Props = {
  setLottoNumbers: (numbers: number[]) => void
}

const LottoNumbers = (props: Props) => {
  const { setLottoNumbers } = props

  const generateLottoNumbers = () => {
    const numbers = []
    while (numbers.length < 7) {
      const randomNumber = Math.floor(Math.random() * 50) + 1
      numbers.push(randomNumber)
    }
    setLottoNumbers(numbers)
  }

  return (
    <div>
      <button onClick={generateLottoNumbers}>Generate Lotto Numbers</button>
    </div>
  )
}

export default LottoNumbers
