import React, { useState } from 'react'
import ContentEditable from 'react-contenteditable'
import { Container, Row, Col } from 'react-bootstrap'
import { IconContext } from 'react-icons/'
import {
  MdTitle,
  MdFormatBold,
  MdFormatItalic,
  MdCode,
  MdList,
  MdFormatUnderlined,
  MdFormatQuote,
} from 'react-icons/md'

import { useHandleShortcut } from './hooks/handleShortcuts'

import Notice from './components/Notice'

import './App.css'
import Button from './components/Button'

const App: React.FC = () => {
  const [text, setText] = useState('')
  const [notice, setNotice] = useState(false)

  const [handleSetText] = useHandleShortcut()

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
          <Col md={6} className="main">
            <IconContext.Provider
              value={{
                size: '1.3em',
                className: 'icons',
                style: { verticalAlign: 'middle' },
              }}
            >
              <Button
                setTextFormat="title"
                setTooltipText="Título: atalho ALT+T"
                button={<MdTitle />}
              />
              <Button
                setTextFormat="bold"
                setTooltipText="Negrito: atalho ALT+N"
                button={<MdFormatBold />}
              />
              <Button
                setTextFormat="italic"
                setTooltipText="Itálico: atalho ALT+I"
                button={<MdFormatItalic />}
              />
              <Button
                setTextFormat="underline"
                setTooltipText="Sublinhado: atalho ALT+S"
                button={<MdFormatUnderlined />}
              />
              <Button
                setTextFormat="code"
                setTooltipText="Código: atalho ALT+C"
                button={<MdCode />}
              />
              <Button
                setTextFormat="list"
                setTooltipText="Lista: atalho ALT+L"
                button={<MdList />}
              />
              <Button
                setTextFormat="blockquote"
                setTooltipText="Citação: atalho ALT+'"
                button={<MdFormatQuote />}
              />
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
