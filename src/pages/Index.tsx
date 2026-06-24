import { useState, useMemo } from 'react';
import Icon from '@/components/ui/icon';

interface Participant {
  id: number;
  fullName: string;
  position: string;
  city: string;
}

const participants: Participant[] = [
  { id: 1, fullName: 'Соколов Андрей Викторович', position: 'Генеральный директор', city: 'Москва' },
  { id: 2, fullName: 'Морозова Елена Сергеевна', position: 'Финансовый директор', city: 'Санкт-Петербург' },
  { id: 3, fullName: 'Кузнецов Дмитрий Александрович', position: 'Руководитель департамента', city: 'Екатеринбург' },
  { id: 4, fullName: 'Петрова Ольга Николаевна', position: 'Главный аналитик', city: 'Новосибирск' },
  { id: 5, fullName: 'Волков Игорь Михайлович', position: 'Технический директор', city: 'Казань' },
  { id: 6, fullName: 'Смирнова Анна Павловна', position: 'Директор по развитию', city: 'Нижний Новгород' },
  { id: 7, fullName: 'Лебедев Сергей Юрьевич', position: 'Коммерческий директор', city: 'Краснодар' },
  { id: 8, fullName: 'Новикова Татьяна Игоревна', position: 'Руководитель проектов', city: 'Самара' },
  { id: 9, fullName: 'Орлов Михаил Дмитриевич', position: 'Директор по маркетингу', city: 'Ростов-на-Дону' },
  { id: 10, fullName: 'Васильева Ирина Олеговна', position: 'HR-директор', city: 'Уфа' },
];

const RussianFlag = () => (
  <span className="inline-flex flex-col w-6 h-4 rounded-[2px] overflow-hidden border border-border/60 shadow-sm shrink-0">
    <span className="flex-1 bg-white" />
    <span className="flex-1 bg-[#0039A6]" />
    <span className="flex-1 bg-[#D52B1E]" />
  </span>
);

const Index = () => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return participants;
    return participants.filter(
      (p) =>
        p.fullName.toLowerCase().includes(q) ||
        p.position.toLowerCase().includes(q) ||
        p.city.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <header className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-primary/50" />
            <RussianFlag />
            <span className="h-px w-12 bg-primary/50" />
          </div>
          <p className="font-sans text-xs md:text-sm tracking-[0.35em] uppercase text-primary mb-4">
            Всероссийская конференция
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Список участников
          </h1>
          <p className="font-sans text-muted-foreground mt-5 max-w-xl mx-auto">
            Официальный реестр делегатов с указанием должности и города представительства
          </p>
        </header>

        <div className="relative mb-8 max-w-md mx-auto">
          <Icon
            name="Search"
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск по ФИО, должности или городу"
            className="w-full bg-card border border-border rounded-sm pl-11 pr-4 py-3 font-sans text-sm outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
          />
        </div>

        <div className="border border-border rounded-sm overflow-hidden bg-card shadow-2xl shadow-black/40">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-secondary/60 border-b border-border">
                  <th className="font-sans text-xs uppercase tracking-wider text-primary font-semibold text-left px-6 py-4 w-12">
                    №
                  </th>
                  <th className="font-sans text-xs uppercase tracking-wider text-primary font-semibold text-left px-6 py-4">
                    Фамилия, имя, отчество
                  </th>
                  <th className="font-sans text-xs uppercase tracking-wider text-primary font-semibold text-left px-6 py-4">
                    Должность
                  </th>
                  <th className="font-sans text-xs uppercase tracking-wider text-primary font-semibold text-left px-6 py-4">
                    Город
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p, i) => (
                  <tr
                    key={p.id}
                    className="border-b border-border/60 last:border-0 hover:bg-secondary/40 transition-colors"
                  >
                    <td className="font-sans text-sm text-muted-foreground px-6 py-4">
                      {String(i + 1).padStart(2, '0')}
                    </td>
                    <td className="font-sans text-sm font-medium px-6 py-4 whitespace-nowrap">
                      {p.fullName}
                    </td>
                    <td className="font-sans text-sm text-foreground/80 px-6 py-4">
                      {p.position}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-2.5 font-sans text-sm whitespace-nowrap">
                        <RussianFlag />
                        {p.city}
                      </span>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td
                      colSpan={4}
                      className="text-center py-12 font-sans text-sm text-muted-foreground"
                    >
                      По вашему запросу участников не найдено
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <footer className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 font-sans text-xs text-muted-foreground">
          <span>Всего участников: {participants.length}</span>
          <span className="flex items-center gap-2">
            <RussianFlag />
            Российская Федерация · {new Date().getFullYear()}
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Index;
