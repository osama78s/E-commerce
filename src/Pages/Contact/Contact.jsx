import { useEffect, useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = t("contact.error_name");
    if (!formData.email.trim()) {
      newErrors.email = t("contact.error_email");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("contact.error_email");
    }
    if (!formData.message.trim()) newErrors.message = t("contact.error_message");
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setServerMessage("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setServerMessage(t("contact.success"));
    setFormData({ name: "", email: "", message: "" });
    setLoading(false);
  };

  useEffect(() => {
    if (serverMessage) {
      setTimeout(() => setServerMessage(""), 5000);
    }
  }, [serverMessage]);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {t("contact.title")}
        </h1>
        <p className="text-center text-gray-600 mb-10">
          {t("contact.subtitle")}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("contact.name")}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact.placeholder_name")}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              {errors.name && <p className="text-rose-700 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("contact.email")}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact.placeholder_email")}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              {errors.email && <p className="text-rose-700 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("contact.message")}
              </label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contact.placeholder_message")}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              ></textarea>
              {errors.message && <p className="text-rose-700 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
                } bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-200`}
            >
              {loading ? t("contact.sending") : t("contact.send")}
            </button>

            {serverMessage && (
              <p className="text-center mt-3 text-sm font-medium text-gray-700">
                {serverMessage}
              </p>
            )}
          </form>

          {/* Contact Info */}
          <div className="flex flex-col space-y-6 justify-center">
            <div className="flex items-center space-x-3">
              <Phone className="text-blue-600 w-5 h-5" />
              <p className="text-gray-700">+20 109 021 5294</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-blue-600 w-5 h-5" />
              <p className="text-gray-700">contact@example.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-blue-600 w-5 h-5" />
              <p className="text-gray-700">{t("egypt")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
