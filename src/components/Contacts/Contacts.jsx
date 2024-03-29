import { ContactsListEl, ContactsList, ContactsBtn } from "./Contacts.styled"
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/sliceContact';
import { deleteContactThunk } from 'redux/sliceContact';


export const Contact = () => {
  const { contacts } = useSelector(state => state.contacts);
  const filterValue = useSelector(state => state.filter);
  const { isLoading } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const normalizedFilter = filterValue.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const deleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

   useEffect(() => {
     dispatch(getContactsThunk());
   }, [dispatch]);


  return (
    <>
      {isLoading && <h4>Loading...</h4>}
      <ContactsList>
        {visibleContacts.map(el => {
          return (
            <ContactsListEl key={el.id}>
              {el.name} <span>{el.number}</span>
              <ContactsBtn type="button" onClick={() => deleteContact(el.id)}>
                Delet
              </ContactsBtn>
            </ContactsListEl>
          );
        })}
      </ContactsList>
    </>
  );
}

