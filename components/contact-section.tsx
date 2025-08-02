"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulario enviado:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos disponibles 24/7 para atender sus consultas y reservas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Teléfono</h4>
                    <p className="text-gray-600">+54 341 123-4567</p>
                    <p className="text-sm text-gray-500">Disponible 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-3 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600">+54 9 341 123-4567</p>
                    <p className="text-sm text-gray-500">Respuesta inmediata</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@trasladospremium.com</p>
                    <p className="text-sm text-gray-500">Respuesta en 2 horas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ubicación</h4>
                    <p className="text-gray-600">Rosario, Santa Fe</p>
                    <p className="text-sm text-gray-500">Cobertura en toda la región</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="text-blue-900 text-lg font-semibold mb-2">Reserva Inmediata</h4>
              <p className="text-gray-600 mb-4">Para reservas urgentes, contáctanos directamente por WhatsApp</p>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contactar por WhatsApp
              </button>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Solicitar Cotización</h3>
              <p className="text-gray-600">Complete el formulario y nos pondremos en contacto con usted</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Su nombre completo"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+54 341 123-4567"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="su.email@ejemplo.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describa su necesidad de traslado: destino, fecha, hora, cantidad de pasajeros..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
