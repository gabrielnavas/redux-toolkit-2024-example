import Add from "./components/Add"
import List from "./components/List"

const styles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100vw',
} as React.CSSProperties

function App() {
  return (
    <div style={styles}>
     <Add />
     <List />
    </div>
  )
}

export default App
