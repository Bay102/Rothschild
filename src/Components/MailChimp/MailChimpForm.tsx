import React, { useEffect, useState } from 'react';
import styles from './mailChimp.module.css';
import MailchimpSubscribe, { EmailFormFields } from 'react-mailchimp-subscribe';
import { toast } from 'react-toastify';

type MailChimpFormTypes = {
  status: 'success' | 'error' | 'sending' | null;
  message: string | Error | null;
  onValidated: (formData: EmailFormFields) => void;
};

const CustomForm = ({ status, message, onValidated }: MailChimpFormTypes) => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    email &&
      email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  console.log(status, message);

  useEffect(() => {
    if (status === 'success') {
      toast.success(`${message}`);
      clearFields();
    }
    if (status === 'error') {
      toast.error(`${message}`);
      clearFields();
    }
  }, [status]);

  const clearFields = () => {
    setEmail('');
  };

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <h3>Follow Us</h3>
      <p>Subscribe to Our Newsletter</p>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        value={email}
        placeholder="your@email.com"
        required
      />

      <button type="submit">Sign Up</button>
    </form>
  );
};

const MailChimpForm = () => {
  const url = `abc`;

  return (
    <div className="">
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData: EmailFormFields) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailChimpForm;
