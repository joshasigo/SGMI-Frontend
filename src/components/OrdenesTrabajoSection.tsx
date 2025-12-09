/**
 * OrdenesTrabajoSection.tsx
 * 
 * Sección de gestión de órdenes de trabajo del SGMI
 * Diseñada en Figma con componentes de shadcn/ui
 * 
 * Funcionalidades:
 * - Listado de órdenes de trabajo
 * - Búsqueda y filtrado
 * - Acciones CRUD
 * - Estado y prioridad visual
 */

import { useState } from 'react';
import { Plus, Search, Filter, MoreVertical, Edit, Trash2, Eye, FileSearch } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from './ui/dropdown-menu';
import { Badge } from './ui/badge';

export function OrdenesTrabajoSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const ordenes = [
    {
      id: 'OT-001',
      equipo: 'Compresor A-23',
      tipo: 'Preventivo',
      prioridad: 'Alta',
      estado: 'En Progreso',
      tecnico: 'Juan Pérez',
      fecha: '2025-11-05',
      fechaVencimiento: '2025-11-10',
    },
    {
      id: 'OT-002',
      equipo: 'Bomba B-15',
      tipo: 'Correctivo',
      prioridad: 'Media',
      estado: 'Pendiente',
      tecnico: 'María García',
      fecha: '2025-11-06',
      fechaVencimiento: '2025-11-12',
    },
    {
      id: 'OT-003',
      equipo: 'Turbina C-08',
      tipo: 'Correctivo',
      prioridad: 'Crítica',
      estado: 'En Progreso',
      tecnico: 'Carlos López',
      fecha: '2025-11-04',
      fechaVencimiento: '2025-11-08',
    },
    {
      id: 'OT-004',
      equipo: 'Motor D-42',
      tipo: 'Preventivo',
      prioridad: 'Baja',
      estado: 'Completada',
      tecnico: 'Ana Martínez',
      fecha: '2025-11-01',
      fechaVencimiento: '2025-11-05',
    },
    {
      id: 'OT-005',
      equipo: 'Caldera E-19',
      tipo: 'Inspección',
      prioridad: 'Media',
      estado: 'Pendiente',
      tecnico: 'Luis Rodríguez',
      fecha: '2025-11-07',
      fechaVencimiento: '2025-11-14',
    },
  ];

  const getPrioridadColor = (prioridad: string) => {
    switch (prioridad) {
      case 'Crítica':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'Alta':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Media':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Baja':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'Completada':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'En Progreso':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Pendiente':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900">Órdenes de Trabajo</h2>
          <p className="text-gray-600">Gestión de órdenes de mantenimiento</p>
        </div>
        <div className="flex gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <FileSearch className="w-4 h-4" />
                Consultar Orden
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Buscar por</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2">
                <Search className="w-4 h-4" />
                Buscar por ID
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Search className="w-4 h-4" />
                Buscar por Nombre de Equipo
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Search className="w-4 h-4" />
                Buscar por Técnico
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2">
                <Filter className="w-4 h-4" />
                Filtrar por Estado
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Filter className="w-4 h-4" />
                Filtrar por Prioridad
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Nueva Orden
          </Button>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="flex-1 relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Buscar órdenes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          Filtros
        </Button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Equipo</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Prioridad</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Técnico</TableHead>
              <TableHead>Fecha Inicio</TableHead>
              <TableHead>Vencimiento</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ordenes.map((orden) => (
              <TableRow key={orden.id}>
                <TableCell>{orden.id}</TableCell>
                <TableCell>{orden.equipo}</TableCell>
                <TableCell>{orden.tipo}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={getPrioridadColor(orden.prioridad)}>
                    {orden.prioridad}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={getEstadoColor(orden.estado)}>
                    {orden.estado}
                  </Badge>
                </TableCell>
                <TableCell>{orden.tecnico}</TableCell>
                <TableCell>{orden.fecha}</TableCell>
                <TableCell>{orden.fechaVencimiento}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="gap-2">
                        <Eye className="w-4 h-4" />
                        Ver Detalles
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2">
                        <Edit className="w-4 h-4" />
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 text-red-600">
                        <Trash2 className="w-4 h-4" />
                        Eliminar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
