import { useEffect, useState } from "react";

const API_URL = "http://localhost:8080/api/books";

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchBooks() {
    setLoading(true);
    const response = await fetch(API_URL);
    const data = await response.json();
    setBooks(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !author.trim()) {
      return;
    }

    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        author,
      }),
    });

    setTitle("");
    setAuthor("");
    fetchBooks();
  }

  async function handleDelete(id) {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    fetchBooks();
  }

  return (
    <main className="page">
      <section className="card">
        <div className="heading">
          <p className="eyebrow">Spring + React</p>
          <h1>Basit Kutuphane Uygulamasi</h1>
          <p>Kitap adi ve yazar adini ekleyebilir, mevcut kayitlari silebilirsiniz.</p>
        </div>

        <form className="book-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Kitap adi"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            type="text"
            placeholder="Yazar adi"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
          <button type="submit">Kitap Ekle</button>
        </form>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Kitap Adi</th>
                <th>Yazar Adi</th>
                <th>Islemler</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="3">Yukleniyor...</td>
                </tr>
              ) : books.length === 0 ? (
                <tr>
                  <td colSpan="3">Kayit bulunamadi.</td>
                </tr>
              ) : (
                books.map((book) => (
                  <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>
                      <button
                        className="delete-button"
                        type="button"
                        onClick={() => handleDelete(book.id)}
                      >
                        Sil
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default App;
