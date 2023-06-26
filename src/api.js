import axios from 'axios';

export const getContacts = async () => {
    const { data } = await axios.get(
      'https://6492c7dd428c3d2035d0ab50.mockapi.io/contacts'
  );
    return data;
};

export const addContacts = async post => {
  const { data } = await axios.post(
    'https://6492c7dd428c3d2035d0ab50.mockapi.io/contacts',
    post
  );
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(
    `https://6492c7dd428c3d2035d0ab50.mockapi.io/contacts/${id}`
  );
  return data;
};

