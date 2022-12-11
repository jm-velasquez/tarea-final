import React from "react";
import Form from 'react-bootstrap/Form';

export default function Contact() {
  return (

<Form>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Dirección de Correo Electrónico</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mensaje de contacto</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>

  );
}
