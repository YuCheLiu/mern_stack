class AppC extends React.Component{
  constructor(props){
    super(props)
    this.props = props
  }
  render(){
    return (
      <>
        <h1>
          Hello from class : {this.props.name}
        </h1>
      </>
    )
  }
}

function AppF(props){
  return (
    <>
      <h1>
        Hello {props.name}
      </h1>
    </>
  )
}

ReactDOM.render(<AppC name="Spencer"></AppC>, document.getElementById("contents") );