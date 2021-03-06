import {useState,useEffect} from 'react';
import {StreamChat} from 'stream-chat';
import { Chat,Channel,Window,ChannelHeader,MessageInput,MessageList } from 'stream-chat-react';
const API_KEY=process.env.REACT_APP_KEY;
function App() {
  const[chatClient,setChatClient]= useState(null);
  const [channel,setChannel] = useState(null)
  const USER1 = {
    id:"user1",
    name:"user1",
    image:"https://picsum.photos/id/195/200/300"
  }
  const USER2 = {
    id:"user2",
    name:"user2",
    image:"https://picsum.photos/id/195/200/300"
  }
  const USER3 = {
    id:"user3",
    name:"user3",
    image:"https://picsum.photos/id/195/200/300"
  }
  const users = [USER1,USER2,USER3];
  const getRandomUser = () =>{
    const randomIndex = Math.floor(Math.random()*users.length);
    return users[randomIndex];
  }
  useEffect(()=>{
    function initChat() {
      const client = StreamChat.getInstance(API_KEY);
      const user = getRandomUser();
      //console.log(process.env.REACT_APP_API_KEY);
      client.connectUser(user,client.devToken(user.id));
      const channel = client.channel("team","general",{
        name:"General,
        image:"https://picsum.photos/id/195/200/300"})
        await channel.create()
        channel.addMembers([user.id])
      setChatClient(channel)
      setChatClient(client)
    }
    console.log(API_KEY)
    initChat()
  },[])

  if(!chatClient) return <></>
  return (
    <div >
      <Chat client={chatClient} theme={'messaging light'}></Chat>
    </div>
  );
}

export default App;
