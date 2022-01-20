import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage'

function App() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
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

  return (
    <>
      <div className="banner"><h3>CS628 Online Editor</h3></div>
      <div className="pane top-pane">
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
        <Editor
          language="jsx"
          displayName="JSX"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="50%"
          height="100%"
        />
      </div>
    </>
  )
}

export default App;
