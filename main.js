const generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click", function() {
    let jobTitle = document.getElementById("job-title").value;
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let professionalSummary = document.getElementById("professional-summary").value;
    let workplace1 = document.getElementById("workplace-1").value;
    let employer1 = document.getElementById("employer-1").value;
    let jobStart1 = document.getElementById("job-start-1").value;
    let jobEnd1 = document.getElementById("job-end-1").value;
    let jobCity1 = document.getElementById("job-city-1").value;
    let jobDescription1 = document.getElementById("job-description-1").value;
    let school1 = document.getElementById("school-1").value;
    let degree1 = document.getElementById("degree-1").value;
    let schoolStart1 = document.getElementById("school-start-1").value;
    let schoolEnd1 = document.getElementById("school-end-1").value;
    let schoolCity1 = document.getElementById("school-city-1").value;
    let schoolDescription1 = document.getElementById("school-description-1").value;
    let skill1 = document.getElementById("skill-1").value;
    let skillDescription1 = document.getElementById("skill-description-1").value;
    let linkLabel1 = document.getElementById("link-label-1").value;
    let link1 = document.getElementById("link-1").value;
    
    let jobTitleDiv = document.getElementById("workplace-layout");
    let nameDiv = document.getElementById("name-layout");
    let emailDiv = document.getElementById("email-layout");
    let phoneDiv = document.getElementById("phone-layout");
    let professionalSummaryDiv = document.getElementById("professional-summary-layout");
    let employmentDiv = document.getElementById("employment-layout");
    let employmentDateDiv = document.getElementById("employment-date-layout");
    let educationDiv = document.getElementById("education-layout");
    let educationDateDiv = document.getElementById("education-date-layout");
    let skillLabelDiv = document.getElementById("skill-label-layout");
    let skillDescDIv = document.getElementById("skill-desc-layout");
    let linkLabelDiv = document.getElementById("link-label-layout");
    let linkDiv = document.getElementById("link-layout");
    
    nameDiv.textContent = firstName + " " + lastName;
    jobTitleDiv.textContent = workplace;
    emailDiv.textContent = email;
    phoneDiv.textContent = phone;
    professionalSummaryDiv.textContent = professionalSummary;
    employmentDiv.textContent = jobTitle1 + " at " + employer1 + ", " + jobCity1;
    employmentDateDiv.textContent = jobStart1 + " - " + jobEnd1;
    educationDiv.textContent = degree1 + ", " + school1 + ", " + schoolCity1;
    educationDateDiv.textContent = schoolStart1 + " - " + schoolEnd1;
    skillLabelDiv.textContent = skill1 + ":";
    skillDescDIv.textContent = skillDescription1;
    linkLabelDiv.textContent = linkLabel1 + ":";
    linkDiv.textContent = link1;
    
}, false);
