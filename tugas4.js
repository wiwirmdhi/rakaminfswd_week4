function getRandomValue() {
    return Math.floor(Math.random() * 50) + 1;
  }
  const randomArray = [];
  for (let i = 0; i < 100; i++) {
    randomArray.push(getRandomValue());
  }

  const genapArray = [];
  const ganjilArray = [];
  
  for (let i = 0; i < randomArray.length; i++) {
    if (i % 2 === 0) {
      genapArray.push(randomArray[i]);
    } else {
      ganjilArray.push(randomArray[i]);
    }
  }

  // Menghitung min, max, total, dan rata-rata untuk kedua array
  const minGenap = Math.min(...genapArray);
  const maxGenap = Math.max(...genapArray);
  const totalGenap = genapArray.reduce((acc, curr) => acc + curr, 0);
  const avgGenap = totalGenap / genapArray.length;
  
  const minGanjil = Math.min(...ganjilArray);
  const maxGanjil = Math.max(...ganjilArray);
  const totalGanjil = ganjilArray.reduce((acc, curr) => acc + curr, 0);
  const avgGanjil = totalGanjil / ganjilArray.length;
  
  // Membandingkan hasil
  let perbandingan = '';
  
  if (minGenap > minGanjil) {
    perbandingan += 'Min lebih besar pada array genap\n';
  } else {
    perbandingan += 'Min lebih besar pada array ganjil\n';
  }
  
  if (maxGenap > maxGanjil) {
    perbandingan += 'Max lebih besar pada array genap\n';
  } else {
    perbandingan += 'Max lebih besar pada array ganjil\n';
  }
  
  if (totalGenap === totalGanjil) {
    perbandingan += 'Total memiliki nilai yang sama pada array genap dan ganjil\n';
  } else {
    perbandingan += 'Total memiliki nilai berbeda pada array genap dan ganjil\n';
  }
  
  if (avgGenap > avgGanjil) {
    perbandingan += 'Rata-rata lebih besar pada array genap\n';
  } else {
    perbandingan += 'Rata-rata lebih besar pada array ganjil\n';
  }
  
  console.log('Array Ganjil:', genapArray);
  console.log('Array Ganjil:', ganjilArray);
  console.log('Perbandingan:\n' + perbandingan);