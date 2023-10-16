import './App.css'
import React, {Component} from 'react'
import News from './Components/News'
import Navbar from './Components/Navbar'


export class App extends Component{
  render(){
    return(
        <main>
<Navbar/>
          <News/>
    </main>
    )
  }
}
export default App
