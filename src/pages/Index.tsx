const RussianFlag = () => (
  <span className="inline-flex flex-col w-7 h-[18px] rounded-[2px] overflow-hidden border border-white/20 shadow-md shrink-0">
    <span className="flex-1 bg-white" />
    <span className="flex-1 bg-[#0039A6]" />
    <span className="flex-1 bg-[#D52B1E]" />
  </span>
);

const participant = {
  lastName: 'Веретенникова',
  namePatronymic: 'Светлана Александровна',
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
      className="min-h-screen w-full flex items-center justify-center p-6"
      style={{ background: 'radial-gradient(ellipse at 50% 65%, #1c2138 0%, #0b0d16 100%)' }}
    >
      <div className="w-full max-w-2xl" style={{ perspective: '1000px' }}>
        {/* карточка */}
        <div
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(18deg)',
            filter: 'drop-shadow(0 32px 48px rgba(0,0,0,0.75))',
          }}
        >
          {/* верхняя половина — обратная сторона */}
          <div
            className="relative w-full flex items-center justify-center overflow-hidden"
            style={{
              minHeight: '100px',
              background: 'linear-gradient(180deg, #1a2035 0%, #131826 100%)',
              borderBottom: '1px solid rgba(180,150,80,0.2)',
              transform: 'rotateX(180deg)',
              transformOrigin: 'bottom center',
              borderRadius: '10px 10px 0 0',
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg,transparent,transparent 20px,rgba(255,255,255,1) 20px,rgba(255,255,255,1) 21px),repeating-linear-gradient(90deg,transparent,transparent 20px,rgba(255,255,255,1) 20px,rgba(255,255,255,1) 21px)',
              }}
            />
            <span className="font-sans text-xs tracking-[0.35em] uppercase text-primary/50 relative z-10">
              Всероссийская конференция
            </span>
          </div>

          {/* сгиб */}
          <div
            className="w-full"
            style={{
              height: '5px',
              background: 'linear-gradient(180deg, #d4aa4a 0%, #8a6418 50%, #d4aa4a 100%)',
              position: 'relative',
              zIndex: 10,
            }}
          />

          {/* нижняя половина — лицевая сторона */}
          <div
            className="relative w-full flex flex-col overflow-hidden"
            style={{
              minHeight: '200px',
              background: 'linear-gradient(180deg, #131826 0%, #0e1220 100%)',
              borderRadius: '0 0 10px 10px',
              padding: 'clamp(20px, 5vw, 44px) clamp(20px, 6vw, 52px) clamp(24px, 5vw, 44px)',
            }}
          >
            {/* фоновая сетка */}
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg,transparent,transparent 20px,rgba(255,255,255,1) 20px,rgba(255,255,255,1) 21px),repeating-linear-gradient(90deg,transparent,transparent 20px,rgba(255,255,255,1) 20px,rgba(255,255,255,1) 21px)',
              }}
            />

            {/* верхняя линия */}
            <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            {/* флаг + город */}
            <div className="flex items-center gap-2.5 mb-5 relative z-10">
              <RussianFlag />
              <span className="font-sans text-[11px] tracking-[0.28em] uppercase text-primary">
                {participant.city} · Российская Федерация
              </span>
            </div>

            {/* ФИО */}
            <div className="relative z-10 mb-4">
              <div
                className="font-display font-bold text-foreground leading-[1.05]"
                style={{ fontSize: 'clamp(1.6rem, 5vw, 2.6rem)' }}
              >
                {participant.lastName}
              </div>
              <div
                className="font-display text-foreground/90 leading-tight"
                style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.9rem)', fontWeight: 500 }}
              >
                {participant.namePatronymic}
              </div>
            </div>

            {/* разделитель */}
            <div className="w-14 h-px mb-4 relative z-10" style={{ background: 'hsl(var(--primary))' }} />

            {/* должности */}
            <div className="relative z-10 flex flex-col gap-1">
              {participant.positions.map((pos, i) => (
                <p
                  key={i}
                  className="font-sans leading-snug"
                  style={{
                    fontSize: 'clamp(0.65rem, 1.6vw, 0.78rem)',
                    color: i === 0 ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))',
                    fontWeight: i === 0 ? 600 : 400,
                  }}
                >
                  {pos}
                </p>
              ))}
            </div>

            {/* свечение снизу */}
            <div
              className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at 50% 100%, rgba(180,140,50,0.1) 0%, transparent 70%)',
              }}
            />
          </div>
        </div>

        {/* тень на столе */}
        <div
          className="w-full mx-auto mt-0.5"
          style={{
            height: '30px',
            background: 'radial-gradient(ellipse at 50% 0%, rgba(0,0,0,0.5) 0%, transparent 70%)',
            transform: 'scaleY(0.4) translateY(-15px)',
          }}
        />
      </div>
    </div>
  );
};

export default Index;
