import React, { useState } from "react";
import { CheckBoxInputStyled, LabelStyled } from "./index.style";

const CustomCheckboxInput = ({ data, onSelectionChange }) => {
  const [selectedId, setSelectedId] = useState(null);

  const handleCheckboxChange = (id) => {
   
    const newSelectedId = selectedId === id ? null : id;

    setSelectedId(newSelectedId);
    // Llama a onSelectionChange con el nuevo id seleccionado o null si se deseleccionó
    onSelectionChange(newSelectedId);
  };

  return (
    <>
      {data?.length > 0 ? (
        data.map((item) => (
          <div key={item._id}>
            <CheckBoxInputStyled
              type="checkbox"
              id={item._id}
              // Marca el checkbox como checked si el id actual es el seleccionado
              checked={selectedId === item._id}
              onChange={() => handleCheckboxChange(item._id)}
            />
            <label htmlFor={item._id}>{item.name}</label>
          </div>
        ))
      ) : (
        <p>Cargando datos...</p>
      )}
    </>
  );
};

export default CustomCheckboxInput;