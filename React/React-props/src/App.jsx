class Buttonadd extends React.Component{
    constructor(){
        super();
        this.state = {number: "constructor"};
        //this bind is necessary to let 'this' work in the callback
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleAdd(){
        this.setState({number : "Hello from ButtonAdd"});
    }

    render(){
        return (
                <>
            <h1>{this.state.number}</h1>
            <button onClick={this.handleAdd}>Click me</button>
            </>
        )
    }
}
const list = [1,2,3,4]
class Buttonlistadd extends React.Component{
    constructor(){
        super();
        this.state = {number: list};

        this.handleAdd = this.handleAdd.bind(this);
    }
    // handleAdd(){
    //     list.push(22)
    //     this.setState({number : list});
    // }
    handleAdd = ()=>{
        list.push(22)
        this.setState({number : list});
    }

    render(){
        return (
                <>
            <h1>{this.state.number}</h1>
            <button onClick={this.handleAdd}>Click me</button>
            </>
        )
        
        
    }
}

const element =<Buttonlistadd/>

ReactDOM.render(element, document.getElementById('contents')); 