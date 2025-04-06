import React from 'react'
import CurrencyConverter from './components/CurrencyConverter'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
     <div className='container'>
     <CurrencyConverter/>
     </div>
    </div>
  )
}

export default App