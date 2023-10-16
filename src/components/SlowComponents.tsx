const wait = (ms: number) => {
  const start = Date.now();
  let now = start;

  while (now - start < ms) now = Date.now();
}

const SlowComponent = () => {
  wait(1000)
  return (
    <div>
      <h2>Ini Slow Component</h2>
    </div>
  )
}

export default SlowComponent