



function addProjectsToPage(){

    // Creates a new data type of project 
    class project {
        constructor(name, date, img, link, text) {
            this.name = name;
            this.date = date;
            this.img = img;
            this.link = link;
            this.text = text;
        }
    }

    // creates an array of projects
    const projects = [];

    // adds projects to array
    
    projects.push(new project('Quote Hub', '05/18/2023', 'img of deployed app', 'https://pure-scrubland-99203-50ab01d03184.herokuapp.com/', 'Welcome to QuoteHub! This web application allows users to generate random quotes and save their favorites for future reference. The website is built using Handlebars, Node.js, MySQL, Tailwind CSS, and Alpine.js. It is deployed on Heroku and the source code is available on GitHub.'))
    projects.push(new project('Coding Quiz', '04/27/2023', 'img of deployed app', 'https://bcoleman56.github.io/coding-quiz/index.html', 'This website lets the user take a short quiz to test their coding knowledge.'))
    projects.push(new project('Weather Website', '05/11/2023', 'img of deployed app', 'https://bcoleman56.github.io/weather-website/', 'This web application lets the user get the weather for a city by employing API calls.'))


    // HTML ELEMENT SELECTORS
    const projectsEl = document.getElementById('projects-container');

    // LOOPS THROUGH PROJECTS  
    for (let i = 0; i < projects.length; i++){

        console.log(projects[i]);

        // CARD ELEMENT
        let projectEl = document.createElement('div');
        projectEl.classList.add('max-w-sm', 'rounded', 'overflow-hidden', 'shadow-lg', 'box-border', 'h-50', 'w-50', 'hover:bg-gray-300', 'p-5');

        let imgEl = document.createElement('img')
        imgEl.classList.add('w-full', 'hover:border-solid', 'hover:border-blue-500', 'hover:border-4', 'w-full', 'h-9/12');
        imgEl.setAttribute('src', 'assets/images/' + projects[i].name + '.png')
        imgEl.setAttribute('alt', 'Image of ' + projects[i].name + ' project');
        imgEl.setAttribute('href', projects[i].link)

        // IMG LINK 
        let imgLinkEl = document.createElement('a');
        imgLinkEl.href = projects[i].link;

        


        // CONTAINER ELEMENT    
        let containerEl = document.createElement('div');
        containerEl.classList.add('px-4', 'py-4');
        
        // TEXT DIV ELEMENT
        let textDivEl = document.createElement('div');
        textDivEl.classList.add('font-bold', 'text-xl', 'mb-2')
        textDivEl.textContent = projects[i].name;

        let textEl = document.createElement('p');
        textEl.classList.add('text-gray-700', 'text-base');
        textEl.textContent = projects[i].text;
        



        // append projectEl to projectsEl

        imgLinkEl.appendChild(imgEl)

        textDivEl.appendChild(textEl);

        projectEl.append(imgLinkEl, containerEl, textDivEl);

        projectsEl.appendChild(projectEl);


    }
    //displays the footer after projects, so it doesnt flash on the screen under about me section
    // projectsEl.classList.add('space-x-5')
}


addProjectsToPage();