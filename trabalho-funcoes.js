const geradorDeTagsDeIdentificacao = (nomeDoPet) => {
  const nomeMaiusculo = nomeDoPet.trim().toUpperCase();
  return nomeMaiusculo;
};

const verificarSePodeSerAdotado = (idade, porte) => {
  const idadeMinimaParaAdocao = 1;
  if (idade >= idadeMinimaParaAdocao && porte === 'M') {
    return true;
  } else {
    return false;
  }
};

const calcularConsumoDeRacao = (nome, quantidadeDias, pesoDoDog) => {
  const consumoDiario = pesoDoDog * 300;
  return consumoDiario * quantidadeDias;
};

function decidirTipoDeAtividadePorPorte(porte) {
  switch (porte) {
    case 'pequeno':
      return 'brincar dentro de casa';
    case 'médio':
      return 'caminhada no quarteirão';
    case 'grande':
      return 'correr no parque';
    default:
      return 'porte inválido para plano de atividade';
  }
}

const buscarDadoAsync = async () => {
  return 'Pipoca';
};



export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}