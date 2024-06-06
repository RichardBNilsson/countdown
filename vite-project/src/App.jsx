import moment from 'moment';
import './App.css'


function App() {
  const day = moment().format('MMMM Do YYYY, h:mm:ss a');

  return (
    <>
      <p>
        {day}
      </p>
    </>
  )
}

export default App
