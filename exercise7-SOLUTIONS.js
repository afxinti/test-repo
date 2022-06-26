// 2. Create an array which contains objects
var database = [
	{
		username: "andrei",
		password: "secret"
	},
	{
		username: "coco",
		password: "123"
	},
	{
		username: "mel",
		password: "111"
	}
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

//function to check if the user is verified
function userValid(username,password){
	for(var i=0; i<database.length; i++){
		if(database[i].username === username && database[i].password === password){
			return true
		}	
	}
	return false
};

//signIn if valid and show newsfeed
function signIn(username,password){
	if (userValid(username,password)){
		console.log(newsfeed);
	}else {
		console.log ('Wrong username or password')
	}
};

var userPrompt = prompt('What is your username?');
var passPrompt= prompt('What is your password?');

signIn (userPrompt,passPrompt);
