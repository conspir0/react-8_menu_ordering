class App extends React.Component {
  state = {}

  render() {
    return (
      <React.Fragment>
        <div className="container">
          Hello World!
        </div>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));