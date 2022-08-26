class DateHelper {
  constructor() {
    throw new Error("Date Helper nao pode ser instanciada");
  }

  static dataParaTexto(data) {
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }

  static textoParaData(texto) {
    if (!/\d{4}-\d{2}-\d{2}/.test(texto)) 
      throw new Error("A data precisa ser no formato AAAA-MM-DD");

    return new Date(...texto.split("-").map((item, index) => item - (index % 2)));
  }
}
