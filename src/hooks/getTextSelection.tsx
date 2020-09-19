export function useGetTextSelection() {
  function getTextSelection(tag: string) {
    const sel = window.getSelection && window.getSelection()
    if (sel && sel.rangeCount > 0) {
      const range = sel.getRangeAt(0)

      if (range.startContainer.hasChildNodes()) {
        return
      }

      const element = document.createElement(tag)
      if (range.startOffset !== range.endOffset) {
        range.surroundContents(element)
      }
    }
  }

  return [getTextSelection]
}
