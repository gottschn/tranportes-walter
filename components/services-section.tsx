import { Plane, Building2, Users, MapPin, Clock, Star } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Plane,
      title: "Traslados al Aeropuerto",
      description: "Servicio puerta a puerta desde y hacia todos los aeropuertos. Monitoreo de vuelos incluido.",
      features: ["Monitoreo de vuelos", "Servicio puerta a puerta", "Vehículos premium"],
    },
    {
      icon: Building2,
      title: "Viajes Ejecutivos",
      description: "Traslados para reuniones de negocios, eventos corporativos y clientes VIP.",
      features: ["Conductores profesionales", "Vehículos ejecutivos", "Puntualidad garantizada"],
    },
    {
      icon: Users,
      title: "Eventos Especiales",
      description: "Servicio para bodas, fiestas, graduaciones y cualquier evento importante.",
      features: ["Vehículos de lujo", "Servicio personalizado", "Disponibilidad extendida"],
    },
    {
      icon: MapPin,
      title: "Viajes de Larga Distancia",
      description: "Traslados a otras ciudades con comodidad y seguridad total.",
      features: ["Viajes interprovinciales", "Conductores experimentados", "Paradas programadas"],
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios de transporte premium adaptados a sus necesidades específicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="text-center p-6">
                <div className="mx-auto bg-blue-900 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-base">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <Star className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            ¿Necesita un servicio personalizado? Contáctenos para una cotización especial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-2 text-blue-900">
              <Clock className="h-5 w-5" />
              <span className="font-medium">Disponible 24/7</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-blue-900">
              <Star className="h-5 w-5" />
              <span className="font-medium">Calidad Premium</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
