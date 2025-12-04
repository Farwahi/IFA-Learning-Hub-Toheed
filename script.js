// FINAL UPDATED script.js — Chapters Removed, Language + Timer Fully Preserved
// Compatible with your provided index.html

/*************************************************
 * BRAND + PAGE TITLE
 *************************************************/
const BRAND_NAME = "IFA Learning Hub Toheed";
const TAGLINE = "Learn with Faith & Precision";
document.title = `${BRAND_NAME} – Quiz App`;

/*************************************************
 * **QUESTIONS ONLY** (No Chapters)
 *************************************************/
// Add ALL your questions inside QUESTIONS[]
// Same structure you used earlier
const QUESTIONS = [
  {
    question: "اللہ کی سب سے بنیادی صفت کیا ہے؟",
    question_en: "What is the most fundamental attribute of Allah?",
    question_ru: "Какое основное и самое важное качество относится к Аллаху?",

    a: "دو ہیں",
    a_en: "He is two",
    a_ru: "Он — двоичен",

    b: "تین ہیں",
    b_en: "He is three",
    b_ru: "Он — троичен",

    c: "واحد و یکتا ہے",
    c_en: "He is One and Unique",
    c_ru: "Он — Един и Уникален",

    d: "جسم رکھتا ہے",
    d_en: "He possesses a physical body",
    d_ru: "Он имеет физическое тело",

    correct: "c",
  },

  {
    question: "اللہ کہاں موجود ہے؟",
    question_en: "According to Shia belief, where is Allah present?",
    question_ru: "Где находится Аллах согласно шиитскому вероучению?",

    a: "صرف آسمان میں",
    a_en: "Only in the heavens",
    a_ru: "Только на небесах",

    b: "صرف عرش پر بیٹھا ہے",
    b_en: "Physically seated on the Throne",
    b_ru: "Физически сидит на Троне",

    c: "ہر جگہ جسم کے ساتھ موجود",
    c_en: "Present everywhere in a physical manner",
    c_ru: "Присутствует повсюду физически",

    d: "ہر جگہ علم و قدرت کے ساتھ محیط ہے",
    d_en: "Encompassing all things through His Knowledge and Power",
    d_ru: "Охватывает всё Своим Знанием и Могуществом",

    correct: "d",
  },

  {
    question: "کیا اللہ کو آنکھوں سے دیکھا جا سکتا ہے؟",
    question_en: "Can Allah be seen with physical eyes?",
    question_ru: "Можно ли увидеть Аллаха физическими глазами?",

    a: "ہاں، دنیا میں",
    a_en: "Yes, in this world",
    a_ru: "Да, в этом мире",

    b: "ہاں، قیامت میں",
    b_en: "Yes, on the Day of Judgment",
    b_ru: "Да, в Судный день",

    c: "ہاں، خواب میں",
    c_en: "Yes, in dreams",
    c_ru: "Да, во сне",

    d: "نہیں، اللہ کو نگاہیں نہیں پا سکتیں",
    d_en: "No, physical eyes cannot perceive Him",
    d_ru: "Нет, глаза не способны Его постичь",

    correct: "d",
  },

  {
    question: "شیعہ کے نزدیک عدلِ الٰہی کا کیا مطلب ہے؟",
    question_en: "What does Divine Justice (‘Adl) mean in Shia theology?",
    question_ru: "Что означает Божественная справедливость (‘Адль) в шиитской теологии?",

    a: "اللہ کبھی کبھی ظلم کرتا ہے",
    a_en: "Allah sometimes acts unjustly",
    a_ru: "Иногда Аллах поступает несправедливо",

    b: "اللہ سب پر ظلم کرتا ہے",
    b_en: "Allah oppresses certain people",
    b_ru: "Аллах угнетает некоторых людей",

    c: "اللہ ظلم نہیں کرتا",
    c_en: "Allah never commits injustice",
    c_ru: "Аллах никогда не совершает несправедливости",

    d: "اللہ صرف نیک لوگوں سے خوش ہوتا ہے",
    d_en: "Allah favours only those He likes",
    d_ru: "Аллах любит только праведных",

    correct: "c",
  },

  {
    question: "انسان کے اعمال کے بارے میں شیعہ عقیدہ کیا ہے؟",
    question_en: "What is the Shia understanding of human actions?",
    question_ru: "Каков шиитский взгляд на человеческие поступки?",

    a: "مکمل جبر ہے",
    a_en: "Humans are completely predestined (Jabr)",
    a_ru: "Полное предопределение (джабр)",

    b: "مکمل آزادی ہے",
    b_en: "Humans have absolute free will",
    b_ru: "Полная свобода воли",

    c: "امر بین الامرین (نہ جبر، نہ مکمل اختیار)",
    c_en: "A middle path—neither full compulsion nor full freedom",
    c_ru: "Средний путь — ни полное принуждение, ни абсолютная свобода",

    d: "انسان مجبور ہے",
    d_en: "Humans act entirely under divine force",
    d_ru: "Человек полностью вынужден",

    correct: "c",
  },

  {
    question: "اللہ کی کون سی صفت ”سلبی“ صفت ہے؟",
    question_en: "Which of the following is considered a negative attribute of Allah?",
    question_ru: "Какой из перечисленных атрибутов считается «негативным атрибутом» Аллаха?",

    a: "قادر",
    a_en: "All-Powerful",
    a_ru: "Всемогущество",

    b: "جسم سے پاک",
    b_en: "Being free from bodily form",
    b_ru: "Отсутствие телесной формы",

    c: "علیم",
    c_en: "All-Knowing",
    c_ru: "Всезнание",

    d: "سمیع",
    d_en: "All-Hearing",
    d_ru: "Всеслышание",

    correct: "b",
  },

  {
    question: "توحیدِ صفات کا مطلب کیا ہے؟",
    question_en: "What does Tawheed al-Sifaat (Unity of Attributes) signify?",
    question_ru: "Что означает ТауХид ас-Сифат (Единство атрибутов)?",

    a: "صفات اللہ کی ذات سے جدا ہیں",
    a_en: "Allah’s attributes exist separately from His essence",
    a_ru: "Атрибуты Аллаха отделены от Его сущности",

    b: "صفات موجود نہیں",
    b_en: "Allah possesses no attributes",
    b_ru: "У Аллаха нет атрибутов",

    c: "صفات اللہ کی ذات کے ساتھ متحد ہیں",
    c_en: "Allah’s attributes are identical to His essence",
    c_ru: "Атрибуты Аллаха тождественны Его сущности",

    d: "صفات مخلوق جیسی ہیں",
    d_en: "Allah’s attributes resemble those of creation",
    d_ru: "Атрибуты Аллаха похожи на атрибуты творений",

    correct: "c",
  },

  {
    question: "توحیدِ عبادت کس بات کی طرف اشارہ کرتی ہے؟",
    question_en: "What is meant by Tawheed al-‘Ibadah (Unity of Worship)?",
    question_ru: "Что означает ТауХид аль-‘Ибада (Единство поклонения)?",

    a: "صرف اللہ کی عبادت",
    a_en: "Worship of Allah alone",
    a_ru: "Поклонение одному Аллаху",

    b: "انبیاء کی عبادت",
    b_en: "Worship of prophets",
    b_ru: "Поклонение пророкам",

    c: "فرشتوں کی عبادت",
    c_en: "Worship of angels",
    c_ru: "Поклонение ангелам",

    d: "بزرگوں کی عبادت",
    d_en: "Worship of saints",
    d_ru: "Поклонение праведникам",

    correct: "a",
  },

  {
    question: "شیعہ روایات کے مطابق سب سے پہلے خلق کیا گیا نور کون سا تھا؟",
    question_en: "According to Shia narrations, what was the first creation?",
    question_ru: "Согласно шиитским преданиям, что было первым сотворённым творением?",

    a: "نورِ جبرائیل",
    a_en: "The light of Angel Jibreel",
    a_ru: "Свет ангела Джибриля",

    b: "نورِ آدمؑ",
    b_en: "The light of Prophet Adam",
    b_ru: "Свет пророка Адама",

    c: "نورِ محمد ﷺ",
    c_en: "The Light of Prophet Muhammad (ص)",
    c_ru: "Свет пророка Мухаммада (с)",

    d: "نورِ کعبہ",
    d_en: "The light of the Kaaba",
    d_ru: "Свет Каабы",

    correct: "c",
  },

  {
    question: "کیا اللہ محتاج ہوتا ہے؟",
    question_en: "Is Allah ever in need of anything?",
    question_ru: "Нуждается ли Аллах в ком-либо или в чём-либо?",

    a: "کبھی کبھی",
    a_en: "Sometimes",
    a_ru: "Иногда",

    b: "ہاں",
    b_en: "Yes",
    b_ru: "Да",

    c: "صرف دعا میں",
    c_en: "Only during worship",
    c_ru: "Только во время молитвы",

    d: "نہیں، اللہ غنی ہے",
    d_en: "No, Allah is absolutely Self-Sufficient",
    d_ru: "Нет, Аллах абсолютно Самодостаточен",

    correct: "d",
  },

  {
    question: "اللہ کے علم کے بارے میں شیعہ کیا عقیدہ رکھتے ہیں؟",
    question_en: "What is the Shia belief regarding the knowledge of Allah?",
    question_ru: "Каково шиитское учение о знании Аллаха?",

    a: "علم محدود ہے",
    a_en: "It is limited",
    a_ru: "Оно ограничено",

    b: "علم وقت کے ساتھ بڑھتا ہے",
    b_en: "It increases over time",
    b_ru: "Оно увеличивается со временем",

    c: "اللہ ہر چیز کو بعد میں سیکھتا ہے",
    c_en: "Allah learns new things",
    c_ru: "Аллах узнаёт новое",

    d: "اللہ کا علم ہمیشہ کامل ہے",
    d_en: "Allah’s knowledge is eternally complete and perfect",
    d_ru: "Знание Аллаха вечно совершенно",

    correct: "d",
  },

  {
    question: "کیا اللہ کی صفات مخلوق جیسی ہوتی ہیں؟",
    question_en: "Do Allah’s attributes resemble the attributes of creation?",
    question_ru: "Похожи ли атрибуты Аллаха на атрибуты творений?",

    a: "ہاں، بلکل",
    a_en: "Yes, completely",
    a_ru: "Да, полностью",

    b: "تھوڑی بہت مشابہ",
    b_en: "Partially resemble",
    b_ru: "Частично похожи",

    c: "صرف ظاہری طور پر",
    c_en: "Resemble outwardly",
    c_ru: "Похожи только внешне",

    d: "ہرگز نہیں",
    d_en: "Absolutely not",
    d_ru: "Абсолютно нет",

    correct: "d",
  },

  {
    question: "کیا اللہ کسی چیز پر عاجز ہے؟",
    question_en: "Is Allah incapable of performing any action?",
    question_ru: "Есть ли что-то, на что Аллах неспособен?",

    a: "ہاں",
    a_en: "Yes",
    a_ru: "Да",

    b: "کبھی کبھی",
    b_en: "Occasionally",
    b_ru: "Иногда",

    c: "صرف بڑے کاموں میں",
    c_en: "Only in great matters",
    c_ru: "Только в великих делах",

    d: "نہیں، اللہ ہر چیز پر قادر ہے",
    d_en: "No, Allah is capable of all things",
    d_ru: "Нет, Аллах способен на всё",

    correct: "d",
  },

  {
    question: "اللہ کے ’ارادہ‘ کا مطلب کیا ہے؟",
    question_en: "What does the term Irada (Divine Will) mean?",
    question_ru: "Что означает термин Ирада (Божественная воля)?",

    a: "سوچ کر فیصلہ کرنا",
    a_en: "Allah thinks and then decides",
    a_ru: "Аллах раздумывает и затем решает",

    b: "حیران ہونا",
    b_en: "Allah becomes hesitant",
    b_ru: "Аллах сомневается",

    c: "چاہنا اور حکم دینا",
    c_en: "Allah wills a matter and commands it",
    c_ru: "Аллах желает — и повелевает",

    d: "کسی سے پوچھ کر کرنا",
    d_en: "Allah consults others before acting",
    d_ru: "Аллах советуется с ангелами",

    correct: "c",
  },

  {
    question: "توحیدِ ربوبیت کا مطلب کیا ہے؟",
    question_en: "What does Tawheed al-Rububiyyah (Unity of Lordship) include?",
    question_ru: "Что включает в себя ТауХид ар-Рубубийя (Единство господства)?",

    a: "اللہ ہی خالق ہے",
    a_en: "Allah alone is the Creator",
    a_ru: "Аллах — Единственный Творец",

    b: "اللہ ہی رازق ہے",
    b_en: "Allah alone is the Sustainer",
    b_ru: "Аллах — Единственный Кормилец",

    c: "اللہ ہی پالنے والا ہے",
    c_en: "Allah alone directs all affairs",
    c_ru: "Аллах — Единственный Управляющий всеми делами",

    d: "اوپر کی تینوں باتیں درست ہیں",
    d_en: "All of the above",
    d_ru: "Всё вышеперечисленное",

    correct: "d",
  },

  {
    question: "شیعہ کے نزدیک شر وجود میں کیوں آتا ہے؟",
    question_en: "According to Shia belief, why does evil occur in the world?",
    question_ru: "Почему в мире существует зло согласно шиитскому вероучению?",

    a: "اللہ شر پیدا کرتا ہے",
    a_en: "Allah intentionally creates evil",
    a_ru: "Аллах специально творит зло",

    b: "شیطان ہر چیز کا ذمہ دار ہے",
    b_en: "Satan is responsible for all actions",
    b_ru: "Во всём виноват шайтан",

    c: "انسان کے غلط انتخاب سے",
    c_en: "Humans make wrong moral choices",
    c_ru: "Люди совершают неверные моральные выборы",

    d: "فرشتے شر کرتے ہیں",
    d_en: "Angels commit mistakes",
    d_ru: "Ангелы допускают ошибки",

    correct: "c",
  },

  {
    question: "کیا اللہ کسی چیز میں محتاج ہے؟",
    question_en: "Is Allah dependent on anything?",
    question_ru: "Зависит ли Аллах от чего-либо?",

    a: "ہاں",
    a_en: "Yes",
    a_ru: "Да",

    b: "کبھی کبھی",
    b_en: "Sometimes",
    b_ru: "Иногда",

    c: "صرف دعا میں",
    c_en: "Only in certain circumstances",
    c_ru: "В некоторых случаях",

    d: "نہیں، اللہ بے نیاز ہے",
    d_en: "No, Allah is Independent and Self-Sufficient",
    d_ru: "Нет, Аллах Самодостаточен",

    correct: "d",
  },

  {
    question: "کیا اللہ کی کوئی اولاد ہے؟",
    question_en: "Does Allah have children?",
    question_ru: "Есть ли у Аллаха дети?",

    a: "ہاں، فرشتے",
    a_en: "Yes, angels",
    a_ru: "Да, ангелы",

    b: "ہاں، نبی",
    b_en: "Yes, prophets",
    b_ru: "Да, пророки",

    c: "نہیں، اللہ بے مثل ہے",
    c_en: "No — He is One and has no likeness",
    c_ru: "Нет — Он Единственный и не имеет подобий",

    d: "ہاں، نورانی مخلوق",
    d_en: "Yes, spiritual beings",
    d_ru: "Да, духовные существа",

    correct: "c",
  },

  {
    question: "سورۃ اخلاص (قل ہوا اللہ احد) کس عقیدے کی دلیل ہے؟",
    question_en: "Which Surah most comprehensively expresses the doctrine of Tawheed?",
    question_ru: "Какая сура наиболее полно отражает идею Единобожия (ТауХид)?",

    a: "سورۃ ناس",
    a_en: "Surah An-Nas",
    a_ru: "Сура Ан-Нас",

    b: "سورۃ محمد",
    b_en: "Surah Muhammad",
    b_ru: "Сура Мухаммад",

    c: "سورۃ فجر",
    c_en: "Surah Al-Fajr",
    c_ru: "Сура Аль-Фаджр",

    d: "سورۃ اخلاص",
    d_en: "Surah Al-Ikhlas",
    d_ru: "Сура Аль-Ихляс",

    correct: "d",
  },

  {
    question: "اللہ کا سب سے جامع اور ذاتی نام کون سا ہے؟",
    question_en: "Which is considered the most comprehensive and personal name of God?",
    question_ru: "Какое имя Аллаха считается наиболее всеобъемлющим и личным?",

    a: "قدوس",
    a_en: "Al-Quddus",
    a_ru: "Аль-Куддус",

    b: "رحیم",
    b_en: "Ar-Rahim",
    b_ru: "Ар-Рахим",

    c: "اللہ",
    c_en: "Allah",
    c_ru: "Аллах",

    d: "صمد",
    d_en: "As-Samad",
    d_ru: "Ас-Самад",

    correct: "c",
  },
];
/*************************************************
 * UTILITY – SHUFFLE
 *************************************************/
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/*************************************************
 * HELPER – GET TEXT IN CURRENT LANGUAGE
 *************************************************/
