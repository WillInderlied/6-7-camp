import { TwentyFirstToolbar } from '@21st-extension/toolbar-react'
import { ReactPlugin } from '@21st-extension/react'

export default function DevToolbar() {
  return <TwentyFirstToolbar config={{ plugins: [ReactPlugin] }} />
}
