function sumar(a, b) {
    return a + b;
  }
  
  function restar(a, b) {
    return a - b;
  }
  
  function multiplicar(a, b) {
    return a * b;
  }
  
  function dividir(a, b) {    
    if (b === 0) {
      return "No se puede dividir entre 0";
    }
    return a / b;
  }
  
  function potencia(a, b) {
    return Math.pow(a, b);
  }
  
  function raiz(a, b) {
    return Math.pow(a, 1/b);
  }
  
  function logaritmo(a, b) {
    return Math.log(a) / Math.log(b);
  }
  
  function seno(a) {
    return Math.sin(a);
  }
  
  function coseno(a) {
    return Math.cos(a);
  }
  
  function tangente(a) {
    return Math.tan(a);
  }
  
  function factorial(a) {
    if (a < 0) {
      return "No se puede calcular el factorial de un número negativo";
    }
    if (a === 0) {
      return 1;
    }
    return a * factorial(a - 1);
    }