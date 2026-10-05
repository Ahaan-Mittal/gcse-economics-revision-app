const topics = [
  {
    id: 'scarcity',
    title: 'Scarcity and Choice',
    summary: 'How limited resources affect decisions and opportunity cost.',
    keyTerms: ['scarcity', 'choice', 'opportunity cost', 'resources'],
    sections: [
      {
        heading: 'What is scarcity?',
        content:
          'Scarcity exists because wants are unlimited while resources are limited. This means individuals, firms and governments must make choices about how to use resources.',
      },
      {
        heading: 'Opportunity cost',
        content:
          'Opportunity cost is the next best alternative forgone when a decision is made. For example, if a student spends time revising instead of going out, the opportunity cost is the enjoyment they miss.',
      },
      {
        heading: 'Why it matters',
        content:
          'Scarcity forces economic agents to prioritise spending, production and consumption. It is central to how markets and governments make decisions.',
      },
    ],
  },
  {
    id: 'demand',
    title: 'Demand',
    summary: 'The willingness and ability of consumers to buy goods and services.',
    keyTerms: ['demand', 'price', 'income', 'substitutes'],
    sections: [
      {
        heading: 'Definition',
        content:
          'Demand is the quantity of a good or service that consumers are willing and able to buy at different prices over a period of time.',
      },
      {
        heading: 'Law of demand',
        content:
          'As price falls, quantity demanded usually rises, and as price rises, quantity demanded usually falls. This is shown by a downward-sloping demand curve.',
      },
      {
        heading: 'Shifts in demand',
        content:
          'Demand can shift due to changes in income, tastes, population, advertising, prices of substitutes and complements, and expectations.',
      },
    ],
  },
  {
    id: 'supply',
    title: 'Supply',
    summary: 'The amount firms are willing and able to offer for sale.',
    keyTerms: ['supply', 'costs', 'productivity', 'equilibrium'],
    sections: [
      {
        heading: 'Definition',
        content:
          'Supply is the quantity of a good or service producers are willing and able to offer for sale at different prices over a period of time.',
      },
      {
        heading: 'Law of supply',
        content:
          'As price rises, quantity supplied generally rises, and as price falls, quantity supplied falls. The supply curve slopes upwards.',
      },
      {
        heading: 'Shifts in supply',
        content:
          'Supply shifts if there are changes in production costs, technology, taxes, subsidies, weather, or the number of firms in the market.',
      },
    ],
  },
  {
    id: 'equilibrium',
    title: 'Equilibrium Price',
    summary: 'The price where demand and supply meet.',
    keyTerms: ['equilibrium', 'market clearing', 'surplus', 'shortage'],
    sections: [
      {
        heading: 'Market equilibrium',
        content:
          'Equilibrium is where the quantity demanded equals the quantity supplied, creating a market-clearing price.',
      },
      {
        heading: 'Surplus and shortage',
        content:
          'If price is above equilibrium, there is a surplus. If price is below equilibrium, there is a shortage. Markets tend to move back towards equilibrium.',
      },
      {
        heading: 'Exam tip',
        content:
          'Remember to explain both the price and quantity effects when demand or supply changes.',
      },
    ],
  },
  {
    id: 'inflation',
    title: 'Inflation',
    summary: 'A sustained rise in the general price level.',
    keyTerms: ['inflation', 'CPI', 'purchasing power', 'cost-push'],
    sections: [
      {
        heading: 'Definition',
        content:
          'Inflation is a sustained increase in the general price level of goods and services in an economy over time.',
      },
      {
        heading: 'Causes',
        content:
          'Inflation can be caused by higher demand (demand-pull) or higher costs of production (cost-push).',
      },
      {
        heading: 'Effects',
        content:
          'Inflation reduces the purchasing power of money, may lower real wages, and can create uncertainty for households and businesses.',
      },
    ],
  },
  {
    id: 'unemployment',
    title: 'Unemployment',
    summary: 'People who are willing and able to work but are not in employment.',
    keyTerms: ['unemployment', 'labour force', 'frictional', 'cyclical'],
    sections: [
      {
        heading: 'Definition',
        content:
          'Unemployment measures the proportion of the labour force who are without work but actively seeking employment.',
      },
      {
        heading: 'Types',
        content:
          'Types include frictional unemployment, structural unemployment and cyclical unemployment. Each has different causes and policy implications.',
      },
      {
        heading: 'Why it matters',
        content:
          'High unemployment reduces income, lowers living standards and can lead to less tax revenue for the government.',
      },
    ],
  },
  {
    id: 'gdp',
    title: 'GDP and Economic Growth',
    summary: 'Measures of output, income and growth in an economy.',
    keyTerms: ['GDP', 'economic growth', 'output', 'real GDP'],
    sections: [
      {
        heading: 'Gross Domestic Product',
        content:
          'GDP is the total value of all goods and services produced in a country over a period of time.',
      },
      {
        heading: 'Economic growth',
        content:
          'Economic growth occurs when output increases over time. This can improve living standards if growth is sustained and includes productivity gains.',
      },
      {
        heading: 'Limitations',
        content:
          'GDP does not measure inequality, environmental damage, or unpaid work, so it is not a complete picture of well-being.',
      },
    ],
  },
  {
    id: 'taxation',
    title: 'Taxation',
    summary: 'How governments raise revenue and influence behaviour.',
    keyTerms: ['tax', 'direct tax', 'indirect tax', 'government revenue'],
    sections: [
      {
        heading: 'Purpose of tax',
        content:
          'Governments levy taxes to raise revenue, redistribute incomes and correct market failures such as pollution or harmful consumption.',
      },
      {
        heading: 'Direct and indirect tax',
        content:
          'Direct taxes are paid directly to the government by individuals or firms, while indirect taxes are charged on spending and included in prices.',
      },
      {
        heading: 'Impact',
        content:
          'Taxes can reduce consumer demand, affect business costs and influence income distribution depending on the tax structure.',
      },
    ],
  },
  {
    id: 'market-failure',
    title: 'Market Failure',
    summary: 'When free markets do not allocate resources efficiently.',
    keyTerms: ['externalities', 'public goods', 'market failure'],
    sections: [
      {
        heading: 'Definition',
        content:
          'Market failure occurs when the price mechanism leads to a misallocation of resources, so society’s outcome is inefficient.',
      },
      {
        heading: 'Examples',
        content:
          'Examples include pollution (negative externalities), education (positive externalities), and public goods such as street lighting.',
      },
      {
        heading: 'Government response',
        content:
          'Governments may tax, subsidise, regulate or provide goods directly to improve economic outcomes.',
      },
    ],
  },
  {
    id: 'money',
    title: 'Money and Banking',
    summary: 'The role of money in exchange and how banking systems operate.',
    keyTerms: ['money', 'bank', 'loan', 'interest'],
    sections: [
      {
        heading: 'Functions of money',
        content:
          'Money serves as a medium of exchange, unit of account, store of value and standard of deferred payment.',
      },
      {
        heading: 'Banks',
        content:
          'Banks accept deposits, offer loans and provide financial services. They also help create money through lending.',
      },
      {
        heading: 'Interest rates',
        content:
          'Interest rates influence borrowing, saving and spending. Lower rates usually stimulate demand, while higher rates may reduce it.',
      },
    ],
  },
  {
    id: 'business',
    title: 'Business Costs and Revenue',
    summary: 'How firms calculate profit and manage costs.',
    keyTerms: ['fixed costs', 'variable costs', 'revenue', 'profit'],
    sections: [
      {
        heading: 'Costs',
        content:
          'Fixed costs do not change with output, while variable costs rise as production increases.',
      },
      {
        heading: 'Revenue',
        content:
          'Revenue is the money a firm receives from sales. Profit is total revenue minus total costs.',
      },
      {
        heading: 'Decision making',
        content:
          'Firms use cost and revenue information to decide output, pricing and whether to expand or reduce production.',
      },
    ],
  },
  {
    id: 'trade',
    title: 'International Trade',
    summary: 'Why countries import and export goods and services.',
    keyTerms: ['exports', 'imports', 'specialisation', 'globalisation'],
    sections: [
      {
        heading: 'Why trade?',
        content:
          'Countries trade because they have different resources, skills and opportunities. Specialisation can increase efficiency and productivity.',
      },
      {
        heading: 'Benefits',
        content:
          'Trade can give consumers more choice, lower prices and allow firms to sell in larger markets.',
      },
      {
        heading: 'Costs',
        content:
          'Trade can also create pressure on domestic firms, job losses in some industries and greater dependence on imports.',
      },
    ],
  },
  {
    id: 'government-role',
    title: 'Role of Government',
    summary: 'How government actions affect the economy.',
    keyTerms: ['fiscal policy', 'monetary policy', 'public services'],
    sections: [
      {
        heading: 'Government objectives',
        content:
          'Governments often aim to achieve low inflation, low unemployment, economic growth and a stable environment.',
      },
      {
        heading: 'Policy tools',
        content:
          'They may adjust taxation, spending, interest rates, and regulation to influence economic activity.',
      },
      {
        heading: 'Trade-off',
        content:
          'Policy decisions often involve trade-offs, such as reducing inflation but risking lower growth or higher unemployment.',
      },
    ],
  },
];

