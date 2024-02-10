import { useState } from 'react';
import { Container, ImagePreview, Input, Label } from './index.style';

const CustomImage = () => {
  const [image, setImage] = useState(null);
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === 'image') {
      setImage(URL.createObjectURL(file));
    } else {
      setImage(null);
    }
  };

  return (
    <Container>
      {image && <ImagePreview src={image} alt="Vista previa de la imagen cargada" />}
      <Input type="file" id="file-input" accept="image/*" onChange={handleImageChange} />
      <Label htmlFor="file-input">Cargar imagen</Label>
    </Container>
  );
};

export default CustomImage;
