class HelloWorld extends React.Component {
    render() {  
      return (
        <div title="banner">
          <h1>CS628 - React Scold folder - add css stylesheet</h1>
        </div>
      );
    }
  }
  const element = <HelloWorld />;
  
  ReactDOM.render(element, document.getElementById('contents'));