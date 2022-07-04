import './global.css';

import { InputText } from './components/InputText';
import { FormEvent, useState } from 'react';
import { getToken } from './api/getToken';

interface Contact {
  FirstName: string
  LastName: string //required
  Name: string; //required
  CurrencyIsoCode: 'BRL' | 'EUR' //required
  AccountId: string
  Email: string
}

function App() {
  const [contact, setContact] = useState<Contact>({} as Contact);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  async function handleSendContact(event: FormEvent) {
    event.preventDefault();

    const newContact: Contact = {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Name: `${firstName} ${lastName}`,
      CurrencyIsoCode: 'BRL',
      AccountId: '0011K00002KrytkQAB',
    }

    const tokenData = getToken();

    console.log(tokenData);

    setContact(newContact);


  }

  return (
    <div>
      <h1>Contato - AHK</h1>
      <form onSubmit={handleSendContact}>
        <InputText label="Nome" type="text" onChange={e => setFirstName(e.target.value)} value={firstName} />
        <InputText label="Sobrenome" type="text" onChange={e => setLastName(e.target.value)} value={lastName} />
        <InputText label="Email" type="text" onChange={e => setEmail(e.target.value)} value={email} />
        <button type='submit'>Enviar</button>
      </form>

    </div>

  )
}

export default App
