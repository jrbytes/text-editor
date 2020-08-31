import { KeyboardEvent } from 'react'
import { shortcuts } from './shortcuts'

export function useHandleShortcut() {
  function getSelectionText(tag: string) {
    const sel = window.getSelection && window.getSelection()
    if (sel && sel.rangeCount > 0) {
      const range = document.getSelection()?.getRangeAt(0)
      const element = document.createElement(tag)
      if (range !== undefined) {
        range.surroundContents(element)
      }
    }
  }

  function handleSetText(event: KeyboardEvent) {
    const selectAltKey = event.altKey
    const selectKey = event.which

    if (selectAltKey && selectKey) {
      const result = shortcuts.filter(item => item.which === selectKey)

      if (result[0] !== undefined) {
        getSelectionText(result[0].tag)
      }
    }
  }

  return [handleSetText]
}