const quizQuestions = [
  {
    question: 'What is the opportunity cost of choosing to revise instead of going out?',
    options: [
      'The cost of revision notes',
      'The enjoyment of going out',
      'The price of the bus ticket',
      'The time spent revising',
    ],
    correct: 1,
  },
  {
    question: 'According to the law of demand, what happens when price rises?',
    options: ['Demand increases', 'Quantity demanded falls', 'Supply falls', 'Price becomes fixed'],
    correct: 1,
  },
  {
    question: 'What is a surplus in a market?',
    options: [
      'Where demand is greater than supply',
      'Where supply is greater than demand',
      'Where price is below equilibrium',
      'Where government intervenes',
    ],
    correct: 1,
  },
  {
    question: 'Which is the most likely cause of inflation?',
    options: ['A fall in wages', 'A rise in the general price level', 'A fall in consumer spending', 'A rise in unemployment'],
    correct: 1,
  },
  {
    question: 'GDP measures:',
    options: [
      'The level of unemployment in a country',
      'The total value of output in a country',
      'The number of imports',
      'The amount of government spending',
    ],
    correct: 1,
  },
];

const state = {
  currentPage: 'home',
  currentTopic: null,
  quizAnswers: Array(quizQuestions.length).fill(null),
};

function showPage(pageName) {
  state.currentPage = pageName;

  document.querySelectorAll('.page').forEach((page) => {
    page.classList.toggle('active', page.id === `${pageName}-page`);
  });

  if (pageName === 'topics') {
    renderTopics();
  }

  if (pageName === 'quiz') {
    renderQuiz();
  }

  if (pageName === 'progress') {
    renderProgress();
  }
}

