import emailjs from '@emailjs/browser';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Modal from 'react-modal';
import styles from './modal.module.scss';

type SendMailType = {
  name: string;
  email: string;
  message: string;
};

type EmailJsTemplateType = {
  from_name: string;
  reply_to: string;
  message: string;
};

type IModalProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
};

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('main');

export const EmailModal = ({ modalIsOpen, closeModal }: IModalProps) => {
  useEffect(
    () => emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''),
    []
  );

  const [isMessageSend, setIsMessageSend] = useState(false);
  const [hasMessageError, setHasMessageError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SendMailType>();

  const onSubmit: SubmitHandler<SendMailType> = async (data) => {
    setHasMessageError(false);

    const templateParams: EmailJsTemplateType = {
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    setIsLoading(true);

    const res = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
      templateParams
    );

    setIsLoading(false);

    if (res.status === 200) {
      setIsMessageSend(true);
    } else {
      setHasMessageError(true);
    }
  };

  const onSendAgain = () => {
    setIsMessageSend(false);
  };

  const onCloseModal = () => {
    closeModal();
    setIsMessageSend(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      className={styles.modal}
      overlayClassName={styles.modal_overlay}
    >
      <div className={styles.modal_content}>
        <button onClick={onCloseModal} className={styles.modal_close}>
          <FontAwesomeIcon icon={faClose} />
        </button>
        <p className={styles.modal_title}>Tell me more about your request.</p>

        {!isMessageSend ? (
          <form className={styles.modal_form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.modal_from}>
              <div className={styles.modal_input}>
                <p>Name</p>
                <input type="text" {...register('name', { required: true })} />
                {errors.name && (
                  <span className={styles.form_error}>
                    This field is required
                  </span>
                )}
              </div>
              <div className={styles.modal_input}>
                <p>Email</p>
                <input
                  type="email"
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <span className={styles.form_error}>
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <div className={styles.modal_message}>
              <p>Message</p>
              <textarea {...register('message', { required: true })} />
              {errors.message && (
                <span className={styles.form_error}>
                  This field is required
                </span>
              )}
            </div>
            {hasMessageError && (
              <div className={styles.modal_error}>
                <p>An error occurred. Please, try again later.</p>
              </div>
            )}
            <div className={styles.modal_buttons}>
              <button className={styles.modal_button} type="submit">
                {isLoading && <span className={styles.modal_loader}></span>}
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div className={styles.modal_success}>
            <div className={styles.modal_success_message}>
              <p>
                Your request has been sent successfully.{"I'll"} reply to you
                promptly!
              </p>
            </div>
            <div className={styles.modal_buttons}>
              <button className={styles.modal_button} onClick={onSendAgain}>
                Send another email
              </button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};
