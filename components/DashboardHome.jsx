import { Container, Button, Stack, Form, Table } from "react-bootstrap";
import signOut from "..//funciones/cerrarSesion";
import getAllProducts from "../funciones/getAllProducts";
import { useState, useEffect } from "react";
import ModalAdd from ".//componentsPanel/ModalAdd";
import deleteItem from "../funciones/deleteItem";
import ModalEdit from "./componentsPanel/ModalEdit";

export default function DashboardHome({ usuario }) {
  const [examenes, setexamenes] = useState([]);
  const [isModalAdd, setIsModalAdd] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [examEdit, setExamEdit] = useState(null);
  const [examSearch, setExamSearch] = useState([]);
  const [search, setSearch] = useState(null);
  const [perfilesActive, setPerfilesActive] = useState(false);
  let veces = 0;

  function añadirProductoHome() {
    setIsModalAdd(true);
  }

  function actualizarEstadoProductos() {
    getAllProducts().then(examenes => {
      setexamenes(examenes);
      setExamSearch(examenes);
      veces++;
      console.log(veces);
    });
  }

  function filter(searchTerm) {
    const searchResults = examenes.filter(el => {
      const criteria1 =
        el.nombre &&
        el.nombre.toString().toLowerCase().includes(searchTerm.toLowerCase());
      const criteria2 =
        el.categoria &&
        el.categoria
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      if (criteria1 || criteria2) {
        return el;
      }
    });
    setExamSearch(searchResults);
  }

  function searchHandler(e) {
    e.preventDefault();
    setSearch(e.target.value);
    filter(e.target.value);
  }

  function perfilesHandler() {
    setPerfilesActive(!perfilesActive);
  }

  useEffect(() => {
    actualizarEstadoProductos();
  }, []);
  return (
    <Container fluid>
      <ModalAdd
        actualizarEstadoProductos={actualizarEstadoProductos}
        isModalAdd={isModalAdd}
        setIsModalAdd={setIsModalAdd}
      />
      {examEdit && (
        <ModalEdit
          actualizarEstadoProductos={actualizarEstadoProductos}
          isModalEdit={isModalEdit}
          setIsModalEdit={setIsModalEdit}
          examEdit={examEdit}
          setExamEdit={setExamEdit}
        />
      )}
      <Stack direction="horizontal" className="justify-content-between">
        <p style={{ fontSize: 24 }}>Bienvenido, {usuario.email} </p>
        {/* <Button variant="secondary" onClick={perfilesHandler}>
          Perfiles
        </Button> */}
        <Button onClick={signOut}>Cerrar Sesión</Button>
      </Stack>
      <hr />
      <Form onSubmit={e => e.preventDefault()}>
        <Stack direction="horizontal">
          <Form.Group className="w-75 m-3">
            <Form.Control
              onChange={searchHandler}
              id="search"
              type="text"
              placeholder="Buscar"
            />
          </Form.Group>
        </Stack>
      </Form>

      <hr />
      <Button onClick={añadirProductoHome}>
        {perfilesActive ? "Añadir perfil" : "Añadir examen"}
      </Button>
      {/* {perfilesActive && (
        <Button variant="danger" onClick={maravilla}>
          Maravilla
        </Button>
      )} */}

      {perfilesActive ? (
        "Hola"
      ) : (
        <Table>
          <thead>
            <tr>
              <th>{examSearch.length}</th>
              <th>Examen</th>
              <th>Categoria</th>
              <th>Descripcion</th>
              <th>Indicaciones</th>
              <th>Procedimiento</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {examSearch &&
              examSearch.map((examen, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{examen?.nombre}</td>
                  <td>{examen?.categoria}</td>
                  <td>{examen?.descripcion}</td>
                  <td>{examen?.indicaciones}</td>
                  <td>{examen?.procedimiento}</td>
                  <td>${examen?.precio}.00</td>
                  <td>
                    <Button
                      variant="dark"
                      onClick={() => {
                        setExamEdit({ ...examen });
                        setIsModalEdit(true);
                      }}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        // Emitir una alerta de confirmación
                        const confirmacion = window.confirm(
                          "¿Estás seguro de eliminar este examen?"
                        );
                        // Si el usuario acepta, eliminar el examen
                        if (confirmacion) {
                          deleteItem(examen).then(() => {
                            actualizarEstadoProductos();
                          });
                        }
                      }}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}
