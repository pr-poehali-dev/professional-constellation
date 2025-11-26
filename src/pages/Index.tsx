import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

interface TeamMember {
  name: string;
  role: string;
  icon: string;
}

interface Achievement {
  title: string;
  value: string;
  icon: string;
  description: string;
}

const Index = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [activeSection, setActiveSection] = useState<string>('constellation');

  useEffect(() => {
    const constellationStars: Star[] = [
      { id: 1, x: 50, y: 20, size: 16, delay: 0 },
      { id: 2, x: 35, y: 35, size: 12, delay: 0.5 },
      { id: 3, x: 65, y: 35, size: 12, delay: 0.5 },
      { id: 4, x: 30, y: 55, size: 14, delay: 1 },
      { id: 5, x: 50, y: 60, size: 18, delay: 1 },
      { id: 6, x: 70, y: 55, size: 14, delay: 1 },
      { id: 7, x: 40, y: 75, size: 10, delay: 1.5 },
      { id: 8, x: 60, y: 75, size: 10, delay: 1.5 },
    ];
    setStars(constellationStars);
  }, []);

  const teamMembers: TeamMember[] = [
    { name: 'Лидерство', role: 'Ведёт команду к цели', icon: 'Crown' },
    { name: 'Креативность', role: 'Создаёт инновации', icon: 'Lightbulb' },
    { name: 'Надёжность', role: 'Гарантирует качество', icon: 'Shield' },
    { name: 'Экспертиза', role: 'Решает сложные задачи', icon: 'Award' },
  ];

  const achievements: Achievement[] = [
    {
      title: 'Проекты',
      value: '500+',
      icon: 'Rocket',
      description: 'Успешно завершённых',
    },
    {
      title: 'Клиенты',
      value: '98%',
      icon: 'Heart',
      description: 'Уровень удовлетворённости',
    },
    {
      title: 'Команда',
      value: '50+',
      icon: 'Users',
      description: 'Профессионалов',
    },
    {
      title: 'Опыт',
      value: '10 лет',
      icon: 'TrendingUp',
      description: 'На рынке',
    },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" className="text-primary" size={24} />
              <h1 className="text-2xl font-bold text-primary">Профессионал</h1>
            </div>
            <div className="flex gap-6">
              <button
                onClick={() => scrollToSection('constellation')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'constellation' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Созвездие
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'team' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Команда
              </button>
              <button
                onClick={() => scrollToSection('achievements')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'achievements' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Достижения
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section
        id="constellation"
        className="min-h-screen flex items-center justify-center pt-20 px-6"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Созвездие <span className="text-primary">Профессионал</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Каждая звезда символизирует качество, которое ведёт нас к совершенству
            </p>
          </div>

          <div className="relative w-full aspect-[4/3] max-w-4xl mx-auto mb-12">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4A90E2" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#FFD700" stopOpacity="0.6" />
                </linearGradient>
              </defs>

              <line x1="50" y1="20" x2="35" y2="35" stroke="url(#lineGradient)" strokeWidth="0.3" />
              <line x1="50" y1="20" x2="65" y2="35" stroke="url(#lineGradient)" strokeWidth="0.3" />
              <line x1="35" y1="35" x2="30" y2="55" stroke="url(#lineGradient)" strokeWidth="0.3" />
              <line x1="65" y1="35" x2="70" y2="55" stroke="url(#lineGradient)" strokeWidth="0.3" />
              <line x1="30" y1="55" x2="50" y2="60" stroke="url(#lineGradient)" strokeWidth="0.3" />
              <line x1="70" y1="55" x2="50" y2="60" stroke="url(#lineGradient)" strokeWidth="0.3" />
              <line x1="50" y1="60" x2="40" y2="75" stroke="url(#lineGradient)" strokeWidth="0.3" />
              <line x1="50" y1="60" x2="60" y2="75" stroke="url(#lineGradient)" strokeWidth="0.3" />

              {stars.map((star) => (
                <g key={star.id}>
                  <circle
                    cx={star.x}
                    cy={star.y}
                    r={star.size / 4}
                    fill="#FFD700"
                    className="star-twinkle"
                    style={{ animationDelay: `${star.delay}s` }}
                  />
                  <circle
                    cx={star.x}
                    cy={star.y}
                    r={star.size / 6}
                    fill="#FFFFFF"
                    className="star-twinkle"
                    style={{ animationDelay: `${star.delay + 0.2}s` }}
                  />
                </g>
              ))}
            </svg>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in">
            {['Усердие', 'Команда', 'Качество', 'Инновации', 'Рост', 'Цель', 'Честь', 'Успех'].map(
              (quality, index) => (
                <Badge
                  key={quality}
                  variant="outline"
                  className="py-3 px-6 text-center justify-center border-primary/30 text-primary hover:bg-primary/10 transition-all animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {quality}
                </Badge>
              )
            )}
          </div>
        </div>
      </section>

      <section id="team" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Наша <span className="text-primary">Команда</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Объединённые общей целью, мы достигаем невозможного
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="p-8 text-center hover:scale-105 transition-all duration-300 bg-card border-border hover:border-primary/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center float-animation">
                    <Icon name={member.icon as any} className="text-primary" size={40} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="achievements"
        className="min-h-screen flex items-center justify-center py-20 px-6"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Наши <span className="text-primary">Достижения</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Цифры, которые говорят о профессионализме
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={achievement.title}
                className="p-8 text-center hover:scale-105 transition-all duration-300 bg-card border-border hover:border-primary/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon name={achievement.icon as any} className="text-secondary" size={32} />
                  </div>
                </div>
                <div className="text-5xl font-bold mb-2 text-primary">{achievement.value}</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Card className="inline-block p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/30">
              <div className="flex items-center gap-4">
                <Icon name="Target" className="text-primary" size={48} />
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Стремление к совершенству
                  </h3>
                  <p className="text-muted-foreground">
                    Благодаря профессионализму и командной работе мы покоряем новые высоты каждый
                    день
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            Созвездие Профессионал — символ стремления к совершенству
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
