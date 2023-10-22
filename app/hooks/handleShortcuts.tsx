import { KeyboardEvent } from 'react'
import { shortcuts } from './shortcuts'

import { useGetTextSelection } from './getTextSelection'

export function useHandleShortcut() {
  const [getTextSelection] = useGetTextSelection()

  function handleSetText(event: KeyboardEvent) {
    const selectAltKey = event.altKey
    const selectKey = event.which

    if (selectAltKey && selectKey) {
      const result = shortcuts.filter(item => item.which === selectKey)

      if (result[0] !== undefined) {
        getTextSelection(result[0].tag)
      }
    }
  }

  return [handleSetText]
}
