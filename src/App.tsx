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

import Notice from './components/Notice'

import './App.css'
import Icon from './components/Icon'

const App: React.FC = () => {
  const [text, setText] = useState('')
  const [notice, setNotice] = useState(true)

  function eventTitle() {
    getSelectionText('h1')
  }

  function eventBold() {
    getSelectionText('strong')
  }

  function eventItalic() {
    getSelectionText('em')
  }

  function eventUnderline() {
    getSelectionText('u')
  }

  function eventCode() {
    getSelectionText('code')
  }

  function eventList() {
    getSelectionText('li')
  }

  function eventBlockquote() {
    getSelectionText('blockquote')
  }

  function handleSetText(event: any) {
    switch (event) {
      case 'title':
        eventTitle()
        break
      case 'bold':
        eventBold()
        break
      case 'italic':
        eventItalic()
        break
      case 'underline':
        eventUnderline()
        break
      case 'code':
        eventCode()
        break
      case 'list':
        eventList()
        break
      case 'blockquote':
        eventBlockquote()
        break
      default:
        break
    }

    // eslint-disable-next-line no-shadow
    onkeydown = event => {
      const alt = event.altKey === true
      const { which } = event

      if (alt && which === 84) {
        eventTitle()
      }
      if (alt && which === 78) {
        eventBold()
      }
      if (alt && which === 73) {
        eventItalic()
      }
      if (alt && which === 83) {
        eventUnderline()
      }
      if (alt && which === 67) {
        eventCode()
      }
      if (alt && which === 76) {
        eventList()
      }
      if (alt && which === 192) {
        eventBlockquote()
      }
    }
  }

  function getSelectionText(tag: any) {
    console.log('evento tag: ', tag)
    const sel = window.getSelection && window.getSelection()
    if (sel && sel.rangeCount > 0) {
      const range = document.getSelection()?.getRangeAt(0)
      const element = document.createElement(tag)
      console.log('intervalo: ', range)
      if (range !== undefined) {
        range.surroundContents(element)
      }
    }
  }

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
              <Icon
                handleSetText={handleSetText}
                setTextValue="title"
                setTooltipText="Título: atalho ALT+T"
                button={<MdTitle />}
              />
              <Icon
                handleSetText={handleSetText}
                setTextValue="bold"
                setTooltipText="Negrito: atalho ALT+N"
                button={<MdFormatBold />}
              />
              <Icon
                handleSetText={handleSetText}
                setTextValue="italic"
                setTooltipText="Itálico: atalho ALT+I"
                button={<MdFormatItalic />}
              />
              <Icon
                handleSetText={handleSetText}
                setTextValue="underline"
                setTooltipText="Sublinhado: atalho ALT+S"
                button={<MdFormatUnderlined />}
              />
              <Icon
                handleSetText={handleSetText}
                setTextValue="code"
                setTooltipText="Código: atalho ALT+C"
                button={<MdCode />}
              />
              <Icon
                handleSetText={handleSetText}
                setTextValue="list"
                setTooltipText="Lista: atalho ALT+L"
                button={<MdList />}
              />
              <Icon
                handleSetText={handleSetText}
                setTextValue="blockquote"
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
