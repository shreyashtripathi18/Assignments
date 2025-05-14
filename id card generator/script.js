const form = document.getElementById('idForm');
const cardSection = document.getElementById('cardSection');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const course = document.getElementById('course').value;
  const admission = document.getElementById('admission').value;
  const dob = document.getElementById('dob').value;
  const blood = document.getElementById('blood').value;
  const hostel = document.getElementById('hostel').value;
  const validity = document.getElementById('validity').value;
  const photo = document.getElementById('photo').files[0];

  document.getElementById('displayName').innerText = name;
  document.getElementById('displayCourse').innerText = course;
  document.getElementById('displayAdmission').innerText = admission;
  document.getElementById('displayDOB').innerText = dob;
  document.getElementById('displayBlood').innerText = blood;
  document.getElementById('displayHostel').innerText = hostel;
  document.getElementById('displayValidity').innerText = validity;

  const reader = new FileReader();
  reader.onload = function(event) {
    document.getElementById('studentPhoto').src = event.target.result;
  };
  reader.readAsDataURL(photo);

  // Generate Barcode
  JsBarcode("#barcode", admission + Math.floor(Math.random() * 10000), {
    format: "CODE128",
    lineColor: "#000",
    width: 2,
    height: 40,
    displayValue: false
  });

  cardSection.style.display = 'block';
});

// Download the ID card
document.getElementById('downloadBtn').addEventListener('click', function() {
  html2canvas(document.getElementById('idCard')).then(canvas => {
    const link = document.createElement('a');
    link.download = 'ID-Card.png';
    link.href = canvas.toDataURL();
    link.click();
  });
});
