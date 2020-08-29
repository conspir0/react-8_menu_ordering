const InfoContainer = ({ qty, amount }) => {
  return (
    <div
      className="result-container result-container--info"
    >
      <div
        className="result-box"
      >
        {`Qty: ${qty}`}
      </div>
      <div
        className="result-box"
      >
        {`Total: ${amount}zł`}
      </div>
    </div>
  )
}