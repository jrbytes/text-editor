import { shortcuts } from './shortcuts'

export function useHandleButton() {
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

  function handleSetText(event: string) {
    const iconName = event

    if (iconName) {
      const result = shortcuts.filter(item => item.name === iconName)
      getSelectionText(result[0].tag)
    }
  }

  return [handleSetText]
}
