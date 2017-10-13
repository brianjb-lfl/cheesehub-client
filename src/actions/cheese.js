'use strict';

export const fetchCheeses = () => dispatch => {
  dispatch(fetchCheesesRequest());
  fetch('url')
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(cheeses => {
      dispatch(fetchCheesesSuccess(cheeses));
    })
    .catch(err => {
      dispatch(fetchCheesesError(err));
    })
};