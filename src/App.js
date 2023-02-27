import { useState, useEffect } from "react"
import styles from "./App.css";
import alanBtn from "@alan-ai/alan-sdk-web"

const App=() => {
  const [products, setProducts] = useState([])

  useEffect((e) => {
    var alanBtnInstance = alanBtn({
      showOverlayOnMicPermissionPrompt: true,
        key: '9abb912cf31f2d339140636b3b3b922f2e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
          if (commandData.command === "showDiscounts") {
            setProducts(commandData.data)
            console.log(commandData)
          } 
        },
        onButtonState: async function(status) {
          if (status === 'ONLINE') {
            if (!this.greetingWasSaid) {
              await alanBtnInstance.activate();
              alanBtnInstance.playText("Hello! I'm Alan. How can I help you?");
              this.greetingWasSaid = true
            }
          }
        }
    })
    alanBtnInstance.setVisualState({screen:"main"})
  }, [])

  return (
    <div className="App">
      <header className="App-header">
       Shop
      </header>
    

    {/* {products.map((product) => (
      <div key={product.name}>
        {product.name}
      </div>
    ))} */}

<section id="deals">
{products.map((product) => (
   <section className="sale-item">
      <h1>
        {product.name}
      </h1>
      <p>{product.name}</p>
    <ul>
      <li>{product.name}</li>
      <li>{product.name}</li>
      <li>{product.name}</li>
      <li>{product.name}</li>
    </ul>
    <button>BUY NOW</button>
      </section>
    ))}
  <section className="sale-item">
    <h1>Computer Starter Kit</h1>
    <p>This is the best computer money can buy, if you don’t have much money.</p>
    <ul>
      <li>Computer</li>
      <li>Monitor</li>
      <li>Keyboard</li>
      <li>Mouse</li>
    </ul>
    <button>BUY NOW</button>
  </section>
  <section className="sale-item">
  <h1>Computer Starter Kit</h1>
    <p>This is the best computer money can buy, if you don’t have much money.</p>
    <ul>
      <li>Computer</li>
      <li>Monitor</li>
      <li>Keyboard</li>
      <li>Mouse</li>
    </ul>
    <button>BUY NOW</button>
  </section>
</section>
    </div>
  )
}

export default App
