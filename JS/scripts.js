//Ini javascript//

// Mendapatkan dan mendefinisikan nilai yang akan diproses pada form
const bmiText = document.getElementById("bmi");
const descText = document.getElementById("desc");
const form = document.querySelector("form");

form.addEventListener("submit", onFormSubmit);
form.addEventListener("reset", onFormReset);

// Membuat fungsi pada tombol reset
function onFormReset() {
bmiText.textContent = 0;
bmiText.className = "";
descText.textContent = "Data tidak ditemukan";
}

// Membuat fungsi pada tombol submit
function onFormSubmit(e) {
e.preventDefault();

const weight = parseFloat(form.weight.value);
const height = parseFloat(form.height.value);
const age = parseFloat(form.age.value);


// Membuat proses untuk menentukan nilai hitung BMI beserta kategorinya
if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Mohon masukkan Berat Badan dan Tinggi Badan");
    return;
}

if (isNaN(age) || age <= 0) {
    alert("Mohon masukkan usia anda");
    return;
}

const heightInMeters = height / 100; // cm -> m
const bmi = weight / Math.pow(heightInMeters, 2);
const desc = interpretBMI(bmi);

bmiText.textContent = bmi.toFixed(2);
bmiText.className = desc;
descText.innerHTML = `<strong>${desc}</strong>`;
}

function interpretBMI(bmi) {
if (bmi < 18.5) {
    return "Kekurangan Berat Badan";
} else if (bmi < 25) {
    return "Normal";
} else if (bmi < 30) {
    return "Kelebihan Berat Badan";
} else {
    return "Obesitas";
}
}