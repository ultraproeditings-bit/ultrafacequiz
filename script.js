// === Webcam Setup ===
const video = document.getElementById("video");
const captureBtn = document.getElementById("capture-btn");
const registerBtn = document.getElementById("register-btn");
const snapshot = document.getElementById("snapshot");
const statusEl = document.getElementById("status");
const usernameInput = document.getElementById("username");

const ctx = snapshot.getContext("2d");

navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => video.srcObject = stream)
  .catch(() => statusEl.textContent = "Camera access denied.");

let capturedImage = null;
captureBtn.onclick = () => {
  ctx.drawImage(video, 0, 0, snapshot.width, snapshot.height);
  capturedImage = snapshot.toDataURL("image/png");
  statusEl.textContent = "Face captured successfully ✅";
};

// === Sections ===
const registerSection = document.getElementById("register-section");
const quizSection = document.getElementById("quiz-section");
const resultSection = document.getElementById("result-section");
const leaderboardSection = document.getElementById("leaderboard-section");

function showSection(sec) {
  [registerSection, quizSection, resultSection, leaderboardSection].forEach(
    s => s.classList.remove("active")
  );
  sec.classList.add("active");
}

// === Full Quiz Data (50 Maths + 50 Indian Politics) ===
const allQuestions = [
  // ---------------- MATHS QUESTIONS (50) ----------------
  { q: "What is 12 + 8?", o: ["18", "20", "22", "24"], a: 1 },
  { q: "What is 15 × 6?", o: ["75", "80", "85", "90"], a: 3 },
  { q: "Simplify: 3² + 4² =", o: ["12", "25", "9", "16"], a: 1 },
  { q: "If 9x = 81, find x.", o: ["7", "8", "9", "10"], a: 2 },
  { q: "What is 25% of 200?", o: ["25", "50", "75", "100"], a: 1 },
  { q: "Simplify: (8 × 3) ÷ 4", o: ["5", "6", "7", "8"], a: 1 },
  { q: "What is 7³?", o: ["343", "49", "27", "243"], a: 0 },
  { q: "What is 1/2 of 3/4?", o: ["3/8", "3/4", "1/8", "1/4"], a: 0 },
  { q: "Find the square root of 81.", o: ["7", "8", "9", "10"], a: 2 },
  { q: "Simplify: 2(3 + 4)", o: ["12", "14", "16", "18"], a: 0 },
  { q: "If x = 5, find 2x + 3.", o: ["8", "10", "12", "13"], a: 3 },
  { q: "Convert 0.5 into fraction.", o: ["1/3", "1/2", "2/3", "1/4"], a: 1 },
  { q: "What is 45 ÷ 9?", o: ["4", "5", "6", "7"], a: 1 },
  { q: "Find the area of a square of side 4 cm.", o: ["8", "12", "16", "20"], a: 2 },
  { q: "Perimeter of a rectangle with sides 3cm and 5cm?", o: ["8cm", "10cm", "14cm", "16cm"], a: 2 },
  { q: "What is 10²?", o: ["20", "100", "200", "1000"], a: 1 },
  { q: "Simplify: 5 + (3 × 2)", o: ["10", "11", "12", "13"], a: 0 },
  { q: "Find HCF of 24 and 36.", o: ["6", "8", "12", "18"], a: 2 },
  { q: "What is 60% of 250?", o: ["120", "130", "140", "150"], a: 3 },
  { q: "Convert ¾ into percentage.", o: ["50%", "60%", "75%", "90%"], a: 2 },
  { q: "What is the cube of 4?", o: ["16", "32", "64", "128"], a: 2 },
  { q: "Find ⅓ of 90.", o: ["20", "25", "30", "35"], a: 2 },
  { q: "What is 9 × 11?", o: ["90", "99", "108", "101"], a: 1 },
  { q: "Simplify: (10 × 5) – 20", o: ["30", "40", "50", "60"], a: 1 },
  { q: "Find the average of 10, 20, 30.", o: ["15", "20", "25", "30"], a: 1 },
  { q: "How many degrees are there in a right angle?", o: ["45°", "60°", "90°", "180°"], a: 2 },
  { q: "Find the perimeter of a triangle with sides 4, 5, and 6.", o: ["12", "13", "14", "15"], a: 3 },
  { q: "If 5 pencils cost ₹25, find cost of 1 pencil.", o: ["₹3", "₹4", "₹5", "₹6"], a: 2 },
  { q: "Simplify: 100 ÷ 4 + 15", o: ["30", "35", "40", "50"], a: 2 },
  { q: "Find the missing number: 7, 14, 21, ?", o: ["24", "25", "28", "30"], a: 2 },
  { q: "Find 15% of 300.", o: ["30", "35", "40", "45"], a: 3 },
  { q: "If 5x = 25, find x.", o: ["4", "5", "6", "7"], a: 1 },
  { q: "What is the LCM of 6 and 8?", o: ["12", "16", "18", "24"], a: 3 },
  { q: "Simplify: (9 – 3) × 2", o: ["8", "10", "12", "14"], a: 2 },
  { q: "Find the square of 12.", o: ["124", "132", "142", "144"], a: 3 },
  { q: "Convert 2.5 hours to minutes.", o: ["120", "130", "140", "150"], a: 3 },
  { q: "Find ⅔ of 60.", o: ["20", "30", "40", "50"], a: 2 },
  { q: "What is 18 ÷ 3 × 2?", o: ["10", "11", "12", "13"], a: 2 },
  { q: "Find the area of rectangle 6cm × 4cm.", o: ["20", "22", "24", "26"], a: 2 },
  { q: "Find the cube root of 27.", o: ["2", "3", "4", "5"], a: 1 },
  { q: "Simplify: 8² – 4²", o: ["36", "40", "48", "60"], a: 2 },
  { q: "What is 100 – 45 + 25?", o: ["70", "75", "80", "85"], a: 2 },
  { q: "Find value of 2x if x = 8.", o: ["14", "15", "16", "18"], a: 2 },
  { q: "Convert 500 cm to meters.", o: ["4", "5", "6", "7"], a: 1 },
  { q: "Simplify: (2 + 3) × (4 – 1)", o: ["12", "13", "14", "15"], a: 0 },
  { q: "Find perimeter of square with side 8cm.", o: ["24", "28", "30", "32"], a: 3 },
  { q: "If 40% of x = 20, find x.", o: ["40", "45", "50", "55"], a: 2 },
  { q: "Simplify: 11² – 10²", o: ["10", "21", "30", "41"], a: 2 },
  { q: "Find the average of 2, 4, 6, 8, 10.", o: ["4", "5", "6", "7"], a: 2 },
  { q: "What is the successor of 99?", o: ["100", "101", "98", "97"], a: 0 },

  // ---------------- POLITICS QUESTIONS (50) ----------------
  { q: "Who is known as the Father of the Indian Constitution?", o: ["Mahatma Gandhi", "B. R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"], a: 1 },
  { q: "Who was the first President of India?", o: ["Dr. Rajendra Prasad", "Sarvepalli Radhakrishnan", "V. V. Giri", "Zakir Hussain"], a: 0 },
  { q: "Which Article guarantees the Right to Equality?", o: ["Article 14", "Article 19", "Article 21", "Article 32"], a: 0 },
  { q: "How many members are nominated to the Rajya Sabha by the President?", o: ["10", "12", "15", "20"], a: 1 },
  { q: "Who was the first woman Prime Minister of India?", o: ["Pratibha Patil", "Sonia Gandhi", "Indira Gandhi", "Sarojini Naidu"], a: 2 },
  { q: "Which is the highest law-making body in India?", o: ["Supreme Court", "Parliament", "Cabinet", "Election Commission"], a: 1 },
  { q: "Who appoints the Prime Minister of India?", o: ["President", "Chief Justice", "Governor", "Parliament"], a: 0 },
  { q: "How many Lok Sabha seats are there in India?", o: ["442", "543", "552", "562"], a: 1 },
  { q: "Which Article deals with Fundamental Rights?", o: ["12-35", "36-51", "52-78", "79-123"], a: 0 },
  { q: "What is the minimum age to become Prime Minister of India?", o: ["25", "30", "35", "40"], a: 1 },
  { q: "Who was the first Deputy Prime Minister of India?", o: ["Lal Bahadur Shastri", "Sardar Patel", "Morarji Desai", "Indira Gandhi"], a: 1 },
  { q: "What is the term of Lok Sabha?", o: ["4 years", "5 years", "6 years", "7 years"], a: 1 },
  { q: "Which state has the largest Legislative Assembly?", o: ["Bihar", "Uttar Pradesh", "Maharashtra", "West Bengal"], a: 1 },
  { q: "Who presides over the Lok Sabha meetings?", o: ["President", "Prime Minister", "Speaker", "Vice President"], a: 2 },
  { q: "Who is the Supreme Commander of the Armed Forces in India?", o: ["Prime Minister", "Defence Minister", "President", "Chief of Army"], a: 2 },
  { q: "What is the minimum age to vote in India?", o: ["16", "17", "18", "21"], a: 2 },
  { q: "In which year did India become a Republic?", o: ["1947", "1948", "1949", "1950"], a: 3 },
  { q: "Who appoints the Governor of a State?", o: ["Chief Minister", "President", "Prime Minister", "Parliament"], a: 1 },
  { q: "Who has the power to dissolve the Lok Sabha?", o: ["President", "Prime Minister", "Speaker", "Chief Justice"], a: 0 },
  { q: "Which body conducts elections in India?", o: ["Supreme Court", "Election Commission", "Parliament", "Cabinet"], a: 1 },
  { q: "How many schedules are there in the Indian Constitution?", o: ["10", "12", "14", "15"], a: 1 },
  { q: "Which Article gives the President power to impose President’s Rule?", o: ["352", "356", "360", "365"], a: 1 },
  { q: "Who is the ex-officio Chairman of Rajya Sabha?", o: ["Speaker", "Vice President", "Prime Minister", "President"], a: 1 },
  { q: "Which Article guarantees the Right to Freedom?", o: ["14", "19", "21", "32"], a: 1 },
  { q: "When was the Constitution of India adopted?", o: ["26 Jan 1950", "15 Aug 1947", "26 Nov 1949", "2 Oct 1950"], a: 2 },
  { q: "Which Commission is responsible for UPSC exams?", o: ["UPSC", "SSC", "PSC", "NTA"], a: 0 },
  { q: "Who was the first woman President of India?", o: ["Sonia Gandhi", "Indira Gandhi", "Pratibha Patil", "Sarojini Naidu"], a: 2 },
  { q: "Which is the smallest state in India by area?", o: ["Goa", "Sikkim", "Tripura", "Nagaland"], a: 0 },
  { q: "Which body makes laws for the whole country?", o: ["State Assembly", "Parliament", "Municipality", "High Court"], a: 1 },
  { q: "Who takes oath first — President or Prime Minister?", o: ["President", "Prime Minister"], a: 0 },
  { q: "Who can remove the President of India?", o: ["Supreme Court", "Parliament", "Prime Minister", "Cabinet"], a: 1 },
  { q: "What is the tenure of the Rajya Sabha?", o: ["5 years", "6 years", "No fixed term", "4 years"], a: 2 },
  { q: "Who gives assent to bills passed by Parliament?", o: ["Prime Minister", "President", "Speaker", "Governor"], a: 1 },
  { q: "Which day is celebrated as Constitution Day?", o: ["15 Aug", "2 Oct", "26 Nov", "14 Nov"], a: 2 },
  { q: "Who heads the NITI Aayog?", o: ["President", "Prime Minister", "Finance Minister", "Chief Minister"], a: 1 },
  { q: "Who is the custodian of India’s Constitution?", o: ["Supreme Court", "Parliament", "President", "Prime Minister"], a: 0 },
  { q: "How many Fundamental Duties are there in India?", o: ["9", "10", "11", "12"], a: 2 },
  { q: "What is the minimum age for a Rajya Sabha member?", o: ["25", "30", "35", "40"], a: 1 },
  { q: "Which language was used in the original Constitution?", o: ["Hindi", "English", "Sanskrit", "Both Hindi & English"], a: 3 },
  { q: "Which Amendment lowered the voting age from 21 to 18?", o: ["42nd", "44th", "61st", "73rd"], a: 2 },
  { q: "Who was the first Law Minister of India?", o: ["Ambedkar", "Nehru", "Patel", "Shastri"], a: 0 },
  { q: "When was the Planning Commission replaced by NITI Aayog?", o: ["2012", "2013", "2014", "2015"], a: 3 },
  { q: "What does Article 370 relate to?", o: ["Punjab", "Kashmir", "Delhi", "Tamil Nadu"], a: 1 },
  { q: "Which Indian state has a unicameral legislature?", o: ["Bihar", "UP", "Punjab", "Karnataka"], a: 2 },
  { q: "Who is called the First Citizen of India?", o: ["Prime Minister", "President", "Chief Justice", "Governor"], a: 1 },
  { q: "How many High Courts are there in India (as of 2025)?", o: ["24", "25", "26", "28"], a: 1 },
  { q: "Which Article guarantees Right to Life?", o: ["14", "19", "21", "32"], a: 2 },
  { q: "Who appoints the judges of the Supreme Court?", o: ["Prime Minister", "President", "Chief Justice", "Governor"], a: 1 },
  { q: "Which is the upper house of Parliament?", o: ["Lok Sabha", "Rajya Sabha", "Vidhan Sabha", "Municipality"], a: 1 },
  { q: "How many states are there in India (2025)?", o: ["28", "29", "30", "31"], a: 0 }
];

