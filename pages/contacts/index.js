import Head from "next/head";

export default function Contacts() {
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm({
  //     ...form,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // handle form submission logic
  // };

  const email = process.env.NEXT_PUBLIC_EMAIL;
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER;

  return (
    <div>
      <Head>
        <title>Контакты - NewMe Health Clinic</title>
        <meta
          name="description"
          content="Контактная информация и способы связи с клиникой NewMe Health Clinic."
        />
        {/* ЗМІНИТИ метатеги Open Graph и Twitter */}
      </Head>
      <h1>Контакты</h1>
      <p>Здесь будет контактная информация клиники.</p>
      <address>
        <h2>Наш адрес</h2>
        <p>1234 Клиника Стрит, Город, Страна</p>
        <h2>Наши телефоны</h2>
        <p>
          Консультант: <a href={`tel:+${phone}`}>{`+${phone}`}</a>
        </p>
        <h2>Наш Email</h2>
        <p>{email}</p>
      </address>
      <h2>Часы работы</h2>
      <p>Понедельник - Пятница: 9:00 - 18:00</p>
      <p>Суббота: 10:00 - 14:00</p>
      <p>Воскресенье: выходной</p>
      {/* <h2>Форма обратной связи</h2> */}
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label>
            Имя:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Сообщение:
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <button type="submit">Отправить</button>
      </form> */}
      <h2>Как нас найти</h2>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.3180249584148!2d30.7911353761324!3d36.85880587223054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39b51b4824c95%3A0xc6817b0165011963!2sLara%20Anatolia%20Private%20Hospital!5e0!3m2!1sru!2sua!4v1722548491412!5m2!1sru!2sua"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
      <h2>Мы в социальных сетях</h2>
      <p>
        <a href="https://facebook.com">Facebook</a> |{" "}
        <a href="https://twitter.com">Twitter</a> |{" "}
        <a href="https://instagram.com">Instagram</a>
      </p>
    </div>
  );
}
