import React from 'react'
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { IconBaseProps } from 'react-icons/lib'

import { useHandleButton } from '../hooks/handleButtons'

interface IIconProps {
  setTextFormat: string
  setTooltipText: string
  button: IconBaseProps
}

const ButtonComponent: React.FC<IIconProps> = ({
  setTextFormat,
  setTooltipText,
  button,
}: IIconProps) => {
  const [handleSetText] = useHandleButton()

  return (
    <OverlayTrigger overlay={<Tooltip id="tooltip">{setTooltipText}</Tooltip>}>
      <Button
        variant="none"
        id="btn-title"
        onClick={() => handleSetText(setTextFormat)}
      >
        {button}
      </Button>
    </OverlayTrigger>
  )
}

export default ButtonComponent
