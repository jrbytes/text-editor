import { shortcuts } from './shortcuts'

import { useGetTextSelection } from './getTextSelection'

export function useHandleButton() {
  const [getTextSelection] = useGetTextSelection()

  function handleSetText(event: string) {
    const iconName = event

    if (iconName) {
      const result = shortcuts.filter(item => item.name === iconName)
      getTextSelection(result[0].tag)
    }
  }

  return [handleSetText]
}
