let subjectCounter = 0;

function addSubject() {
    const subjectsDiv = document.getElementById('subjects');
    subjectCounter++;
    subjectsDiv.innerHTML += `
    <div class="form-group">
      <input type="text" id="subjectName${subjectCounter}" placeholder="Subject Name" required>
      <input type="number" id="maxMarks${subjectCounter}" placeholder="Max Marks" required>
      <input type="number" id="minMarks${subjectCounter}" placeholder="Min Marks" required>
      <input type="number" id="internalMarks${subjectCounter}" placeholder="Internal Marks" required>
      <input type="number" id="practicalMarks${subjectCounter}" placeholder="Practical Marks" required>
      <input type="number" id="externalMarks${subjectCounter}" placeholder="External Marks" required>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('marksForm');
    const inputSection = document.getElementById('inputSection');
    const marksheetSection = document.getElementById('marksheetSection');
    const marksheetDiv = document.getElementById('marksheet');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let totalMaxMarks = 0;
        let totalObtainedMarks = 0;
        let marksTable = `
    <table>
      <tr>
        <th>Subject</th>
        <th>Max Marks</th>
        <th>Min Marks</th>
        <th>Internal</th>
        <th>Practical</th>
        <th>External</th>
        <th>Total</th>
        <th>Grade</th>
      </tr>
    `;

        for (let i = 1; i <= subjectCounter; i++) {
            const subjectName = document.getElementById(`subjectName${i}`).value;
            const maxMarks = parseInt(document.getElementById(`maxMarks${i}`).value) || 0;
            const minMarks = parseInt(document.getElementById(`minMarks${i}`).value) || 0;
            const internal = parseInt(document.getElementById(`internalMarks${i}`).value) || 0;
            const practical = parseInt(document.getElementById(`practicalMarks${i}`).value) || 0;
            const external = parseInt(document.getElementById(`externalMarks${i}`).value) || 0;

            const totalObtained = internal + practical + external;
            const grade = getGrade((totalObtained / maxMarks) * 100);

            totalMaxMarks += maxMarks;
            totalObtainedMarks += totalObtained;

            marksTable += `
      <tr>
        <td>${subjectName}</td>
        <td>${maxMarks}</td>
        <td>${minMarks}</td>
        <td>${internal}</td>
        <td>${practical}</td>
        <td>${external}</td>
        <td>${totalObtained}</td>
        <td>${grade}</td>
      </tr>
      `;
        }

        marksTable += `</table>`;

        let percentage = (totalObtainedMarks / totalMaxMarks) * 100;
        let division = getDivision(percentage);

        let marksheetHTML = `
      <h1>${document.getElementById('schoolName').value}</h1>
      <h2>Progress Report (${document.getElementById('session').value})</h2>

      <div class="detail-row">
        <div><strong>Student Name:</strong> ${document.getElementById('studentName').value}</div>
        <div><strong>Father's Name:</strong> ${document.getElementById('fatherName').value}</div>
      </div>
      <div class="detail-row">
        <div><strong>Mother's Name:</strong> ${document.getElementById('motherName').value}</div>
        <div><strong>Roll No:</strong> ${document.getElementById('rollNo').value}</div>
      </div>
      <div class="detail-row">
        <div><strong>Admission No:</strong> ${document.getElementById('admissionNo').value}</div>
        <div><strong>Date of Birth:</strong> ${document.getElementById('dob').value}</div>
      </div>

      <p class="center-text"><strong>Address:</strong> ${document.getElementById('address').value}</p>

      ${marksTable}

      <h3>Total Marks Obtained: ${totalObtainedMarks}/${totalMaxMarks}</h3>
      <h3>Percentage: ${percentage.toFixed(2)}%</h3>
      <h3>Division: ${division}</h3>

      <div class="grade-table">
        <table>
          <tr><th>Percentage</th><th>Grade</th></tr>
          <tr><td>90% and above</td><td>A+</td></tr>
          <tr><td>75% to 89%</td><td>A</td></tr>
          <tr><td>60% to 74%</td><td>B</td></tr>
          <tr><td>45% to 59%</td><td>C</td></tr>
          <tr><td>33% to 44%</td><td>D</td></tr>
          <tr><td>Below 33%</td><td>E (Fail)</td></tr>
        </table>
      </div>
    `;

        marksheetDiv.innerHTML = marksheetHTML;

        inputSection.classList.add('hidden');
        marksheetSection.classList.remove('hidden');
    });

    function getGrade(percent) {
        if (percent >= 90) return 'A+';
        else if (percent >= 75) return 'A';
        else if (percent >= 60) return 'B';
        else if (percent >= 45) return 'C';
        else if (percent >= 33) return 'D';
        else return 'E';
    }

    function getDivision(percent) {
        if (percent >= 60) return 'First Division';
        else if (percent >= 45) return 'Second Division';
        else if (percent >= 33) return 'Third Division';
        else return 'Fail';
    }
});

function printMarksheet() {
    window.print();
}

function downloadMarksheet() {
    window.print();
}
