import React from 'react'
import Colhero from '../contents/collection/Colhero'
import Colnavbar from '../contents/collection/Colnavbar'
import Colgallery from '../contents/collection/Colgallery'

const Collection = () => {
  return (
    <div>
      <Colnavbar />
      <main className='pb-[1000vh]'>
        <Colhero />
        <Colgallery />
      </main>
    </div>
  )
}

export default Collection