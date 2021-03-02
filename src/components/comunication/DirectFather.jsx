import React from 'react'
import DirectSon from './DirectSon'

export default props => {
  return (
    <div>
      <DirectSon nome="Junior" idade={20} nerd={true} />
      <DirectSon nome="Gabriel" idade={17} nerd={false} />
    </div>
  )
}
