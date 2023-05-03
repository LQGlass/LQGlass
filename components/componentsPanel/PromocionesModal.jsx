import { useState, useEffect } from "react";
import firebaseApp from "../../firebase/firebase";
import {
  getStorage,
  ref,
  getDownloadURL,
  listAll,
  uploadBytes,
} from "firebase/storage";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "next/image";

// Se inicializa Firebase Storage
const storage = getStorage(firebaseApp);

const PromocionesModal = () => {
  const [urls, setUrls] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [refreshUrls, setRefreshUrls] = useState(false);

  const getUrls = async refresh => {
    const listRef = ref(storage, "imagenespromo/"); // Se obtiene la referencia del directorio de las imágenes de las promociones
    const links = [];
    try {
      const res = await listAll(listRef);
      for (const itemRef of res.items) {
        const url = await getDownloadURL(itemRef);
        links.push(url);
      }
      setUrls(links);
      if (refresh) {
        setRefreshUrls(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUrls(false);
  }, [refreshUrls]);

  // Función para subir una imagen a Firebase Storage
  const handleImageUpload = async index => {
    if (selectedImage) {
      const imageName = `promo${index}`; // Se genera el nombre del archivo
      const imageRef = ref(storage, `/imagenespromo/${imageName}`); // Se obtiene la referencia del archivo
      await uploadBytes(imageRef, selectedImage); // Se sube la imagen al storage
      setSelectedImage(null); // Limpiar el archivo seleccionado
      setRefreshUrls(!refreshUrls); // Actualizar las URLs de las imágenes de promociones
    }
  };

  return (
    <>
      <Button onClick={() => setShow(true)}>Editar Promos</Button>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar promociones</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {urls.map((url, index) => (
              <div key={index}>
                <Image
                  src={url}
                  width={50}
                  height={50}
                  alt={`Promoción ${index + 1}`}
                />
                <input
                  type="file"
                  onChange={e => setSelectedImage(e.target.files[0])}
                />
                <button onClick={() => handleImageUpload(index + 1)}>
                  Actualiza promo {index + 1}
                </button>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PromocionesModal;
