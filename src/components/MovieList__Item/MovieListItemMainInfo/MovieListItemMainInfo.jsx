import React from 'react';

import store from '../../../modules/store';
import './mainInfo.scss';



const MainInfo = ({title, mark, genres}) => {
  const mapGenres = store.getState().genres;
  let listOfGenres = '';
  if(store.getState().genres.length){
    listOfGenres = genres.map(item => {
      return (
        <li key={item}>{mapGenres.filter(elem => elem.id === item)[0].name}</li>
      )
    })
  }
  return (
    <div className='movieList__item__overview__mainInfo'>
      <h2 className='movieList__item_title'>{title}</h2>
      <div className='movieList__item_mark'>{mark}</div>
      <ul className='movieList__item_genresList'>{listOfGenres}</ul>
    </div>
  )
}

// const mapStateToProps = (store) => {
//   return {store: store}
// }
// export default connect(mapStateToProps)(MainInfo);

export default MainInfo;