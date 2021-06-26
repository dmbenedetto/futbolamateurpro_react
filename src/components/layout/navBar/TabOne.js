import React, { useState,Fragment } from 'react'
import { Tabs } from 'react-simple-tabs-component'
//import 'react-simple-tabs-component/dist/index.css' // (Optional) Provide some basic style
import Jugadores from '../../tareas/Jugadores'

//este es el que mejor serviria por ahora:
//https://www.npmjs.com/package/react-simple-tabs-component

// Component Example
const TabOne = () => {
  return (
    <Fragment>
      <h3>Tab One</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sint illum iusto nostrum cumque qui
        voluptas tenetur inventore ut quis?
      </p>
    </Fragment>
  )
}

// Component Example
const TabTwo = () => {
    return (
      <Fragment>
        <h3>Tab One</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sint illum iusto nostrum cumque qui
          voluptas tenetur inventore ut quis?
        </p>
      </Fragment>
    )
  }

  // Component Example
const TabThree = () => {
    return (
      <Fragment>
        <Jugadores />
      </Fragment>
    )
  }


// Tabs structure Array
const tabs = [
  {
    label: 'Tab One', // Tab title
    index: 1,         // Tab index
    Component: TabOne // Tab Component
  },
  {
    label: 'Tab Two',
    index: 2,
    Component: TabTwo
  },
  {
    label: 'Tab Three',
    index: 3,
    Component: TabThree
  }
]
 
export default function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].index)
  return (
    <div className='App'>
 
      <Tabs tabs={tabs} onClick={setSelectedTab} selectedTab={selectedTab} />
    </div>
  )
}