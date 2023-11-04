/* eslint-disable no-unused-vars */
class SpeechRecognition {
    constructor() {
      this.recognition = null;
      this.transcript = '';
      this.isListening = false;
      this.onResultCallback = null;
      this.onErrorCallback = null;
    }
  
    init() {
      // check if SpeechRecognition API is available in the browser
      if (!('webkitSpeechRecognition' in window)) {
        console.error('SpeechRecognition API is not available in this browser');
        return;
      }
  
      // initialize SpeechRecognition instance
      this.recognition = new window.webkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = 'en-US';
  
      // add event listeners
      this.recognition.onstart = () => {
        console.log('Speech recognition started');
        this.isListening = true;
      };
  
      this.recognition.onresult = (event) => {
        this.transcript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join('');
  
        console.log(`Speech recognition result: ${this.transcript}`);
  
        if (this.onResultCallback) {
          this.onResultCallback(this.transcript);
        }
      };
  
      this.recognition.onerror = (event) => {
        console.error(`Speech recognition error: ${event.error}`);
        this.isListening = false;
  
        if (this.onErrorCallback) {
          this.onErrorCallback(event.error);
        }
      };
  
      this.recognition.onend = () => {
        console.log('Speech recognition ended');
        this.isListening = false;
      };
    }
  
    start() {
      if (!this.recognition) {
        console.error('SpeechRecognition is not initialized');
        return;
      }
  
      this.recognition.start();
    }
  
    stop() {
      if (!this.recognition) {
        console.error('SpeechRecognition is not initialized');
        return;
      }
  
      this.recognition.stop();
    }
  
    setOnResultCallback(callback) {
      this.onResultCallback = callback;
    }
  
    setOnErrorCallback(callback) {
      this.onErrorCallback = callback;
    }
  }
  