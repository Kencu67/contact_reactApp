import './App.css';
import { Contact } from './Contact';

const contactItem = {
    contact1 : {
      name: 'Feri',
      address: "Moon",
      number: '0942879234'
    },
    contact2 : {
      name: 'Tibi',
      address: "Mars",
      number: '423592421'
    },
};

const App = () => {
  return (
    <Contact
        name={contactItem.contact1.name}
        address={contactItem.contact1.address}
        number={contactItem.contact1.number} />
    );
  }

export default App;












// CONTACT ELEMEK KÜLÖN KOMPONENSKÉNT

/* const Name = (props) => {
  return (
      <div className="name">
        {props.name}
      </div>
  );
}

const Address = (props) => {
  return (
      <div className="address">
        {props.address}
      </div>
  );
}

const Number = (props) => {
  return (
      <div className="number">
        {props.number}
      </div>
  );
}

*/