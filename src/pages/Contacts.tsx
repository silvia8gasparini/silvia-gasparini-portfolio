import {  useState, type FormEvent } from "react";

export default function Contacts() {
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Invio in corso...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Messaggio inviato con successo!");
      form.reset();
    } else {
      setResult("Errore nell'invio, riprova");
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-[url('/pictures/wallpaper.jpg')] bg-cover ">
      <h1 className="text-4xl md:text-5xl font-explora font-bold text-black mb-10"style={{ textShadow: '0 0 6px rgba(202, 202, 202, 0.9)' }}>
        Contattami
      </h1>

      <div className="flex gap-10 mb-12">
        <a
          href="https://www.linkedin.com/in/silviagasparini8"
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
        className="w-full max-w-md rounded-lg shadow-lg p-8 space-y-4 font-ysabeau text-xl"
      >
        <input
          type="hidden"
          name="access_key"
          value={import.meta.env.VITE_WEB3FORM_KEY}
        />

        <div>
          <label className="block mb-1 font-medium">Nome</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Messaggio</label>
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
          Invia
        </button>

        {result && (
          <p className="text-center text-sm mt-3 text-gray-700">{result}</p>
        )}
      </form>
    </section>
  );
}
