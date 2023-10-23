const TestCount = ({ count }: { count: number }) => {
  console.log("Test Component render ", count)
  return (
    <div>
      count : {count}
    </div>
  )
}

export default TestCount