import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Confirmation() {
  const router = useRouter();

  useEffect(() => {
    document.title = "Дякуємо - NewMe Health Clinic";
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Спасибо, что заполнили форму!</h1>
      <p>Мы свяжемся с Вами в кратчайший срок.</p>
      <div style={{ marginTop: "20px" }}>
        <button
          style={{ marginRight: "10px", padding: "10px 20px" }}
          onClick={() => router.back()}
        >
          Вернуться назад
        </button>
        <Link
          href="/"
          passHref
          style={{
            padding: "10px 20px",
            textDecoration: "none",
            color: "white",
            backgroundColor: "blue",
          }}
        >
          На гловную
        </Link>
      </div>
    </div>
  );
}
