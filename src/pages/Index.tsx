const RussianFlag = () => (
  <span className="inline-flex flex-col w-8 h-5 rounded-[2px] overflow-hidden border border-white/20 shadow-md shrink-0">
    <span className="flex-1 bg-white" />
    <span className="flex-1 bg-[#0039A6]" />
    <span className="flex-1 bg-[#D52B1E]" />
  </span>
);

const participant = {
  fullName: 'Веретенникова\nСветлана Александровна',
  positions: [
    'Индивидуальный предприниматель',
    'Общественный помощник Уполномоченного по защите прав предпринимателей',
    'Член партии «Единая Россия»',
    'Пензенское региональное отделение Общероссийской общественной организации малого и среднего предпринимательства «ОПОРА РОССИИ»',
  ],
  city: 'Пенза',
};

const Index = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-16"
      style={{ background: 'radial-gradient(ellipse at 50% 60%, #1a1f2e 0%, #0d0f18 100%)' }}
    >
      {/* perspective container */}
      <div style={{ perspective: '900px', perspectiveOrigin: '50% 80%' }}>
        <div
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(22deg)',
            filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.7))',
          }}
        >
          {/* ── ВЕРХНЯЯ ПОЛОВИНА (перевёрнутый текст — обратная сторона) ── */}
          <div
            className="relative flex flex-col items-center justify-center px-12 py-8 overflow-hidden"
            style={{
              width: '680px',
              minHeight: '180px',
              background: 'linear-gradient(180deg, #1a2035 0%, #141929 100%)',
              borderBottom: '1px solid rgba(180,150,80,0.25)',
              transform: 'rotateX(180deg)',
              transformOrigin: 'bottom center',
              borderRadius: '8px 8px 0 0',
            }}
          >
            <div className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(255,255,255,0.5) 24px, rgba(255,255,255,0.5) 25px), repeating-linear-gradient(90deg, transparent, transparent 24px, rgba(255,255,255,0.5) 24px, rgba(255,255,255,0.5) 25px)',
              }}
            />
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary/60">
              Всероссийская конференция
            </span>
          </div>

          {/* ── СГИБ ── */}
          <div
            style={{
              height: '6px',
              background: 'linear-gradient(180deg, #c9a84c 0%, #8a6820 50%, #c9a84c 100%)',
              width: '680px',
              position: 'relative',
              zIndex: 10,
            }}
          />

          {/* ── НИЖНЯЯ ПОЛОВИНА (лицевая сторона) ── */}
          <div
            className="relative flex flex-col items-start justify-between px-12 py-10 overflow-hidden"
            style={{
              width: '680px',
              minHeight: '220px',
              background: 'linear-gradient(180deg, #141929 0%, #0f1420 100%)',
              borderRadius: '0 0 8px 8px',
            }}
          >
            {/* фоновая сетка */}
            <div className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(255,255,255,0.5) 24px, rgba(255,255,255,0.5) 25px), repeating-linear-gradient(90deg, transparent, transparent 24px, rgba(255,255,255,0.5) 24px, rgba(255,255,255,0.5) 25px)',
              }}
            />

            {/* золотая линия сверху */}
            <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            {/* флаг + город */}
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <RussianFlag />
              <span
                className="font-sans text-xs tracking-[0.3em] uppercase"
                style={{ color: 'hsl(var(--primary))' }}
              >
                {participant.city} · Российская Федерация
              </span>
            </div>

            {/* ФИО */}
            <div className="relative z-10 mb-6">
              {participant.fullName.split('\n').map((line, i) => (
                <div
                  key={i}
                  className="font-display leading-tight"
                  style={{
                    fontSize: i === 0 ? '2.4rem' : '2rem',
                    fontWeight: 700,
                    color: 'hsl(var(--foreground))',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {line}
                </div>
              ))}
            </div>

            {/* разделитель */}
            <div className="w-16 h-px mb-5 relative z-10" style={{ background: 'hsl(var(--primary))' }} />

            {/* должности */}
            <div className="relative z-10 flex flex-col gap-1.5">
              {participant.positions.map((pos, i) => (
                <p
                  key={i}
                  className="font-sans leading-snug"
                  style={{
                    fontSize: '0.78rem',
                    color: i === 0
                      ? 'hsl(var(--foreground))'
                      : 'hsl(var(--muted-foreground))',
                    fontWeight: i === 0 ? 600 : 400,
                  }}
                >
                  {pos}
                </p>
              ))}
            </div>

            {/* золотое свечение снизу */}
            <div
              className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 50% 100%, rgba(180,140,50,0.12) 0%, transparent 70%)',
              }}
            />
          </div>
        </div>

        {/* тень на "столе" */}
        <div
          style={{
            width: '680px',
            height: '40px',
            marginTop: '2px',
            background: 'radial-gradient(ellipse at 50% 0%, rgba(0,0,0,0.55) 0%, transparent 70%)',
            transform: 'rotateX(90deg) translateZ(-2px)',
            transformOrigin: 'top center',
          }}
        />
      </div>
    </div>
  );
};

export default Index;
