function lihat(shape) {
    document.getElementById('lsegitiga').style.display = shape === 'segitiga' ? 'block' : 'none';
    document.getElementById('ljajargenjang').style.display = shape === 'jajargenjang' ? 'block' : 'none';
    document.getElementById('ksegitiga').style.display = shape === 'ksegitiga' ? 'block' : 'none';
    document.getElementById('kjajargenjang').style.display = shape === 'kjajargenjang' ? 'block' : 'none';
}

function luassegitiga() {
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);
    if (!isNaN(alas) && !isNaN(tinggi)) {
        const luas = 0.5 * alas * tinggi;
        document.getElementById('hasil-s').innerHTML = `L = 1/2 x a x t<br>L = 1/2 x ${alas} x ${tinggi}<br>L = ${luas}`;
    } else {
        document.getElementById('hasil-s').textContent = 'Masukan nilai terlebih dahulu';
    }
}

function luasjajargenjang() {
    const alas = parseFloat(document.getElementById('alas-j').value);
    const tinggi = parseFloat(document.getElementById('tinggi-j').value);
    if (!isNaN(alas) && !isNaN(tinggi)) {
        const luas = alas * tinggi;
        document.getElementById('hasil-j').innerHTML = `L = a x t<br>L = ${alas} x ${tinggi}<br>L = ${luas}`;

    } else {
        document.getElementById('hasil-j').textContent = 'Masukan nilai terlebih dahulu';
    }
}

function kelilingsegitiga() {
    var s1 = parseFloat(document.getElementById('s1').value);
    var s2 = parseFloat(document.getElementById('s2').value);
    var s3 = parseFloat(document.getElementById('s3').value);

    if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
        document.getElementById('hasil-ks').innerText = 'Masukan nilai terlebih dahulu';
        return;
    }
    if (s1 <= 0 || s2 <= 0 || s3 <= 0) {
    document.getElementById('hasil-ks').innerText = 'Masukan nilai positif untuk semua sisi.';
    return;
    }

    var hasil = s1 + s2 + s3;
    
    document.getElementById('hasil-ks').innerHTML = `K = a + b + c <br>K = ${s1} + ${s2} + ${s3}<br>K = ${hasil}`;
}

function kelilingjajargenjang() {
    const sb = parseFloat(document.getElementById('sb').value);
    const sm = parseFloat(document.getElementById('sm').value);
    if (!isNaN(sb) && !isNaN(sm)) {
        const hasil = 2 * (sb + sm);
        document.getElementById('hasil-kj').innerHTML = `K = 2 (a + b)<br>K = 2 (${sb} + ${sm})<br>K = ${hasil}`;
    } else {
        document.getElementById('hasil-kj').textContent = 'Masukan nilai terlebih dahulu';
    }
}

function resetksegitiga() {
    // Reset the input fields
    document.getElementById('s1').value = '';
    document.getElementById('s2').value = '';
    document.getElementById('s3').value = '';
    document.getElementById('hasil-ks').innerText = '';
}

function resetsegitiga() {
    // Reset the input fields
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('hasil-s').innerText = '';
}

function resetjajargenjang() {
    // Reset the input fields
    document.getElementById('alas-j').value = '';
    document.getElementById('tinggi-j').value = '';
    document.getElementById('hasil-j').innerText = '';
}

function resetkjajargenjang() {
    // Reset the input fields
    document.getElementById('sb').value = '';
    document.getElementById('sm').value = '';
    document.getElementById('hasil-kj').innerText = '';
}