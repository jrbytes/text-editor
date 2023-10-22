import React from 'react'
import { Modal, ModalProps } from 'react-bootstrap'

const Notice: React.FC<ModalProps> = ({ show, onHide }: ModalProps) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Teclas de atalho
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>
            As teclas de atalhos são importantes para uso do editor de texto.
          </strong>
        </p>
        <p>A tecla tab navega entre os botões</p>
        <p>| ALT+T =&gt; Aplicar título |</p>
        <p>| ALT+N =&gt; Aplicar negrito |</p>
        <p>| ALT+I =&gt; Aplicar itálico |</p>
        <p>| ALT+S =&gt; Aplicar sublinhado |</p>
        <p>| ALT+C =&gt; Aplicar code |</p>
        <p>| ALT+L =&gt; Aplicar lista |</p>
        <p>| ALT+&apos; =&gt; Aplicar citação |</p>
        <p>| ALT+H =&gt; Aplicar hiperlink |</p>
      </Modal.Body>
    </Modal>
  )
}

export default Notice
