document.getElementById("solveTriangle").addEventListener("click", () => {
 
 // Obtener valores de los lados del triángulo
  
  const a = parseFloat(document.getElementById("sideA").value);
  const b = parseFloat(document.getElementById("sideB").value);
  const c = parseFloat(document.getElementById("sideC").value);

  // Validar entrada
  
  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    alert("Por favor, ingresa valores v\xe1lidos y positivos para los lados del tri\xe1ngulo.");
    return;
  }

  // Verificar si los lados forman un triángulo válido
  
  if (a + b <= c || a + c <= b || b + c <= a) {
    alert("Los lados ingresados no forman un tri\xe1ngulo v\xe1lido.");
    return;
  }

  // Cálculo del perímetro
  
  const perimetro = a + b + c;

  // Cálculo del semiperímetro
  
  const s = perimetro / 2;

  // Cálculo del área (Fórmula de Herón)
  
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  // Cálculo de los ángulos (Ley de cosenos)
 
  const angleA = (Math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c)) * 180) / Math.PI;
  const angleB = (Math.acos((a ** 2 + c ** 2 - b ** 2) / (2 * a * c)) * 180) / Math.PI;
  const angleC = 180 - angleA - angleB;

  // Cálculo de las medianas
  
  const medianaA = Math.sqrt((2 * b ** 2 + 2 * c ** 2 - a ** 2) / 4);
  const medianaB = Math.sqrt((2 * a ** 2 + 2 * c ** 2 - b ** 2) / 4);
  const medianaC = Math.sqrt((2 * a ** 2 + 2 * b ** 2 - c ** 2) / 4);

  // Cálculo de las bisectrices
  
  const bisectrizA = (2 / (b + c)) * Math.sqrt(b * c * s * (s - a));
  const bisectrizB = (2 / (a + c)) * Math.sqrt(a * c * s * (s - b));
  const bisectrizC = (2 / (a + b)) * Math.sqrt(a * b * s * (s - c));

  // Cálculo de las alturas
  
  const alturaA = (2 * area) / a;
  const alturaB = (2 * area) / b;
  const alturaC = (2 * area) / c;

  // Mostrar resultados en las cajas correspondientes
  
  document.getElementById("angleA").textContent = angleA.toFixed(2);
  document.getElementById("angleB").textContent = angleB.toFixed(2);
  document.getElementById("angleC").textContent = angleC.toFixed(2);

  document.getElementById("medianaA").textContent = medianaA.toFixed(2);
  document.getElementById("medianaB").textContent = medianaB.toFixed(2);
  document.getElementById("medianaC").textContent = medianaC.toFixed(2);

  document.getElementById("bisectrizA").textContent = bisectrizA.toFixed(2);
  document.getElementById("bisectrizB").textContent = bisectrizB.toFixed(2);
  document.getElementById("bisectrizC").textContent = bisectrizC.toFixed(2);

  document.getElementById("alturaA").textContent = alturaA.toFixed(2);
  document.getElementById("alturaB").textContent = alturaB.toFixed(2);
  document.getElementById("alturaC").textContent = alturaC.toFixed(2);

  document.getElementById("perimetro").textContent = perimetro.toFixed(2);
  document.getElementById("area").textContent = area.toFixed(2);
});
