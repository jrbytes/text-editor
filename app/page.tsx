"use client"
import 'bootstrap/dist/css/bootstrap.min.css'

import React, { useState, useMemo, useEffect } from 'react'
import ContentEditable from 'react-contenteditable'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import { IconContext } from 'react-icons/'

import { useHandleShortcut } from './hooks/handleShortcuts'

import Notice from './components/Notice'
import Button from './components/Button'
import { ButtonData } from './components/Button/data'

const App: React.FC = () => {
  const [text, setText] = useState('')
  const [notice, setNotice] = useState(false)

  const [handleSetText] = useHandleShortcut()

  useEffect(() => {
    async function applyFocus() {
      await document.getElementById('editable')?.focus()
      console.log(text)
    }
    applyFocus()
  }, [text])

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
      <div className='d-flex p-2 align-items-center justify-content-center' style={{ minHeight: '350px' }}>
        <Container style={{
          backgroundColor: 'rgb(231,231,231)',
        }}>
          <Row>
            <Col className="main">
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
                style={{
                  backgroundColor: 'white',
                  margin: '20px',
                  height: '200px'
                }}
                onChange={e => setText(e.target.value)}
                onKeyUp={handleSetText}
              />
            </Col>

            <Notice show={notice} onHide={() => setNotice(false)} />
          </Row>
        </Container>
      </div>
    </>
  )
}

export default App
