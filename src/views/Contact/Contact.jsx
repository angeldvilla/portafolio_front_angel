import { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.css";
import { validateForm } from "../../validateForm";
import { toast, Toaster } from "sonner";
import { UseTheme } from "../../theme/ThemeContext";

const Contact = () => {
  const { darkMode } = UseTheme();
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

    //Email para el remitente
    emailjs.send(
      "service_fpywsm8",
      "template_f5fhtes",
      user,
      "2E7Zutk3hbloWRdpZ"
    );

    //Email de notificación
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
    <div className={styles.contactContainerWrapper}>
      <div
        className={`${
          darkMode ? styles.contactContainerDark : styles.contactContainer
        }`}
      >
        <Typography
          variant="h3"
          style={{
            marginBottom: "30px",
            marginTop: "-0.5em",
            fontFamily: "Montserrat",
          }}
        >
          ¡Contáctame, deja tu mensaje!
        </Typography>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div>
            <TextField
              id="name"
              name="name"
              label="Nombre Completo"
              InputLabelProps={{
                shrink: true,
                style: {
                  color: darkMode ? " #ffffff" : "#000",
                },
              }}
              value={form.name}
              onChange={handleChange}
              placeholder="Escribe tu nombre completo"
              className={styles.inputField}
              required
              sx={{
                marginBottom: "50px",
                bgcolor: darkMode ? "#a1a0a0" : "",
                color: darkMode ? "#fff" : "#fff",
                borderRadius: 2,
              }}
            />
            {errors.name && (
              <p style={{ color: "red", textAlign: "center" }}>{errors.name}</p>
            )}
            <TextField
              type="email"
              id="email"
              name="email"
              label="Correo Electrónico"
              InputLabelProps={{
                shrink: true,
                style: {
                  color: darkMode ? " #ffffff" : "#000",
                },
              }}
              value={form.email}
              onChange={handleChange}
              placeholder="Escribe tu correo electrónico"
              className={styles.inputField}
              required
              sx={{
                marginBottom: "50px",
                bgcolor: darkMode ? "#a1a0a0" : "",
                color: darkMode ? "#fff" : "#fff",
                borderRadius: 2,
              }}
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
                style: {
                  color: darkMode ? " #ffffff" : "#000",
                },
              }}
              value={form.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí"
              className={styles.textareaField}
              required
              sx={{
                marginBottom: "20px",
                bgcolor: darkMode ? "#a1a0a0" : "",
                color: darkMode ? "#fff" : "#fff",
                borderRadius: 2,
              }}
            />
            {errors.message && (
              <p style={{ color: "red", textAlign: "center" }}>
                {errors.message}
              </p>
            )}
          </div>
          <div>
            <button
              type="submit"
              style={{ fontWeight: 100 }}
              className={`${
                darkMode ? styles.submitButtonDark : styles.submitButton
              }`}
            >
              ENVIAR
            </button>
          </div>
          <Toaster position="top-right" richColors />
        </form>
      </div>
    </div>
  );
};

export default Contact;
