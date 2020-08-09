import { Cliente } from './Cliente';
export class Pedido{
  id: number;
  tipo: string;
  tela: string;
  color: string;
  ancho: number;
  alto: number;
  cantidad: number;
  ladoCadena: string;
  tipoCadena: string;
  envio: string;
  total: number;
  cliente: Cliente;
}
