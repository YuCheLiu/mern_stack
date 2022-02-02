import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage'
function OnlineIDE(props) {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')
  const [width, setWidth] = useState(60) 
  
  useEffect(() => {
    // setHtml(props.html)
    console.log("useEffect",props.temple)
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <head>
            <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
            <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
            <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
          </head>
          <body>
            ${html}
            <div id="root">
            </div>
          </body>
          <style>${css}</style>
          <script type="text/babel">${js}</script>

        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])
  
  // const modulelist = [
  //   {title: "First Component", html: "<h1>Hello</h1>", css:``, javascript:``},
  //   {title: "Second Component",html: `<h1>Second</h1>`, css:``, javascript:``}
  // ]
  // function handleClick(mod){
  //   setHtml(mod.html)
  // }
  // const mod = modulelist.map( mod => 
  //   <>
  //       <button key={mod.title} onClick={() => handleClick(mod)}>{mod.title}</button>
  //   </>
    
  // )

  return (
    <>
    <style>{'.top-pane{width:'+width+'%;}'}</style>
    <div className="banner"><h3>CS628 Online Editor</h3> </div>
    {/* <button >refresh</button> */}
    <div className="direction">
      <div className="pane top-pane" >
        <Editor
          language="jsx"
          displayName="JSX"
          value={js}
          onChange={setJs}
        />
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
      </div>
      <input  className="move" onChange={()=>setWidth(document.getElementById('vol').value)} type="range" value={width} id="vol" name="vol" min="0" max="100"></input>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts allow-forms allow-modals"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
    </>
  )
}


export default OnlineIDE;
