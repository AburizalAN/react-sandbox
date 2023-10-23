import * as React from "react"

const Parent = ({ footer }: { footer: React.ReactNode }) => {
  return (
    <div>
      <div>Ini Parent</div>
      {footer}
    </div>
  )
}

export default Parent;