// === Pick 10 Random Questions (from allQuestions) ===
function pickRandomQuestions(arr, n = 10) {
  const copy = arr.slice(); // avoid mutating original
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}

const quiz = pickRandomQuestions(allQuestions, 10);

// === Quiz Logic ===
let currentQ = 0;
let score = 0;
let selectedIndex = null;
let hasSavedCurrent = false;
const results = [];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const progressEl = document.getElementById("progress");
const welcomeEl = document.getElementById("welcome");
const feedbackEl = document.getElementById("feedback");
const reviewList = document.getElementById("review-list");

const saveBtn = document.getElementById("save-btn");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const q = quiz[currentQ];
  questionEl.textContent = q.q;
  optionsEl.innerHTML = "";
  feedbackEl.innerHTML = "";
  selectedIndex = null;
  hasSavedCurrent = false;

  saveBtn.disabled = false;
  nextBtn.disabled = true;

  q.o.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;

    btn.onclick = () => {
      if (hasSavedCurrent) return; // cannot change after save
      selectedIndex = i;

      // Highlight selected
      Array.from(optionsEl.querySelectorAll("button")).forEach(b =>
        b.classList.remove("selected")
      );
      btn.classList.add("selected");
    };

    optionsEl.appendChild(btn);
  });

  progressEl.textContent = `Question ${currentQ + 1} of ${quiz.length}`;
}

