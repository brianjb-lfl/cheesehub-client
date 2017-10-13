export const fetchCheesesRequest = () => ({
  type: 'FETCH_CHEESES_REQUEST'
});

export const fetchCheesesSuccess = cheeses => ({
  type: 'FETCH_CHEESES_SUCCESS',
  cheeses
})

export const fetchCheesesError = error => ({
  type: 'FETCH_CHEESES_ERROR',
  error
})

export const fetchCheeses = () => dispatch => {
  fetch('http://localhost:8080/')
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(cheeses => {
      return dispatch(fetchCheesesSuccess(cheeses));
    })
    .catch(err => {
      dispatch(fetchCheesesError(error));
    })
};