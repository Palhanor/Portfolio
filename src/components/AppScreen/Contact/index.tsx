"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="container mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Entre em Contato
          </h2>
          <p className="text-zinc-400 text-lg">
            Tem um projeto em mente ou quer saber mais sobre meus serviços? Preencha o formulário abaixo e entrarei em contato em breve.
          </p>
        </div>

        <Card className="border-zinc-800 bg-zinc-900/40 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl text-zinc-100">Envie uma mensagem</CardTitle>
            <CardDescription className="text-zinc-400">
              Preencha os campos abaixo para iniciar uma conversa.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none text-zinc-200 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-zinc-950/50 border-zinc-800 focus-visible:ring-zinc-700 text-zinc-100 placeholder:text-zinc-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none text-zinc-200 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    E-mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-zinc-950/50 border-zinc-800 focus-visible:ring-zinc-700 text-zinc-100 placeholder:text-zinc-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none text-zinc-200 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Me conta brevemente sobre sua ideia, problema ou o que você quer construir."
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="flex min-h-[120px] w-full rounded-md border border-zinc-800 bg-zinc-950/50 px-3 py-2 text-sm text-zinc-100 shadow-sm placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-700 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                />
              </div>

              <Button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200 font-semibold"
                size="lg"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : status === "success" ? (
                  "Mensagem enviada com sucesso!"
                ) : (
                  <>
                    Entrar em Contato
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              {status === "error" && (
                <p className="text-sm text-red-400 text-center mt-2">
                  Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
