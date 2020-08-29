const Item = ({ item, itemEvent }) => {
  return (
    <li
      className={`result-box ${item.selected && 'result-box__selected'}`}
      onClick={() => itemEvent(item.id)}
    >
      <p>{item.name}</p>
      <p>{item.price}</p>
    </li>
  )
}