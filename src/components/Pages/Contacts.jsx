import { Contact } from '../Contacts/Contacts';
import { Filter } from '../Filter/Filter';
import { Forma } from '../Forma/Forma';
import { ContainerForm } from '../App/App.styled';

const Contacts = () => {
  return (
    <ContainerForm>
      <h1>Phonebook</h1>
      <Forma />
      <h2>Contacts</h2>
      <Filter />
      <Contact />
    </ContainerForm>
  );
};

export default Contacts;
