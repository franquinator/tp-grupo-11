import React from "react";
import { FaInstagram, FaYoutube, FaFacebook, FaCoffee, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-dark text-light">
            <div className="container py-5 text-center">
                <div className="mb-4">
                    <div className="bi bi-cup-hot justify-content-center" style={{ fontSize: "4rem", color: "white" }} />
                    <h2 className="h5 fw-bold">Luna & Granos Café</h2>
                    <p className="small text-secondary mx-auto" style={{ maxWidth: "400px" }}>
                        Pasión por el café de especialidad. Calidad, aromas únicos y el arte
                        de compartir momentos.
                    </p>
                </div>

                <ul className="list-unstyled d-flex justify-content-center gap-4 mb-4">
                    <li>
                        <a
                            href="https://www.youtube.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-light"
                        >
                            <FaYoutube size={24} className="hover-red" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-light"
                        >
                            <FaInstagram size={24} className="hover-pink" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-light"
                        >
                            <FaFacebook size={24} className="hover-blue" />
                        </a>
                    </li>
                </ul>

                <div className="mb-3">
                    <a
                        href="mailto:contacto@lunaygranos.com"
                        className="text-decoration-none text-light small"
                    >
                        <FaEnvelope className="me-2" />
                        contacto@lunaygranos.com
                    </a>
                </div>

                <div className="border-top border-secondary pt-3">
                    <span className="text-light">
                        © {new Date().getFullYear()} Luna & Granos Café · Todos los derechos reservados
                    </span>
                </div>
            </div>
        </footer>
    );
}