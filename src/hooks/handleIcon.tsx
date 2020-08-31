export function useHandleIcon() {
  function handleSetText(event: any) {
    console.log(event)
  }

  return [handleSetText]
}
