    function startListening() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-IN";

    recognition.start();

    recognition.onresult = function(event) {
        const userSpeech = event.results[0][0].transcript;
        document.getElementById("userText").innerText = "You: " + userSpeech;

        botReply(userSpeech);
    };
    }

    function botReply(text) {
    let reply = "Mujkoooo Samajh nahi aaya ki aap kya kehna chahte hain.";

    if (text.toLowerCase().includes("hello")) {
        reply = "Hello! mai app ki kya madad kar sakti hu?";
    } 
    else if (text.toLowerCase().includes("your name")) {
        reply = "mai appki ai voice chatbot hu.";
    }

    document.getElementById("botText").innerText = "Bot: " + reply;

    const speech = new SpeechSynthesisUtterance(reply);
    speech.lang = "en-IN";
    window.speechSynthesis.speak(speech);
    }
