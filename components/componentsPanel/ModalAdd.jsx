import { Modal, Stack, Form, Button, Col, Row } from "react-bootstrap";
import { añadirProducto } from "../../funciones/añadirProducto";
import "./ModalAdd.module.css";

//modal que se abre al agregar un nuevo examen al inventario
export default function modalAdd({
  isModalAdd,
  setIsModalAdd,
  actualizarEstadoProductos,
}) {
  //funcion que se activa al agregar examenes
  function addExamModal() {
    //obtener informacion del formulario
    const nombre = document.getElementById("nombre").value;
    const categoria = document.getElementById("categoria").value;
    const descripcion = document.getElementById("descripcion").value;
    const indicaciones = document.getElementById("indicaciones").value;
    const procedimiento = document.getElementById("procedimiento").value;
    const precio = document.getElementById("precio").value;

    //validar campos obligatorios
    if (
      !nombre ||
      !categoria ||
      !descripcion ||
      !indicaciones ||
      !procedimiento ||
      !precio
    ) {
      alert("Por favor ingresa todos los campos obligatorios.");
      return;
    }

    //validar precio
    if (isNaN(precio) || parseFloat(precio) <= 0) {
      alert("Por favor ingresa un precio válido.");
      return;
    }

    //enviar información a firebase
    const infoProducto = {
      nombre,
      categoria,
      descripcion,
      indicaciones,
      procedimiento,
      precio,
    };
    añadirProducto(infoProducto);
    actualizarEstadoProductos();
    setIsModalAdd(false);
  }
  return (
    <Modal
      className="text-black"
      size="lg"
      bs-modal-bg="black"
      centered
      show={isModalAdd}
      onHide={() => setIsModalAdd(false)}
    >
      <Modal.Header>
        <Modal.Title>Añadir examen</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack>
            <Form.Control
              autoFocus
              className="mb-1"
              id="nombre"
              placeholder="Nombre"
              type="text"
            />
            <Form.Control
              className="mb-1"
              id="categoria"
              placeholder="Categoria"
              type="text"
            />
            <Form.Control
              className="mb-1"
              id="descripcion"
              placeholder="Descripcion"
              type="text"
            />
            <Form.Control
              className="mb-1"
              id="indicaciones"
              placeholder="Indicaciones"
              type="text"
            />
            <Form.Control
              className="mb-1"
              id="procedimiento"
              placeholder="Procedimiento"
              type="text"
            />
            <Form.Control
              className="mb-1"
              id="precio"
              placeholder="Precio"
              type="number"
            />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsModalAdd(false)}>
          {" "}
          Cancelar
        </Button>
        <Button onClick={addExamModal} variant="primary">
          {" "}
          Añadir
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
