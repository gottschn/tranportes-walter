import { Award, Shield, Clock, Users, Target, CheckCircle } from "lucide-react"

export function AboutSection() {
  return (
    <section id="quienes-somos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">¿Quiénes Somos?</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Imagen representativa */}
          <div className="relative">
            <img
              src="/placeholder.svg?height=400&width=600&text=Transportes+Walter+Vehículos+Naranjas"
              alt="Transportes Walter - Vehículos naranjas"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold">
              20 años de experiencia
            </div>
          </div>

          {/* Contenido principal */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sobre Nosotros</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                <strong>Transportes Walter</strong> es una empresa de transporte de pasajeros y escolar reconocida por
                sus <strong>20 años de servicio</strong> con sus característicos vehículos naranjas. Proporcionamos
                servicios de transporte personalizados, priorizando la seguridad y la puntualidad para nuestros
                clientes.
              </p>
            </div>

            {/* Características destacadas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-orange-500" />
                <span className="text-gray-700 font-medium">20 años de experiencia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-orange-500" />
                <span className="text-gray-700 font-medium">Seguridad garantizada</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-orange-500" />
                <span className="text-gray-700 font-medium">Puntualidad asegurada</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-orange-500" />
                <span className="text-gray-700 font-medium">Servicio personalizado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Nuestra Misión */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-8 w-8 text-orange-500" />
                <h3 className="text-2xl font-bold text-gray-900">Nuestra Misión</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                En <strong>Transportes Walter</strong>, nos comprometemos a brindar un servicio de transporte confiable
                y seguro. Nuestro enfoque en la seguridad y la comodidad garantiza que nuestros clientes lleguen a su
                destino de manera segura y a tiempo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Además, estamos trabajando en implementar un <strong>sistema de reserva en línea</strong> para mayor
                comodidad de nuestros usuarios.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Servicio Confiable</h4>
                  <p className="text-gray-600">Compromiso con la excelencia en cada viaje</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Seguridad Prioritaria</h4>
                  <p className="text-gray-600">Protocolos estrictos para garantizar su bienestar</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Comodidad Garantizada</h4>
                  <p className="text-gray-600">Vehículos modernos y conductores profesionales</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Innovación Continua</h4>
                  <p className="text-gray-600">Sistema de reserva en línea próximamente</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-8 w-8 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">20+</div>
            <div className="text-gray-600">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
            <div className="text-gray-600">Clientes Satisfechos</div>
          </div>
          <div className="text-center">
            <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-gray-600">Viajes Seguros</div>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Clock className="h-8 w-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
            <div className="text-gray-600">Disponibilidad</div>
          </div>
        </div>
      </div>
    </section>
  )
}
