import { useState, useLayoutEffect } from 'react'

export default function useFullscreenStatus(elRef: any) {
  const fullscreenProp = getBrowserFullscreenElementProp()
  const [isFullscreen, setIsFullscreen] = useState(false)

  const setFullscreen = () => {
    if (elRef.current == null) return

    elRef.current
      .requestFullscreen()
      .then(() => {
        setIsFullscreen((document as any)[fullscreenProp] != null)
      })
      .catch(() => {
        setIsFullscreen(false)
      })
  }

  useLayoutEffect(() => {
    document.onfullscreenchange = () =>
      setIsFullscreen((document as any)[fullscreenProp] != null)

    return () => (document.onfullscreenchange = undefined)
  })

  return { isFullscreen, setFullscreen }
}

function getBrowserFullscreenElementProp() {
  if (typeof window === `undefined` || typeof document === `undefined`) {
    return 'fullscreenElement'
  }
  if (typeof document.fullscreenElement !== 'undefined') {
    return 'fullscreenElement'
  }
  if (typeof (document as any).mozFullScreenElement !== 'undefined') {
    return 'mozFullScreenElement'
  }
  if (typeof (document as any).msFullscreenElement !== 'undefined') {
    return 'msFullscreenElement'
  }
  if (typeof (document as any).webkitFullscreenElement !== 'undefined') {
    return 'webkitFullscreenElement'
  }
  throw new Error('fullscreenElement is not supported by this browser')
}
