"use client";

import { useState } from "react";

export default function Home() {
const [nome, setNome] = useState("");
const [valor, setValor] = useState("");
const [id, setId] = useState("");

async function cadastrarPetcare() {
    try {
        const resposta = await fetch(
            "http://localhost:3001/servicos",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nome: nome,
                    valor: Number(valor),
                    id: Number(id),
                }),
            }
        );

        if (!resposta.ok) {
            throw new Error("Erro ao cadastrar o serviço");
        }

        const dados = await resposta.json();

        console.log("Petcare:", dados);

        setNome("");
        setValor("");
        setId("");
    } catch (error) {
        console.error("Erro ao cadastrar:", error);
    }
}

return (
    <main className="min-h-screen `bg-gradient-to-br` from-blue-50 via-white to-cyan-50 flex items-center justify-center p-6">
        <div className="w-full max-w-lg">

            {/* Cabeçalho */}
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl shadow-lg mb-4">
                    <span className="text-3xl">🐾</span>
                </div>

                <h1 className="text-3xl font-bold text-gray-800">
                    Cadastrar Petcare
                </h1>

                <p className="text-gray-500 mt-2">
                    Cadastre um novo serviço para seus clientes
                </p>
            </div>

            {/* Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <div className="space-y-5">

                    {/* Nome */}
                    <div>
                        <label
                            htmlFor="nome"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Nome do Petcare
                        </label>

                        <input
                            id="nome"
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Digite o nome do serviço"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:bg-white"
                        />
                    </div>

                    {/* Valor */}
                    <div>
                        <label
                            htmlFor="valor"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Valor
                        </label>

                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                                R$
                            </span>

                            <input
                                id="valor"
                                type="number"
                                value={valor}
                                onChange={(e) => setValor(e.target.value)}
                                placeholder="0,00"
                                min="0"
                                step="0.01"
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:bg-white"
                            />
                        </div>
                    </div>

                    {/* ID */}
                    <div>
                        <label
                            htmlFor="id"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            ID do serviço
                        </label>

                        <input
                            id="id"
                            type="number"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            placeholder="Digite o ID"
                            min="1"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:bg-white"
                        />
                    </div>

                    {/* Botão */}
                    <button
                        type="button"
                        onClick={cadastrarPetcare}
                        className="w-full mt-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                    >
                        🐾 Cadastrar Petcare
                    </button>
                </div>
            </div>

            <p className="text-center text-sm text-gray-400 mt-6">
                Preencha os dados acima para cadastrar um novo serviço.
            </p>
        </div>
    </main>
);


}