// Save answer logic
saveBtn.onclick = () => {
  if (hasSavedCurrent) return;

  if (selectedIndex === null) {
    feedbackEl.innerHTML = `
      <div class="feedback-box feedback-wrong">
        Please select an option before saving.
      </div>`;
    return;
  }

  hasSavedCurrent = true;
  const q = quiz[currentQ];
  const isCorrect = (selectedIndex === q.a);
  if (isCorrect) score++;

  results.push({
    question: q.q,
    userAnswer: q.o[selectedIndex],
    correctAnswer: q.o[q.a],
    isCorrect
  });

  feedbackEl.innerHTML = `
    <div class="feedback-box ${isCorrect ? "feedback-correct" : "feedback-wrong"}">
      ${isCorrect
        ? "✅ Correct!"
        : `❌ Wrong. Correct answer: <b>${q.o[q.a]}</b>`}
    </div>
  `;

  // Disable options and save
  Array.from(optionsEl.querySelectorAll("button")).forEach(b => b.disabled = true);
  saveBtn.disabled = true;
  nextBtn.disabled = false;
};

// Next button logic
nextBtn.onclick = () => {
  if (!hasSavedCurrent) {
    feedbackEl.innerHTML = `
      <div class="feedback-box feedback-wrong">
        Please save your answer before going to the next question.
      </div>`;
    return;
  }
  currentQ++;
  if (currentQ < quiz.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  showSection(resultSection);
  document.getElementById("score").textContent =
    `${usernameInput.value}, you scored ${score} / ${quiz.length}`;

  reviewList.innerHTML = results
    .map((r, index) => `
      <div class="review-item ${r.isCorrect ? "correct" : "wrong"}">
        <h4>Q${index + 1}. ${r.question}</h4>
        <p><b>Your answer:</b> ${r.userAnswer}</p>
        <p><b>Correct answer:</b> ${r.correctAnswer}</p>
        <p>Status: ${r.isCorrect ? "✅ Correct" : "❌ Wrong"}</p>
      </div>
    `)
    .join("");

  saveResult(usernameInput.value.trim(), capturedImage, score);
}

// === Registration ===
registerBtn.onclick = () => {
  const name = usernameInput.value.trim();
  if (!name || !capturedImage) {
    statusEl.textContent = "Please enter your name and capture your face!";
    return;
  }

  welcomeEl.textContent = `Welcome, ${name}!`;
  showSection(quizSection);
  loadQuestion();
};

// === Leaderboard ===
const leaderboardBtn = document.getElementById("leaderboard-btn");
const leaderboardList = document.getElementById("leaderboard");
const restartBtn = document.getElementById("restart-btn");
const restartBtn2 = document.getElementById("restart-btn2");
const resetLeaderboardBtn = document.getElementById("reset-leaderboard-btn");

leaderboardBtn.onclick = () => {
  showSection(leaderboardSection);
  renderLeaderboard();
};

restartBtn.onclick = () => window.location.reload();
restartBtn2.onclick = () => window.location.reload();

resetLeaderboardBtn.onclick = () => {
  if (confirm("Clear all leaderboard data?")) {
    localStorage.removeItem("quiz_results");
    leaderboardList.innerHTML = "";
  }
};

function saveResult(name, image, score) {
  const data = JSON.parse(localStorage.getItem("quiz_results") || "[]");
  data.push({ name, image, score });
  localStorage.setItem("quiz_results", JSON.stringify(data));
}

function renderLeaderboard() {
  const data = JSON.parse(localStorage.getItem("quiz_results") || "[]");
  const sorted = data.sort((a, b) => b.score - a.score).slice(0, 10);

  leaderboardList.innerHTML = sorted
    .map(r => `
      <li>
        <img src="${r.image}">
        <span>${r.name}</span>
        <strong>${r.score}/10</strong>
      </li>
    `)
    .join("");
}
// Add your event listeners here
document.getElementById('restart-btn-leaderboard').addEventListener('click', function() {
    // Logic to restart the quiz
    location.reload(); // Reloads the page to restart
});

document.getElementById('reset-leaderboard-btn').addEventListener('click', function() {
    // Logic to clear the leaderboard
    localStorage.removeItem('leaderboard'); // Assuming leaderboard is stored in localStorage
    document.getElementById('leaderboard').innerHTML = ''; // Clear the displayed leaderboard
});