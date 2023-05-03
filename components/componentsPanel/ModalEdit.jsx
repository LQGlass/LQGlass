import { Modal, Stack, Form, Button } from "react-bootstrap";
import {
  añadirProducto,
  actualizarProducto,
} from "../../funciones/añadirProducto";
import { useState } from "react";

//modal que se abre al editar un item

export default function ModalEdit({
  isModalEdit,
  setIsModalEdit,
  actualizarEstadoProductos,
  examEdit,
  setExamEdit,
}) {
  const [examState, setExamState] = useState({ ...examEdit });
  function editExamModal() {
    //obtener informacion del formulario
    const nombre = document.getElementById("nombre").value;
    const categoria = document.getElementById("categoria").value;
    const descripcion = document.getElementById("descripcion").value;
    const indicaciones = document.getElementById("indicaciones").value;
    const procedimiento = document.getElementById("procedimiento").value;
    const precio = document.getElementById("precio").value;
    const nombrePaquete = document.getElementById("nombre-paquete").value;
    const id = examState?.id;
    //enviar información a firebase
    const infoProducto = {
      nombre,
      categoria,
      descripcion,
      indicaciones,
      procedimiento,
      precio,
      nombrePaquete,
      id,
    };
    actualizarProducto(infoProducto);
    //cerrar modal
    //regresar estado a vacio
    setExamEdit(null);
    actualizarEstadoProductos();
    setIsModalEdit(false);
  }
  return (
    <Modal
      show={isModalEdit}
      onHide={() => {
        setExamEdit(null);
        setIsModalEdit(false);
      }}
    >
      <Modal.Header>
        <Modal.Title>Editar examen</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack>
            <Form.Control
              className="mb-1"
              id="nombre"
              placeholder="Nombre"
              type="text"
              value={examState?.nombre.replace(/"/g, "")}
              onChange={e =>
                setExamState({
                  ...examState,
                  nombre: e.target.value,
                })
              }
            />
            <Form.Control
              className="mb-1"
              id="categoria"
              placeholder="Categoria"
              type="text"
              value={examState?.categoria}
              disabled
              onChange={e =>
                setExamState({
                  ...examState,
                  categoria: e.target.value,
                })
              }
            />
            <Form.Control
              className="mb-1"
              id="descripcion"
              placeholder="Descripcion"
              type="text"
              value={examState?.descripcion}
              onChange={e =>
                setExamState({
                  ...examState,
                  descripcion: e.target.value,
                })
              }
            />
            <Form.Control
              className="mb-1"
              id="indicaciones"
              placeholder="Indicaciones"
              type="text"
              value={examState?.indicaciones}
              onChange={e =>
                setExamState({
                  ...examState,
                  indicaciones: e.target.value,
                })
              }
            />
            <Form.Control
              className="mb-1"
              id="procedimiento"
              placeholder="Procedimiento"
              type="text"
              value={examState?.procedimiento}
              onChange={e =>
                setExamState({
                  ...examState,
                  procedimiento: e.target.value,
                })
              }
            />
            <Form.Control
              className="mb-1"
              id="precio"
              placeholder="Precio"
              type="number"
              value={examState?.precio}
              onChange={e =>
                setExamState({
                  ...examState,
                  precio: e.target.value,
                })
              }
            />
            <Form.Control
              className="mb-1"
              id="nombre-paquete"
              placeholder="Paquete/check-up"
              type="text"
              value={examState?.nombrePaquete}
              onChange={e =>
                setExamState({
                  ...examState,
                  nombrePaquete: e.target.value,
                })
              }
            />
            <Form.Control
              disabled
              className="mb-1"
              id="nombre-paquete"
              placeholder="Paquete/check-up"
              type="text"
              value={examState?.id}
              onChange={e =>
                setExamState({
                  ...examState,
                  nombrePaquete: e.target.value,
                })
              }
            />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            setIsModalEdit(false);
            setExamEdit(null);
          }}
        >
          Cancelar
        </Button>
        <Button onClick={editExamModal} variant="primary">
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
