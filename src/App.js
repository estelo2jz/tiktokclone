import React, { useState, useEffect } from 'react';
import './App.css';
import db from './firebase';
import Video from './Video';
import Mercedez from './videos/mercedez.mp4';
import MercedezTwo from './videos/mercedez2.mp4';
import TwoStep from './videos/2step.mp4';
import CarAds from './videos/carads.mp4';
import Memories from './videos/memories.mp4';

function App() {
  const [videos, setVideos] = useState([]);
  // lifecycle method, componentDidUpdate is every single lifestyles method has been replace by useEffect method.
  useEffect(() => {
    // this is going to the collection from the Firestore that we created in the database,
    // and it take a live snapshot of what the collection look like.
    // and set the videos in our state to the following.
    db.collection('videos').onSnapshot(snapshot => (
      setVideos(snapshot.docs.map((doc) => doc.data()))
    ))

    // if you dont include any dependencies in the array[],
    // this code will fire once when the component load and whenever videos changes
  }, [])

  return (
    // BEM
    <div className="app">
      <div className="app__videos">
        {videos.map(({id, url, channel, song, description, likes, messages, shares}) => (
          <Video
            key={id}
            url={url}
            channel={channel}
            song={song}
            description={description}
            likes={likes}
            messages={messages}
            shares={shares}
          />
        ))}
        {/* <Video
          url={Memories}
          channel="rekin_pl"
          description="#fyp #memories #olddays #childhood #car #cars #tokyodrift"
          song="The Strumbellas - Spirits"
          likes={199}
          messages={34}
          shares={30}        
        />
        <Video
          url={CarAds}
          channel="amirdeleon"
          description="My job involves a bit of risk. And sometimes a bit more fun :)) #learntok #videography #cars"
          song="Deep End Freestyle"
          likes={509}
          messages={42}
          shares={102}      
        />
        <Video
          url={TwoStep}
          channel="ayyepaulyy"
          description="Car catches fire 2 stepping 🔥 #cars #jdm #nissan #370z #350z #fy #fyp #2stepping"
          song="Original Sound"
          likes={34,894}
          messages={903}
          shares={2,344}      
        />
        <Video
          url={MercedezTwo}
          channel="lotterlive"
          description="Had the chance to check out this crazy new car by"
          song="Street Fashion Game"
          likes={4,533}
          messages={1,342}
          shares={193}      
        />
        <Video
          url={Mercedez}
          channel="cinequads"
          description="Can’t get over this car 🤯🤯🤯 #Mercedes #avtr #cars #tiktokdeutschland #crazy"
          song={"WAP (feat. Megan Thee Stallion)"}
          likes={654}
          messages={772}
          shares={30}      
        /> */}
        {/* <Video
          url={Drift2}
          channel=""
          description=""
          song=""
          likes={199}
          messages={34}
          shares={30}      
        />
        <Video
          url={Drift2}
          channel=""
          description=""
          song=""
          likes={199}
          messages={34}
          shares={30}      
        />
        <Video
          url={Drift2}
          channel=""
          description=""
          song=""
          likes={199}
          messages={34}
          shares={30}      
        /> */}
      </div>
    </div>
  );
}

export default App;
