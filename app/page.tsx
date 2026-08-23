'use client';

/* eslint-disable @next/next/no-img-element -- static assets must remain portable to GitHub Pages */

import { useEffect, useState } from 'react';

type Language = 'en' | 'zh';

const copy = {
  en: {
    nav: {
      research: 'Research',
      notes: 'Notes',
      about: 'About',
      contact: 'Contact',
    },
    eyebrow: 'Stochastic Analysis · Modern Probability · Brain-Inspired Computing',
    eyebrowZh: '随机分析 · 现代概率论 · 脑启发计算',
    statement:
      'Mathematics as a language for uncertainty — and a path toward more efficient intelligence.',
    researchLabel: 'Research threads',
    researchIntro:
      'A mathematical foundation first, with a long-term interest in the meeting point of probability, learning, and new computing paradigms.',
    research: [
      {
        title: 'Stochastic Analysis',
        body: 'Stochastic calculus, SDEs, Malliavin calculus, SPDEs, and their analytical foundations.',
      },
      {
        title: 'Modern Probability',
        body: 'Probability theory, measure, martingales, limit theorems, and probabilistic methods.',
      },
      {
        title: 'Brain-Inspired Efficient Intelligence',
        body: 'Long-term exploration of brain principles for more data-efficient, robust, and generalizable AI systems.',
      },
    ],
    noteStatus: 'Outline established · Work in progress',
    noteTitle: '300 Lectures on Probability & Stochastic Analysis',
    noteBody:
      'A structured learning route from analysis and measure theory to modern probability, continuous-time stochastic analysis, and selected research frontiers.',
    viewPdf: 'Preview the current PDF',
    downloadPdf: 'Download PDF',
    noteMeta: 'Current outline · 39 pages · 25 modules · 300 planned lectures',
    outlineLabel: 'Five-stage route',
    outline: [
      'Analysis & measure-theoretic foundations',
      'Core modern probability',
      'Stochastic processes & advanced probability',
      'Continuous-time stochastic analysis',
      'Research frontiers: rough paths, singular SPDEs, mean-field systems & diffusion models',
    ],
    aboutLabel: 'About',
    aboutTitle: 'Building a rigorous path into stochastic analysis.',
    aboutBody:
      'I am Shen Han, a graduate of Data Science and Big Data Technology at Ningbo University of Finance & Economics. I am preparing for Master’s study in Applied Mathematics, with stochastic analysis as my intended direction.',
    aboutBodyTwo:
      'The probability tradition at Moscow State University is an important academic reference point for me. In the longer term, I hope to pursue doctoral research in the United States, Singapore, or Hong Kong.',
    foundationLabel: 'Mathematical foundation',
    courses: [
      'Mathematical Analysis',
      'Advanced Algebra',
      'Point-set Topology',
      'Probability Theory',
      'Measure Theory',
      'Foundations of Functional Analysis',
      'Foundations of ODEs',
      'Differential Geometry',
    ],
    questionsLabel: 'Questions that guide me',
    questions: [
      'How can probabilistic theory provide useful abstractions for learning and intelligent systems?',
      'Which principles of biological information processing are genuinely transferable to artificial systems?',
      'Can a tighter coupling of memory and computation move large models beyond today’s efficiency limits?',
    ],
    contactLabel: 'Contact',
    contactTitle: 'For academic conversation, reading suggestions, or collaboration.',
    github: 'GitHub',
    primaryEmail: 'Academic email',
    secondaryEmail: 'QQ email',
    footer: 'Shen Han · Probability, structure, and efficient intelligence.',
  },
  zh: {
    nav: {
      research: '研究方向',
      notes: '讲义',
      about: '关于我',
      contact: '联系',
    },
    eyebrow: '随机分析 · 现代概率论 · 脑启发计算',
    eyebrowZh: 'Stochastic Analysis · Modern Probability · Brain-Inspired Computing',
    statement: '以数学理解不确定性，并由此探索更高效的智能。',
    researchLabel: '研究兴趣',
    researchIntro:
      '以扎实的数学基础为起点，长期关注概率、学习理论与新型计算范式的交汇处。',
    research: [
      {
        title: '随机分析',
        body: '随机微积分、随机微分方程、Malliavin 分析、SPDE 及其分析基础。',
      },
      {
        title: '现代概率论',
        body: '概率论、测度、鞅、极限定理及现代概率方法。',
      },
      {
        title: '脑启发高效智能',
        body: '长期探索更高效、鲁棒且具泛化能力的脑启发智能系统。',
      },
    ],
    noteStatus: '目录与整体结构已确定 · 持续编写中',
    noteTitle: '《从零基础到概率论与随机分析前沿》300 讲',
    noteBody:
      '一条从分析与测度论基础出发，经过现代概率论与连续时间随机分析，最终通往若干研究前沿的系统学习路线。',
    viewPdf: '预览当前 PDF',
    downloadPdf: '下载 PDF',
    noteMeta: '当前目录版本 · 39 页 · 25 个模块 · 计划 300 讲',
    outlineLabel: '五阶段学习路线',
    outline: [
      '分析与测度论基础',
      '现代概率论核心',
      '随机过程与高级概率',
      '连续时间随机分析',
      '研究前沿：粗糙路径、奇异 SPDE、平均场系统与扩散模型',
    ],
    aboutLabel: '关于我',
    aboutTitle: '正在建立一条通往随机分析研究的严谨路径。',
    aboutBody:
      '我是沈翰，本科毕业于宁波财经学院数据科学与大数据技术专业。目前正在准备应用数学硕士阶段的学习，并计划以随机分析作为主要方向。',
    aboutBodyTwo:
      '莫斯科国立大学的概率论传统是我重要的学术参照。更长期来看，我希望未来能够在美国、新加坡或香港继续攻读博士并从事研究。',
    foundationLabel: '数学基础',
    courses: [
      '数学分析',
      '高等代数',
      '点集拓扑',
      '概率论',
      '测度论',
      '泛函分析基础',
      '常微分方程基础',
      '微分几何',
    ],
    questionsLabel: '驱动我的问题',
    questions: [
      '概率理论能否为学习过程与智能系统提供有用的数学抽象？',
      '生物信息处理中的哪些原则能够真正迁移到人工系统？',
      '更紧密的存储—计算耦合能否突破大模型当前的效率边界？',
    ],
    contactLabel: '联系',
    contactTitle: '欢迎交流学术问题、阅读建议与未来合作可能。',
    github: 'GitHub',
    primaryEmail: '学术邮箱',
    secondaryEmail: 'QQ 邮箱',
    footer: '沈翰 · 概率、结构与高效智能。',
  },
} as const;

