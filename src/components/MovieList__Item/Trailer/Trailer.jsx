import React from 'react';

import './trailer.scss';

const Trailer = ({ handle }) => {
  const example = () => {
    console.log(222);
  };
  return (
    <div className="movieList__item__trailer">
      <button onClick={handle} onClick={example} className="movieList__item__trailer_closeButton">close</button>
      <iframe style={{ backgroundColor: '#F6BB42' }} name="trailer" width="1080" height="760" frameBorder="0" allowFullScreen src="2133213" />
    </div>
  );
};

export default Trailer;
