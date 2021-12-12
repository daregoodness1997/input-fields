import React, { useState, useEffect } from 'react';
import Input from './Input';

const Autocomplete = ({ suggestions, ...props }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState('');

  const onChange = e => {
    const userInput = e.target.value;

    // Filter our suggestions that don't contain the user's input
    const unLinked = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const onClick = e => {
    setFilteredSuggestions([]);
    setInput(e.target.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <ul class='suggestions w-full p-4'>
        {filteredSuggestions.map((suggestion, index) => {
          let className;
          // Flag the active suggestion with a class
          if (index === activeSuggestionIndex) {
            className = 'suggestion-active bg-blue-200 text-blue-800 ';
          }
          return (
            <li
              className={`${className} p-4 text-gray-500`}
              key={suggestion}
              onClick={onClick}
            >
              {suggestion}
            </li>
          );
        })}
      </ul>
    ) : (
      <div class='no-suggestions'>
        <em>No suggestions, you're on your own!</em>
      </div>
    );
  };
  return (
    <>
      <Input
        {...props}
        type='text'
        onChange={onChange}
        // onKeyDown={onKeyDown}
        value={input}
      />
      {showSuggestions && input && <SuggestionsListComponent />}
    </>
  );
};

export default Autocomplete;
