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
    const listRef = ref(storage, "images/promociones"); // Se obtiene la referencia del directorio de las imágenes de las promociones
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
    if (!selectedImage) {
      document.getElementById("message").innerHTML =
        "No se ha seleccionado ningún archivo jpg.";
      setTimeout(() => {
        document.getElementById("message").innerHTML = "";
      }, 5000);
      return;
    }

    // Validar el tamaño del archivo
    if (selectedImage.size > 1000000) {
      document.getElementById("message").innerHTML =
        "El tamaño de la imagen es mayor a 1MB. Por favor, comprime la imagen en este <a href='https://www.iloveimg.com/es/comprimir-imagen' target='_blank'>enlace</a> y vuelve a intentarlo.";
      setTimeout(() => {
        document.getElementById("message").innerHTML = "";
      }, 5000);
      return;
    }

    const imageName = `promo${index}`; // Se genera el nombre del archivo
    const imageRef = ref(storage, `/images/promociones/${imageName}.jpg`); // Se obtiene la referencia del archivo
    await uploadBytes(imageRef, selectedImage).then(() => {
      document.getElementById("message").innerHTML = "Imagen actualizada";
      setTimeout(() => {
        document.getElementById("message").innerHTML = "";
      }, 2000);
    });
    setSelectedImage(null); // Limpiar el archivo seleccionado
    setRefreshUrls(!refreshUrls); // Actualizar las URLs de las imágenes de promociones
  };

  return (
    <>
      <Button onClick={() => setShow(true)}>Editar Promos</Button>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar promociones (jpg)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p id="message"></p>
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
                  accept="image/jpg"
                />
                <Button
                  variant="dark"
                  onClick={() => handleImageUpload(index + 1)}
                >
                  Actualiza {index + 1}
                </Button>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PromocionesModal;
