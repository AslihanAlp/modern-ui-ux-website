import {Features, Footer, Header, Possibility, WhatGBT3, Blog} from "./container"
import {CTA, Brand, Navbar} from "./components"
import "./App.css"
const App = () => {
  return (
    <div className= "App">
      <div className ="gradient-bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGBT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