function getText(q, baseKey) {
  const lang = localStorage.getItem("quizLanguage") || "ur";
  if (lang === "en") {
    return q[baseKey + "_en"] || q[baseKey] || "";
  }
  if (lang === "ru") {
    return q[baseKey + "_ru"] || q[baseKey + "_en"] || q[baseKey] || "";
  }
  // default Urdu
  return q[baseKey] || q[baseKey + "_en"] || q[baseKey + "_ru"] || "";
}

/*************************************************
 * QUIZ STATE
 *************************************************/
let quizData = shuffle([...QUESTIONS]);
let currentQuiz = 0;
let score = 0;
let answerSelected = false;
let timeLeft = 15;
let timer = null;

/*************************************************
 * DOM ELEMENTS
 *************************************************/
const quizContainer = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const timerEl = document.getElementById("timer");
const qCounterEl = document.getElementById("qCounter");
const btnBackChapters = document.getElementById("btnBackChapters");
const answerButtons = document.querySelectorAll(".answer-btn");

// registration elements
const regScreen = document.getElementById("registration-screen");
const registerBtn = document.getElementById("registerBtn");
const homeEl = document.getElementById("home");

// Hide back button because chapters no longer exist
if (btnBackChapters) btnBackChapters.style.display = "none";
if (homeEl) homeEl.style.display = "none";

