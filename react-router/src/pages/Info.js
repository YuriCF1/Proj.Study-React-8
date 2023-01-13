import React from 'react'

import { useParams } from "react-router-dom"

const info = () => {
    const { idUrl } = useParams()

  return (
    <div>
        <h3>Mais informações sobre o produto: {idUrl}</h3>
    </div>
  )
}

export default info