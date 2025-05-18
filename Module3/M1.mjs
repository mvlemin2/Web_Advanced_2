let inputText = document.getElementById('inputText').value;
let tweetOutputDiv = document.getElementById('tweetOutput');
let postOutputDiv = document.getElementById('postOutput');
let comboOutputDiv = document.getElementById('comboOutput');

const formateerTweet = tekst => tekst.length > 20? tekst.substring(0,20) + "..." : tekst;
const formateerPost = tekst => `${tekst} #awesome`
const formateerBericht = tekst => formateerTweet(formateerPost(tekst));

function formatText(){
    tweetOutputDiv.textContent = formateerTweet(inputText);
    postOutputDiv.textContent = formateerPost(inputText);
    comboOutputDiv.textContent = formateerBericht(inputText);
}