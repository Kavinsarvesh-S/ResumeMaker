let educationCount = 0;
let experienceCount = 0;

// Initialize with sample data
document.addEventListener('DOMContentLoaded', function() {
  // Add sample education entries
  addEducation();
  addEducation();
  
  // Add sample experience entries
  addExperience();
  addExperience();
  
  // Fill sample data
  fillSampleData();
  
  // Add event listeners for real-time updates
  addEventListeners();
});

function addEducation() {
  educationCount++;
  const container = document.getElementById('education-container');
  const educationItem = document.createElement('div');
  educationItem.className = 'education-item fade-in';
  educationItem.innerHTML = `
    <div class="item-header">
      <h4>Education ${educationCount}</h4>
      <button type="button" class="remove-btn" onclick="removeEducation(this)">Remove</button>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Start Year</label>
        <input type="number" class="edu-start" placeholder="2011" min="1950" max="2030">
      </div>
      <div class="form-group">
        <label>End Year</label>
        <input type="number" class="edu-end" placeholder="2015" min="1950" max="2030">
      </div>
    </div>
    <div class="form-group">
      <label>Institution</label>
      <input type="text" class="edu-institution" placeholder="WARDIERE UNIVERSITY">
    </div>
    <div class="form-group">
      <label>Degree</label>
      <input type="text" class="edu-degree" placeholder="Bachelor of Design">
    </div>
    <div class="form-group">
      <label>GPA (optional)</label>
      <input type="text" class="edu-gpa" placeholder="3.85">
    </div>
  `;
  container.appendChild(educationItem);
  addEducationListeners(educationItem);
}

function addExperience() {
  experienceCount++;
  const container = document.getElementById('experience-container');
  const experienceItem = document.createElement('div');
  experienceItem.className = 'experience-item fade-in';
  experienceItem.innerHTML = `
    <div class="item-header">
      <h4>Experience ${experienceCount}</h4>
      <button type="button" class="remove-btn" onclick="removeExperience(this)">Remove</button>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Start Year</label>
        <input type="number" class="exp-start" placeholder="2020" min="1950" max="2030">
      </div>
      <div class="form-group">
        <label>End Year</label>
        <input type="number" class="exp-end" placeholder="2023" min="1950" max="2030">
      </div>
    </div>
    <div class="form-group">
      <label>Job Title</label>
      <input type="text" class="exp-title" placeholder="SENIOR GRAPHIC DESIGNER">
    </div>
    <div class="form-group">
      <label>Company</label>
      <input type="text" class="exp-company" placeholder="Fauget Studio">
    </div>
    <div class="form-group">
      <label>Responsibilities (one per line)</label>
      <textarea class="exp-responsibilities" rows="3" placeholder="create more than 100 graphic designs for big companies&#10;complete a lot of complicated work"></textarea>
    </div>
  `;
  container.appendChild(experienceItem);
  addExperienceListeners(experienceItem);
}

function removeEducation(button) {
  button.closest('.education-item').remove();
  updateEducationPreview();
}

function removeExperience(button) {
  button.closest('.experience-item').remove();
  updateExperiencePreview();
}

function fillSampleData() {
  document.getElementById('firstName').value = 'Isabel';
  document.getElementById('lastName').value = 'Schumacher';
  document.getElementById('jobTitle').value = 'Graphics Designer';
  document.getElementById('phone').value = '+23-456-7890';
  document.getElementById('email').value = 'hello@reallygreatsite.com';
  document.getElementById('address').value = '123 Anywhere Street, Any City';
  document.getElementById('about').value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempor arcu volutpat.';
  document.getElementById('skills').value = 'Web Design, Branding, Graphic Design, SEO, Marketing';
  document.getElementById('languages').value = 'English, French';
  
  // Fill education data
  const educationItems = document.querySelectorAll('.education-item');
  if (educationItems[0]) {
    educationItems[0].querySelector('.edu-start').value = '2011';
    educationItems[0].querySelector('.edu-end').value = '2015';
    educationItems[0].querySelector('.edu-institution').value = 'WARDIERE UNIVERSITY';
    educationItems[0].querySelector('.edu-degree').value = 'Bachelor of Design';
    educationItems[0].querySelector('.edu-gpa').value = '3.85';
  }
  if (educationItems[1]) {
    educationItems[1].querySelector('.edu-start').value = '2014';
    educationItems[1].querySelector('.edu-end').value = '2019';
    educationItems[1].querySelector('.edu-institution').value = 'WARDIERE UNIVERSITY';
    educationItems[1].querySelector('.edu-degree').value = 'Bachelor of Design';
    educationItems[1].querySelector('.edu-gpa').value = '3.74';
  }
  
  // Fill experience data
  const experienceItems = document.querySelectorAll('.experience-item');
  if (experienceItems[0]) {
    experienceItems[0].querySelector('.exp-start').value = '2020';
    experienceItems[0].querySelector('.exp-end').value = '2023';
    experienceItems[0].querySelector('.exp-title').value = 'SENIOR GRAPHIC DESIGNER';
    experienceItems[0].querySelector('.exp-company').value = 'Fauget Studio';
    experienceItems[0].querySelector('.exp-responsibilities').value = 'create more than 100 graphic designs for big companies\ncomplete a lot of complicated work';
  }
  if (experienceItems[1]) {
    experienceItems[1].querySelector('.exp-start').value = '2017';
    experienceItems[1].querySelector('.exp-end').value = '2019';
    experienceItems[1].querySelector('.exp-title').value = 'SENIOR GRAPHIC DESIGNER';
    experienceItems[1].querySelector('.exp-company').value = 'Iorana, Inc.';
    experienceItems[1].querySelector('.exp-responsibilities').value = 'create more than 100 graphic designs for big companies\nComplete a lot of complicated work';
  }
}

