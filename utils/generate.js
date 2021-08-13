
const renderManager = (manager) => {
    return `
    <div class="card m-4 p-4" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${manager.name}</h5>
                    <h6>${manager.role}</h6>
                    <h6>${manager.office}</h6>
                    <a href="mailto:${manager.email}" class="btn btn-primary">${manager.email}</a>
                </div>
            </div>`
}


const renderEngineer = (engineer) => {
    `<div class="card m-4 p-4" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${engineer.name}</h5>
        <h6>${engineer.role}</h6>
        <a href="mailto:${engineer.email}" class="btn btn-primary">${engineer.email}</a>
        <a href="${engineer.username}" class="btn btn-primary">${engineer.username}</a>
    </div>
</div>`
}

const renderIntern = (intern) => {
    `<div class="card m-4 p-4" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${intern.name}</h5>
        <h6>${intern.role}</h6>
        <h6>${intern.school}</h6>
        <a href="mailto:${intern.email}" class="btn btn-primary">${intern.email}</a>
    </div>
</div>`
}




const generatePage = (data) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sample</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
            integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    </head>
    
    <body>
        <header class="text-center text-white bg-danger p-4 border border-dark">
            <h1>My Team</h1>
        </header>
        <main class="m-4 p-4">
            <container class="container-fluid m-3 team-members">
             <div class="row justify-content-md-center">
                ${renderCard(data)}
                </div>
            </container>
        </main>
    
    </body>
    
    </html>`
}

module.exports = generatePage;