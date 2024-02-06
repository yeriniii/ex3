import React from "react";
import { DropdownProvider, useDropdown } from "./DropdownContext";

const DropdownButton = () => {
  const { toggleDropdown, selectedItem } = useDropdown();
  return (
    <button onClick={() => toggleDropdown()}>
      {selectedItem === null ? "Dropdown Button" : selectedItem}
    </button>
  );
};

const DropdownMenu = ({ items }) => {
  const { isOpen, selectItem } = useDropdown();
  if (!isOpen) {
    return null;
  }
  return (
    <ul>
      {items.map((item) => (
        <li
          style={{ cursor: "pointer" }}
          key={item}
          onClick={() => selectItem(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

const Dropdown = ({ items }) => {
  return (
    <DropdownProvider>
      <div>
        <DropdownButton />
        <DropdownMenu items={items} />
      </div>
    </DropdownProvider>
  );
};

export default Dropdown;
