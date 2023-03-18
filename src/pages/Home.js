import React from 'react'
import Card from '../components/card'
import {Tabtitle} from '../components/FunctionTitle'

const home = () => {
  Tabtitle('My first site | Home');
  return (
    <div>
      <div className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <Card name='Mukesh' carttittle="Card Tittle" cardpreg="Card Paragraph"/>              
            </div>
            <div className='col-md-4'>
              <Card name='Rakesh' carttittle="Card Tittle" cardpreg="Card Paragraph"/>              
            </div>
            <div className='col-md-4'>
              <Card name='Jayesh J' carttittle="Card Tittle" cardpreg="Card Paragraph"/>              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default home
