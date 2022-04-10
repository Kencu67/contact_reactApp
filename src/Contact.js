const Contact = (props) => {
    return (
      <div className="contact">

        <div className="NameContainer">
          <h1>Név: </h1>
          <div className="name">
              {props.name}
          </div>
        </div>

        <div className="AddressContainer">
          <h1>Cím: </h1>
          <div className="address">
            {props.address}
          </div>
        </div>

        <div className="NumberContainer">
          <h1>Telefonszám: </h1>
          <div className="number">
            {props.number}
          </div>
          </div>
      </div>
    )
}

export { Contact };



// homework

// csinálj olyan komponenst ami kap egy contact item-et (név, telszám, lakcím) és ezeket írd ki szép formában!
// csinálj olyan komponenst, ami megkap egy kontakt listát, és annak minden elemét kiírja a képernyőre
// használd fel a korábban létrehozott komponenst!

// Contact - name, phone number, addresss
// ContactList - Contacts[minden eleme egy objektum, ezekbben van a name, phone number és address]
// csinálj github repot és TOLD FEL!

// csinálj olyan komponenst, ami egy formot renderel ki a képernyőre (a három értékkel)!