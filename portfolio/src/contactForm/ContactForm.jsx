import { useTranslation } from "react-i18next";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
    const { t } = useTranslation();

    const [state, handleSubmit] = useForm("myegjzdp");

    if (state.succeeded) {
        return (
            <div className="contact-container">
                <h2>{t("contact.success_title")}</h2>
                <p>{t("contact.success_text")}</p>
            </div>
        );
    }

    return (
        <>
            <div className="contact-header">
                <p>{t("contact.form-text")}</p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="contact-form"
            >
                <div className="form-row">

                    <div>
                        <label htmlFor="firstName">
                            {t("contact.first_name")}
                        </label>

                        <input
                            id="firstName"
                            name="first_name"
                            type="text"
                            placeholder={t("contact.first_name")}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="lastName">
                            {t("contact.last_name")}
                        </label>

                        <input
                            id="lastName"
                            name="last_name"
                            type="text"
                            placeholder={t("contact.last_name")}
                            required
                        />
                    </div>

                </div>

                <div>
                    <label htmlFor="email">
                        {t("contact.email")}
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={t("contact.email_placeholder")}
                        required
                    />

                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>

                <div>
                    <label htmlFor="message">
                        {t("contact.message")}
                    </label>

                    <textarea
                        id="message"
                        name="message"
                        placeholder={t("contact.message_placeholder")}
                        rows="6"
                        required
                    />

                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>

                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="privacy"
                            required
                        />

                        {" "}

                        {t("contact.privacy")}
                    </label>
                </div>

                <ValidationError errors={state.errors} />

                <button
                    type="submit"
                    disabled={state.submitting}
                >
                    {state.submitting
                        ? t("contact.sending")
                        : t("contact.send")}
                </button>
            </form>
        </>
    );
}

export default ContactForm;