const researchImages = [
  '/assets/icon-stochastic.png',
  '/assets/icon-probability.png',
  '/assets/icon-neural-network.png',
];

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
  }, [language]);

  return (
    <main>
      <header className="site-header" aria-label="Primary navigation">
        <nav className="site-nav">
          <div className="nav-links">
            <a href="#research">{t.nav.research}</a>
            <a href="#notes">{t.nav.notes}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>
          <button
            className="language-switch"
            type="button"
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
            aria-label={language === 'en' ? '切换为中文' : 'Switch to English'}
          >
            <span className={language === 'en' ? 'active-language' : ''}>EN</span>
            <span aria-hidden="true">/</span>
            <span className={language === 'zh' ? 'active-language' : ''}>中文</span>
          </button>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">
            <span className="hero-name">SHEN HAN</span>
            <span className="hero-name-zh">沈翰</span>
          </h1>
          <p className="hero-eyebrow">{t.eyebrow}</p>
          <p className="hero-eyebrow hero-eyebrow-secondary">{t.eyebrowZh}</p>
          <span className="short-rule" aria-hidden="true" />
          <p className="hero-statement">
            {language === 'en' ? (
              <>
                Mathematics as a language for uncertainty —
                <br />
                and a path toward more efficient intelligence.
              </>
            ) : (
              t.statement
            )}
          </p>
        </div>

        <figure className="hero-visual" aria-label="A stochastic path flowing into a neural network">
          <img src="/assets/hero-stochastic-brain-final.png" alt="" />
        </figure>
      </section>

      <section className="research-section" id="research" aria-labelledby="research-title">
        <div className="section-intro">
          <p className="section-kicker">{t.researchLabel}</p>
          <h2 id="research-title">{t.researchIntro}</h2>
        </div>

        <div className="research-grid">
          {t.research.map((item, index) => (
            <article className="research-item" key={item.title}>
              <img src={researchImages[index]} alt="" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="notes-section" id="notes" aria-labelledby="notes-title">
        <div className="featured-note">
          <img className="book-icon" src="/assets/icon-lecture-book.png" alt="" />
          <div className="note-copy">
            <p className="status-line">{t.noteStatus}</p>
            <h2 id="notes-title">{t.noteTitle}</h2>
            <p>{t.noteBody}</p>
            <div className="note-actions">
              <a
                href="/notes/probability-stochastic-analysis-300-lectures.pdf"
                target="_blank"
                rel="noreferrer"
              >
                {t.viewPdf}
              </a>
              <a href="/notes/probability-stochastic-analysis-300-lectures.pdf" download>
                {t.downloadPdf}
              </a>
            </div>
          </div>
        </div>

        <div className="note-detail">
          <figure className="note-cover-wrap">
            <img
              className="note-cover"
              src="/assets/lecture-note-cover.png"
              alt={language === 'en' ? 'Cover of the current lecture-note outline' : '当前讲义目录版本封面'}
            />
            <figcaption>{t.noteMeta}</figcaption>
          </figure>
          <div className="outline-list">
            <p className="section-kicker">{t.outlineLabel}</p>
            <ol>
              {t.outline.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="about-copy">
          <div className="about-heading-row">
            <img
              className="personal-avatar"
              src="/assets/shen-han-avatar-v2.png"
              alt={language === 'en' ? 'Illustrated avatar of Shen Han' : '沈翰的插画头像'}
            />
            <div>
              <p className="section-kicker">{t.aboutLabel}</p>
              <h2 id="about-title">{t.aboutTitle}</h2>
            </div>
          </div>
          <p>{t.aboutBody}</p>
          <p>{t.aboutBodyTwo}</p>
        </div>
        <div className="foundation">
          <p className="section-kicker">{t.foundationLabel}</p>
          <ul>
            {t.courses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="questions-section" aria-labelledby="questions-title">
        <p className="section-kicker" id="questions-title">
          {t.questionsLabel}
        </p>
        <ol>
          {t.questions.map((question, index) => (
            <li key={question}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{question}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="section-kicker">{t.contactLabel}</p>
          <h2 id="contact-title">{t.contactTitle}</h2>
        </div>
        <div className="contact-links">
          <a href="https://github.com/Han-Shen-math" target="_blank" rel="noreferrer">
            <span>{t.github}</span>
            <strong>Han-Shen-math</strong>
          </a>
          <a href="mailto:phanthingocchau84@gmail.com">
            <span>{t.primaryEmail}</span>
            <strong>phanthingocchau84@gmail.com</strong>
          </a>
          <a href="mailto:3147210157@qq.com">
            <span>{t.secondaryEmail}</span>
            <strong>3147210157@qq.com</strong>
          </a>
        </div>
      </section>

      <footer>
        <p>{t.footer}</p>
        <a href="#hero-title">{language === 'en' ? 'Back to top' : '返回顶部'}</a>
      </footer>
    </main>
  );
}
