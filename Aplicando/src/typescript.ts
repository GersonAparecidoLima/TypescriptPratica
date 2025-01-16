// Tipos Primitivos
let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";
qualquer = 22;

// Arrays
const lista: number[] = [];
lista.push(13, 22.5, 22, 89, 1.58);

// Tipos Personalizados (Type Alias)
// Esta sendo utilizado :
//C:\dev\FormacaoTypescript\Aplicando\src\Transacao.ts
/*
type Transacao = {
  tipoTransacao: TipoTransacao;
  data: Date;
  valor: number;
};
*/
// Enum
/*
Esta sendo aplicado :
C:\dev\FormacaoTypescript\Aplicando\src\TipoTransacao.ts
enum TipoTransacao {
  DEPOSITO = "Depósito",
  TRANSFERENCIA = "Transferência",
  PAGAMENTO_BOLETO = "Pagamento de Boleto",
}
  */

const novaTransacao: Transacao = {
  tipoTransacao: TipoTransacao.PAGAMENTO_BOLETO,
  data: new Date(),
  valor: 0,
};
