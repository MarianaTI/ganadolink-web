import React, { useEffect, useState } from "react";
import { CheckBoxInputStyled, LabelStyled } from "./index.style";

const CustomCheckboxInput = ({
  data,
  onSelectionChange,
  name,
  defaultValue,
}) => {
  const [selectedId, setSelectedId] = useState(defaultValue?._id || null);

  const normalizedData = data.map((item) => ({
    id: item._id || item.value,
    label: item.name || item.label,
  }));

  const handleCheckboxChange = (id) => {
    const newSelectedId = selectedId === id ? null : id;
    setSelectedId(newSelectedId);
    onSelectionChange(newSelectedId);
  };

  useEffect(() => {
    setSelectedId(defaultValue?._id || null);
  }, [defaultValue]);

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
