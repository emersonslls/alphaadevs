import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './Style/Forms.module.css'; // Importando o CSS Module

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configurar o EmailJS
    emailjs
      .send(
        'YOUR_SERVICE_ID',      // Substitua pelo seu SERVICE ID
        'YOUR_TEMPLATE_ID',     // Substitua pelo seu TEMPLATE ID
        formData,               // Dados do formulário
        'YOUR_USER_ID'          // Substitua pelo seu USER ID
      )
      .then(
        (response) => {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' }); // Resetar o formulário
        },
        (error) => {
          setStatus('error');
        }
      );
  };

  return (
    <div className={styles.Container}>
      {status === 'success' && <p className={styles.MessageSucesso}>O Seu E-mail foi enviado com sucesso!</p>}
      {status === 'error' && <p className={styles.MessageError}>Vish, seu e-mail não foi enviado. Confira se os dados digitado estão correto e tente novamente.</p>}
      <form className={styles.ContainerForms} onSubmit={handleSubmit}>
        <div className={styles.Nome}>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome completo" // Adiciona o placeholder
            required
          />
        </div>
        <div className={styles.Email}>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Seu e-mail" // Adiciona o placeholder
            required
          />
        </div>
        <div className={styles.Message}>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escreva sua mensagem" // Adiciona o placeholder
            required
          />
        </div>
        <button className={styles.button} type="submit">Enviar mensagem</button>
      </form>
    </div>
  );
};

export default EmailForm;
