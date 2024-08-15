import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SelectionComponent from './component/Selection'
import './App.css'

const locationData = {
  "North America": {
    USA: {
      "California": ["Los Angeles", "San Francisco", "San Diego"],
      "New York": ["New York City", "Buffalo", "Rochester"],
    },
    Canada: {
      "Ontario": ["Toronto", "Ottawa", "Hamilton"],
      "Quebec": ["Montreal", "Quebec City", "Laval"],
    }
  },
  Europe: {
    France: {
      "Île-de-France": ["Paris", "Boulogne-Billancourt", "Versailles"],
      "Provence-Alpes-Côte d'Azur": ["Marseille", "Nice", "Toulon"],
    },
    Germany: {
      "Bavaria": ["Munich", "Nuremberg", "Augsburg"],
      "Berlin": ["Berlin"],
    }
  },
  Asia: {
    India: {
      "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
      "Karnataka": ["Bangalore", "Mysore", "Hubli"],
    },
    China: {
      "Beijing": ["Beijing"],
      "Shanghai": ["Shanghai"],
    }
  }
};


function App() {

  return (
    <>
    <SelectionComponent data={locationData}/>
    </>
  )
}

export default App
