import React, { useState } from "react";
import { CheckBoxInputStyled, LabelStyled } from "./index.style";

const CustomCheckboxInput = ({ data, onSelectionChange, name }) => {
  const [selectedId, setSelectedId] = useState(null);

  const normalizedData = data.map((item) => ({
    id: item._id || item.value,
    label: item.name || item.label,
  }));

  const handleCheckboxChange = (id) => {
    const newSelectedId = selectedId === id ? null : id;
    setSelectedId(newSelectedId);
    onSelectionChange(newSelectedId);
  };

  return (
    <>
      {normalizedData?.length > 0 ? (
        normalizedData.map((item) => (
          <div key={item.id}>
            <CheckBoxInputStyled
              type="checkbox"
              id={item.id}
              name={name}
              checked={selectedId === item.id}
              onChange={() => handleCheckboxChange(item.id)}
            />
            <label htmlFor={item.id}>{item.label}</label>
          </div>
        ))
      ) : (
        <p>Cargando datos...</p>
      )}
    </>
  );
};

export default CustomCheckboxInput;
