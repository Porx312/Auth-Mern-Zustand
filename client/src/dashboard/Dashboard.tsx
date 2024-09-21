
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Panel de Control</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-indigo-600 hover:text-indigo-800">Cerrar sesión</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Estadísticas</h3>
                <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">Total de usuarios</dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">1,234</dd>
                  </div>
                  <div className="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">Nuevos usuarios (último mes)</dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">123</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Actividad reciente</h3>
                <ul className="mt-5 divide-y divide-gray-200">
                  <li className="py-4">
                    <div className="flex space-x-3">
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium">Nuevo usuario registrado</h3>
                          <p className="text-sm text-gray-500">Hace 2 horas</p>
                        </div>
                        <p className="text-sm text-gray-500">Juan Pérez se ha unido a la plataforma</p>
                      </div>
                    </div>
                  </li>
                  <li className="py-4">
                    <div className="flex space-x-3">
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium">Actualización de perfil</h3>
                          <p className="text-sm text-gray-500">Ayer</p>
                        </div>
                        <p className="text-sm text-gray-500">María García ha actualizado su información de perfil</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Acciones rápidas</h3>
                <div className="mt-5 space-y-4">
                  <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                    Añadir nuevo usuario
                  </button>
                  <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-indigo-100 hover:bg-indigo-200">
                    Generar informe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
