import axios from 'axios'
export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await axios.get(`http://node-sample-api.herokuapp.com/api/products?page=1`).then((res) => {
    dispatch({
      type: FETCH_USERS,
      payload: res.data.data
    });
  });


};



// fetchadmins to handle second API from client


export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins = () => async (dispatch, getState) => {
  let index = getState().products.length/10
  let users = getState().products
  console.log(users, 'users from first')
  const res = axios.get(`http://node-sample-api.herokuapp.com/api/products?page=${index+1}`).then((res) => {
    console.log([...users,...res.data.data])
  dispatch({
      type: FETCH_USERS,
      payload: [...users,...res.data.data]
    });
  });
};
