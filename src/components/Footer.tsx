import * as React from "react"

const Footer = () => {
  console.log("footer")
  const [test, setTest] = React.useState(false)

  React.useEffect(() => {
    return () => {
      console.log("delete footer")
    }
  }, [test])

  return (
    <div>Footer</div>
  )
}

export default Footer