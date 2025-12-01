/**
 * LoginPage.tsx
 * 
 * Página de inicio de sesión del SGMI
 * Diseñada en Figma con componentes de shadcn/ui
 * 
 * Características:
 * - Validación de email y contraseña
 * - Mostrar/ocultar contraseña
 * - Recuperación de contraseña olvidada
 * - Registro de nuevos usuarios
 * - Autenticación mock con localStorage
 */

import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";

interface LoginProps {
  onLoginSuccess: () => void;
  onForgotPassword?: () => void;
  onRegister?: () => void;
}

export function LoginPage({ onLoginSuccess, onForgotPassword, onRegister }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simular autenticación (reemplaza esto con tu API real)
    setTimeout(() => {
      if (email && password) {
        localStorage.setItem("user", JSON.stringify({ email, name: email.split("@")[0] }));
        onLoginSuccess();
      } else {
        setError("Por favor completa todos los campos");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 flex items-center justify-center p-4">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo y Título */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-lg">
            <Lock className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">SGMI</h1>
          <p className="text-blue-100 text-lg">Sistema de Gestión de Mantenimiento</p>
        </div>

        {/* Tarjeta de Login */}
        <Card className="bg-white shadow-2xl border-0">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Inicia Sesión</h2>

            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="tu@correo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 border-gray-200 focus:ring-blue-500 focus:border-blue-500"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Contraseña */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition disabled:bg-gray-100"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Mensaje de error */}
              {error && <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">{error}</div>}

              {/* Botón de Login */}
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition flex items-center justify-center gap-2"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Iniciando sesión...
                  </>
                ) : (
                  "Iniciar Sesión"
                )}
              </Button>

              {/* Link de recuperación */}
              <div className="text-center pt-2">
                <button 
                  type="button" 
                  onClick={onForgotPassword}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">O continúa como</span>
              </div>
            </div>

            {/* Usuarios de Demo */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => {
                  setEmail("admin@sgmi.com");
                  setPassword("demo123");
                }}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition text-sm font-medium"
              >
                Demo Admin
              </button>
              <button
                type="button"
                onClick={() => {
                  setEmail("usuario@sgmi.com");
                  setPassword("demo123");
                }}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition text-sm font-medium"
              >
                Demo Usuario
              </button>
            </div>

            {/* Registro */}
            <div className="border-t border-gray-200 mt-6 pt-6">
              <p className="text-center text-gray-600 text-sm">
                ¿No tienes cuenta?{" "}
                <button
                  type="button"
                  onClick={onRegister}
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Regístrate aquí
                </button>
              </p>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6 text-blue-100 text-sm">
          <p>© 2025 SGMI. Todos los derechos reservados.</p>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
