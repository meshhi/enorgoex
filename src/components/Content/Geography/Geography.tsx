import React from 'react'
import s from "./Geography.module.scss"
import CustomTitle from '../UIELements/CustomTitle/CustomTitle';

const Geography = () => {
  let map;

  window.DG.then(function () {
    map = window.DG.map('map', {
      center: [64.543071, 40.516241],
      zoom: 13
    });

    window.DG.marker([64.543071, 40.516241]).addTo(map).bindPopup('Вы кликнули по мне!');
  });
  return (
      <section className={s.geography}>
      <CustomTitle title="География присутствия" position="left" color="black"></CustomTitle>
        <div id="map"
          className={s.geography_map}
        ></div>
      </section>
  )
}

export default Geography