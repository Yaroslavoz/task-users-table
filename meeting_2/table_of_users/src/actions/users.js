export function usersHasErrored(bool) {
  return {
      type: 'ITEMS_HAS_ERRORED',
      hasErrored: bool
  };
}

export function usersIsLoading(bool) {
  return {
      type: 'ITEMS_IS_LOADING',
      isLoading: bool
  };
}

export function usersFetchDataSuccess(users) {
  return {
      type: 'ITEMS_FETCH_DATA_SUCCESS',
      users
  };
}

export function usersFetchData(url) {
  return (dispatch) => {
      dispatch(usersIsLoading(true));

      fetch(url)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }

              dispatch(usersIsLoading(false));

              return response;
          })
          .then((response) => response.json())
          .then((items) => dispatch(usersFetchDataSuccess(items)))
          .catch(() => dispatch(usersHasErrored(true)));
  };
}


