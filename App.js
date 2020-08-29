class App extends React.Component {
  state = {
    qty: 0,
    amount: 0,
    list: this.props.listData
  }

  itemHanlder = (id) => {
    const { list } = this.state;
    let qty = 0,
      amount = 0;

    const listItem = list.map(item => {
      if (item.id === id) {
        item.selected = !item.selected
      }

      return item
    });

    const qtySelected = list.filter(item => item.selected);
    qtySelected.map(item => {
      qty = qty + 1;
      amount = amount + item.price;
    });

    this.setState((prevState) => ({ list: listItem, qty, amount }))
  }

  render() {
    const { qty, amount, list } = this.state;

    return (
      <React.Fragment>
        <div className="container">
          <InfoContainer
            qty={qty}
            amount={amount}
          />
          <ListItems
            list={list}
            itemEvent={this.itemHanlder} />
        </div>
      </React.Fragment>
    )
  }
}

const listData = [
  { id: 1, name: 'cheese', price: 5, selected: false },
  { id: 2, name: 'salami', price: 3, selected: false },
  { id: 3, name: 'peperoni', price: 4, selected: false },
  { id: 4, name: 'mushrooms', price: 2.5, selected: false },
  { id: 5, name: 'ananas', price: 3, selected: false },
  { id: 6, name: 'onion', price: 2, selected: false },
  { id: 7, name: 'pepper', price: 3, selected: false },
  { id: 8, name: 'rucola', price: 4, selected: false },
  { id: 9, name: 'double cheese', price: 5, selected: false },
  { id: 10, name: 'sauce', price: 4, selected: false },
]

ReactDOM.render(<App listData={listData} />, document.getElementById('root'));
