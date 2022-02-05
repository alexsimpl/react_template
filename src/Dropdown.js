import React from 'react';

const Dropdown = () => {
  let isOpened = 'false';
  const toggleState = () => {
    if (isOpened) {isOpened = !isOpened};
  }
    console.log('isOpened', isOpened);
    let dropdownText;
    if (isOpened) {dropdownText = <div>It`s ok!</div>}
    return (
    <div onClick={toggleState}>Its dropdown baby{dropdownText}</div>);
}
export default Dropdown;