import React from 'react'
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { IconBaseProps } from 'react-icons/lib'

import { useHandleIcon } from '../hooks/handleIcon'

interface IIconProps {
  setTextFormat: string
  setTooltipText: string
  button: IconBaseProps
}

const Icon: React.FC<IIconProps> = ({
  setTextFormat,
  setTooltipText,
  button,
}: IIconProps) => {
  const [handleSetText] = useHandleIcon()

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

export default Icon
