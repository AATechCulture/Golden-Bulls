/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    TypingIndicator
  } from "@chatscope/chat-ui-kit-react";
  import SpeechRecognition from './SpeechRecognition'; 
  import { auth} from '../backend/firebase'
  import 'bootstrap/dist/js/bootstrap.min.js';

  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY
  
function ChatBot() {

    const user = auth.currentUser;
    
    const [typing, setTyping] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [messageToRead, setMessageToRead] = useState('');

    const [messages, setMessages] = useState([
        {
            message: 'Hello there',
            sender: 'ChatGPT'
        }
    ])

    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: 'user', 
            direction: 'outgoing',
            
        }

        const newMessages = [...messages, newMessage];

        // Update Messages state
        setMessages(newMessages);

        setTyping(true);

        if (message.toLowerCase() === 'hey chat') {
            const initialMessage = {
              message: 'Hello there',
              sender: 'ChatGPT'
            }
            
            setMessages([initialMessage]);
            
            return;
          }
        // process message to chatgpt
        await processMessageToOpenAI(newMessages);
    }

    async function processMessageToOpenAI(chatMessages) {
        
        let apiMessages = chatMessages.map((messageObject) => {
            let role = '';
            if(messageObject.sender === 'ChatGPT') {
                role='assistant'
                const chatBotMessage = {
                    message: 'Hello there',
                    sender: 'ChatGPT'
                  };
                  
                  const chatBotEvent = new CustomEvent('chatBotMessage', { detail: chatBotMessage });
                  
                  document.dispatchEvent(chatBotEvent);
                  
            } else {
                role = 'user'
            }

            return {role: role, content: messageObject.message}
        });

        

        const systemMessage = {
            role: 'system',
            content: 'Explain in detail for easy understanding.'
        }

        const apiRequestBody = {
            'model': 'gpt-3.5-turbo',
            'messages': [
                systemMessage,
                ...apiMessages
            ]
        }

        await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(apiRequestBody)
            //
        }).then((data) => {
            return data.json();
        }).then((data) => {
            
            setMessages(
                [...chatMessages, {
                    message: data.choices[0].message.content,
                    sender: 'ChatGPT'
                }]
                
            );
            setMessageToRead(data.choices[0].message.content);
            setTyping(false);

            // remove file from storage after message is sent
            chatMessages.forEach((messageObject) => {
              if (messageObject.file) {
                  localStorage.removeItem(messageObject.file);
              }
        });
            
        });
    }


  function speakMessage() {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(messageToRead.replace(/&nbsp;/g, ' '));
    window.speechSynthesis.speak(msg);}


  return (
    <div className='container'>
  <div className='row'>
    <div className='col-md-8'>
      <div className='chat-main-cont'>
        <div className='chat-cont overflow-auto'>
          <div className='card'>
            <div className='card-body'>
              <MainContainer responsive>
                <ChatContainer>
                  <MessageList
                    scrollBehavior='smooth'
                    typingIndicator={typing ? <TypingIndicator content='typing' /> : null}
                  >
                    {messages.map((message, i) => {
                      return <Message key={i} model={message} />;
                    })}
                  </MessageList>
                  <MessageInput placeholder='Type Message here ' onSend={handleSend} />
                </ChatContainer>
              </MainContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='col-md-4'>
      <div className='chat-message'>
        <div className='card'>
          <div className='card-body'>
            <div className='chat-message-text'>
              
            </div>
            <button className='btn btn-primary chatbot-btn' onClick={() => setIsSpeaking(!isSpeaking)}>
              {isSpeaking ? 'Stop Speaking' : 'Speak Message'}
            </button>
            {isSpeaking && speakMessage()}
            <div className={isSpeaking ? 'chat-message-icon speaking' : 'chat-message-icon'}></div>
        </div>
      </div>
    </div>
  </div>
</div> </div>

  )
}

export default ChatBot
