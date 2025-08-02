"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5493411234567"
    const message = "Hola, me interesa solicitar información sobre sus servicios de traslados."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">Contactar por WhatsApp</span>
    </button>
  )
}
