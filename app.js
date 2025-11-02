// State management
let state = {
    checked: new Array(8).fill(true),
    report: { name: "", email: "", phone: "", type: "", desc: "" },
    quiz: {
        active: false,
        userName: "",
        currentQuestion: 0,
        answers: [],
        score: 0,
        showingFeedback: false,
        completed: false
    }
};

// Data
const crimeTypes = [
    "Phishing",
    "Online Fraud",
    "Cyberbullying",
    "Malware",
    "Identity Theft",
    "Social Engineering",
];

const crimes = [
    { title: "Phishing", level: "High", desc: "Fraudulent messages that trick you into sharing personal details.", video: "XBkzBrXlle0" },
    { title: "Online Fraud", level: "High", desc: "Fake shopping websites, lottery scams, or calls demanding money.", video: "77Oi4Q4UntE" },
    { title: "Cyberbullying", level: "Medium", desc: "Harassing or humiliating people through digital platforms.", video: "0Xo8N9qlJtk" },
    { title: "Malware & Ransomware", level: "High", desc: "Malicious software that can lock or steal your data.", video: "F6RnjkuK7NA" },
    { title: "Identity Theft", level: "High", desc: "Stealing personal information to impersonate you.", video: "kDFeSUUwRnA" },
    { title: "Social Engineering", level: "Medium", desc: "Manipulating people into revealing confidential information.", video: "uvKTMgWRPw4" },
    { title: "Animated Movie", video: "lfl3CLRtXfo" },
    { title: "Promotion of safe use of Internet, Gadgets and Media", video: "LwcmFpngHXk" },
    { title: "short film", video: "nOqW9qniMys" },
];

const checklistItems = [
    "Use strong, unique passwords for each account",
    "Enable two-factor authentication (2FA)",
    "Keep software and apps updated",
    "Install antivirus software",
    "Review privacy settings on social media",
    "Avoid clicking suspicious links",
    "Backup important data regularly",
    "Use secure connections (HTTPS)"
];

const tips = [
    { title: "Strong Passwords", desc: "Use unique, complex passwords for each account. Consider a password manager." },
    { title: "Two-Factor Authentication", desc: "Enable 2FA on all accounts that support it for extra security." },
    { title: "Software Updates", desc: "Keep OS, apps, and antivirus software up to date." },
    { title: "Verify Before Clicking", desc: "Never click suspicious links or download attachments from unknown sources." },
    { title: "Secure Connections", desc: "Use HTTPS websites and avoid public Wi-Fi for sensitive transactions." },
    { title: "Regular Backups", desc: "Back up important data regularly to protect against ransomware." }
];

const helplines = [
    { title: "Cyber Crime Helpline", number: "1930", color: "blue" },
    { title: "Women Helpline", number: "181", color: "indigo" },
    { title: "Police Emergency", number: "100", color: "red" }
];

