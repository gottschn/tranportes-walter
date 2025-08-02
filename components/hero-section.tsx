import { Phone, Clock, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50" />

  
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/photos/transp/fondo-wall.png')`,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Traslados Premium
          <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal mt-2 text-blue-200">
            Confort y Puntualidad Garantizada
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
          Servicio de traslados ejecutivos al aeropuerto, eventos y viajes de negocios. Vehículos de alta gama con
          conductores profesionales.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-md font-medium transition-colors flex items-center justify-center">
            <Phone className="mr-2 h-5 w-5" />
            Reservar Ahora
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-md font-medium transition-colors bg-transparent">
            Ver Servicios
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3">
            <Clock className="h-8 w-8 text-blue-400" />
            <span className="text-lg font-medium">24/7 Disponible</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Shield className="h-8 w-8 text-blue-400" />
            <span className="text-lg font-medium">Totalmente Asegurado</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Phone className="h-8 w-8 text-blue-400" />
            <span className="text-lg font-medium">Reserva Inmediata</span>
          </div>
        </div>
      </div>
    </section>
  )
}
