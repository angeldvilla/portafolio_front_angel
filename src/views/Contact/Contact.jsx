import { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.css";
import { toast, Toaster } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      to_email: "escarlata.2003@gmail.com",
      user_first_name: form.name,
    };

    emailjs.send(
      "service_fpywsm8",
      "template_f5fhtes",
      user,
      "2E7Zutk3hbloWRdpZ"
    );
    handleReset();
    toast.success("Mensaje enviado correctamente");
  };

  return (
    <section>
      <div id="contact" className={styles.contactContainer}>
        <Typography
          variant="h4"
          style={{ marginBottom: "20px", marginTop: "-0.5em" }}
        >
          ¡Contáctame, deja tu mensaje!
        </Typography>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div>
            <TextField
              id="name"
              name="name"
              label="Nombre Completo"
              value={form.name}
              onChange={handleChange}
              className={styles.inputField}
              required
              style={{ marginBottom: "20px" }}
            />
            <TextField
              type="email"
              id="email"
              name="email"
              label="Correo Electrónico"
              value={form.email}
              onChange={handleChange}
              className={styles.inputField}
              required
              style={{ marginBottom: "20px" }}
            />
            <TextField
              id="message"
              name="message"
              label="Mensaje"
              InputLabelProps={{
                shrink: true,
              }}
              value={form.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí"
              className={styles.textareaField}
              required
            />
          </div>
          <div>
            <button type="submit" className={styles.submitButton}>
              ENVIAR
            </button>
            <button
              type="button"
              onClick={handleReset}
              className={styles.resetButton}
            >
              REINICIAR
            </button>
          </div>
        </form>
      </div>
      <Toaster position="top" richColors />
    </section>
  );
};

export default Contact;
