import React from 'react'
import { createContext } from 'vm'
const TaskStatus = createContext()

const context = () => {
  return (
    <div>context</div>
  )
}

export default context