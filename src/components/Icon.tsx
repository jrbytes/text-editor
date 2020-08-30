import React from 'react'
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap'

const Icon: React.FC<any> = ({
  handleSetText,
  setTextValue,
  setTooltipText,
  button,
}: any) => {
  return (
    <OverlayTrigger overlay={<Tooltip id="tooltip">{setTooltipText}</Tooltip>}>
      <Button
        variant="none"
        onClick={() => handleSetText(setTextValue)}
        id="btn-title"
      >
        {button}
      </Button>
    </OverlayTrigger>
  )
}

export default Icon
