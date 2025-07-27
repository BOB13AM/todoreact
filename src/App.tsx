import './App.css'
import Todo from './components/todo'
import Itemlist from './components/items'
import Txtfield from './components/txtfield'

function APP() {

  return (
    <div>
      <Todo/>
      <Itemlist item1={1} item2={2} item3={3} />
      <Txtfield />
    </div>
  )
}

export default APP
