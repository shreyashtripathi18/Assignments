let skillCounter = 0;
let expCounter = 0;
let eduCounter = 0;

function addSkill() {
    const skillsDiv = document.getElementById('skills');
    skillCounter++;
    skillsDiv.innerHTML += `
    <div class="form-group">
      <input type="text" id="skill${skillCounter}" placeholder="Skill ${skillCounter}" required>
    </div>
  `;
}

function addExperience() {
    const expDiv = document.getElementById('experience');
    expCounter++;
    expDiv.innerHTML += `
    <div class="form-group">
      <input type="text" id="expTitle${expCounter}" placeholder="Job Title" required>
      <input type="text" id="expCompany${expCounter}" placeholder="Company Name" required>
    </div>
    <div class="form-group">
      <input type="text" id="expDuration${expCounter}" placeholder="Duration (e.g., 2021-2023)" required>
    </div>
  `;
}

function addEducation() {
    const eduDiv = document.getElementById('education');
    eduCounter++;
    eduDiv.innerHTML += `
    <div class="form-group">
      <input type="text" id="eduDegree${eduCounter}" placeholder="Degree" required>
      <input type="text" id="eduInstitute${eduCounter}" placeholder="Institute" required>
      <input type="text" id="eduYear${eduCounter}" placeholder="Year (e.g., 2023)" required>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm');
    const inputSection = document.getElementById('inputSection');
    const resumeSection = document.getElementById('resumeSection');
    const resumeDiv = document.getElementById('resume');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let skillsHTML = "<ul>";
        for (let i = 1; i <= skillCounter; i++) {
            const skill = document.getElementById(`skill${i}`).value;
            skillsHTML += `<li>${skill}</li>`;
        }
        skillsHTML += "</ul>";

        let experienceHTML = "";
        for (let i = 1; i <= expCounter; i++) {
            const title = document.getElementById(`expTitle${i}`).value;
            const company = document.getElementById(`expCompany${i}`).value;
            const duration = document.getElementById(`expDuration${i}`).value;
            experienceHTML += `
        <p><strong>${title}</strong> at ${company} (${duration})</p>
      `;
        }

        let educationHTML = "";
        for (let i = 1; i <= eduCounter; i++) {
            const degree = document.getElementById(`eduDegree${i}`).value;
            const institute = document.getElementById(`eduInstitute${i}`).value;
            const year = document.getElementById(`eduYear${i}`).value;
            educationHTML += `
        <p><strong>${degree}</strong> - ${institute} (${year})</p>
      `;
        }

        let resumeHTML = `
      <h1>${document.getElementById('fullName').value}</h1>
      <h3>${document.getElementById('profession').value}</h3>
      <p><strong>Email:</strong> ${document.getElementById('email').value} | <strong>Phone:</strong> ${document.getElementById('phone').value}</p>
      <p><strong>Address:</strong> ${document.getElementById('address').value}</p>

      <div class="section">
        <div class="section-title">Skills</div>
        ${skillsHTML}
      </div>

      <div class="section">
        <div class="section-title">Experience</div>
        ${experienceHTML}
      </div>

      <div class="section">
        <div class="section-title">Education</div>
        ${educationHTML}
      </div>
    `;

        resumeDiv.innerHTML = resumeHTML;
        inputSection.classList.add('hidden');
        resumeSection.classList.remove('hidden');
    });
});

function printResume() {
    window.print();
}

function downloadResume() {
    window.print();
}
