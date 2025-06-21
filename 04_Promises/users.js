console.log("Users: ");

const tableUsers = document.getElementById('users-table-body');
const gitHubUsersAPI = 'https://api.github.com/users';

fetch(gitHubUsersAPI).then(res => res.json()).then(data =>{
    console.log(data)
    for (const u of data) {
           tableUsers.innerHTML +=
    `
    <tr>
                    <td>${u.id}</td>
                    <td>${u.login}</td>
                    <td>${u.avatar_url}</td>
                </tr>
    `
    }
 
})