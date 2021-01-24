import React from "react"
import Dog from "./Dog.jsx"
import Subtitle from "./Subtitle.jsx"
import Images from "./Images.jsx"

const dogs = [
  {
    name: "Desdemona",
    breed: "bulldog",
    superpower: "Heat vision",
    image: "images/bulldog.png",
  },
  {
    name: "Barry",
    breed: "dachshund",
    superpower: "Super fast",
    image: "images/dachshund.png",
  },
  {
    name: "Skully",
    breed: "scottie",
    superpower: "X-ray vision",
    image: "images/scottie.png",
  },
];

const App = () => (
  <div className="container">
    <img className="spinner" src="/images/paw.png" />
    <Subtitle text="Super hero dogs" />

    {dogs.map((dog) => {
      return (
        <div>
          <Images src={dog.image} />
          <Dog name={dog.name} breed={dog.breed} superpower={dog.superpower} />
        </div>
      )
    })}
  </div>
)

export default App;
