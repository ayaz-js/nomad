"use client";
import styles from "./Form.module.css";
import Image from "next/image";
import React, { useState } from "react";

interface FormProps {
  title?: string;
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  submitButton?: string;
}

export const Form = ({
  title,
  fullName,
  company,
  email,
  phone,
  submitButton,
}: FormProps) => {
  const baseUrl =
    "https://script.google.com/macros/s/AKfycbxOiCrIFP276agQlXG1HOiwWgB4fgT5Re_2d-85WpUZ_dilnUcZ_enhYFCg6nNTJ0zF-g/exec";
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setForm((state) => ({ ...state, [event.target.name]: event.target.value }));
  };

  const resetForm = () => {
    setForm({
      fullName: "",
      company: "",
      email: "",
      phone: "",
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setIsLoading(true);

    const _formData = new FormData();

    _formData.append("ФИО", form.fullName);
    _formData.append("Компания", form.company);
    _formData.append("Email", form.email);
    _formData.append("Телефон", form.phone);

    fetch(baseUrl, {
      method: "POST",
      body: _formData,
    })
      .then(() => resetForm())
      .then(() => setIsSuccess(true))
      .catch((error) => error)
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={styles.block}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <Image
          src="/images/form-image.png"
          width={720}
          height={438}
          alt=""
          className={styles.image}
        />
      </div>
      <div className={styles.fromFeild}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            placeholder={fullName}
            required
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={onChange}
          />
          <input
            className={styles.input}
            placeholder={company}
            required
            type="text"
            name="company"
            value={form.company}
            onChange={onChange}
          />
          <input
            className={styles.input}
            placeholder={email}
            required
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
          />
          <input
            className={styles.input}
            placeholder={phone}
            required
            type="text"
            name="phone"
            value={form.phone}
            onChange={onChange}
          />
          <button className={styles.button} type="submit">
            {isLoading ? <span className={styles.loader}></span> : submitButton}
          </button>
        </form>
      </div>
    </div>
  );
};
