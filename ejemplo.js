"use strict"
//Dado un vector de objetos literales con el siguiente formato: {nombreCompleto:”Ana Pérez
//   Soler”, DNI: “21147465T”, edad: 21}:
   
{
    //a. Crea una función que reciba como parámetro el array original y devuelva un array
    //con los identificadores de los usuarios. Para ello debes coger la primera letra
    //(minúsculas y sin tildes) del nombre, las tres primeras letras del primer apellido
    //(minúsculas y sin tildes), las tres primeras del segundo apellido (minúsculas y sin
    //tildes) y los tres últimos dígitos del DNI. Usa la función map.(3p)
    //NOTA: Se entiende que los nombres y los apellidos no son compuestos y todos
    //tienen tres o más caracteres
   
    function obtenerIdentificadores(array) {
        return array.map(usuario => {
          const nombre = usuario.nombreCompleto.toLowerCase().replace(/[áéíóú]/g, 'aeiou');
          const apellido1 = usuario.apellido1.slice(0, 3).toLowerCase().replace(/[áéíóú]/g, 'aeiou');
          const apellido2 = usuario.apellido2.slice(0, 3).toLowerCase().replace(/[áéíóú]/g, 'aeiou');
          const dni = usuario.DNI.slice(-3);
          return nombre[0] + apellido1 + apellido2 + dni;
        });
      }
   
    //b.Crea una función que reciba como parámetro el array original y devuelva un array
    //con los DNI que sean válidos. NOTA: Los DNI pueden tener la letra en mayúscula o
    //minúscula pero no tienen un separador entre número y letra. Usa la función filter y
    //map.
    function obtenerDNIValidos(array) {
        const letrasValidas = 'TRWAGMYFPDXBNJZSQVHLCKE';
     
        const esDNIValido = (dni) => {
          dni = dni.toUpperCase();
          if (!/^\d{8}[A-Z]$/.test(dni)) return false;
     
          const numero = parseInt(dni.slice(0, 8), 10);
          const letra = dni.charAt(8);
          const letraCalculada = letrasValidas.charAt(numero % 23);
     
          return letra === letraCalculada;
        };
     
        return array.filter(usuario => esDNIValido(usuario.DNI)).map(usuario => usuario.DNI);
      }


    //c.Crea una función que reciba como parámetro el array original y devuelva un array
    //con los objetos ordenados por edad de mayor a menor. NOTA: Usar la función sort.
    //(2p)


      function ordenarPorEdad(array) {
        return array.slice().sort((a, b) => b.edad - a.edad);
      }


    //d. Crea una función que reciba como parámetro el array original y devuelva un array
    //con las edades que sean números casi primos (es un número que solo es divisible
    //por sí mismo, la unidad y por un solo número que no sea ni la unidad ni si mismo).
    //Usa la función filter y map. (2p)


    function obtenerEdadesCasiPrimos(array) {
        const esCasiPrimo = (numero) => {
          if (numero < 2) {
            return false;
          }
          for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
              return false;
            }
          }
          return true;
        };
     
        return array.filter(usuario => esCasiPrimo(usuario.edad)).map(usuario => usuario.edad);
      }


      const usuarios = [
        {
          nombreCompleto: "María López",
          apellido1: "Gómez",
          apellido2: "Pérez",
          DNI: "12345678A",
          edad: 35
        },
        {
          nombreCompleto: "Juan Rodríguez",
          apellido1: "Sánchez",
          apellido2: "Fernández",
          DNI: "87654321B",
          edad: 28
        },
        {
          nombreCompleto: "Laura Martínez",
          apellido1: "García",
          apellido2: "Hernández",
          DNI: "98765432C",
          edad: 41
        },
        {
          nombreCompleto: "Carlos Ramírez",
          apellido1: "Pérez",
          apellido2: "López",
          DNI: "23456789D",
          edad: 22
        },
      ];
     
      // Utilizando las funciones definidas
     
      // a. Obtener los identificadores de los usuarios
      const identificadores = obtenerIdentificadores(usuarios);
      console.log("Identificadores de usuarios:");
      console.log(identificadores);
     
      // b. Obtener los DNI válidos de los usuarios
      const DNIValidos = obtenerDNIValidos(usuarios);
      console.log("DNI válidos de usuarios:");
      console.log(DNIValidos);
     
      // c. Ordenar los usuarios por edad de mayor a menor
      const usuariosOrdenadosPorEdad = ordenarPorEdad(usuarios);
      console.log("Usuarios ordenados por edad de mayor a menor:");
      console.log(usuariosOrdenadosPorEdad);
     
      // d. Obtener las edades de usuarios que son números casi primos
      const edadesCasiPrimos = obtenerEdadesCasiPrimos(usuarios);
      console.log("Edades de usuarios que son números casi primos:");
      console.log(edadesCasiPrimos);
}
