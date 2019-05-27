const form = document.getElementById("form");
const printBtn = document.getElementById("print");

form.addEventListener("submit", event => {
    const data = new FormData(event.target);

    const personalDetails = [data.get("first-name"), data.get("last-name"), data.get("job-title"), data.get("email"), data.get("phone"), data.get("professional-summary")];
    const links = [data.get("link-label"), data.get("link")];
    const employment = [data.get("workplace"), data.get("employer"), data.get("job-start"), data.get("job-end"), data.get("job-city"), data.get("job-description")];
    const education = [data.get("school"), data.get("school-start"), data.get("school-end"), data.get("school-city"), data.get("school-description")];
    const skills = [data.get("skill"), data.get("skill-description")];
    const template = document.getElementById("template");
    const docFrag = document.createDocumentFragment();

    event.preventDefault();
    template.textContent = "";
    
    if (personalDetails[0] && personalDetails[1]) {
        const row = document.createElement("div");
        const paragraph = document.createElement("p");
        template.appendChild(row);
        row.classList.add("resume-preview__row");
        paragraph.classList.add("resume-preview__heading--name");
        paragraph.textContent = `${personalDetails[0]} ${personalDetails[1]}`;
        row.appendChild(paragraph);
    }

    if (personalDetails[2]) {
        const row = document.createElement("div");
        const paragraph = document.createElement("p");
        template.appendChild(row);
        row.classList.add("resume-preview__row");
        paragraph.classList.add("resume-preview__heading--job-title");
        paragraph.textContent = personalDetails[2];
        row.appendChild(paragraph);
    }

    if (personalDetails[3]) {
        const row = document.createElement("div");
        const cap = document.createElement("div");
        const desc = document.createElement("div");
        template.appendChild(row);
        row.classList.add("resume-preview__row");
        cap.classList.add("resume-preview__cap");
        cap.textContent = "E-mail:";
        desc.classList.add("resume-preview__desc");
        desc.textContent = personalDetails[3];
        docFrag.appendChild(cap);
        docFrag.appendChild(desc);
        row.appendChild(docFrag);
    }

    if (personalDetails[4]) {
        const row = document.createElement("div");
        const cap = document.createElement("div");
        const desc = document.createElement("div");
        template.appendChild(row);
        row.classList.add("resume-preview__row");
        cap.classList.add("resume-preview__cap");
        cap.textContent = "Phone:";
        desc.classList.add("resume-preview__desc");
        desc.textContent = personalDetails[4];
        docFrag.appendChild(cap);
        docFrag.appendChild(desc);
        row.appendChild(docFrag);
    }

    if (personalDetails[5]) {
        const row = document.createElement("div");
        const cap = document.createElement("div");
        const desc = document.createElement("div");
        template.appendChild(row);
        row.classList.add("resume-preview__row");
        cap.classList.add("resume-preview__cap");
        cap.textContent = "Professional Summary:";
        desc.classList.add("resume-preview__desc");
        desc.textContent = personalDetails[5];
        docFrag.appendChild(cap);
        docFrag.appendChild(desc);
        row.appendChild(docFrag);
    }

    if (employment[0] && employment[1] && employment[2] && employment[3] && employment[4] && employment[5]) {
        const row = document.createElement("div");
        const cap = document.createElement("div");
        const desc = document.createElement("div");
        const heading = document.createElement("div");
        template.appendChild(heading);
        heading.classList.add("resume-preview__heading");
        heading.textContent = "Employment history:";
        template.appendChild(row);
        row.classList.add("resume-preview__row");
        cap.classList.add("resume-preview__cap");
        cap.textContent = `${employment[2]} - ${employment[3]}`;
        desc.classList.add("resume-preview__desc");
        desc.textContent = `${employment[0]} at ${employment[1]}, ${employment[4]} - ${employment[5]}`;
        docFrag.appendChild(cap);
        docFrag.appendChild(desc);
        row.appendChild(docFrag);
    }

    if (education[0] && education[1] && education[2] && education[3] && education[4]) {
        const row = document.createElement("div");
        const cap = document.createElement("div");
        const desc = document.createElement("div");
        const heading = document.createElement("div");
        template.appendChild(heading);
        heading.classList.add("resume-preview__heading");
        heading.textContent = "Education:";
        template.appendChild(row);
        row.classList.add("resume-preview__row");
        cap.classList.add("resume-preview__cap");
        cap.textContent = `${education[1]} - ${education[2]}`;
        desc.classList.add("resume-preview__desc");
        desc.textContent = `${education[0]}, ${education[3]} - ${education[4]}`;
        docFrag.appendChild(cap);
        docFrag.appendChild(desc);
        row.appendChild(docFrag);
    }

    if (skills[0] && skills[1]) {
        const row = document.createElement("div");
        const cap = document.createElement("div");
        const desc = document.createElement("div");
        const heading = document.createElement("div");
        template.appendChild(heading);
        heading.classList.add("resume-preview__heading");
        heading.textContent = "Skills:";
        template.appendChild(row);
        row.classList.add("resume-preview__row");
        cap.classList.add("resume-preview__cap");
        cap.textContent = skills[0];
        desc.classList.add("resume-preview__desc");
        desc.textContent = skills[1];
        docFrag.appendChild(cap);
        docFrag.appendChild(desc);
        row.appendChild(docFrag);
    }

    if (links[0] && links[1]) {
        const row = document.createElement("div");
        const cap = document.createElement("div");
        const desc = document.createElement("div");
        const heading = document.createElement("div");
        template.appendChild(heading);
        heading.classList.add("resume-preview__heading");
        heading.textContent = "Links:";
        template.appendChild(row);
        row.classList.add("resume-preview__row");
        cap.classList.add("resume-preview__cap");
        cap.textContent = links[0];
        desc.classList.add("resume-preview__desc");
        desc.textContent = links[1];
        docFrag.appendChild(cap);
        docFrag.appendChild(desc);
        row.appendChild(docFrag);
    }
});

const printFn = () => {
    window.print();
}

printBtn.addEventListener("click", printFn);