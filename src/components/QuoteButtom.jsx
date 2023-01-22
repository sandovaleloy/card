import React from 'react'

const QuoteButtom = ({newQuote, color}) => {
  return (
    <button className='quoteBox__button' onClick={newQuote} style={{backgroundColor: color}} >
        <i className='bx bxs-chevrons-right'></i>
    </button>
  )
}

export default QuoteButtom