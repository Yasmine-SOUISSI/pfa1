import React from 'react';
import { useState } from 'react';
import Sentiment from 'sentiment';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
export function Chat  ()  {

const sentiment=new Sentiment()

const [score,setscore]=useState()
const [general,segeneral]=useState()
const [msg,setmsg]=useState()


  /*
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
     <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
  }

  const apikey='3289d7d2fa11b840bb832660a1c782a7'
  const [weatherdata,setweatherdata]=useState([{}])
const [city,setcity]=useState("")
const getweather=(event)=>{
if (event.key=="Enter"){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apikey}`).then( response=>response.json()).then(data=>{
    setweatherdata(data)
    console.log("got weather"+data)
  })
  
  }
}


<div>
<input 
placeholder='enter city'
onChange={e=>setcity(e.target.value)}
value={city}
onKeyPress={getweather}
/>


{typeof weatherdata.main === 'undefined' ?( <div className='weather-data'>
<p>welcome to weather app</p></div> ):(
<div>
<p>{weatherdata.name}</p>
<p>{Math.round(weatherdata.main.temp)}°F</p>
<p>{weatherdata.weather[0].main}</p>
  </div>
  )}
</div>




*/

 
  return (
    <div>
      
     
<textarea onChange={(e)=>{(setmsg(e.target.value));
console.log(msg)
}}/>
{console.log(sentiment.analyze(msg))}
<p>score : {sentiment.analyze(msg).score}</p>
{sentiment.analyze(msg).score <0 ? (<p>general : Negative</p>) :(<p> general : Positive</p>)


}


    </div>
  );
};
export default Chat;