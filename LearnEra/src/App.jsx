
import Header from './components/header/Header'

import './App.css'
import Tbox from './components/Tbox'
//app
function App() {

  return (
    <>
    <Header/>
    <Tbox number={'01'} title={'teaching'} text={'Sample text. Click to select the text box. Click again or double click to start editing the text.'} />
    </>
  )
}

export default App
