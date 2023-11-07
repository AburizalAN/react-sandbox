import * as React from "react"
import SlowComponent from "./components/SlowComponents"
// import Modal from "./components/Modal"

const Test = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={() => setIsOpen(true)}>Open Dialog</button>
      <SlowComponent />
      {/* {isOpen ? <Modal onClose={() => setIsOpen(false)} /> : null} */}
    </div>
  )
}

export default Test