import React from 'react'
// import NavBar from './components/Navbar'
// import Main from './components/Main'
import Contact from './components/Contact'
import Joke from './components/Joke'
import './components/styles/styles.css'

export default function App() {
  return(

    <div>
      <h1>JOKES!</h1>
      <Joke
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
      />
      <Joke
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
      />
      <Joke
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
      />
      <Joke
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      />
    </div>    
    // <div className="contacts">
    //   <Contact 
    //     img='./components/src/images/mr-whiskerson.png'
    //     name='Mr. Whiskerson'
    //     phone='(212) 555-1234'
    //     email='mr.whiskaz@catnap.meow'
    //   />
    //   <Contact 
    //     img='./components/src/images/fluffykins.png'
    //     name='Fluffykins'
    //     phone='(212) 555-23454'
    //     email='fluff@me.com'
    //   />
    //   <Contact 
    //     img='./components/src/images/felix.png'
    //     name='Felix'
    //     phone='(212) 555-4567'
    //     email='thecat@hotmail.com'
    //   />
    //   <Contact 
    //     img='./components/src/images/pumpkin.png'
    //     name='Pumpkin'
    //     phone='(0800) CAT KING'
    //     email='pumpkin@scrimba.com'
    //   />
    //   <NavBar />
    //   <Main />
    // </div>
  )
}