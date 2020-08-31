export function useGetTextSelection() {
  function getTextSelection(tag: string) {
    const sel = window.getSelection && window.getSelection()
    if (sel && sel.rangeCount > 0) {
      const range = document.getSelection()?.getRangeAt(0)
      const element = document.createElement(tag)
      if (range !== undefined) {
        range.surroundContents(element)
      }
    }
  }

  return [getTextSelection]
}
