import React from 'react';

function Family(props) {
  return (
    <div>
      {
        props.children.map((child, i) => {
          return React.cloneElement(child, { ...props, key: i })
        })
      }
    </div>
  )
}

export default Family