// show registration, hide quiz at start
if (quizContainer) quizContainer.style.display = "none";
if (regScreen) regScreen.style.display = "block";

/*************************************************
 * APPLY LANGUAGE DIRECTION (RTL/LTR)
 *************************************************/
function applyLanguageDirection() {
  const lang = localStorage.getItem("quizLanguage") || "ur";
  const elems = [questionEl, a_text, b_text, c_text, d_text];

  elems.forEach((el) => {
    if (!el) return;
    el.classList.remove("rtl", "ltr");

    if (lang === "ur") {
      // Urdu → Right-to-left
      el.classList.add("rtl");
    } else {
      // English & Russian → Left-to-right
      el.classList.add("ltr");
    }
  });
}

/*************************************************
 * REGISTRATION LOGIC
 *************************************************/
if (registerBtn) {
  registerBtn.addEventListener("click", () => {
    const name = document.getElementById("fullName").value.trim();
    const dob = document.getElementById("dob").value;

    if (!name || !dob) {
      alert("Please enter your full name and date of birth.");
      return;
    }

    // store for later use (result page, stats, etc.)
    localStorage.setItem("candidateName", name);
    localStorage.setItem("candidateDOB", dob);

    // hide registration, show quiz, then start quiz
    regScreen.style.display = "none";
    quizContainer.style.display = "block";

    // reset quiz state in case of reload
    quizData = shuffle([...QUESTIONS]);
    currentQuiz = 0;
    score = 0;

    loadQuiz();
  });
}

