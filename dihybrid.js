const diInput1 = document.getElementById('di-input-1');
const diInput2 = document.getElementById('di-input-2');
const calculateDihybrid = document.getElementById('di-calculate');
const sequenceText = document.getElementById('sequence-text');

calculateDihybrid.addEventListener('click', function () {
  let allelePairCheck = diInput1.value + diInput2.value;

  let allelePair1 = diInput1.value.charAt(0) + diInput1.value.charAt(1);
  let allelePair2 = diInput1.value.charAt(2) + diInput1.value.charAt(3);

  let allelePair3 = diInput2.value.charAt(0) + diInput2.value.charAt(1);
  let allelePair4 = diInput2.value.charAt(2) + diInput2.value.charAt(3);

  if (allelePairCheck.length > 8) {
    alert('Too many alleles!');
  } else if (allelePairCheck.length < 8) {
    alert('Allele pairs incomplete!');
  } else if (
    /\d/.test(allelePairCheck) ||
    allelePairCheck.match(/[|\\/~^:,;?!&%$@*+]/) ||
    /\p{Emoji}/u.test(allelePairCheck)
  ) {
    alert('Please insert valid allele pairs!');
  } else {
    let parent1 = orderString(allelePair1) + orderString(allelePair2);
    let parent2 = orderString(allelePair3) + orderString(allelePair4);

    foil1 = parent1.charAt(0) + parent1.charAt(2);
    foil2 = parent1.charAt(0) + parent1.charAt(3);
    foil3 = parent1.charAt(1) + parent1.charAt(2);
    foil4 = parent1.charAt(1) + parent1.charAt(3);

    foil5 = parent2.charAt(0) + parent2.charAt(2);
    foil6 = parent2.charAt(0) + parent2.charAt(3);
    foil7 = parent2.charAt(1) + parent2.charAt(2);
    foil8 = parent2.charAt(1) + parent2.charAt(3);

    let result1 = foil1 + foil5;
    let result2 = foil1 + foil6;
    let result3 = foil1 + foil7;
    let result4 = foil1 + foil8;
    let result5 = foil2 + foil5;
    let result6 = foil2 + foil6;
    let result7 = foil2 + foil7;
    let result8 = foil2 + foil8;
    let result9 = foil3 + foil5;
    let result10 = foil3 + foil6;
    let result11 = foil3 + foil7;
    let result12 = foil3 + foil8;
    let result13 = foil4 + foil5;
    let result14 = foil4 + foil6;
    let result15 = foil4 + foil7;
    let result16 = foil4 + foil8;

    // Foil parents
    document.getElementById('foil1').innerText = foil1;
    document.getElementById('foil2').innerText = foil2;
    document.getElementById('foil3').innerText = foil3;
    document.getElementById('foil4').innerText = foil4;
    document.getElementById('foil5').innerText = foil5;
    document.getElementById('foil6').innerText = foil6;
    document.getElementById('foil7').innerText = foil7;
    document.getElementById('foil8').innerText = foil8;

    // Results
    document.getElementById('pair1').innerText = orderLetters(result1);
    document.getElementById('pair2').innerText = orderLetters(result2);
    document.getElementById('pair3').innerText = orderLetters(result3);
    document.getElementById('pair4').innerText = orderLetters(result4);
    document.getElementById('pair5').innerText = orderLetters(result5);
    document.getElementById('pair6').innerText = orderLetters(result6);
    document.getElementById('pair7').innerText = orderLetters(result7);
    document.getElementById('pair8').innerText = orderLetters(result8);
    document.getElementById('pair9').innerText = orderLetters(result9);
    document.getElementById('pair10').innerText = orderLetters(result10);
    document.getElementById('pair11').innerText = orderLetters(result11);
    document.getElementById('pair12').innerText = orderLetters(result12);
    document.getElementById('pair13').innerText = orderLetters(result13);
    document.getElementById('pair14').innerText = orderLetters(result14);
    document.getElementById('pair15').innerText = orderLetters(result15);
    document.getElementById('pair16').innerText = orderLetters(result16);

    // Phenotype Ratio
    document.getElementById('phenotype-title').innerText = 'Genotype Ratio:';

    const allResults = [
      orderLetters(result1),
      orderLetters(result2),
      orderLetters(result3),
      orderLetters(result4),
      orderLetters(result5),
      orderLetters(result6),
      orderLetters(result7),
      orderLetters(result8),
      orderLetters(result9),
      orderLetters(result10),
      orderLetters(result12),
      orderLetters(result11),
      orderLetters(result13),
      orderLetters(result14),
      orderLetters(result15),
      orderLetters(result16),
    ];

    var obj = {};
    allResults.forEach(function (item) {
      if (typeof obj[item] == 'number') {
        obj[item]++;
      } else {
        obj[item] = 1;
      }
    });

    document.getElementById('phenotype-1').innerHTML = Object.keys(obj)
      .map(function (item) {
        return (
          item +
          ' ' +
          (obj[item] == 0 ? '' : ' ' + obj[item] / 16) * 100 +
          '%' +
          '<br>'
        );
      })
      .join('\n');
  }
});

function orderString(s) {
  let charCodeArr = [];

  for (let i = 0; i < s.length; i++) {
    let code = s.charCodeAt(i);
    charCodeArr.push(code);
  }

  charCodeArr.sort(function (a, b) {
    return a - b;
  });

  s = String.fromCharCode.apply(String, charCodeArr);

  return s;
}

function orderLetters(s) {
  let ns =
    orderString(s.charAt(0) + s.charAt(2)) +
    orderString(s.charAt(1) + s.charAt(3));

  return ns;
}
