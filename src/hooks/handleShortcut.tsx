import { KeyboardEvent } from 'react'

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
    const shortcuts = [
      {
        atalho: 'alt+t',
        which: 84,
        tag: 'h1',
      },
      {
        atalho: 'alt+n',
        which: 78,
        tag: 'strong',
      },
      {
        atalho: 'alt+i',
        which: 73,
        tag: 'em',
      },
      {
        atalho: 'alt+s',
        which: 83,
        tag: 'u',
      },
      {
        atalho: 'alt+c',
        which: 67,
        tag: 'code',
      },
      {
        atalho: 'alt+l',
        which: 76,
        tag: 'li',
      },
      {
        atalho: 'alt+b',
        which: 66,
        tag: 'blockquote',
      },
    ]

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