/*************************************************
 * TIMER
 *************************************************/
function startTimer() {
  clearInterval(timer);
  timeLeft = 15;
  timerEl.innerText = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    timerEl.innerText = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      selectAnswer(null);
    }
  }, 1000);
}

/*************************************************
 * LOAD NEXT QUESTION
 *************************************************/
function loadQuiz() {
  clearInterval(timer);
  startTimer();

  const q = quizData[currentQuiz];

  qCounterEl.innerText = `Q ${currentQuiz + 1} / ${quizData.length}`;

  // apply RTL/LTR for current language
  applyLanguageDirection();

  // Question + options, all in selected language
  questionEl.innerText = getText(q, "question");
  a_text.innerText = getText(q, "a");
  b_text.innerText = getText(q, "b");
  c_text.innerText = getText(q, "c");
  d_text.innerText = getText(q, "d");

  answerButtons.forEach((btn) =>
    btn.classList.remove("correct", "incorrect", "disabled")
  );
  answerSelected = false;
}

/*************************************************
 * CHOICE SELECTED
 *************************************************/
function selectAnswer(choice) {
  if (answerSelected) return;
  answerSelected = true;
  clearInterval(timer);

  const correct = quizData[currentQuiz].correct;

  answerButtons.forEach((btn) => {
    btn.classList.add("disabled");

    if (btn.id === correct) btn.classList.add("correct");
    else if (btn.id === choice) btn.classList.add("incorrect");
  });

  if (choice === correct) score++;

  setTimeout(() => {
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else endQuiz();
  }, 1000);
}

/*************************************************
 * END QUIZ SCREEN
 *************************************************/
function endQuiz() {
  const candidateName = localStorage.getItem("candidateName") || "";

  quizContainer.innerHTML = `
    <div class="result-box">
      <h2 data-i18n="quizEnd">Quiz Finished!</h2>
      ${
        candidateName
          ? `<p>Candidate: <strong>${candidateName}</strong></p>`
          : ""
      }
      <p>You scored <strong>${score}</strong> / <strong>${quizData.length}</strong></p>
      <button onclick="location.reload()" class="play-again-btn" data-i18n="playAgain">Play Again</button>
    </div>
  `;
}

/*************************************************
 * LANGUAGE SWITCHER SUPPORT
 *************************************************/
const langButtons = document.querySelectorAll("#langSwitcher button");
langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    localStorage.setItem("quizLanguage", btn.dataset.lang);
    // if quiz already visible, just reload current question in new language
    if (quizContainer.style.display !== "none") {
      loadQuiz();
    } else {
      // still on registration screen, just update direction there if needed later
      applyLanguageDirection();
    }
  });
});

