import { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.css";
import { validateForm } from "../../validateForm";
import { toast, Toaster } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

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
    setErrors({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    // Si hay errores, detener el envío
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const user = {
      to_email: form.email,
      user_first_name: form.name,
      message: form.message,
    };

    emailjs.send(
      "service_fpywsm8",
      "template_f5fhtes",
      user,
      "2E7Zutk3hbloWRdpZ"
    );

    emailjs.send(
      "service_fpywsm8",
      "template_0wz6los",
      user,
      "2E7Zutk3hbloWRdpZ"
    );
    handleReset();
    toast.success("Mensaje enviado correctamente");
  };

  return (
    <div>
      <div className={styles.contactContainer}>
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
            {errors.name && (
              <p style={{ color: "red", textAlign: "center" }}>{errors.name}</p>
            )}
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
            {errors.email && (
              <p style={{ color: "red", textAlign: "center" }}>
                {errors.email}
              </p>
            )}
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
            {errors.message && (
              <p style={{ color: "red", textAlign: "center" }}>
                {errors.message}
              </p>
            )}
          </div>
          <div>
            <button type="submit" className={styles.submitButton}>
              ENVIAR
            </button>
            {/* <button
              type="button"
              onClick={handleReset}
              className={styles.resetButton}
            >
              REINICIAR
            </button> */}
          </div>
          <Toaster position="bottom-right" richColors />
        </form>
      </div>
    </div>
  );
};

export default Contact;
