import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const slots=['08:00','10:00','12:00','16:00','18:00','20:00'];
function App(){return <main className="app"><header><div><span className="eyebrow">BEACH TENNIS • ARG</span><h1>BT ARG</h1><p>رزرو سریع و ساده زمین تنیس ساحلی</p></div><button>ورود</button></header><section className="hero"><div><h2>سانس موردنظرت را انتخاب کن</h2><p>امروز، دوشنبه ۳ شهریور ۱۴۰۵</p></div><div className="date">۲۴<br/><small>مرداد</small></div></section><section><h3>سانس‌های امروز</h3><div className="slots">{slots.map(s=><button className="slot" key={s}><strong>{s}</strong><span>زمین ۱</span></button>)}</div></section><nav><a className="active">رزرو</a><a>رزروهای من</a><a>پروفایل</a></nav></main>}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);