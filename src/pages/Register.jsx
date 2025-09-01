import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../contexts/UserContext";

const Register = () => {
    const { setUser } = useUserContext();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email && password && name) {

            try {

                const { data: userDoc } = await axios.post("/users", {
                    name,
                    email,
                    password,
                });

                setUser(userDoc);
                setRedirect(true);

            } catch (error) {
                alert(`Deu um erro ao cadastrar o usúario: ${JSON.stringify(error)}`)
            }
        } else {

            alert("Voce precisa preencher o nome, email e a senha")
        }

    }

    if (redirect) return <Navigate to="/" />;
    return (
        <section className="flex items-center">
            <div className=" mx-auto w-full max-w-96 flex flex-col items-center gap-4 ">
                <h1 className="text-3xl font-bold"> Faça seu Cadastro</h1>

                <form className="flex w-full flex-col gap-2" onSubmit={handleSubmit}>
                    <input
                        type="texte"
                        className="w-full rounded-full border border-gray-300 px-4 py-2"
                        placeholder="Digite seu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        className="w-full rounded-full border border-gray-300 px-4 py-2"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        className="w-full rounded-full border border-gray-300 px-4 py-2"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                    />

                    <button className="bg-primary-400 text-white font-bold w-full cursor-pointer rounded-full border border-gray-300 px-4 py-2">
                        Registrar
                    </button>
                </form>

                <p>
                    Já não tem uma conta ?{" "}
                    <Link to="/login" className="underline font-semibold">
                        Logue aqui!
                    </Link>{" "}
                </p>
            </div>
        </section>
    );
};

export default Register;
