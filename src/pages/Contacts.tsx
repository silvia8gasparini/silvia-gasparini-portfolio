import { useState, type FormEvent, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Contacts() {
  const { t } = useTranslation();
  const [popup, setPopup] = useState<null | { type: "success" | "error"; msg: string }>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setPopup({ type: "success", msg: "Messaggio inviato con successo!" });
      form.reset();
    } else {
      setPopup({ type: "error", msg: "Errore durante l'invio del messaggio." });
    }
  };

  useEffect(() => {
    if (popup) {
      const timer = setTimeout(() => setPopup(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [popup]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-white">
      <h1
        className="text-4xl md:text-5xl font-tangerine font-bold text-black mb-10"
        style={{ textShadow: "0 0 6px rgba(202, 202, 202, 0.9)" }}
      >
        {t("contacts.title")} 
      </h1>

<div className="flex gap-10 mb-12">
        <a
          href="https://www.linkedin.com/in/silviagasparini8/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 hover:scale-110 transition-transform"
        >
          <img
            src="/icons/linkedin.png"
            alt="LinkedIn"
            className="w-full h-full object-contain"
          />
        </a>
        <a
          href="https://github.com/silvia8gasparini"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 hover:scale-110 transition-transform"
        >
          <img
            src="/icons/github.svg"
            alt="GitHub"
            className="w-full h-full object-contain"
          />
        </a>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-lg shadow-lg p-8 space-y-4 font-ysabeau text-xl bg-[#fffdfa] backdrop-blur"
      >
        <input
          type="hidden"
          name="access_key"
          value={import.meta.env.VITE_WEB3FORM_KEY}
        />

        <div>
          <label className="block mb-1 font-medium">{t("contacts.name")}</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">{t("contacts.email")}</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">{t("contacts.message")}</label>
          <textarea
            name="message"
            required
            rows={4}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-red-800 transition"
        >
          {t("contacts.button")}
        </button>
      </form>

      {popup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div
            className={`px-6 py-4 rounded-lg shadow-lg text-center text-white font-ysabeau text-lg ${
              popup.type === "success" ? "bg-green-100 border border-green-600 text-green-600" : "bg-red-100 border border-red-600 text-red-600"
            }`}
          >
            {popup.type === "success"} {popup.msg}
          </div>
        </div>
      )}
    </section>
  );
}
