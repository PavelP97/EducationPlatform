import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import physics_icon from './assets/physics_icon.png'
import math_icon from './assets/math_icon.png'
import programming_icon from './assets/programming_icon.png'
import chemistry_icon from './assets/chemistry_icon.png'

function App() {
  return(
    <>
      <Header/>
      <Card name="Physics" icon={physics_icon}/>
      <Card name="Math" icon={math_icon}/>
      <Card name="Programming" icon={programming_icon}/>
      <Card name="Chemistry" icon={chemistry_icon}/>
      <Footer/>
    </>
  )
}



export default App
