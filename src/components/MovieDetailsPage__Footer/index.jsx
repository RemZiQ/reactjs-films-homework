import React from 'react';
import './style.scss';
import StarRating from '../MovieDetailsPage__StarRating/index';
import Action from '../MovieDetailsPage__Action/index';

const movieDetailsPageFooter = () => {
  const exampleInfo = `There are growing dangers in the
   wizarding world of 1926 New York. Something mysterious is 
   leaving a path of dectruction in the streets,
   threatening to expose the wizarding`;
  const exampleGenres = ['Adventure', 'Drama', 'Family', 'Fantasy'];
  const exampleDuration = '1h 46m';
  const exampleRating = 4.8;
  return (
    <div className="movieDetailsPage__footer">
      <StarRating title="the jungle book" genres={exampleGenres} duration={exampleDuration} rating={exampleRating} />
      <Action info={exampleInfo} />
    </div>
  );
};
export default movieDetailsPageFooter;
