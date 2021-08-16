

const renderManager = (manager) => {
    return `
    <div class="card m-4 p-4" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${manager.name}</h5>
                    <h6>Manager</h6>
                    <h5 class="card-title">Employee Id: ${manager.id}</h5>
                    <h6>${manager.office}</h6>
                    <a href="mailto:${manager.email}" class="btn btn-primary"><i class="far fa-envelope"></i> ${manager.email}</a>
                </div>
    </div>`
}


const renderEngineer = (engineer) => {
    return `
    <div class="card m-4 p-4" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${engineer.name}</h5>
        <h6>Engineer</h6>
        <h5 class="card-title">Employee Id: ${engineer.id}</h5>
        <a href="https://github.com/${engineer.username}" class="btn btn-primary"><i class="fab fa-github"></i> ${engineer.username}</a>
        <a href="mailto:${engineer.email}" class="btn btn-primary"><i class="far fa-envelope"></i> ${engineer.email}</a>
        
    </div>
</div>`
}

const renderIntern = (intern) => {
    return `
   <div class="card m-4 p-4" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${intern.name}</h5>
        <h6>Intern</h6>
        <h5 class="card-title">Employee Id: ${intern.id}</h5>
        <h6><i class="fas fa-graduation-cap"></i> ${intern.school}</h6>
        <a href="mailto:${intern.email}" class="btn btn-primary"><i class="far fa-envelope"></i> ${intern.email}</a>
    </div>
</div>`
}


const assignCards = function (data) {
    pageArr = [];
    data.forEach(employee => {
        const role = employee.getRole();

        // Calling managersCard
        if (role === 'Manager') {
            const managerCard = renderManager(employee);
            pageArr.push(managerCard);
        }

        // Calling engineersCard
        if (role === 'Engineer') {
            const engineerCard = renderEngineer(employee);
            pageArr.push(engineerCard);
        }

        // Calling internsCard 
        if (role === 'Intern') {
            const internCard = renderIntern(employee);
            pageArr.push(internCard);
        }

    })
    const cards = pageArr.join('')
    const renderPage = generatePage(cards);
    return renderPage;
};



const generatePage = (cards) => {
    return `
<!DOCTYPE html>
<html lang="en">    
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Page</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="dist.css" />
</head>
    
<body>
    <header class="text-center text-white bg-danger p-4 border border-dark">
        <h1>My Team</h1>
        </header>
        <main class="m-4 p-4 text-center">
            <container class="container-fluid m-3 team-members">
             <div class="row justify-content-md-center">
                ${cards}
                </div>
            </container>
        </main>
    
</body>
    
</html>`
}

module.exports = assignCards;