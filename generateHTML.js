const colors = {
  indigo_blue: {
    wrapperBackground: "indigo",
    headerBackground: "royalblue",
    headerColor: "white",
    photoBorderColor: "white"
  },
  purple_salmon: {
    wrapperBackground: "royalblue",
    headerBackground: "salmon",
    headerColor: "white",
    photoBorderColor: "red"
  },
  orchid_thistle: {
    wrapperBackground: "orchid",
    headerBackground: "thistle",
    headerColor: "black",
    photoBorderColor: "slateblue"
  },
  gray_ligthgray: {
    wrapperBackground: "slategray",
    headerBackground: "lightgray",
    headerColor: "black",
    photoBorderColor: "black"
  }
};

var generate = function (data) {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
  <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
  <title>Profle Generator</title>
  <style>
    body {
      padding: 0;
      margin: auto;
      background-color: lightgray;
    }

    .container {
      background-color: ${colors[data.color].wrapperBackground};
      z-index: 0;
      height: 150vh;
      width: 800px;
      border: solid 0.5px grey;
      box-shadow: 10px 10px 20px grey;
      margin: auto;
      top: 20px;
    }

    .header {
      position: relative;
      background-color: ${colors[data.color].headerBackground};
      width: 96%;
      height: 40%;
      z-index: 5;
      top: 50px;
      margin: auto;
      border-radius: 5px;
      color: ${colors[data.color].headerColor};
      text-align: center;
      line-height: 30px;
    }

    .content {
      position: relative;
      background-color: white;
      width: 100%;
      height: 40%;
      top: -20px;
      text-align: center;
    }

    a,
    a:hover {
      position: relative;
      top: -70px;
      text-decoration: none;
      color: ${colors[data.color].headerColor};
      font-weight: bold;
    }

    .photo {
      position: relative;
      width: 25%;
      top: -40px;
      border: solid 2px;
      border-color: ${colors[data.color].photoBorderColor};
      border-radius: 50%;
      z-index: 5;
      margin: auto;
    }

    h1 {
      position: relative;
      top: -50px;
      font-size: 250%;
      line-height: 15px;
      color: ${colors[data.color].headerColor};
    }

    h2 {
      position: relative;
      display: block;
      top: 60px;
      color: black;
      font-weight: 700;
      font-size: 180%;
    }

    h3 {
      position: relative;
      display: block;
      top: -60px;
      color: ${colors[data.color].headerColor};
      font-weight: 700;
      font-size: 160%;
    }
    .card {
      position: relative;
      top: 40px;
      background-color: ${colors[data.color].headerBackground};;
      width: 320px;
      height: 100px;
      color: ${colors[data.color].headerColor};
      font-size: 27px;
      text-align: center;
      border-radius: 6px;
      margin: 20px;
    }
    .card p{
      position: relative;
      white-space: pre;
      left: -70px;
      top: -10px;
      text-align: center;
    }
    table
    {
      position: relative;
      left: 30px;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="header">
      <img class="photo" src="${data.imgUrl}">
      <h1>Hi,</h1>
      <h1>My Name is <span>${data.name}</span></h1>
      <h3>${data.currentjob}</h3>
      <a href="https://www.google.com/maps/place/${data.location}/"><span class="fa fa-map-marker"
          style="font-size:25px; margin-right: 10px;"></span>${data.location}</a>
      <a href="https://github.com/${data.githubname}"><span class="fab fa-github-square"
          style="font-size:25px; margin-left: 20px; margin-right: 10px;"></span>GitHub</a>
      <a href="https://www.linkedin.com/in/${data.linkedin}"><span class="fab fa-linkedin"
          style="font-size:25px; margin-left: 20px; margin-right: 10px;"></span>LinkedIn</a>
    </div>
    <div class="content">
      <h2>${data.bio}</h2>
      <table>
        <tr>
          <td>
            <div class="card">
              <p>
                Public Repositories
                ${data.publicRepo}
              </p>
            </div>
          </td>
          <td>
            <div class="card">
              <p>
                Followers
                ${data.followers}
              </p>  
            </div>
          </td>
          </tr>
          <tr>
            <td>
              <div class="card">
                <p>
                  GitHub Stars
                  ${data.starred}
                </p>
              </div>
            </td>
            <td>
              <div class="card">
                <p>
                  Following
                  ${data.following}
                </p>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</body>

</html>`
}

module.exports = {
  colors: colors,
  generate: generate
};