const quizQuestions = [{
        question: "What is the most common method cybercriminals use to steal personal information?",
        options: ["Phishing", "Hacking satellites", "Reading minds", "Sending letters"],
        correct: 0,
        topic: "Phishing",
        explanation: "Phishing is the most common cyber attack method. Attackers send fraudulent emails or messages pretending to be from legitimate organizations to trick you into revealing passwords, credit card numbers, or other sensitive information. Always verify sender addresses and never click suspicious links."
    },
    {
        question: "Which of the following best defines a cybercrimes?",
        options: ["Crime committed using physical weapon", " Crime involving computers or the internet", "Theft occurring in public places", "Crime committed by police officials"],
        correct: 1,
        topic: "cybercrime",
        explanation: "Cybercrime is any illegal activity that uses a computer, network, or the internet — such as hacking, phishing, or identity theft."
    },
    {
        question: "What does 'HTTPS' in a website URL indicate?",
        options: ["The site is fast", "The site has pictures", "The connection is secure", "The site is popular"],
        correct: 2,
        topic: "Secure Connections",
        explanation: "HTTPS (Hypertext Transfer Protocol Secure) means the website uses encryption to protect data transmitted between your browser and the server. Always look for the padlock icon and 'https://' before entering sensitive information like passwords or payment details."
    },
    {
        question: "How often should you update your passwords?",
        options: ["Never", "Every 3-6 months", "Every 10 years", "Only if hacked"],
        correct: 1,
        topic: "Password Security",
        explanation: "Security experts recommend changing passwords every 3-6 months, especially for important accounts. Use unique passwords for each account, make them at least 12 characters long with a mix of letters, numbers, and symbols. Consider using a password manager to keep track of them."
    },
    {
        question: "What is two-factor authentication (2FA)?",
        options: ["Two passwords", "An extra security layer", "A type of virus", "Double encryption"],
        correct: 1,
        topic: "Two-Factor Authentication",
        explanation: "Two-factor authentication adds an extra security layer by requiring two forms of verification: something you know (password) and something you have (phone code, fingerprint, or security key). This makes it much harder for attackers to access your accounts even if they steal your password."
    },
    {
        question: "What should you do if you receive a suspicious email asking for personal information?",
        options: ["Reply immediately", "Click all links", "Delete and report it", "Forward to friends"],
        correct: 2,
        topic: "Phishing Prevention",
        explanation: "Never respond to suspicious emails requesting personal information. Legitimate organizations never ask for sensitive data via email. Delete the email, report it as phishing/spam, and if it claims to be from a company you use, contact them directly through their official website or phone number."
    },
    {
        question: "What is malware?",
        options: ["Good software", "Malicious software", "Email service", "Antivirus"],
        correct: 1,
        topic: "Malware",
        explanation: "Malware (malicious software) includes viruses, trojans, ransomware, and spyware designed to damage, disrupt, or gain unauthorized access to your computer. Protect yourself by installing reputable antivirus software, keeping systems updated, and never downloading files from untrusted sources."
    },
    {
        question: "Is it safe to use public Wi-Fi for online banking?",
        options: ["Yes, always", "No, it's risky", "Only on Tuesdays", "If it's fast"],
        correct: 1,
        topic: "Public Wi-Fi Security",
        explanation: "Public Wi-Fi networks are not secure and can be easily intercepted by hackers. Avoid accessing sensitive accounts like banking, email, or shopping on public networks. If necessary, use a VPN (Virtual Private Network) to encrypt your connection and protect your data."
    },
    {
        question: "What is ransomware?",
        options: ["Free software", "Software that locks your files", "A game", "An antivirus"],
        correct: 1,
        topic: "Ransomware",
        explanation: "Ransomware is malicious software that encrypts your files and demands payment (ransom) to unlock them. Protect yourself by regularly backing up important data, keeping software updated, being cautious with email attachments, and never paying the ransom as it doesn't guarantee file recovery."
    },
    {
        question: " Which of the following is an example of cyberbullying?",
        options: ["Sending threatening or hurtful messages online", " Playing games online", "Watching YouTube videos", "Posting positive comments"],
        correct: 0,
        topic: "cyberbullying",
        explanation: "Cyberbullying means using digital platforms to harass, threaten, or insult someone."
    }
];

// Helper functions
function getCompletedCount() {
    return state.checked.filter(Boolean).length;
}

function toggleCheckbox(index) {
    state.checked[index] = !state.checked[index];
    render();
}

function handleReportChange(e) {
    state.report[e.target.name] = e.target.value;
}

function submitReport(e) {
    e.preventDefault();
    alert('Report submitted (demo) — ' + JSON.stringify(state.report));
    state.report = { name: "", email: "", phone: "", type: "", desc: "" };
    render();
}