function addEventListeners() {
  // Basic info listeners

  document.getElementById('firstName').addEventListener('input', updateName);
  document.getElementById('lastName').addEventListener('input', updateName);
  document.getElementById('jobTitle').addEventListener('input', updateJobTitle);
  document.getElementById('phone').addEventListener('input', updateContact);
  document.getElementById('email').addEventListener('input', updateContact);
  document.getElementById('address').addEventListener('input', updateContact);
  document.getElementById('about').addEventListener('input', updateAbout);
  document.getElementById('skills').addEventListener('input', updateSkills);
  document.getElementById('languages').addEventListener('input', updateLanguages);
  document.getElementById('downloadBtn').addEventListener('click', downloadPDF);

}

function addEducationListeners(item) {
  const inputs = item.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('input', updateEducationPreview);
  });
}

function addExperienceListeners(item) {
  const inputs = item.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('input', updateExperiencePreview);
  });
}


function updateName() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  document.getElementById('preview-name').textContent = `${firstName} ${lastName}`.trim();
}

function updateJobTitle() {
  const jobTitle = document.getElementById('jobTitle').value;
  document.getElementById('preview-job-title').textContent = jobTitle;
}

function updateContact() {
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  
  document.getElementById('preview-phone').textContent = phone;
  document.getElementById('preview-email').textContent = email;
  document.getElementById('preview-address').textContent = address;
}

function updateAbout() {
  const about = document.getElementById('about').value;
  document.getElementById('preview-about').textContent = about;
}

function updateSkills() {
  const skills = document.getElementById('skills').value;
  const skillsList = document.getElementById('preview-skills');
  skillsList.innerHTML = '';
  
  if (skills) {
    skills.split(',').forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill.trim();
      skillsList.appendChild(li);
    });
  }
}

function updateLanguages() {
  const languages = document.getElementById('languages').value;
  const languagesList = document.getElementById('preview-languages');
  languagesList.innerHTML = '';
  
  if (languages) {
    languages.split(',').forEach(language => {
      const li = document.createElement('li');
      li.textContent = language.trim();
      languagesList.appendChild(li);
    });
  }
}

function updateEducationPreview() {
  const educationItems = document.querySelectorAll('.education-item');
  const previewContainer = document.getElementById('preview-education');
  previewContainer.innerHTML = '';
  
  educationItems.forEach(item => {
    const startYear = item.querySelector('.edu-start').value;
    const endYear = item.querySelector('.edu-end').value;
    const institution = item.querySelector('.edu-institution').value;
    const degree = item.querySelector('.edu-degree').value;
    const gpa = item.querySelector('.edu-gpa').value;
    
    if (institution || degree) {
      const timelineItem = document.createElement('div');
      timelineItem.className = 'timeline-item';
      timelineItem.innerHTML = `
        <div class="timeline-date">(${startYear} - ${endYear})</div>
        <div class="timeline-content">
          <h4>${institution}</h4>
          <p>${degree}</p>
          ${gpa ? `<p>${gpa}</p>` : ''}
        </div>
      `;
      previewContainer.appendChild(timelineItem);
    }
  });
}

function updateExperiencePreview() {
  const experienceItems = document.querySelectorAll('.experience-item');
  const previewContainer = document.getElementById('preview-experience');
  previewContainer.innerHTML = '';
  
  experienceItems.forEach(item => {
    const startYear = item.querySelector('.exp-start').value;
    const endYear = item.querySelector('.exp-end').value;
    const title = item.querySelector('.exp-title').value;
    const company = item.querySelector('.exp-company').value;
    const responsibilities = item.querySelector('.exp-responsibilities').value;
    
    if (title || company) {
      const timelineItem = document.createElement('div');
      timelineItem.className = 'timeline-item';
      
      let responsibilitiesList = '';
      if (responsibilities) {
        const respArray = responsibilities.split('\n').filter(resp => resp.trim());
        if (respArray.length > 0) {
          responsibilitiesList = '<ul>' + respArray.map(resp => `<li>${resp.trim()}</li>`).join('') + '</ul>';
        }
      }
      
      timelineItem.innerHTML = `
        <div class="timeline-date">(${startYear} - ${endYear})</div>
        <div class="timeline-content">
          <h4>${title}</h4>
          <p>${company}</p>
          ${responsibilitiesList}
        </div>
      `;
      previewContainer.appendChild(timelineItem);
    }
  });
}
// Handle profile photo upload
const photoInput = document.getElementById("photo");
const previewPhoto = document.getElementById("preview-photo");

