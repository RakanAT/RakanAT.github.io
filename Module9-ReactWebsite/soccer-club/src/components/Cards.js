import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some our recent events and honorary players!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='We played against our rival soccer club and had a tie!'
              label='Soccer Lovers vs Democratic Soccer Club'
              path='/sign-up'
            />
            <CardItem
              src='images/img-2.jfif'
              text='Rodrigo carried his team, one of the best MVP plays!'
              label='MVP of the Month'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.png'
              text='Abdulrahman has had the highest goals this month, 20 goals!'
              label='Most Goals of the Month'
              path='/sign-up'
            />
            <CardItem
              src='images/img-4.jpg'
              text='We also have a youth team, all ages are welcome when it comes to Soccer!'
              label='Youth'
              path='/sign-up'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Come and join the womens league! '
              label='Women'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
