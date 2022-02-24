async function loadData() {
  const response =  await fetch('http://localhost:4000', {
     method:'POST'/*select which method we should use*/,
     headers:{'content-type':'application/json'}/*select what content type we should use*/,
     body:JSON.stringify({query:`query{ resturants{name}}`})/*type your GraphQL query statement*/
  })
  
  const rsponseBody =  await response.json();
  return rsponseBody.data;
}

class HelloWorld extends React.Component {
  constructor(props){
    super(props);
    this.state = {list : []}
  }
  showData = ()=> {
    loadData().then(result => {
      // update the state using setState by assign result to list key.
      this.setState({list:result.resturants})
      
    })
  }
  render() {  
    return (
      <div title="Outer div">
        <button onClick={()=>this.showData()}>Click me</button>
        <table>
            <th>Resturant name:</th>
            {/* Use Display function component to display the resturant list */}
            <Display lists={this.state.list} ></Display>
        </table>
      </div>
    );
  }
}

function Display(props){
  // use map function to create a array of <tr> tags that shows resturant's name 
  const list = props.lists.map((item)=>
    <tr>
        {item.name}
    </tr>
  );
  return (
    <>
      {/* display the resturant list here  */}
      {list}
    </>
  )
}
const element = <HelloWorld />;

ReactDOM.render(element, document.getElementById('contents'));