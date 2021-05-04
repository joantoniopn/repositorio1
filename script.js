function app()
{
  console.log('iniciado')
}

app();

// Velocidade máx 70 kg 
// a cada 5 km acima do limite ganha 1 ponto
// pontos maiores que 12 suspende carteira

function verificarVelocidade(velocidade){
  const velocidadeMaxima = 70;
  const kmPorPonto = 5;
  if (velocidade <= velocidadeMaxima) 
  console.log('OK')
  
  else{
    const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto)
    if (pontos >= 12) 
      console.log('Carteira suspensa');
      else
      console.log('Pontos', pontos);
    
    
  }
