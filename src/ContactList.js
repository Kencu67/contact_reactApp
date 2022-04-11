import { Contact } from './Contact';

const contact1 = {
  name: 'Feri',
  address: "Moon",
  number: '0942879234'
}

const contact2 = {
  name: 'Tibi',
  address: "Mars",
  number: '423592421'
};

const contact3 = {
  name: 'Fiona',
  address: "Jupiter",
  number: '25242561'
};

const contact4 = {
  name: 'Pumped Gabó',
  address: "Merkúr",
  number: '37354242'
};

const contact5 = {
  name: 'Madonna',
  address: "Vénusz",
  number: '76242421'
};

const contact6 = {
  name: 'Győzike',
  address: "Mars",
  number: '23897423'
};

const ContactList = () => {
  return (
    <div className="MainContainer">
      <Contact
        name={contact1.name}
        address={contact1.address}
        number={contact1.number} />
      <Contact
        name={contact2.name}
        address={contact2.address}
        number={contact2.number} />
        <Contact
        name={contact3.name}
        address={contact3.address}
        number={contact3.number} />
        <Contact
        name={contact4.name}
        address={contact4.address}
        number={contact4.number} />
        <Contact
        name={contact5.name}
        address={contact5.address}
        number={contact5.number} />
        <Contact
        name={contact6.name}
        address={contact6.address}
        number={contact6.number} />
    </div>
  );
};

export { ContactList };