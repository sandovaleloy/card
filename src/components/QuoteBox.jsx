import React from 'react'
import QuoteButtom from './QuoteButtom'

const QuoteBox = ({quote, newQuote, color}) => {
  return (
    <div className='quoteBox' style={{color: color}}>
        <i class='quoteBox__icon bx bxs-quote-left'></i>
        <p className='quoteBox__quote'>{quote.quote}</p>
        <h3 className='quoteBox__author'>{quote.author}</h3>
        <QuoteButtom color={color} newQuote={newQuote} />
    </div>
  )
}

export default QuoteBox