// Quiz functions
function startQuiz() {
    const nameInput = document.getElementById('quiz-name-input');
    if (!nameInput.value.trim()) {
        alert('Please enter your name to start the quiz');
        return;
    }
    state.quiz = {
        active: true,
        userName: nameInput.value.trim(),
        currentQuestion: 0,
        answers: [],
        score: 0,
        showingFeedback: false,
        completed: false
    };
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectAnswer(answerIndex) {
    if (state.quiz.showingFeedback) return;

    const currentQ = quizQuestions[state.quiz.currentQuestion];
    const isCorrect = answerIndex === currentQ.correct;

    state.quiz.answers.push(answerIndex);
    if (isCorrect) state.quiz.score++;
    state.quiz.showingFeedback = true;

    render();
}

function nextQuestion() {
    if (state.quiz.currentQuestion < quizQuestions.length - 1) {
        state.quiz.currentQuestion++;
        state.quiz.showingFeedback = false;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        state.quiz.completed = true;
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function restartQuiz() {
    state.quiz = {
        active: false,
        userName: "",
        currentQuestion: 0,
        answers: [],
        score: 0,
        showingFeedback: false,
        completed: false
    };
    render();
}

function scrollToQuiz() {
    state.quiz.active = false;
    render();
    setTimeout(() => {
        document.getElementById('quiz-section').scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// Component creators
function createStat(number, label) {
    return `
    <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div class="text-2xl font-bold text-indigo-600">${number}</div>
      <div class="mt-1 text-sm opacity-80">${label}</div>
    </div>
  `;
}

function createBadge(level) {
    const color = level === "High" ? "bg-red-100 text-red-700" :
        level === "Medium" ? "bg-yellow-100 text-yellow-800" :
        "bg-blue-100 text-blue-700";
    return `<div class="${color} px-2 py-1 text-xs rounded-full font-medium">${level}</div>`;
}

function createCrimeCard(crime) {
    return `
    <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
      <div class="flex items-start justify-between">
        <h3 class="font-semibold text-lg">${crime.title}</h3>
        ${createBadge(crime.level)}
      </div>
      <p class="mt-3 text-sm opacity-80 leading-relaxed">${crime.desc}</p>
      <div class="mt-6 rounded-md overflow-hidden">
        <iframe 
          width="100%" 
          height="200" 
          src="https://www.youtube.com/embed/${crime.video}" 
          title="${crime.title} Video"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          class="rounded-md"
        ></iframe>
      </div>
    </div>
  `;
}

function createChecklistItem(text, index) {
    return `
    <li class="flex items-start gap-3 p-2 rounded hover:bg-gray-50 transition-colors">
      <input 
        type="checkbox" 
        ${state.checked[index] ? 'checked' : ''} 
        onchange="toggleCheckbox(${index})" 
        class="mt-1" 
      />
      <span class="${state.checked[index] ? 'line-through text-gray-400' : ''}">${text}</span>
    </li>
  `;
}

function createTip(tip) {
    return `
    <div class="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-indigo-500">
      <h4 class="font-semibold text-lg">${tip.title}</h4>
      <p class="text-sm mt-2 opacity-80 leading-relaxed">${tip.desc}</p>
    </div>
  `;
}

function createHelpline(helpline) {
    const bg = helpline.color === 'red' ? 'bg-red-50' :
        helpline.color === 'indigo' ? 'bg-indigo-50' :
        'bg-blue-50';
    return `
    <div class="${bg} p-4 rounded-lg hover:shadow-md transition-all">
      <div class="text-sm opacity-80">${helpline.title}</div>
      <div class="font-bold text-2xl mt-2">${helpline.number}</div>
      <button class="mt-3 px-3 py-1 rounded bg-white text-sm hover:bg-gray-100 transition-colors">📞 Call Now</button>
    </div>
  `;
}

function createQuizNameModal() {
    return `
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 animate-fade-in">
        <h2 class="text-2xl font-bold text-center mb-2">🎯 Cyber Security Quiz</h2>
        <p class="text-center text-gray-600 mb-6">Test your knowledge and learn how to stay safe online!</p>
        <div class="mb-6">
          <label class="block text-sm font-medium mb-2">Enter Your Name</label>
          <input 
            type="text" 
            id="quiz-name-input"
            placeholder="Your name" 
            class="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none"
          />
        </div>
        <div class="flex gap-3">
          <button 
            onclick="startQuiz()" 
            class="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Start Quiz
          </button>
          <button 
            onclick="state.quiz.active = false; render();" 
            class="px-6 py-3 border-2 border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  `;
}

function createQuizQuestion() {
    const q = quizQuestions[state.quiz.currentQuestion];
    const userAnswer = state.quiz.answers[state.quiz.currentQuestion];
    const isCorrect = userAnswer === q.correct;

    return `
    <div class="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-8 px-4">
      <div class="max-w-3xl mx-auto">
        <!-- Header -->
        <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h2 class="text-xl font-bold">Hello, ${state.quiz.userName}! 👋</h2>
              <p class="text-sm text-gray-600">Question ${state.quiz.currentQuestion + 1} of ${quizQuestions.length}</p>
            </div>
            <div class="text-right">
              <div class="text-2xl font-bold text-indigo-600">${state.quiz.score}</div>
              <div class="text-xs text-gray-600">Score</div>
            </div>
          </div>
          <div class="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div class="h-2 bg-indigo-600 transition-all duration-300" style="width: ${((state.quiz.currentQuestion + 1) / quizQuestions.length) * 100}%"></div>
          </div>
        </div>

        ${state.quiz.showingFeedback && state.quiz.currentQuestion > 0 ? `
          <!-- Previous Question Feedback -->
          <div class="bg-white rounded-lg shadow-lg p-6 mb-6 border-l-4 ${quizQuestions[state.quiz.currentQuestion - 1].correct === state.quiz.answers[state.quiz.currentQuestion - 1] ? 'border-green-500' : 'border-red-500'}">
            <h3 class="font-bold text-lg mb-2">📚 Previous Question: ${quizQuestions[state.quiz.currentQuestion - 1].topic}</h3>
            <p class="text-sm text-gray-700 leading-relaxed">${quizQuestions[state.quiz.currentQuestion - 1].explanation}</p>
          </div>
        ` : ''}

        <!-- Current Question -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h3 class="text-2xl font-bold mb-6">${q.question}</h3>
          <div class="space-y-3">
            ${q.options.map((option, i) => {
              let bgClass = 'bg-gray-50 hover:bg-gray-100';
              let borderClass = 'border-2 border-gray-200';
              let cursorClass = 'cursor-pointer';
              let icon = '';
              
              if (state.quiz.showingFeedback) {
                cursorClass = 'cursor-not-allowed';
                if (i === q.correct) {
                  bgClass = 'bg-green-100';
                  borderClass = 'border-2 border-green-500';
                  icon = '✅ ';
                } else if (i === userAnswer) {
                  bgClass = 'bg-red-100';
                  borderClass = 'border-2 border-red-500';
                  icon = '❌ ';
                }
              }
              
              return `
                <div 
                  onclick="${state.quiz.showingFeedback ? '' : `selectAnswer(${i})`}" 
                  class="${bgClass} ${borderClass} p-4 rounded-lg transition-all ${cursorClass}"
                >
                  <span class="font-medium">${icon}${option}</span>
                </div>
              `;
            }).join('')}
          </div>

          ${state.quiz.showingFeedback ? `
            <div class="mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-500'}">
              <h4 class="font-bold mb-2 ${isCorrect ? 'text-green-700' : 'text-red-700'}">
                ${isCorrect ? '🎉 Correct!' : '😞 Incorrect'}
              </h4>
              <p class="text-sm text-gray-700 leading-relaxed">${q.explanation}</p>
            </div>
            <button 
              onclick="nextQuestion()" 
              class="w-full mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              ${state.quiz.currentQuestion < quizQuestions.length - 1 ? 'Next Question →' : 'View Results'}
            </button>
          ` : ''}
        </div>

        <button 
          onclick="restartQuiz()" 
          class="mt-4 w-full px-4 py-2 text-white hover:underline"
        >
          Exit Quiz
        </button>
      </div>
    </div>
  `;
}

function createQuizResults() {
  const percentage = (state.quiz.score / quizQuestions.length) * 100;
  let message = '';
  let emoji = '';
  
  if (percentage >= 80) {
    message = 'Excellent! You\'re a cyber security expert! 🌟';
    emoji = '🏆';
  } else if (percentage >= 60) {
    message = 'Good job! You have a solid understanding! 👍';
    emoji = '🎯';
  } else if (percentage >= 40) {
    message = 'Not bad! Keep learning to improve! 📚';
    emoji = '💪';
  } else {
    message = 'Keep studying! Cyber security is important! 🔐';
    emoji = '📖';
  }
  
  return `
    <div class="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-12 px-4">
      <div class="max-w-2xl mx-auto">
        <div class="bg-white rounded-lg shadow-2xl p-8 text-center">
          <div class="text-6xl mb-4">${emoji}</div>
          <h2 class="text-3xl font-bold mb-2">Quiz Complete, ${state.quiz.userName}!</h2>
          <p class="text-gray-600 mb-6">${message}</p>
          
          <div class="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg p-8 mb-6">
            <div class="text-5xl font-bold mb-2">${state.quiz.score}/${quizQuestions.length}</div>
            <div class="text-xl">${percentage.toFixed(0)}% Correct</div>
          </div>

          <div class="text-left mb-6">
            <h3 class="font-bold text-lg mb-3">Your Answers:</h3>
            ${quizQuestions.map((q, i) => `
              <div class="mb-3 p-3 rounded ${state.quiz.answers[i] === q.correct ? 'bg-green-50' : 'bg-red-50'}">
                <div class="font-medium">${i + 1}. ${q.question}</div>
                <div class="text-sm mt-1 ${state.quiz.answers[i] === q.correct ? 'text-green-700' : 'text-red-700'}">
                  ${state.quiz.answers[i] === q.correct ? '✅' : '❌'} Your answer: ${q.options[state.quiz.answers[i]]}
                  ${state.quiz.answers[i] !== q.correct ? `<br/>✓ Correct: ${q.options[q.correct]}` : ''}
                </div>
              </div>
            `).join('')}
          </div>

          <div class="flex gap-3">
            <button 
              onclick="restartQuiz()" 
              class="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Take Quiz Again
            </button>
            <button 
              onclick="state.quiz = { active: false, userName: '', currentQuestion: 0, answers: [], score: 0, showingFeedback: false, completed: false }; render();" 
              class="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Main render function
function render() {
  const root = document.getElementById('root');
  
  // If quiz is active
  if (state.quiz.active && !state.quiz.userName) {
    root.innerHTML = createQuizNameModal();
    return;
  }
  
  if (state.quiz.active && state.quiz.completed) {
    root.innerHTML = createQuizResults();
    return;
  }
  
  if (state.quiz.active) {
    root.innerHTML = createQuizQuestion();
    return;
  }
  
  const completed = getCompletedCount();
  
  root.innerHTML = `
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
      <header class="bg-white shadow-md sticky top-0 z-20">
        <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full border-2 border-indigo-500 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 text-xl">🔒</div>
            <span class="font-bold text-lg">Cyber Crime Awareness</span>
          </div>
          <nav class="space-x-4 text-sm font-medium">
            <a class="px-3 py-2 rounded-md bg-indigo-100 text-indigo-700 cursor-pointer">Home</a>
            <a class="cursor-pointer hover:text-indigo-600 transition-colors">Crimes</a>
            <a onclick="scrollToQuiz()" class="cursor-pointer hover:text-indigo-600 transition-colors">Quiz</a>
            <a class="cursor-pointer hover:text-indigo-600 transition-colors">Report</a>
            <a class="cursor-pointer hover:text-indigo-600 transition-colors">Help</a>
          </nav>
        </div>
      </header>

      <!-- Hero -->
      <section class="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
          <div class="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>
        <div class="relative max-w-6xl mx-auto px-6 py-24">
          <div class="max-w-3xl">
            <h1 class="text-5xl font-extrabold mb-4">Stay Safe Online 🛡️</h1>
            <p class="text-xl opacity-90 mb-8">Learn about cyber crimes, protect yourself, and report incidents. Knowledge is your best defense.</p>
            <div class="flex gap-4 mb-8">
              <button class="px-6 py-3 bg-white text-indigo-700 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">Learn More</button>
              <button class="px-6 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition-all">Report Crime</button>
            </div>
            <div class="flex gap-4">
              <div class="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-lg">
                <div class="text-sm opacity-90">24/7 Helpline</div>
                <div class="text-2xl font-bold mt-1">1930</div>
              </div>
              <div class="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-lg">
                <div class="text-sm opacity-90">Response Time</div>
                <div class="text-2xl font-bold mt-1">&lt; 2 Hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main class="max-w-6xl mx-auto px-6 py-12">
        <!-- Stats -->
        <section class="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center mb-12">
          ${createStat('50K+', 'Crimes Prevented')}
          ${createStat('2M+', 'Users Educated')}
          ${createStat('125K+', 'Reports Filed')}
          ${createStat('< 2h', 'Avg Response Time')}
        </section>

        <!-- Quiz Section -->
        <section id="quiz-section" class="mb-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-8 text-white">
          <div class="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 class="text-3xl font-bold mb-2">🎯 Test Your Knowledge!</h2>
              <p class="text-lg opacity-90">Take our cyber security quiz and learn how to protect yourself online</p>
            </div>
            <button 
              onclick="state.quiz.active = true; render();" 
              class="px-8 py-4 bg-white text-indigo-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Quiz →
            </button>
          </div>
          <div class="mt-6 flex gap-6 text-sm">
            <div class="flex items-center gap-2">
              <span class="text-2xl">📝</span>
              <span>10 Questions</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-2xl">⏱️</span>
              <span>5-10 Minutes</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-2xl">🏆</span>
              <span>Get Certificate</span>
            </div>
          </div>
        </section>

        <!-- Common Crimes -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-center mb-3">Common Cyber Crimes</h2>
          <p class="text-center text-gray-600 mb-8">Learn about the most prevalent cyber threats and how to protect yourself</p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${crimes.map(createCrimeCard).join('')}
          </div>
        </section>

        <!-- Safety Checklist -->
        <section class="mb-12">
          <div class="bg-white p-8 rounded-xl shadow-lg">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-2xl font-bold">✅ Safety Checklist</h2>
              <div class="text-lg font-semibold text-indigo-600">${completed}/8</div>
            </div>
            <div class="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
              <div class="h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500" style="width: ${(completed / 8) * 100}%"></div>
            </div>

            <ul class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
              ${checklistItems.map((item, i) => createChecklistItem(item, i)).join('')}
            </ul>
          </div>
        </section>

        <!-- Protection Tips -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6">🔐 Protection Tips</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${tips.map(createTip).join('')}
          </div>
        </section>

        <!-- Report Form -->
        <section class="mb-12 bg-white p-8 rounded-xl shadow-lg">
          <h2 class="text-2xl font-bold mb-2">📝 Report an Incident</h2>
          <p class="text-gray-600 mb-6">Help us combat cyber crime by reporting incidents</p>
          <form onsubmit="submitReport(event)" class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              name="name" 
              value="${state.report.name}" 
              onchange="handleReportChange(event)" 
              placeholder="Full Name" 
              class="p-3 border-2 rounded-lg focus:border-indigo-500 focus:outline-none" 
            />
            <input 
              name="email" 
              value="${state.report.email}" 
              onchange="handleReportChange(event)" 
              placeholder="Email" 
              class="p-3 border-2 rounded-lg focus:border-indigo-500 focus:outline-none" 
            />
            <input 
              name="phone" 
              value="${state.report.phone}" 
              onchange="handleReportChange(event)" 
              placeholder="Phone Number" 
              class="p-3 border-2 rounded-lg focus:border-indigo-500 focus:outline-none" 
            />
            <select name="type" value="${state.report.type}" onchange="handleReportChange(event)" class="p-3 border-2 rounded-lg focus:border-indigo-500 focus:outline-none">
              <option value="">Select crime type</option>
              ${crimeTypes.map(c => `<option value="${c}" ${state.report.type === c ? 'selected' : ''}>${c}</option>`).join('')}
            </select>
            <textarea 
              name="desc" 
              value="${state.report.desc}" 
              onchange="handleReportChange(event)" 
              placeholder="Provide detailed information about the incident..." 
              class="p-3 border-2 rounded-lg col-span-1 md:col-span-2 h-28 focus:border-indigo-500 focus:outline-none"
            ></textarea>
            <div class="col-span-1 md:col-span-2 flex justify-end">
              <button type="submit" class="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all transform hover:scale-105">Submit Report</button>
            </div>
          </form>
        </section>

        <!-- FAQ & Helplines -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-xl shadow-lg">
            <h3 class="font-bold text-xl mb-4">❓ Frequently Asked Questions</h3>
            <details class="mb-3 p-3 rounded hover:bg-gray-50">
              <summary class="cursor-pointer font-medium">How can I create a strong password?</summary>
              <p class="mt-2 text-sm text-gray-700 leading-relaxed">Use a combination of uppercase and lowercase letters, numbers, and special characters. Make it at least 12 characters long and consider a passphrase or password manager.</p>
            </details>
            <details class="mb-3 p-3 rounded hover:bg-gray-50">
              <summary class="cursor-pointer font-medium">What is phishing?</summary>
              <p class="mt-2 text-sm text-gray-700 leading-relaxed">Phishing is fraudulent attempts to obtain sensitive information by disguising as a trustworthy entity.</p>
            </details>
            <details class="mb-3 p-3 rounded hover:bg-gray-50">
              <summary class="cursor-pointer font-medium">Is it safe to use public Wi-Fi?</summary>
              <p class="mt-2 text-sm text-gray-700 leading-relaxed">Avoid conducting sensitive transactions on public Wi-Fi and use a VPN if necessary.</p>
            </details>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-lg">
            <h3 class="font-bold text-xl mb-4">📞 Need Help?</h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              ${helplines.map(createHelpline).join('')}
            </div>
            <div class="mt-6">
              <a class="inline-block px-6 py-3 bg-indigo-100 text-indigo-700 rounded-lg font-medium hover:bg-indigo-200 transition-colors cursor-pointer">Visit official portal →</a>
              <a href="https://cybercrime.gov.in/"class="inline-block px-6 py-3 bg-indigo-100 text-indigo-700 rounded-lg font-medium hover:bg-indigo-200 transition-colors cursor-pointer"> click here</a>
            </div>
          </div>
        </section>

      </main>

      <footer class="bg-white border-t py-8 mt-12">
        <div class="max-w-6xl mx-auto px-6 text-center text-sm text-gray-600">
          © ${new Date().getFullYear()} Cyber Crime Awareness • @Diksha Patil
        </div>
      </footer>
    </div>
  `;
}

// Initialize app
document.addEventListener('DOMContentLoaded', render);