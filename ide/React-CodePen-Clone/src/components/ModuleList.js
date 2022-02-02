import React, { useState, useEffect } from 'react';
import OnlineIDE from './OnlineIDE';

var modulelist = [
    {title: "First Component", html: "<h1>Hello</h1>", css:``, javascript:``},
    {title: "Second Component",html: `<h1>Second</h1>`, css:``, javascript:``}
]

class ModuleList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current:"",
            mod:"",
          
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event, mod){
        this.setState( pre => ({
            current: mod,
        })
        )
        console.log("click",this.state.current)
    }

    render(){
        let content =<OnlineIDE temple= {this.state.current.html} >{this.state.current}</OnlineIDE>;
        console.log("render: ",this.state.current)
        return (
            <>
                {
                    modulelist.map( mod =><button key={mod.title} onClick={e => this.handleClick(e,mod)}>{mod.title}</button>)
                }
                {/* <p>{this.state.current}</p> */}
                {content}
            </>
        )
    }
}

export default ModuleList;