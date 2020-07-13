export class Product {
  accountInformation?: {
    accountIdentifier: string;
    productType: string;
    bank: string;
  };
  locked?: boolean;
  id?: string;
  capacity?: number;
  typeAccount?: string;
  openedDate?: string;
  closedDate?: string;
  dueDate?: string;
  lastTransactionDate?: string;

  term?: {
    count?: number;
    units?: string;
  };
  periodicityOfPayment?: {
    count?: number;
    units?: string;
  };

  productAccountBalances?: {

    pago_total_pesos?: {
      amount: number;
      currencyCode: string;
    }

    cupo_disponible_avances_pesos?: {
      amount: number;
      currencyCode: string;
    },

    saldo_mora_pesos?: {
      amount: number;
      currencyCode: string;
    },

    saldo_actual?: {
      amount: number;
      currencyCode: string;
    },

    cupo_disponible_compras_pesos?: {
      amount: number;
      currencyCode: string;
    },

    valor_pago_minimo?: {
      amount: number;
      currencyCode: string;
    },
    valor_constitucion?: {
      amount: number;
      currencyCode: string;
    },

    cupo_total: {
      amount: number;
      currencyCode: string;
    }
    saldo_pendiente_pago?: {
      amount?: number;
    }
  }
  tasa_nominal?: {
    amount?: number;
    rate?: number;
  }

  interes_pagado?: {
    amount?: number;
  }

  valor_constitucion?: {
    amount?: number;
  }

  intereses_causados?: {
    amount?: number;
  }

  retefuente?: {
    amount?: number;
  }
  

}
