import { useState } from 'react';
import { Plus, Search, Package, AlertTriangle, TrendingDown, ArrowDownLeft, ArrowUpRight, History } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Badge } from './ui/badge';

export function InventarioSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { label: 'Total de Items', value: '248', icon: Package, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { label: 'Stock Bajo', value: '12', icon: TrendingDown, color: 'text-orange-600', bgColor: 'bg-orange-100' },
    { label: 'Sin Stock', value: '3', icon: AlertTriangle, color: 'text-red-600', bgColor: 'bg-red-100' },
    { label: 'Stock Entrada y Salida de Items, Novedades', value: '47', icon: History, color: 'text-purple-600', bgColor: 'bg-purple-100' },
  ];

  const inventario = [
    {
      codigo: 'INV-001',
      nombre: 'Filtro de Aire HA-25',
      categoria: 'Filtros',
      stock: 25,
      stockMinimo: 10,
      unidad: 'Unidad',
      precio: 45.00,
      ubicacion: 'Almacén A - Estante 3',
    },
    {
      codigo: 'INV-002',
      nombre: 'Aceite Hidráulico ISO 68',
      categoria: 'Lubricantes',
      stock: 8,
      stockMinimo: 15,
      unidad: 'Litros',
      precio: 12.50,
      ubicacion: 'Almacén B - Zona 1',
    },
    {
      codigo: 'INV-003',
      nombre: 'Rodamiento SKF 6205',
      categoria: 'Rodamientos',
      stock: 0,
      stockMinimo: 5,
      unidad: 'Unidad',
      precio: 28.00,
      ubicacion: 'Almacén A - Estante 7',
    },
    {
      codigo: 'INV-004',
      nombre: 'Correa Trapezoidal A-50',
      categoria: 'Transmisión',
      stock: 35,
      stockMinimo: 20,
      unidad: 'Unidad',
      precio: 15.75,
      ubicacion: 'Almacén C - Zona 2',
    },
    {
      codigo: 'INV-005',
      nombre: 'Empaquetadura NBR 3x50',
      categoria: 'Sellos',
      stock: 120,
      stockMinimo: 50,
      unidad: 'Unidad',
      precio: 3.20,
      ubicacion: 'Almacén A - Estante 5',
    },
  ];

  const getStockStatus = (stock: number, stockMinimo: number) => {
    if (stock === 0) return { label: 'Sin Stock', className: 'bg-red-100 text-red-700 border-red-200' };
    if (stock < stockMinimo) return { label: 'Stock Bajo', className: 'bg-orange-100 text-orange-700 border-orange-200' };
    return { label: 'Normal', className: 'bg-green-100 text-green-700 border-green-200' };
  };

  const historico = [
    {
      id: '1',
      codigoTranspaso: 'TR-001',
      tipo: 'Entrada',
      item: 'Filtro de Aire HA-25',
      codigoItem: 'INV-001',
      cantidad: 10,
      stockActual: 35,
      usuario: 'Juan Pérez',
      codigoUsuario: 'USR-001',
      motivo: 'Reposición de stock',
      fecha: '2023-10-01',
    },
    {
      id: '2',
      codigoTranspaso: 'TR-002',
      tipo: 'Salida',
      item: 'Aceite Hidráulico ISO 68',
      codigoItem: 'INV-002',
      cantidad: 5,
      stockActual: 3,
      usuario: 'María López',
      codigoUsuario: 'USR-002',
      motivo: 'Mantenimiento de máquina',
      fecha: '2023-10-02',
    },
    {
      id: '3',
      codigoTranspaso: 'TR-003',
      tipo: 'Entrada',
      item: 'Rodamiento SKF 6205',
      codigoItem: 'INV-003',
      cantidad: 10,
      stockActual: 10,
      usuario: 'Carlos Gómez',
      codigoUsuario: 'USR-003',
      motivo: 'Reposición de stock',
      fecha: '2023-10-03',
    },
    {
      id: '4',
      codigoTranspaso: 'TR-004',
      tipo: 'Salida',
      item: 'Correa Trapezoidal A-50',
      codigoItem: 'INV-004',
      cantidad: 5,
      stockActual: 30,
      usuario: 'Ana Martínez',
      codigoUsuario: 'USR-004',
      motivo: 'Mantenimiento de máquina',
      fecha: '2023-10-04',
    },
    {
      id: '5',
      codigoTranspaso: 'TR-005',
      tipo: 'Entrada',
      item: 'Empaquetadura NBR 3x50',
      codigoItem: 'INV-005',
      cantidad: 50,
      stockActual: 170,
      usuario: 'Pedro Sánchez',
      codigoUsuario: 'USR-005',
      motivo: 'Reposición de stock',
      fecha: '2023-10-05',
    },
  ];

  const getTipoIcon = (tipo: string) => {
    if (tipo === 'Entrada') return <ArrowUpRight className="w-4 h-4" />;
    if (tipo === 'Salida') return <ArrowDownLeft className="w-4 h-4" />;
    return <History className="w-4 h-4" />;
  };

  const getTipoColor = (tipo: string) => {
    if (tipo === 'Entrada') return 'bg-green-100 text-green-700 border-green-200';
    if (tipo === 'Salida') return 'bg-red-100 text-red-700 border-red-200';
    return 'bg-purple-100 text-purple-700 border-purple-200';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900">Inventario</h2>
          <p className="text-gray-600">Gestión de repuestos y materiales</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <ArrowDownLeft className="w-4 h-4" />
            Salida de Item
          </Button>
          <Button variant="outline" className="gap-2">
            <ArrowUpRight className="w-4 h-4" />
            Retorno de Item
          </Button>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Nuevo Item
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-3xl text-gray-900 mt-1">{stat.value}</p>
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

      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <Input
          placeholder="Buscar por código, nombre o categoría..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Código</TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Categoría</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Stock Mínimo</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Precio Unit.</TableHead>
              <TableHead>Ubicación</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventario.map((item) => {
              const status = getStockStatus(item.stock, item.stockMinimo);
              return (
                <TableRow key={item.codigo}>
                  <TableCell>{item.codigo}</TableCell>
                  <TableCell>{item.nombre}</TableCell>
                  <TableCell>{item.categoria}</TableCell>
                  <TableCell>
                    {item.stock} {item.unidad}
                  </TableCell>
                  <TableCell>
                    {item.stockMinimo} {item.unidad}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={status.className}>
                      {status.label}
                    </Badge>
                  </TableCell>
                  <TableCell>${item.precio.toFixed(2)}</TableCell>
                  <TableCell>{item.ubicacion}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="w-5 h-5" />
            Histórico de Movimientos de Inventario
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-white rounded-lg border border-gray-200">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Código Traspaso</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Item</TableHead>
                  <TableHead>Cantidad</TableHead>
                  <TableHead>Stock Actual</TableHead>
                  <TableHead>Usuario</TableHead>
                  <TableHead>Código Usuario</TableHead>
                  <TableHead>Motivo</TableHead>
                  <TableHead>Fecha</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {historico.map((movimiento) => (
                  <TableRow key={movimiento.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getTipoIcon(movimiento.tipo)}
                        <span>{movimiento.codigoTranspaso}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getTipoColor(movimiento.tipo)}>
                        {movimiento.tipo}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="text-gray-900">{movimiento.item}</div>
                        <div className="text-xs text-gray-500">{movimiento.codigoItem}</div>
                      </div>
                    </TableCell>
                    <TableCell>{movimiento.cantidad}</TableCell>
                    <TableCell>{movimiento.stockActual}</TableCell>
                    <TableCell>{movimiento.usuario}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {movimiento.codigoUsuario}
                      </Badge>
                    </TableCell>
                    <TableCell className="max-w-xs">
                      <div className="text-sm text-gray-600 truncate" title={movimiento.motivo}>
                        {movimiento.motivo}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">{movimiento.fecha}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}