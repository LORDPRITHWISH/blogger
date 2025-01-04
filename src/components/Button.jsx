import React from 'react'

const Button = ({name='lol',colour='bg-blue',...prop}) => {
  return (
    <div>
        <button className={`${colour}-500 hover:${colour}-700 text-white font-bold py-2 px-4 rounded`} {...prop}>
            {name}
        </button>
    </div>
  )
}

export default Button