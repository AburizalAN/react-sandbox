import * as React from "react"

interface Props {
  children: React.ReactNode;
  icon: React.ReactElement;
}

const Button = ({ children, icon }: Props) => {
  const [isClicked, setIsClicked] = React.useState(false)

  const defaultProps = {
    style: {
      color: isClicked ? "blue" : "black",
    }
  }

  const newProps = {
    ...defaultProps,
    ...icon.props,
  }

  const clonedIcon = React.cloneElement(
    icon,
    newProps
  )

  return (
    <button
      onClick={() => setIsClicked(!isClicked)}
    >
      {clonedIcon} {children}
    </button>
  )
}

export default Button