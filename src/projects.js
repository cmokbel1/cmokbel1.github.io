import image1 from './images/4uWorkout.png';
import image2 from './images/ReadMeGen.png';
import image3 from './images/SocialAPI.png';
import image4 from './images/dayplanner.png';
import image5 from './images/chore-door.png';
import image6 from './images/weatherAPI.png';
import image7 from './images/tbl.png';
import image8 from './images/employee-tracker.png';
import image9 from './images/CW.png';
import image10 from './images/pwgen.png';
import image11 from './images/pocket-change.png';


const projects = [
  {
    title: 'Chat Wallet',
    description: 'Chat Wallet is an web based app that allows users to chat with other individuals about each others hobbies and interests. Users can register for an account, sign in, sign out and enter varying chatrooms that are developed using socket.io. this application uses passport and jsonwebtoken to authenticate users and verify user information for access to profile information and the chat rooms.',
    gitHub: 'https://github.com/cmokbel1/chatWallet',
    liveSite: 'chat-wallet.herokuapp.com/',
    img: image9
  },
  {
    title: 'Tech Blog',
    description: 'This project is a combination of methods learned in Javascript. Models and Routes are used to populate a seemingly empty webpage with blog posts created by users that are logged in via passport and authenticated with a json webtoken. User information is stored in a JAWSDB database using mySQL tables. Further, Users can comment on other posts made by other users given they are registered on the website.',
    gitHub: 'https://github.com/cmokbel1/Tech-Blog',
    liveSite: 'https://blog-about-it-techblog.herokuapp.com',
    img: image7
  },
    {
    title: 'Social Media API',
    description: 'This project was built as a back-end development for a newly made social media company. One can create users, retrieve all or one of them, update a user and delete users. Further one can add friends and remove them. Users have the capability to create posts and leave comments via thoughts and reactions. We can delete thoughts and reactions as well. This project using a mongoDB that allows for seamless storage of unrelated data and makes it easy to retrieve as well.',
    gitHub: 'https://github.com/cmokbel1/Social-Media-API',
    liveSite: 'https://www.youtube.com/watch?v=D4DBZyZB4ro',
    img: image3
  },
  {
    title: '4uWorkout',
    description: 'This application allows users to generate random workouts based on specific body parts while simultaneously generating a playlist of music to go along with the workout.',
    gitHub: 'https://github.com/cmokbel1/project_1',
    liveSite: 'https://jazminejose.github.io/project_1/',
    img: image1
  },
  {
    title: 'Read Me Generator',
    description: 'This project was built to allow myself and other users the opportunity to create a README.md file without the hassle of manually inputting the information needed.',
    gitHub: 'https://github.com/cmokbel1/ReadMeGenerator',
    liveSite: 'https://www.youtube.com/watch?v=yLcLP55G0d0',
    img: image2
  },
  {
    title: 'Day Planner',
    description: 'Users can open the webpage and plan out there day with a seamless process. One can save information by clicking save, and simply click the text area to edit and save again. When the hour comes to pass the slot will turn gray. when the hour is current it is red, and when it is a future time the slot is green.',
    gitHub: 'https://github.com/cmokbel1/Day-Planner',
    liveSite: 'https://cmokbel1.github.io/Day-Planner/',
    img: image4
  },
  {
    title: 'Chore Door Game',
    description: 'This game uses javascript to manipulate photos on the page. Users can click on doors until they find the chore bot! if they find the chore bot before they have clicked through all the doors, then they lose. if they find the chore bot last, they win! There is a fail safe that does not allow the user to click through the doors once the bot has been found. Therefore, users must restart if they lose.',
    gitHub: 'https://github.com/cmokbel1/Chore-Door-Game-Clone',
    liveSite: 'https://cmokbel1.github.io/Chore-Door-Game-Clone/',
    img: image5
  },
  {
    title: 'Weather Forecast',
    description: '5 day forecast application that makes use of the openweathermap.org API to produce a forecast of any major city in the world. Users can further save the data they have recently researched in the side bar.',
    gitHub: 'https://github.com/cmokbel1/WeatherAPI',
    liveSite: 'https://cmokbel1.github.io/WeatherAPI/',
    img: image6
  },
  {
    title: 'Employee Tracker',
    description: 'This project is a collaboration of multiple parts. A mySQL back-end server is connected to multiple files in Javascript that allow the user to run the application wholely in the terminal. Users have the option to track employee data. One can view departments, roles, and employees. Further a user has the opportunity to add employees, roles, and departments. Along with these features the user can also delete employees, roles, or departments. Additional features include updating employee roles, and updating the manager of an employee.',
    gitHub: 'https://github.com/cmokbel1/Employee-Tracker',
    liveSite: 'https://www.youtube.com/watch?v=ZTYxlquJVmk',
    img: image8
  },
  {
    title: 'Password Generator',
    description: 'an application that randomizes passwords for users based on user specifications. Passwords can be between 8 and 128 characters long, contain uppercase or lowercase letter, special characters, or numbers.',
    gitHub: 'https://github.com/cmokbel1/Password-Generator',
    liveSite: 'https://cmokbel1.github.io/Password-Generator/ ',
    img: image10
  },
  {
    title: 'Pocket Change',
    description: 'A budgeting application that makes use of MongoDB for storing budgeting information for users on a monthly basis. Users can track their expenses and keep themselves within budget.',
    gitHub: 'https://github.com/cmokbel1/pocket-change',
    liveSite: 'https://pocketchange.herokuapp.com/',
    img: image11
  }
]

export default projects