const gitHubUsersAPI = 'https://api.github.com/users';
const privateAPI = 'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5';


// async function showGitHubUser()
// {
//     const response = await fetch(gitHubUsersAPI);
//     console.log("Status : " + response.status);
//     const json = await response.json();
//     console.log(json);
//     console.log("Login first user : " + json[0].login);

// }
// showGitHubUser();
async function showAPIResult(api)
{
    const response = await fetch(api);
    console.log("Status : " + response.status);
    const json = await response.json();
    console.log(json);
    

}

showAPIResult(gitHubUsersAPI)

async function showGitHubUserAvatar(login) {
    const response = await fetch(gitHubUsersAPI + '/' + login);
    const result = await response.json();

    const avatarImg = document.getElementById('avatar-img');
    avatarImg.src = result.avatar_url;
}
//showGitHubUserAvatar('IliushynOlena');
//showGitHubUserAvatar('nykleban');
showGitHubUserAvatar('mojombo');