if (photoInput && previewPhoto) {
  photoInput.addEventListener("change", function () {
    const file = this.files && this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const dataUrl = e.target.result;
        // If preview is an <img>, set src; if it's a <div>, use background image
        if (previewPhoto.tagName && previewPhoto.tagName.toLowerCase() === 'img') {
          previewPhoto.src = dataUrl;
        } else {
          previewPhoto.style.backgroundImage = `url(${dataUrl})`;
          previewPhoto.style.backgroundSize = 'cover';
          previewPhoto.style.backgroundPosition = 'center';
        }
      };
      reader.readAsDataURL(file); // convert file to base64
    }
  });
} else {
  // Fail-safe: avoid throwing if element missing
  console.warn('Photo input or preview element not found:', photoInput, previewPhoto);
}


function generateResume() {
  // Update all preview sections
  updateName();
  updateJobTitle();
  updateContact();
  updateAbout();
  updateSkills();
  updateLanguages();
  updateEducationPreview();
  updateExperiencePreview();
  
  // Show success message
  alert('Resume generated successfully! You can now download it as PDF.');
}
document.getElementById('printBtn').addEventListener('click', () => {
  // Open print dialog with CSS applied
  window.print();
});

function downloadPDF() {
  // Simple implementation - in a real app, you'd use a library like jsPDF or html2pdf
  alert('PDF download feature would be implemented here. In a real application, this would convert the resume preview to a PDF file.');
  
  // For demonstration, we'll open the print dialog
  const resumeContent = document.getElementById('resume-preview').innerHTML;
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html>
      <head>
        <title>Resume</title>
        <style>
          ${document.querySelector('style') ? document.querySelector('style').innerHTML : ''}
          body { margin: 0; padding: 20px; }
          .resume-preview { border: none; }
        </style>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        ${resumeContent}
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.print();
}
function downloadPDF() {
  const resumeContent = document.getElementById('resume-preview');

  if (!resumeContent) {
    alert('Resume content not found.');
    return;
  }

  // Temporarily remove borders/shadows and force white background for clean capture
  const originalBorder = resumeContent.style.border;
  const originalBoxShadow = resumeContent.style.boxShadow;
  const originalBackground = resumeContent.style.background;
  resumeContent.style.border = 'none';
  resumeContent.style.boxShadow = 'none';
  resumeContent.style.background = '#ffffff';

  html2canvas(resumeContent, {
    scale: 2, // higher scale for sharper PDF
    useCORS: true,
    logging: false,
    allowTaint: false,
    backgroundColor: '#ffffff'
  }).then(canvas => {
    try {
      const imgData = canvas.toDataURL('image/png');

      // Access jsPDF (UMD) from window.jspdf
      const { jsPDF } = window.jspdf;

      // Read page size selector (defaults to A4)
      const pageSizeSelect = document.getElementById('pageSize');
      const pageSize = pageSizeSelect ? pageSizeSelect.value : 'a4';

      // Use points because jsPDF expects sizes in pt by default for better fidelity
      const pdf = new jsPDF('p', 'pt', pageSize);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      // Scale to fit both width and height onto a single page
      const scaleRatio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const renderedWidth = imgWidth * scaleRatio;
      const renderedHeight = imgHeight * scaleRatio;

      // Center image horizontally and vertically
      const marginX = (pdfWidth - renderedWidth) / 2;
      const marginY = (pdfHeight - renderedHeight) / 2;

      pdf.addImage(imgData, 'PNG', marginX, marginY, renderedWidth, renderedHeight);
      pdf.save('resume.pdf');
    } catch (err) {
      console.error('Error generating PDF:', err);
      alert('Could not generate PDF. See console for details.');
    } finally {
      // Restore original styles
      resumeContent.style.border = originalBorder;
      resumeContent.style.boxShadow = originalBoxShadow;
      resumeContent.style.background = originalBackground;
    }
  }).catch(error => {
    console.error('Error rendering canvas for PDF:', error);
    // Restore original styles
    resumeContent.style.border = originalBorder;
    resumeContent.style.boxShadow = originalBoxShadow;
    resumeContent.style.background = originalBackground;
    alert('Could not generate PDF. See console for details.');
  });
}
/*document.getElementById('downloadBtn').addEventListener('click', async () => {
    try {
      const { jsPDF } = await import('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
      const html2canvas = (await import('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js')).default;

      const resumeContent = document.querySelector('.resume-content');
      const canvas = await html2canvas(resumeContent, {
        scale: 2,
        useCORS: true,
        logging: false
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: 'a4'
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('resume.pdf');
    } catch (error) {
      alert('Download feature requires an internet connection. Please use the Print button instead.');
      console.error('Error generating PDF:', error);
    
  });
}*/

