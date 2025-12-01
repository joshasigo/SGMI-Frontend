import { useState } from 'react';
import { Plus, Search, MoreVertical, Edit, Trash2, Shield } from 'lucide-react';
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
} from './ui/dropdown-menu';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';

export function UsuariosSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const usuarios = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      email: 'juan.perez@empresa.com',
      rol: 'Administrador',
      departamento: 'Mantenimiento',
      estado: 'Activo',
      ultimoAcceso: '2025-11-08 09:30',
    },
    {
      id: 2,
      nombre: 'María García',
      email: 'maria.garcia@empresa.com',
      rol: 'Técnico',
      departamento: 'Mantenimiento',
      estado: 'Activo',
      ultimoAcceso: '2025-11-08 08:15',
    },
    {
      id: 3,
      nombre: 'Carlos López',
      email: 'carlos.lopez@empresa.com',
      rol: 'Técnico',
      departamento: 'Producción',
      estado: 'Activo',
      ultimoAcceso: '2025-11-07 16:45',
    },
    {
      id: 4,
      nombre: 'Ana Martínez',
      email: 'ana.martinez@empresa.com',
      rol: 'Supervisor',
      departamento: 'Mantenimiento',
      estado: 'Activo',
      ultimoAcceso: '2025-11-08 10:00',
    },
    {
      id: 5,
      nombre: 'Luis Rodríguez',
      email: 'luis.rodriguez@empresa.com',
      rol: 'Técnico',
      departamento: 'Calidad',
      estado: 'Inactivo',
      ultimoAcceso: '2025-10-28 14:20',
    },
  ];

  const getRolColor = (rol: string) => {
    switch (rol) {
      case 'Administrador':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Supervisor':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Técnico':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getEstadoColor = (estado: string) => {
    return estado === 'Activo'
      ? 'bg-green-100 text-green-700 border-green-200'
      : 'bg-gray-100 text-gray-700 border-gray-200';
  };

  const getInitials = (nombre: string) => {
    return nombre
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900">Usuarios</h2>
          <p className="text-gray-600">Gestión de usuarios y permisos del sistema</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Nuevo Usuario
        </Button>
      </div>

      <div className="flex gap-3">
        <div className="flex-1 relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Buscar usuarios..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Shield className="w-4 h-4" />
          Roles y Permisos
        </Button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Usuario</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Rol</TableHead>
              <TableHead>Departamento</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Último Acceso</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {usuarios.map((usuario) => (
              <TableRow key={usuario.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{getInitials(usuario.nombre)}</AvatarFallback>
                    </Avatar>
                    <span>{usuario.nombre}</span>
                  </div>
                </TableCell>
                <TableCell>{usuario.email}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={getRolColor(usuario.rol)}>
                    {usuario.rol}
                  </Badge>
                </TableCell>
                <TableCell>{usuario.departamento}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={getEstadoColor(usuario.estado)}>
                    {usuario.estado}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-gray-600">{usuario.ultimoAcceso}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="gap-2">
                        <Edit className="w-4 h-4" />
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2">
                        <Shield className="w-4 h-4" />
                        Permisos
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 text-red-600">
                        <Trash2 className="w-4 h-4" />
                        Desactivar
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
