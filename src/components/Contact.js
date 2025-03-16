import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container id="contact" className="py-5">
      <h2>İletişim</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Adınız</Form.Label>
          <Form.Control type="text" placeholder="Adınız" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>E-posta</Form.Label>
          <Form.Control type="email" placeholder="E-posta adresiniz" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mesaj</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Mesajınız" />
        </Form.Group>
        <Button variant="primary" type="submit">Gönder</Button>
      </Form>
    </Container>
  );
};

export default Contact;
