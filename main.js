const generateBtn = document.getElementById("generate");
const printBtn = document.getElementById("print");
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
        let templateDiv = document.getElementById("template");
        let newDiv = document.createElement("div");
        let newP = document.createElement("p");
        templateDiv.appendChild(newDiv);
        newDiv.id = "name-template";
        newDiv.classList.add("resume-preview__row");
        newDiv.appendChild(newP);
        newP.id = "name-cap";
        newP.classList.add("resume-preview__heading--name");
        let nameDiv = document.getElementById("name-cap");
        nameDiv.textContent = firstName + " " + lastName;
    }
    
    if(jobTitle != "") {
        let templateDiv = document.getElementById("template");
        let newDiv = document.createElement("div");
        let newP = document.createElement("p");
        templateDiv.appendChild(newDiv);
        newDiv.id = "job-title-template";
        newDiv.classList.add("resume-preview__row");
        newDiv.appendChild(newP);
        newP.id = "job-title-cap";
        newP.classList.add("resume-preview__heading--job-title");
        let jobTitleDiv = document.getElementById("job-title-cap");
        jobTitleDiv.textContent = jobTitle;
    }
    
    if(email != "") {
        let templateDiv = document.getElementById("template");
        let newDiv = document.createElement("div");
        let newTemplateCap = document.createElement("div");
        let newTemplateDesc = document.createElement("div");
        templateDiv.appendChild(newDiv);
        newDiv.id = "email-template";
        newDiv.classList.add("resume-preview__row")
        newDiv.appendChild(newTemplateCap);
        newTemplateCap.id = "email-cap";
        newTemplateCap.classList.add("resume-preview__cap");
        newTemplateCap.textContent = "E-mail:"
        newDiv.appendChild(newTemplateDesc);
        newTemplateDesc.id = "email-desc";
        newTemplateDesc.classList.add("resume-preview__desc");
        let emailDiv = document.getElementById("email-desc");
        emailDiv.textContent = email;
    }
    
    if(phone != "") {
        let templateDiv = document.getElementById("template");
        let newDiv = document.createElement("div");
        let newTemplateCap = document.createElement("div");
        let newTemplateDesc = document.createElement("div");
        templateDiv.appendChild(newDiv);
        newDiv.id = "phone-template";
        newDiv.classList.add("resume-preview__row");
        newDiv.appendChild(newTemplateCap);
        newTemplateCap.id = "phone-cap";
        newTemplateCap.classList.add("resume-preview__cap");
        newTemplateCap.textContent = "Phone:";
        newDiv.appendChild(newTemplateDesc);
        newTemplateDesc.id = "phone-desc";
        newTemplateDesc.classList.add("resume-preview__desc");
        let phoneDiv = document.getElementById("phone-desc");
        phoneDiv.textContent = phone;
    }

    if(professionalSummary != "") {
        let templateDiv = document.getElementById("template");
        let newDiv = document.createElement("div");
        let newTemplateCap = document.createElement("div");
        let newTemplateDesc = document.createElement("div");
        templateDiv.appendChild(newDiv);
        newDiv.id = "professional-summary-template";
        newDiv.classList.add("resume-preview__row");
        newDiv.appendChild(newTemplateCap);
        newTemplateCap.id = "professional-summary-cap";
        newTemplateCap.classList.add("resume-preview__cap");
        newTemplateCap.textContent = "Professional Summary:";
        newDiv.appendChild(newTemplateDesc);
        newTemplateDesc.id = "professional-summary-desc";
        newTemplateDesc.classList.add("resume-preview__desc");
        let professionalSummaryDiv = document.getElementById("professional-summary-desc");
        professionalSummaryDiv.textContent = professionalSummary;
    }
    
    if(workplace1 != "" && employer1 != "" && jobStart1 != "" && jobEnd1 != "" && jobCity1 != "" && jobDescription1 != "") {
        let templateDiv = document.getElementById("template");
        let newDiv = document.createElement("div");
        let newTemplateHeading = document.createElement("div");
        let newTemplateCap = document.createElement("div");
        let newTemplateDesc = document.createElement("div");
        templateDiv.appendChild(newTemplateHeading);
        newTemplateHeading.id = "employment-history-heading";
        newTemplateHeading.classList.add("resume-preview__heading");
        newTemplateHeading.textContent = "Employment history";
        templateDiv.appendChild(newDiv);
        newDiv.id = "employment-history-template";
        newDiv.classList.add("resume-preview__row");
        newDiv.appendChild(newTemplateCap);
        newTemplateCap.id = "employment-history-cap";
        newTemplateCap.classList.add("resume-preview__cap");
        newTemplateCap.textContent = jobStart1 + " - " + jobEnd1;
        newDiv.appendChild(newTemplateDesc);
        newTemplateDesc.id = "employment-history-desc";
        newTemplateDesc.classList.add("resume-preview__desc");
        let employmentHistoryDiv = document.getElementById("employment-history-desc");
        employmentHistoryDiv.textContent = workplace1 + " at " + employer1 + ", " + jobCity1 + " - " + jobDescription1;
    }
    
    if(school1 != "" && degree1 != "" && schoolStart1 != "" && schoolEnd1 != "" && schoolCity1 != "" && schoolDescription1 != "") {
        let templateDiv = document.getElementById("template");
        let newDiv = document.createElement("div");
        let newTemplateHeading = document.createElement("div");
        let newTemplateCap = document.createElement("div");
        let newTemplateDesc = document.createElement("div");
        templateDiv.appendChild(newTemplateHeading);
        newTemplateHeading.id = "education-heading";
        newTemplateHeading.classList.add("resume-preview__heading");
        newTemplateHeading.textContent = "Education";
        templateDiv.appendChild(newDiv);
        newDiv.id = "education-template";
        newDiv.classList.add("resume-preview__row");
        newDiv.appendChild(newTemplateCap);
        newTemplateCap.id = "education-cap";
        newTemplateCap.classList.add("resume-preview__cap");
        newTemplateCap.textContent = schoolStart1 + " - " + schoolEnd1;
        newDiv.appendChild(newTemplateDesc);
        newTemplateDesc.id = "education-desc";
        newTemplateDesc.classList.add("resume-preview__desc");
        let educationDiv = document.getElementById("education-desc");
        educationDiv.textContent = school1 + ", " + degree1 + ", " + schoolCity1 + " - " + schoolDescription1;
    }
    
    if(skill1 != "" && skillDescription1 != "") {
        let templateDiv = document.getElementById("template");
        let newDiv = document.createElement("div");
        let newTemplateHeading = document.createElement("div");
        let newTemplateCap = document.createElement("div");
        let newTemplateDesc = document.createElement("div");
        templateDiv.appendChild(newTemplateHeading);
        newTemplateHeading.id = "skills-heading";
        newTemplateHeading.classList.add("resume-preview__heading");
        newTemplateHeading.textContent = "Skills";
        templateDiv.appendChild(newDiv);
        newDiv.id = "skills-template";
        newDiv.classList.add("resume-preview__row");
        newDiv.appendChild(newTemplateCap);
        newTemplateCap.id = "skills-cap";
        newTemplateCap.classList.add("resume-preview__cap");
        newTemplateCap.textContent = skill1;
        newDiv.appendChild(newTemplateDesc);
        newTemplateDesc.id = "skills-desc";
        newTemplateDesc.classList.add("resume-preview__desc");
        let skillsDiv = document.getElementById("skills-desc");
        skillsDiv.textContent = skillDescription1;
    }
    
    if(linkLabel1 != "" && link1 != "") {
        let templateDiv = document.getElementById("template");
        let newDiv = document.createElement("div");
        let newTemplateHeading = document.createElement("div");
        let newTemplateCap = document.createElement("div");
        let newTemplateDesc = document.createElement("div");
        templateDiv.appendChild(newTemplateHeading);
        newTemplateHeading.id = "links-heading";
        newTemplateHeading.classList.add("resume-preview__heading");
        newTemplateHeading.textContent = "Links";
        templateDiv.appendChild(newDiv);
        newDiv.id = "links-template";
        newDiv.classList.add("resume-preview__row");
        newDiv.appendChild(newTemplateCap);
        newTemplateCap.id = "links-cap";
        newTemplateCap.classList.add("resume-preview__cap");
        newTemplateCap.textContent = linkLabel1;
        newDiv.appendChild(newTemplateDesc);
        newTemplateDesc.id = "links-desc";
        newTemplateDesc.classList.add("resume-preview__desc");
        let skillsDiv = document.getElementById("links-desc");
        skillsDiv.textContent = link1;
    }
}

const printFn = () => {
    window.print();
}

printBtn.addEventListener("click", printFn, false);
generateBtn.addEventListener("click", generateFn, false);