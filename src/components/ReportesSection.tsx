import { FileText, Download, Calendar, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export function ReportesSection() {
  const reportes = [
    {
      nombre: 'Órdenes de Trabajo Completadas',
      descripcion: 'Listado de todas las órdenes completadas en el período seleccionado',
      icono: FileText,
    },
    {
      nombre: 'Indicadores de Mantenimiento (KPI)',
      descripcion: 'MTBF, MTTR, disponibilidad de equipos y otros indicadores clave',
      icono: BarChart3,
    },
    {
      nombre: 'Consumo de Inventario',
      descripcion: 'Análisis de consumo de repuestos y materiales por período',
      icono: BarChart3,
    },
    {
      nombre: 'Tiempo de Técnicos',
      descripcion: 'Horas trabajadas y productividad del personal técnico',
      icono: Calendar,
    },
    {
      nombre: 'Costos de Mantenimiento',
      descripcion: 'Desglose de costos por equipo, tipo de mantenimiento y período',
      icono: FileText,
    },
    {
      nombre: 'Historial de Equipos',
      descripcion: 'Historial completo de mantenimientos por equipo',
      icono: FileText,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900">Reportes</h2>
        <p className="text-gray-600">Generación y descarga de reportes del sistema</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filtros de Reporte</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-700">Período</label>
              <Select defaultValue="mes">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="semana">Última Semana</SelectItem>
                  <SelectItem value="mes">Último Mes</SelectItem>
                  <SelectItem value="trimestre">Último Trimestre</SelectItem>
                  <SelectItem value="ano">Último Año</SelectItem>
                  <SelectItem value="personalizado">Personalizado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-700">Área</label>
              <Select defaultValue="todas">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas las Áreas</SelectItem>
                  <SelectItem value="produccion">Producción</SelectItem>
                  <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
                  <SelectItem value="calidad">Calidad</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-700">Formato</label>
              <Select defaultValue="pdf">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="excel">Excel</SelectItem>
                  <SelectItem value="csv">CSV</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reportes.map((reporte, index) => {
          const Icon = reporte.icono;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-gray-900 mb-1">{reporte.nombre}</h3>
                    <p className="text-sm text-gray-600 mb-4">{reporte.descripcion}</p>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="w-4 h-4" />
                      Generar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
