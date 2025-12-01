/**
 * Dashboard.tsx
 * 
 * Panel de control principal del SGMI
 * Diseñado en Figma con componentes de shadcn/ui
 * 
 * Muestra:
 * - Estadísticas de órdenes de trabajo
 * - Gráficos de tendencias
 * - Novedades y alertas
 * - Tabla de órdenes activas
 */

import { AlertCircle, CheckCircle, Clock, Wrench, TrendingUp, TrendingDown, AlertTriangle, Info, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

export function Dashboard() {
  const stats = [
    {
      title: 'Órdenes Activas',
      value: '24',
      change: '+12%',
      trend: 'up',
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Órdenes Completadas',
      value: '156',
      change: '+8%',
      trend: 'up',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Órdenes Críticas',
      value: '5',
      change: '-3%',
      trend: 'down',
      icon: AlertCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      title: 'Equipos en Mantenimiento',
      value: '18',
      change: '+5%',
      trend: 'up',
      icon: Wrench,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
    {
      title: 'Novedades y Notificaciones',
      value: '12',
      change: '+4',
      trend: 'up',
      icon: Bell,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ];

  const recentOrders = [
    { id: 'OT-001', equipo: 'Compresor A-23', prioridad: 'Alta', estado: 'En Progreso', progreso: 65 },
    { id: 'OT-002', equipo: 'Bomba B-15', prioridad: 'Media', estado: 'Pendiente', progreso: 0 },
    { id: 'OT-003', equipo: 'Turbina C-08', prioridad: 'Crítica', estado: 'En Progreso', progreso: 85 },
    { id: 'OT-004', equipo: 'Motor D-42', prioridad: 'Baja', estado: 'Completada', progreso: 100 },
  ];

  const novedades = [
    {
      id: 1,
      equipo: 'Compresor A-23',
      ordenTrabajo: 'OT-001',
      tipo: 'Preventivo',
      impedimento: 'Repuesto no disponible en inventario - Rodamiento SKF 6205',
      severidad: 'alta',
      tecnico: 'Juan Pérez',
      fecha: '2025-11-08 14:30',
    },
    {
      id: 2,
      equipo: 'Turbina C-08',
      ordenTrabajo: 'OT-003',
      tipo: 'Correctivo',
      impedimento: 'Se detectó daño adicional en el eje principal, requiere aprobación para reemplazo',
      severidad: 'critica',
      tecnico: 'Carlos López',
      fecha: '2025-11-08 12:15',
    },
    {
      id: 3,
      equipo: 'Bomba B-15',
      ordenTrabajo: 'OT-002',
      tipo: 'Preventivo',
      impedimento: 'Equipo requiere ser detenido pero producción no autoriza parada hasta mañana',
      severidad: 'media',
      tecnico: 'María García',
      fecha: '2025-11-08 10:45',
    },
    {
      id: 4,
      equipo: 'Motor D-42',
      ordenTrabajo: 'OT-008',
      tipo: 'Correctivo',
      impedimento: 'Herramienta especial en uso por otro técnico, esperando disponibilidad',
      severidad: 'baja',
      tecnico: 'Ana Martínez',
      fecha: '2025-11-08 09:20',
    },
  ];

  const getSeveridadIcon = (severidad: string) => {
    switch (severidad) {
      case 'critica':
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      case 'alta':
        return <AlertTriangle className="w-5 h-5 text-orange-600" />;
      case 'media':
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case 'baja':
        return <Info className="w-5 h-5 text-blue-600" />;
      default:
        return <Info className="w-5 h-5 text-gray-600" />;
    }
  };

  const getSeveridadColor = (severidad: string) => {
    switch (severidad) {
      case 'critica':
        return 'bg-red-50 border-red-200';
      case 'alta':
        return 'bg-orange-50 border-orange-200';
      case 'media':
        return 'bg-yellow-50 border-yellow-200';
      case 'baja':
        return 'bg-blue-50 border-blue-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getTipoColor = (tipo: string) => {
    return tipo === 'Correctivo'
      ? 'bg-red-100 text-red-700 border-red-200'
      : 'bg-blue-100 text-blue-700 border-blue-200';
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900">Dashboard</h2>
        <p className="text-gray-600">Vista general del sistema de mantenimiento</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
          return (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="text-3xl text-gray-900 mt-2">{stat.value}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <TrendIcon className={`w-4 h-4 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
                      <span className={`text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {stat.change}
                      </span>
                      <span className="text-sm text-gray-500">vs. mes anterior</span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Órdenes de Trabajo Recientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-gray-900">{order.id}</span>
                      <span className="text-gray-600">-</span>
                      <span className="text-gray-900">{order.equipo}</span>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          order.prioridad === 'Crítica'
                            ? 'bg-red-100 text-red-700'
                            : order.prioridad === 'Alta'
                            ? 'bg-orange-100 text-orange-700'
                            : order.prioridad === 'Media'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {order.prioridad}
                      </span>
                      <span className="text-gray-600">{order.estado}</span>
                    </div>
                    <Progress value={order.progreso} className="h-2" />
                  </div>
                  <div className="text-gray-900">{order.progreso}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
              Histórico de Actividades y Eventos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-[400px] overflow-y-auto">
              {novedades.map((novedad) => (
                <div
                  key={novedad.id}
                  className={`p-4 rounded-lg border-l-4 ${getSeveridadColor(novedad.severidad)}`}
                >
                  <div className="flex items-start gap-3">
                    {getSeveridadIcon(novedad.severidad)}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-gray-900">{novedad.equipo}</span>
                        <Badge variant="outline" className="text-xs">
                          {novedad.ordenTrabajo}
                        </Badge>
                        <Badge variant="outline" className={`text-xs ${getTipoColor(novedad.tipo)}`}>
                          {novedad.tipo}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-900 mb-2">{novedad.impedimento}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <span>{novedad.tecnico}</span>
                        <span>•</span>
                        <span>{novedad.fecha}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}