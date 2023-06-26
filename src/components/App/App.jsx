import { Contacts } from '../Contacts/Contacts';
import { Filter } from '../Filter/Filter';
import { Forma } from '../Forma/Forma';
import { ContainerForm } from './App.styled';

export const App = () => {
  return (
    <ContainerForm>
      <h1>Phonebook</h1>
      <Forma />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </ContainerForm>
  );
};

