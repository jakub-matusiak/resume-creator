const generateBtn = document.getElementById("generate");
const generateFn = () => {
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
    
    if(firstName != "" && lastName != "") {
        let layoutDiv = document.getElementById("layout");
        let newDiv = document.createElement("div");
        let newH2 = document.createElement("h2");
        layoutDiv.appendChild(newDiv);
        newDiv.id = "name-layout";
        newDiv.classList.add("layout-row");
        newDiv.appendChild(newH2);
        newH2.id = "name-label";
        let nameDiv = document.getElementById("name-label");
        nameDiv.textContent = firstName + " " + lastName;
    }
    
    if(jobTitle != "") {
        let layoutDiv = document.getElementById("layout");
        let newDiv = document.createElement("div");
        let newH3 = document.createElement("h3");
        layoutDiv.appendChild(newDiv);
        newDiv.id = "job-title-layout";
        newDiv.classList.add("layout-row");
        newDiv.appendChild(newH3);
        newH3.id = "job-title-label";
        let jobTitleDiv = document.getElementById("job-title-label");
        jobTitleDiv.textContent = jobTitle;
    }
    
    if(email != "") {
        let layoutDiv = document.getElementById("layout");
        let newDiv = document.createElement("div");
        let newLayoutCap = document.createElement("div");
        let newLayoutDesc = document.createElement("div");
        layoutDiv.appendChild(newDiv);
        newDiv.id = "email-layout";
        newDiv.classList.add("layout-row")
        newDiv.appendChild(newLayoutCap);
        newLayoutCap.id = "email-label";
        newLayoutCap.classList.add("layout-cap");
        newLayoutCap.textContent = "E-mail:"
        newDiv.appendChild(newLayoutDesc);
        newLayoutDesc.id = "email-desc";
        newLayoutDesc.classList.add("layout-desc");
        let emailDiv = document.getElementById("email-desc");
        emailDiv.textContent = email;
    }
    
    if(phone != "") {
        let layoutDiv = document.getElementById("layout");
        let newDiv = document.createElement("div");
        let newLayoutCap = document.createElement("div");
        let newLayoutDesc = document.createElement("div");
        layoutDiv.appendChild(newDiv);
        newDiv.id = "phone-layout";
        newDiv.classList.add("layout-row");
        newDiv.appendChild(newLayoutCap);
        newLayoutCap.id = "phone-label";
        newLayoutCap.classList.add("layout-cap");
        newLayoutCap.textContent = "Phone:";
        newDiv.appendChild(newLayoutDesc);
        newLayoutDesc.id = "phone-desc";
        newLayoutDesc.classList.add("layout-desc");
        let phoneDiv = document.getElementById("phone-desc");
        phoneDiv.textContent = phone;
    }

    if(professionalSummary != "") {
        let layoutDiv = document.getElementById("layout");
        let newDiv = document.createElement("div");
        let newLayoutCap = document.createElement("div");
        let newLayoutDesc = document.createElement("div");
        layoutDiv.appendChild(newDiv);
        newDiv.id = "professional-summary-layout";
        newDiv.classList.add("layout-row");
        newDiv.appendChild(newLayoutCap);
        newLayoutCap.id = "professional-summary-cap";
        newLayoutCap.classList.add("layout-cap");
        newLayoutCap.textContent = "Professional Summary:";
        newDiv.appendChild(newLayoutDesc);
        newLayoutDesc.id = "professional-summary-desc";
        newLayoutDesc.classList.add("layout-desc");
        let professionalSummaryDiv = document.getElementById("professional-summary-desc");
        professionalSummaryDiv.textContent = professionalSummary;
    }
    
    if(workplace1 != "" && employer1 != "" && jobStart1 != "" && jobEnd1 != "" && jobCity1 != "" && jobDescription1 != "") {
        let layoutDiv = document.getElementById("layout");
        let newDiv = document.createElement("div");
        let newLayoutHeading = document.createElement("div");
        let newLayoutCap = document.createElement("div");
        let newLayoutDesc = document.createElement("div");
        layoutDiv.appendChild(newLayoutHeading);
        newLayoutHeading.id = "employment-history-heading";
        newLayoutHeading.classList.add("layout-heading");
        newLayoutHeading.textContent = "Employment history";
        layoutDiv.appendChild(newDiv);
        newDiv.id = "employment-history-layout";
        newDiv.classList.add("layout-row");
        newDiv.appendChild(newLayoutCap);
        newLayoutCap.id = "employment-history-cap";
        newLayoutCap.classList.add("layout-cap");
        newLayoutCap.textContent = jobStart1 + " - " + jobEnd1;
        newDiv.appendChild(newLayoutDesc);
        newLayoutDesc.id = "employment-history-desc";
        newLayoutDesc.classList.add("layout-desc");
        let employmentHistoryDiv = document.getElementById("employment-history-desc");
        employmentHistoryDiv.textContent = workplace1 + " at " + employer1 + ", " + jobCity1 + " - " + jobDescription1;
    }
    
    if(school1 != "" && degree1 != "" && schoolStart1 != "" && schoolEnd1 != "" && schoolCity1 != "" && schoolDescription1 != "") {
        let layoutDiv = document.getElementById("layout");
        let newDiv = document.createElement("div");
        let newLayoutHeading = document.createElement("div");
        let newLayoutCap = document.createElement("div");
        let newLayoutDesc = document.createElement("div");
        layoutDiv.appendChild(newLayoutHeading);
        newLayoutHeading.id = "education-heading";
        newLayoutHeading.classList.add("layout-heading");
        newLayoutHeading.textContent = "Education";
        layoutDiv.appendChild(newDiv);
        newDiv.id = "education-layout";
        newDiv.classList.add("layout-row");
        newDiv.appendChild(newLayoutCap);
        newLayoutCap.id = "education-cap";
        newLayoutCap.classList.add("layout-cap");
        newLayoutCap.textContent = schoolStart1 + " - " + schoolEnd1;
        newDiv.appendChild(newLayoutDesc);
        newLayoutDesc.id = "education-desc";
        newLayoutDesc.classList.add("layout-desc");
        let educationDiv = document.getElementById("education-desc");
        educationDiv.textContent = school1 + ", " + degree1 + ", " + schoolCity1 + " - " + schoolDescription1;
    }
    
    if(skill1 != "" && skillDescription1 != "") {
        let layoutDiv = document.getElementById("layout");
        let newDiv = document.createElement("div");
        let newLayoutHeading = document.createElement("div");
        let newLayoutCap = document.createElement("div");
        let newLayoutDesc = document.createElement("div");
        layoutDiv.appendChild(newLayoutHeading);
        newLayoutHeading.id = "skills-heading";
        newLayoutHeading.classList.add("layout-heading");
        newLayoutHeading.textContent = "Skills";
        layoutDiv.appendChild(newDiv);
        newDiv.id = "skills-layout";
        newDiv.classList.add("layout-row");
        newDiv.appendChild(newLayoutCap);
        newLayoutCap.id = "skills-cap";
        newLayoutCap.classList.add("layout-cap");
        newLayoutCap.textContent = skill1;
        newDiv.appendChild(newLayoutDesc);
        newLayoutDesc.id = "skills-desc";
        newLayoutDesc.classList.add("layout-desc");
        let skillsDiv = document.getElementById("skills-desc");
        skillsDiv.textContent = skillDescription1;
    }
    
    if(linkLabel1 != "" && link1 != "") {
        let layoutDiv = document.getElementById("layout");
        let newDiv = document.createElement("div");
        let newLayoutHeading = document.createElement("div");
        let newLayoutCap = document.createElement("div");
        let newLayoutDesc = document.createElement("div");
        layoutDiv.appendChild(newLayoutHeading);
        newLayoutHeading.id = "links-heading";
        newLayoutHeading.classList.add("layout-heading");
        newLayoutHeading.textContent = "Links";
        layoutDiv.appendChild(newDiv);
        newDiv.id = "links-layout";
        newDiv.classList.add("layout-row");
        newDiv.appendChild(newLayoutCap);
        newLayoutCap.id = "links-cap";
        newLayoutCap.classList.add("layout-cap");
        newLayoutCap.textContent = linkLabel1;
        newDiv.appendChild(newLayoutDesc);
        newLayoutDesc.id = "links-desc";
        newLayoutDesc.classList.add("layout-desc");
        let skillsDiv = document.getElementById("links-desc");
        skillsDiv.textContent = link1;
    }
}

generateBtn.addEventListener("click", generateFn, false);