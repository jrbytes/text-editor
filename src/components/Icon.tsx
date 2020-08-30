import React from 'react'
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { IconBaseProps } from 'react-icons/lib'

type handleSetText = (setTextValue: string) => void
interface IIconProps {
  handleSetText: handleSetText
  setTextValue: string
  setTooltipText: string
  button: IconBaseProps
}

const Icon: React.FC<IIconProps> = ({
  handleSetText,
  setTextValue,
  setTooltipText,
  button,
}: IIconProps) => {
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
