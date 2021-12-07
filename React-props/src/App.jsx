
const numbers = [1, 2, 3, 4, 5, 888];

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
class Table extends React.Component{
    constructor(props){
        super(props);
        this.numbers = {number:numbers}
    }
    
}

const element =<div>
                <NumberList numbers={numbers} />
                <button onClick={()=>{}}>Click me</button>
                </div> 

ReactDOM.render(element, document.getElementById('contents'));