import React, { useState, useMemo } from 'react'
import ContentEditable from 'react-contenteditable'
import { Container, Row, Col } from 'react-bootstrap'
import { IconContext } from 'react-icons/'

import { useHandleShortcut } from './hooks/handleShortcuts'

import Notice from './components/Notice'
import Button from './components/Button'
import { ButtonData } from './components/Button/data'

import './App.css'

const App: React.FC = () => {
  const [text, setText] = useState('')
  const [notice, setNotice] = useState(false)

  const [handleSetText] = useHandleShortcut()

  const buttons = useMemo(() => {
    return ButtonData.map(item => (
      <Button
        key={item.title}
        setTextFormat={item.title}
        setTooltipText={item.tooltip}
        button={item.button}
      />
    ))
  }, [])

  return (
    <>
      <Container>
        <Row
          className="
            justify-content-md-center
            align-items-center
            justify-content-center"
          style={{ height: '100vh' }}
        >
          <Col md={8} className="main">
            <IconContext.Provider
              value={{
                size: '1.3em',
                className: 'icons',
                style: { verticalAlign: 'middle' },
              }}
            >
              {buttons}
              <hr />
            </IconContext.Provider>

            <ContentEditable
              id="editable"
              html={text}
              onChange={e => setText(e.target.value)}
              onKeyUp={handleSetText}
            />
          </Col>

          <Notice show={notice} onHide={() => setNotice(false)} />
        </Row>
      </Container>
    </>
  )
}

export default App