function renderTopics() {
  const topicsGrid = document.getElementById('topics-grid');
  topicsGrid.innerHTML = topics
    .map(
      (topic) => `
        <article class="topic-card">
          <h3>${topic.title}</h3>
          <p>${topic.summary}</p>
          <button onclick="openTopic('${topic.id}')">Study Topic</button>
        </article>
      `
    )
    .join('');
}

function openTopic(topicId) {
  const selectedTopic = topics.find((topic) => topic.id === topicId);
  state.currentTopic = selectedTopic;
  state.currentPage = 'topic-detail';

  const detail = document.getElementById('topic-detail-content');
  detail.innerHTML = `
    <h2>${selectedTopic.title}</h2>
    <p>${selectedTopic.summary}</p>
    ${selectedTopic.sections
      .map(
        (section) => `
          <section class="topic-section">
            <h3>${section.heading}</h3>
            <p>${section.content}</p>
          </section>
        `
      )
      .join('')}
    <div class="topic-section">
      <h3>Key Terms</h3>
      <ul>
        ${selectedTopic.keyTerms.map((term) => `<li>${term}</li>`).join('')}
      </ul>
    </div>
  `;

  showPage('topics');
  document.getElementById('topic-detail-page').classList.add('active');
  document.getElementById('topics-page').classList.remove('active');
  const detailPage = document.getElementById('topic-detail-page');
  detailPage.classList.add('active');
}

function renderQuiz() {
  const quizContent = document.getElementById('quiz-content');
  quizContent.innerHTML = `
    ${quizQuestions
      .map(
        (question, index) => `
          <div class="quiz-question">
            <h3>${index + 1}. ${question.question}</h3>
            <div class="quiz-options">
              ${question.options
                .map(
                  (option, optionIndex) => `
                    <button
                      class="quiz-option ${state.quizAnswers[index] !== null ? (optionIndex === question.correct ? 'correct' : state.quizAnswers[index] === optionIndex ? 'incorrect' : '') : ''}"
                      onclick="submitAnswer(${index}, ${optionIndex})"
                    >
                      ${option}
                    </button>
                  `
                )
                .join('')}
            </div>
          </div>
        `
      )
      .join('')}
    <div class="quiz-result">Score: ${calculateQuizScore()}%</div>
  `;
}

function submitAnswer(questionIndex, optionIndex) {
  state.quizAnswers[questionIndex] = optionIndex;
  renderQuiz();
  renderProgress();
}

function calculateQuizScore() {
  const answered = state.quizAnswers.filter((answer) => answer !== null).length;
  if (answered === 0) return 0;

  const correct = state.quizAnswers.reduce((count, answer, index) => {
    return answer === quizQuestions[index].correct ? count + 1 : count;
  }, 0);

  return Math.round((correct / quizQuestions.length) * 100);
}

function renderProgress() {
  const topicsLearned = topics.length;
  const progressList = document.getElementById('progress-list');
  const quizScore = calculateQuizScore();

  document.getElementById('topics-learned').textContent = `${topicsLearned}/${topics.length}`;
  document.getElementById('quiz-score').textContent = `${quizScore}%`;
  document.getElementById('study-time').textContent = `${Math.max(1, Math.round(quizScore / 15))}h`;

  progressList.innerHTML = topics
    .map(
      (topic, index) => `
        <div class="progress-item">
          <span class="progress-label">${topic.title}</span>
          <span class="progress-tag">${index < topicsLearned ? 'Reviewed' : 'Planned'}</span>
        </div>
      `
    )
    .join('');
}

showPage('home');
renderTopics();
renderProgress();
