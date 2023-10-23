import * as React from "react"
import Parent from "./components/Parent"
import Footer from "./components/Footer"
import TestCount from "./components/TestCount"
import Button from "./components/Button"
import { BiSolidHomeAlt2 } from "react-icons/bi"

const Test2 = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    return () => {
      console.log("test2 unmount")
    }
  }, [])

  const footer = <Footer />

  return (
    <div>
      <h1>Test 2</h1>
      <div style={{ display: "flex", gap: "16px" }}>
        <button onClick={() => setIsOpen(!isOpen)}>click</button>
        <button onClick={() => setCount(count + 1)}>increment</button>
      </div>
      {isOpen ? (
        <Parent footer={footer} />
      ) : null}
      <div style={{ marginTop: "32px" }}>
        <TestCount count={count} />
      </div>
      <div style={{ marginTop: "16px" }}>
        <Button icon={<BiSolidHomeAlt2 style={{ color: "red" }} />}>Test Button</Button>
      </div>
    </div>
  )
}

export default Test2