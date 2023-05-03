import { Container, Form, Button } from "react-bootstrap";
import loginEmailPassword from "../../funciones/loginEmailPassword";
//formulario de inicio de sesion con React Bootstrap y Firebase
export default function Login() {
  async function submitHandler(e) {
    e.preventDefault();
    const email = e.target.formEmail.value;
    const passw = e.target.formPassword.value;
    await loginEmailPassword(email, passw);
  }
  return (
    <Container>
      <h1>Inicia Sesión</h1>
      {/* input para correo */}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="formEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="Correo" />
        </Form.Group>
        {/* input para contraseña */}
        <Form.Group controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Iniciar Sesión
        </Button>
      </Form>
    </Container>
  );
}
