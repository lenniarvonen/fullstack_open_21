import React from 'react'

//Renderöi yhteystiedot riippuen filtteristä
const Contacts = (props) => {
  const contacts = props.contacts
  const condition = props.condition
  const remove = props.remove


  return(
    <div>
      {contacts.map(contact => {

        if (contact.name.includes(condition)){
          return(
          <Contact
          key={contact.id}
          contactName={contact.name}
          contactNumber={contact.number}
          removeContact={remove}
          contactId={contact.id}
          />
        )
        }

        return null
      
      })}
    </div>
  )
}

//Yksittäinen yhteystieto
const Contact = (props) => {
  const {contactName, contactNumber, contactId, removeContact} = props


  return(
    <div>
      {contactName} {contactNumber} 
      <button onClick={ () => removeContact(contactId)}>delete</button>
    </div>
  )
}


export default Contacts;