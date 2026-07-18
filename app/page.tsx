"use client";

import { useState } from "react";

const services = [
  ["Имплантация одного зуба", "Восстановим зуб с естественной эстетикой и комфортом", "от 28 000 ₽"],
  ["All-on-4", "Несъёмная улыбка при полной или почти полной потере зубов", "от 180 000 ₽"],
  ["Костная пластика", "Подготовим надёжную основу для имплантации", "от 20 000 ₽"],
];

const steps = [
  ["01", "Консультация", "Врач оценивает состояние зубов, отвечает на вопросы и предлагает варианты лечения."],
  ["02", "Диагностика", "КТ в нашем диагностическом центре помогает спланировать лечение точно и безопасно."],
  ["03", "Имплантация", "Проводим операцию по индивидуальному протоколу с заботой о вашем комфорте."],
  ["04", "Новая улыбка", "После приживления устанавливаем коронку и остаёмся на связи для наблюдения."],
];

export default function Home() {
  const [open, setOpen] = useState<number | null>(0);
  const [sent, setSent] = useState(false);
  return (
    <main>
      <header className="nav"><a className="brand" href="#top"><span className="brand-mark">✦</span><span>Семейная<br/><b>стоматология</b></span></a><nav><a href="#services">Услуги</a><a href="#process">Как лечим</a><a href="#doctors">Врачи</a><a href="#prices">Цены</a><a href="#contacts">Контакты</a></nav><a className="phone" href="tel:+79283550099">8 928 355-00-99</a><button className="menu" aria-label="Открыть меню">☰</button></header>

      <section className="hero" id="top"><div className="hero-copy"><div className="eyebrow">Пятигорск · с 2011 года</div><h1>Улыбка, которой<br/><em>хочется делиться</em></h1><p>Имплантация и стоматология для всей семьи — с точной диагностикой, понятным планом и заботой на каждом этапе.</p><div className="actions"><a className="button primary" href="#appointment">Записаться на консультацию <span>↗</span></a><a className="button secondary" href="#prices">Посмотреть цены</a></div><div className="trust"><span>✓</span> Лицензированная клиника <i/> <span>✓</span> КТ на месте <i/> <span>✓</span> Гарантия на лечение</div></div><div className="hero-visual"><div className="hero-card"><span>01</span><strong>Персональный<br/>план лечения</strong><small>Обсудим все варианты<br/>до начала лечения</small></div><div className="orb orb-a"/><div className="orb orb-b"/><div className="portrait"><div className="portrait-head"/><div className="portrait-body"/></div></div></section>

      <section className="stats"><div><b>15+</b><span>лет заботимся<br/>о пациентах</span></div><div><b>4.9</b><span>средняя оценка<br/>по отзывам</span></div><div><b>1 500+</b><span>установленных<br/>имплантов</span></div><div><b>1 день</b><span>до первичной<br/>консультации</span></div></section>

      <section className="section" id="services"><div className="section-head"><div><div className="eyebrow">Наши направления</div><h2>Помогаем вернуть<br/><em>комфорт и уверенность</em></h2></div><p>От профилактики до сложной имплантации — все специалисты и диагностика в одном месте.</p></div><div className="service-grid">{services.map(([title, desc, price], i) => <article className="service" key={title}><div className="service-top"><span>0{i + 1}</span><span className="arrow">↗</span></div><h3>{title}</h3><p>{desc}</p><strong>{price}</strong></article>)}</div><a className="text-link" href="#appointment">Все услуги <span>→</span></a></section>

      <section className="process" id="process"><div className="eyebrow">Как всё проходит</div><h2>Спокойно. Понятно.<br/><em>По-человечески.</em></h2><div className="step-grid">{steps.map(([num, title, text]) => <div className="step" key={num}><span className="step-num">{num}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section className="doctor section" id="doctors"><div className="doctor-image"><div className="doctor-shape"/><div className="doctor-silhouette"/></div><div className="doctor-copy"><div className="eyebrow">Ваш врач</div><h2>Рубен<br/><em>Арутюнян</em></h2><p className="role">Стоматолог-хирург, ортопед</p><p>Объясняет сложное простыми словами и помогает выбрать лечение, которое подходит именно вам — без давления и лишних процедур.</p><div className="doctor-tags"><span>15 лет опыта</span><span>Имплантация</span><span>Протезирование</span></div><a className="text-link" href="#appointment">Записаться к врачу <span>→</span></a></div></section>

      <section className="price-section" id="prices"><div className="section-head"><div><div className="eyebrow">Прозрачная стоимость</div><h2>Знаете цену<br/><em>до начала лечения</em></h2></div><p>Финальная смета зависит от клинической ситуации. На консультации врач подробно разберёт состав каждого этапа.</p></div><div className="price-table">{[["Имплантация B&B, Италия", "28 000 ₽"], ["Имплантация Dentium", "23 000 ₽"], ["Имплантация Nobel Biocare", "50 000 ₽"], ["All-on-4, мультиюниты", "180 000 ₽"]].map(([a,b]) => <div key={a}><span>{a}</span><b>{b}</b><span>↗</span></div>)}</div></section>

      <section className="faq section"><div className="eyebrow">Частые вопросы</div><h2>Перед первым визитом<br/><em>важно знать</em></h2><div className="faq-list">{["Это больно?", "Сколько длится лечение?", "Что входит в стоимость?", "Есть ли гарантия?"].map((q, i) => <div className="faq-item" key={q} onClick={() => setOpen(open === i ? null : i)}><div><b>{q}</b>{open === i && <p>{i === 0 ? "Операция проходит под анестезией. Врач подбирает метод обезболивания индивидуально, а после даёт подробные рекомендации по восстановлению." : "Точный ответ зависит от вашей ситуации — врач расскажет о сроках на консультации и составит понятный план лечения."}</p>}</div><span>{open === i ? "−" : "+"}</span></div>)}</div></section>

      <section className="appointment" id="appointment"><div><div className="eyebrow">Первый шаг к новой улыбке</div><h2>Запишитесь на<br/><em>консультацию</em></h2><p>Оставьте контакты — администратор перезвонит, ответит на вопросы и подберёт удобное время.</p></div><form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>{sent ? <div className="success"><b>Заявка принята</b><span>Администратор свяжется с вами в рабочее время.</span><button className="button secondary" type="button" onClick={() => setSent(false)}>Оставить ещё одну заявку</button></div> : <><label>Ваше имя<input required placeholder="Как к вам обращаться" /></label><label>Номер телефона<input required placeholder="+7 (___) ___-__-__" /></label><label className="consent"><input type="checkbox" required /><span>Согласен на обработку персональных данных</span></label><button className="button primary" type="submit">Записаться <span>↗</span></button><small>Медицинские услуги имеют противопоказания. Необходима консультация специалиста.</small></>}</form></section>

      <footer id="contacts"><div className="footer-top"><a className="brand" href="#top"><span className="brand-mark">✦</span><span>Семейная<br/><b>стоматология</b></span></a><div><b>Адрес</b><p>г. Пятигорск,<br/>ул. Крайнего, 71</p></div><div><b>Режим работы</b><p>Пн–пт: 8:30–19:00<br/>Сб–вс: 9:00–18:00</p></div><div><b>Связаться</b><p><a href="tel:+79283550099">8 928 355-00-99</a><br/><a href="mailto:family_dentistry@mail.ru">family_dentistry@mail.ru</a></p></div></div><div className="footer-bottom"><span>© 2026 ООО «Клиник Донте»</span><span>Медицинские услуги имеют противопоказания. Необходима консультация специалиста.</span><a href="#top">Наверх ↑</a></div></footer>
    </main>
  );
}
