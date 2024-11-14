const predefinedResponses = [
  {
    input: "Hello, how are you?",
    response: "I'm doing well, thank you! How can I help you today?",
  },
  {
    input: "Hii",
    response: "Hello! How can I help you today?",
  },
  {
    input: "Hi",
    response: "Hello! How can I help you today?",
  },
  {
    input: "Hello",
    response: "Hii! How can I help you today?",
  },
  {
    input: "What's the weather like today?",
    response:
      "I’m not sure about the weather, but you could check a weather app for the latest update.",
  },
  {
    input: "Tell me a fun fact.",
    response:
      "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient tombs that are over 3,000 years old and still edible!",
  },
  {
    input: "What’s your favorite book?",
    response:
      "I enjoy recommending classics! 'To Kill a Mockingbird' is a great read if you haven’t already read it.",
  },
  {
    input: "Can you help me with some math?",
    response: "Of course! What math problem would you like help with?",
  },
  {
    input: "Who are you?",
    response: "I'm Yaazhan, a personel chatbot",
  },
  {
    input: "What is your name?",
    response: "I'm Yaazhan",
  },
  {
    input: "Hi, how's your day going?",
    response: "Hello! My day is going great, thanks for asking! How about you?",
  },
  {
    input: "Can you tell me a joke?",
    response:
      "Sure! Why did the scarecrow win an award? Because he was outstanding in his field!",
  },
  {
    input: "What's the capital of France?",
    response:
      "The capital of France is Paris. It's known for its art, fashion, and the Eiffel Tower!",
  },
  {
    input: "What are your hobbies?",
    response:
      "I enjoy helping people with questions, learning new facts, and having fun conversations with you!",
  },
  {
    input: "How do I make pasta?",
    response:
      "Making pasta is easy! Boil water with some salt, add the pasta, and cook until it’s al dente. Drain and enjoy with your favorite sauce!",
  },
  {
    input: "What's the tallest mountain?",
    response:
      "The tallest mountain on Earth is Mount Everest, which is about 8,848 meters (29,029 feet) above sea level!",
  },
  {
    input: "Can you recommend a good book?",
    response:
      "I’d recommend 'The Alchemist' by Paulo Coelho. It’s a beautiful story about following your dreams and discovering your purpose!",
  },
  {
    input: "How do I say 'hello' in Japanese?",
    response:
      "In Japanese, you say 'Konnichiwa' to greet someone. It’s a polite way to say hello!",
  },
  {
    input: "What’s the meaning of life?",
    response:
      "Ah, the big question! Some say the meaning of life is to find happiness, others say it’s to make a positive impact. What do you think?",
  },
  {
    input: "What's your favorite movie?",
    response:
      "If I had to pick, I’d say 'The Matrix'! It’s fascinating, and it makes you think about reality in a new way.",
  },
  {
    input: "How does a computer work?",
    response:
      "Computers process data by following instructions from programs. They use a combination of hardware (like the CPU) and software to perform calculations and tasks.",
  },
  {
    input: "What's your favorite food?",
    response:
      "I don't eat, but if I could, I'd probably love pizza! It's a universal favorite, right?",
  },
  {
    input: "Can you motivate me?",
    response:
      "Of course! Remember, every great achievement was once considered impossible. Keep pushing forward—you’re capable of amazing things!",
  },
  {
    input: "Can you help me learn a new language?",
    response:
      "Absolutely! Which language would you like to learn? I can teach you some basics and useful phrases.",
  },
  {
    input: "What do you do for fun?",
    response:
      "I love learning new things, chatting with you, and sharing interesting facts. Helping out is what I do best!",
  },
  {
    input: "How do I improve my productivity?",
    response:
      "Try breaking tasks into smaller steps, set clear goals, and take regular breaks. Focus and balance can make a big difference!",
  },
  {
    input: "Do you have any advice for a good night's sleep?",
    response:
      "Yes! Avoid screens before bed, stick to a regular sleep schedule, and try relaxing activities like reading or meditation.",
  },
  {
    input: "Can you sing a song for me?",
    response:
      "I’d love to if I could! For now, though, I can share lyrics or suggest some songs. How about 'Here Comes the Sun' by The Beatles?",
  },
  {
    input: "What’s the speed of light?",
    response:
      "The speed of light is approximately 299,792 kilometers per second, or about 186,282 miles per second.",
  },
  {
    input: "Who invented the light bulb?",
    response:
      "Thomas Edison is often credited with inventing the light bulb, though many inventors contributed to its development.",
  },
  {
    input: "What's your favorite color?",
    response:
      "I don’t see colors the way you do, but I imagine a calm blue would be nice and relaxing!",
  },
  {
    input: "Can you tell me a fun fact?",
    response:
      "Did you know that octopuses have three hearts? Two pump blood to the gills, while the third pumps it to the rest of the body!",
  },
  {
    input: "What are some benefits of drinking water?",
    response:
      "Water is essential! It helps keep you hydrated, boosts your energy, supports digestion, and keeps your skin healthy.",
  },
  {
    input: "How can I reduce stress?",
    response:
      "Try deep breathing, exercise, or journaling. Talking to a friend or taking time for hobbies can also help relieve stress.",
  },
  {
    input: "where is the Great Wall of China?",
    response:
      "The Great Wall of China is located in northern China, stretching across various provinces. It’s one of the world’s greatest wonders!",
  },

  {
    input: "Good morning! What's the plan for today?",
    response:
      "Good morning! Let's start the day with some positivity. If you need help planning anything, just ask!",
  },
  {
    input: "Do you know any good Indian breakfast options?",
    response:
      "Sure! You could try some idli and sambar, aloo paratha with curd, or even poha. India has so many delicious breakfast choices!",
  },
  {
    input: "What's the time difference between India and the USA?",
    response:
      "India is typically 9.5 to 12.5 hours ahead of the USA, depending on the state and the season.",
  },
  {
    input: "Hey, how’s the weather today?",
    response:
      "I don’t have real-time weather data, but you could check a weather app for the latest updates. Hope it’s a pleasant day!",
  },
  {
    input: "Can you suggest a good Bollywood movie?",
    response:
      "Absolutely! How about '3 Idiots'? It’s inspiring and funny, with a great message about following your passion.",
  },
  {
    input: "What’s a good snack I can make quickly?",
    response:
      "How about bhel puri? You just need some puffed rice, chopped veggies, and chutneys. It’s quick and delicious!",
  },
  {
    input: "What’s your favorite Indian festival?",
    response:
      "I love Diwali! It’s a festival of lights, family gatherings, and sweets. Plus, the decorations are beautiful!",
  },
  {
    input: "Can you give me some fitness tips?",
    response:
      "Sure! Try a balanced mix of cardio and strength exercises. Also, staying hydrated and eating a nutritious diet is key!",
  },
  {
    input: "What’s a quick way to relax after work?",
    response:
      "You could try a cup of masala chai and sit down with some light music. It’s a classic way to unwind!",
  },
  {
    input: "Do you know any fun facts about India?",
    response:
      "Yes! Did you know India has the world’s largest postal network, with over 1.5 lakh post offices? Fascinating, right?",
  },
  {
    input: "How do I make masala chai?",
    response:
      "Boil water with tea leaves, ginger, and spices like cardamom and cloves. Add milk and sugar, let it simmer, and enjoy!",
  },
  {
    input: "What’s a good place to visit in India?",
    response:
      "India has so many beautiful places! How about visiting Jaipur for its forts and palaces, or Kerala for backwaters and nature?",
  },
  {
    input: "Can you tell me a proverb in Hindi?",
    response:
      "Of course! Here’s one: 'Agar aap khud par vishwas karte hain, toh duniya aap par vishwas karegi.' It means if you believe in yourself, the world will believe in you.",
  },
  {
    input: "Any tips for staying organized?",
    response:
      "Try making a to-do list every morning and prioritize tasks. It helps a lot with staying on top of things!",
  },
  {
    input: "What’s your favorite Indian sweet?",
    response:
      "I’d say gulab jamun! Soft, syrupy, and just the right amount of sweetness. Perfect for any celebration.",
  },
  {
    input: "How do I make dal tadka?",
    response:
      "Cook your lentils first, then prepare a tadka with ghee, garlic, cumin, and spices. Pour it over the dal and enjoy with rice or roti!",
  },
  {
    input: "Can you suggest an Indian book to read?",
    response:
      "I’d suggest 'The White Tiger' by Aravind Adiga. It’s a compelling story about social challenges in modern India.",
  },
  {
    input: "What’s a good time to visit India?",
    response:
      "November to February is a great time, as the weather is cooler and pleasant in most parts of India.",
  },
  {
    input: "Do you know how many states there are in India?",
    response:
      "Yes, there are currently 28 states and 8 Union Territories in India.",
  },
  {
    input: "What's a simple way to meditate?",
    response:
      "Sit in a comfortable position, close your eyes, and focus on your breath. Even five minutes can make a big difference!",
  },
  {
    input: "How do I prepare for an interview?",
    response:
      "Practice answering common questions, research the company, and be confident. You’ve got this!",
  },
  {
    input: "Can you suggest some healthy Indian food options?",
    response:
      "Of course! Try dishes like khichdi, idli-sambar, roti with vegetables, or dal. Nutritious and tasty!",
  },
  {
    input: "What’s a good Indian street food?",
    response:
      "Pani puri is a popular one! It’s crispy, spicy, and refreshing—a real treat for the taste buds.",
  },
  {
    input: "Do you know a quote about friendship?",
    response:
      "Here’s a nice one: 'A friend is one who overlooks your broken fence and admires the flowers in your garden.'",
  },
  {
    input: "What’s a famous Indian monument?",
    response:
      "The Taj Mahal is world-famous. Built by Emperor Shah Jahan, it’s a symbol of love and a UNESCO World Heritage Site.",
  },
  {
    input: "How can I reduce screen time?",
    response:
      "Try setting screen-time limits on apps and take regular breaks. Engaging in other activities also helps reduce screen dependence.",
  },
  {
    input: "What’s your favorite Indian movie?",
    response:
      "I’d recommend 'Lagaan'! It’s a story of courage and determination and even got nominated for an Oscar.",
  },
  {
    input: "How do I make a good cup of coffee?",
    response:
      "Use fresh coffee grounds, add boiling water, and let it brew for a few minutes. Customize with milk and sugar as per your taste!",
  },
  {
    input: "What’s a good way to learn new things?",
    response:
      "Reading, online courses, and even short daily practice sessions are great ways to learn. Consistency is key!",
  },
  {
    input: "Any suggestions for boosting energy?",
    response:
      "Hydrate well, eat nutritious meals, and take short breaks throughout the day. Exercise also helps boost energy!",
  },
  {
    input: "What’s a famous Indian dance form?",
    response:
      "Bharatanatyam is a well-known classical dance from Tamil Nadu. Each region in India has its own unique dance forms!",
  },
  {
    input: "Can you give me some life advice?",
    response:
      "Certainly! Remember to focus on what makes you happy, stay kind to others, and keep learning along the way.",
  },
  {
    input: "What’s a popular Indian dish for dinner?",
    response:
      "Aloo gobi with roti is popular and comforting. Or try dal with rice for a simple yet satisfying meal.",
  },
  {
    input: "What’s a traditional Indian attire?",
    response:
      "Sarees and dhotis are traditional outfits. Each region has unique styles, like the Kanjeevaram saree in Tamil Nadu or the Bandhani saree in Gujarat.",
  },
  {
    input: "Can you tell me an inspirational quote?",
    response:
      "Here’s one: 'Success is not final, failure is not fatal: It is the courage to continue that counts.' - Winston Churchill",
  },
  {
    input: "What are some common spices used in Indian cooking?",
    response:
      "Indian cooking often uses turmeric, cumin, coriander, and cardamom. Each spice adds unique flavor and aroma!",
  },
  {
    input: "What’s a good song to listen to?",
    response:
      "How about 'Chaiyya Chaiyya'? It’s a classic Bollywood song with great rhythm and energy!",
  },

  {
    input: "Hey, what should I do if I’m feeling tired in the afternoon?",
    response:
      "A quick nap can help, or try having some chai! Even a 5-minute stretch can recharge you.",
  },
  {
    input: "Can you tell me the importance of yoga?",
    response:
      "Yoga helps with flexibility, reduces stress, and improves focus. It's an ancient Indian practice that promotes mind-body balance.",
  },
  {
    input: "What’s a good way to start my day?",
    response:
      "Start with a glass of warm water, do some stretching or meditation, and have a healthy breakfast!",
  },
  {
    input: "How do I make my own chai masala?",
    response:
      "You can blend spices like cardamom, cinnamon, cloves, ginger, and black pepper. Store it in a jar and add a pinch to your tea!",
  },
  {
    input: "Can you suggest a traditional Indian remedy for a sore throat?",
    response:
      "Try ginger tea with honey or warm turmeric milk. Gargling with salt water also helps relieve soreness.",
  },
  {
    input: "What’s a good way to celebrate small achievements?",
    response:
      "Treat yourself to your favorite snack or take some time to relax! Celebrating small wins keeps you motivated.",
  },
  {
    input: "What’s your opinion on Indian street food?",
    response:
      "Street food in India is amazing! Pani puri, vada pav, and pav bhaji are so tasty, but always get it from a clean vendor.",
  },
  {
    input: "How can I make my workspace more comfortable?",
    response:
      "Add some plants, keep it tidy, and make sure you have good lighting. A comfortable chair is also a must!",
  },
  {
    input: "What’s a good Indian drink to stay cool in the summer?",
    response:
      "Try some refreshing aam panna or nimbu pani! They’re both great for cooling down and staying hydrated.",
  },
  {
    input: "Do you know any relaxing Indian music?",
    response:
      "Classical music like ragas or instrumental veena music can be very calming. You could also listen to some soulful Bollywood tunes!",
  },
  {
    input: "How do I stay motivated during tough times?",
    response:
      "Focus on small goals, and remember that challenges help us grow. Surround yourself with positive people and take things one step at a time.",
  },
  {
    input: "What’s a typical Indian dessert for special occasions?",
    response:
      "Sweets like gulab jamun, rasgulla, and jalebi are popular choices. They add sweetness to every celebration!",
  },
  {
    input: "What are some benefits of drinking warm water?",
    response:
      "Warm water aids digestion, improves circulation, and can even help with weight management. A good habit to have!",
  },
  {
    input: "Can you recommend a Bollywood song to lift my mood?",
    response:
      "How about 'Gallan Goodiyaan'? It’s upbeat, and you’ll find yourself singing along in no time!",
  },
  {
    input: "What’s a healthy evening snack idea?",
    response:
      "Roasted chana, fruit chaat, or homemade bhel are light yet satisfying options for a healthy snack!",
  },
  {
    input: "Do you know how to make roti?",
    response:
      "Yes! Mix flour with water to make dough, then roll it into circles. Cook it on a hot tawa until both sides puff up nicely!",
  },
  {
    input: "Can you explain the meaning of Namaste?",
    response:
      "'Namaste' is a respectful greeting, meaning 'I bow to you.' It represents recognizing the divinity in each person.",
  },
  {
    input: "What’s a good hobby to pick up?",
    response:
      "Gardening, cooking, or even learning a musical instrument are great options! They help you relax and learn something new.",
  },
  {
    input: "How do I keep my room cool without an AC?",
    response:
      "Try keeping the curtains closed during the day, and open windows for ventilation in the evening. A ceiling fan and a bucket of ice also help.",
  },
  {
    input: "Can you tell me something about Indian spices?",
    response:
      "Indian spices like turmeric, cumin, and coriander not only add flavor but have health benefits. Turmeric, for example, has anti-inflammatory properties!",
  },
  {
    input: "What’s a good evening relaxation activity?",
    response:
      "A walk outside, a light workout, or even just reading a book are great ways to unwind in the evening.",
  },
  {
    input: "Do you know how to make pulao?",
    response:
      "Cook basmati rice with vegetables and spices like cinnamon, cloves, and cumin. It’s aromatic and perfect with a side of raita.",
  },
  {
    input: "Can you suggest some ways to manage stress?",
    response:
      "Exercise, meditation, or even hobbies like painting can help relieve stress. Breathing exercises work wonders too!",
  },
  {
    input: "What’s your favorite outdoor activity?",
    response:
      "If I could, I’d love to explore nature. There’s something peaceful about spending time outdoors and appreciating the environment.",
  },
  {
    input: "How do I stay positive when things aren’t going my way?",
    response:
      "Focus on the things you can control, take it one day at a time, and remind yourself that challenges are temporary.",
  },
  {
    input: "What’s a good way to deal with monsoon season?",
    response:
      "Always carry an umbrella, wear quick-dry clothes, and enjoy some hot chai with pakoras. Monsoons are cozy if you’re prepared!",
  },
  {
    input: "Can you tell me something about Indian classical dance?",
    response:
      "Indian classical dance has many forms like Bharatanatyam, Kathak, and Odissi. Each tells a story with graceful movements and expressions.",
  },
  {
    input: "What’s a quick and tasty Indian dish I can make?",
    response:
      "Try aloo bhujia! Just cook sliced potatoes with spices. It’s simple, quick, and pairs well with rotis.",
  },
  {
    input: "What’s the best way to make green chutney?",
    response:
      "Blend coriander, mint, green chili, and lemon juice. Add a pinch of salt and you have a fresh, tangy chutney!",
  },
  {
    input: "What’s a famous quote in India?",
    response:
      "'Vasudhaiva Kutumbakam' – it means 'The world is one family.' It’s a beautiful concept of unity.",
  },
  {
    input: "How can I reduce sugar cravings?",
    response:
      "Try snacking on fruits or a handful of nuts. Sometimes, a little honey in your tea also helps curb the craving.",
  },
  {
    input: "What’s the best way to enjoy a rainy day?",
    response:
      "Nothing beats a warm cup of chai with some pakoras while watching the rain from your window. Simple joys!",
  },
  {
    input: "Can you tell me the benefits of meditation?",
    response:
      "Meditation reduces stress, increases focus, and helps you feel calm. Even a few minutes daily can make a big difference.",
  },
  {
    input: "What’s a classic Indian comfort food?",
    response:
      "Khichdi! It’s simple, nourishing, and easy on the stomach. Perfect for a cozy meal at home.",
  },
  {
    input: "How do I improve my focus while studying?",
    response:
      "Take short breaks, stay hydrated, and try to minimize distractions. Setting small goals also helps you stay on track.",
  },
  {
    input: "What’s a refreshing drink to have during summer?",
    response:
      "Try a glass of coconut water or jaljeera! They’re both refreshing and packed with nutrients.",
  },
  {
    input: "How do I make paratha?",
    response:
      "Roll out dough with a filling like potatoes or paneer, and cook on a tawa with ghee until golden brown. Delicious!",
  },
  {
    input: "What’s a good time to have dinner?",
    response:
      "Try having dinner a few hours before bedtime to help with digestion. Around 7-8 pm works well for many people.",
  },
  {
    input: "Do you know any inspirational quotes?",
    response:
      "Here’s one: 'Success is not final, failure is not fatal: It is the courage to continue that counts.' – Winston Churchill",
  },
  {
    input: "How can I learn Hindi?",
    response:
      "Start with basic phrases and practice speaking. Watching Hindi movies or listening to Hindi songs can also help!",
  },
  {
    input: "What’s a good way to stay active daily?",
    response:
      "A 30-minute walk or some light yoga can do wonders. Consistency is key to staying active!",
  },
  {
    input: "Do you have any ideas for Diwali decorations?",
    response:
      "Rangoli, diyas, and fairy lights are perfect for Diwali! Try creating a festive ambiance with flowers as well.",
  },
];

module.exports = predefinedResponses;
