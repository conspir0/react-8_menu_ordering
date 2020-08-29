const ListItems = ({ list, itemEvent }) => {
  const listItems = list.map(item => {
    return (
      <Item
        key={item.id}
        item={item}
        itemEvent={itemEvent}
      />
    )
  })

  return (
    <ul className="result-container">
      {listItems}
    </ul>
  )
}