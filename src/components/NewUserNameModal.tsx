import { ChangeEvent, FormEvent, useContext, useState, } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { ArrowFatLineRight } from '@phosphor-icons/react';
import styles from '../styles/components/NewUserNameModal.module.css';

export function NewUserNameModal() {

  const { setUsernameValue, setHasUsernameValue } = useContext(GlobalContext);
  const [newUserName, setNewUserName] = useState('');

  function handleNewUserName(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setNewUserName(event.target.value);
  }

  function handleCloseNewUserModal(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    setUsernameValue(newUserName);
    setHasUsernameValue(true);
  }

  const isNewUsernameInputEmpty = newUserName.length === 0;

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <strong>Bem Vindo!</strong>
        <p>Digite seu nome</p>
        <form className={styles.inputContainer}>
          <input
            title="username"
            type="text"
            value={newUserName}
            onChange={handleNewUserName}
            required
          />
          <button
            onClick={handleCloseNewUserModal}
            disabled={isNewUsernameInputEmpty}
            type="submit"
          >
            <ArrowFatLineRight size={30} />
          </button>
        </form>
      </div>
    </div>
  )
}