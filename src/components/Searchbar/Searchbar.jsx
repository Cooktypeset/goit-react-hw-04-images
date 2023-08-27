import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import Notiflix from 'notiflix';

export const Searchbar = ({ onFormSubmit }) => {
   const [value, setValue] = useState('');

  const inputChange = event => {
    setValue(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (value.trim() === '') {
      return Notiflix.Notify.failure('Please add valid property');
    }
    onFormSubmit(value);
    setValue('');
}

  return (
          <header className={css.searchbar}>
              <form onSubmit={handleSubmit} className={css.form}>
                <button type="submit" className={css.button}>
                     <span className={css.label}>Search</span>
                </button>
                  <input
                    onChange={inputChange}
                    className={css.input}
                    value = {value}
                    type="text"
                    placeholder="Search images and photos"
                />
            </form>
          </header>

  )
}

Searchbar.propTypes = {
  onFormSubmit:PropTypes.func.isRequired,
}