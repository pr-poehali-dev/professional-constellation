import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  label?: string;
}

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

const Professionals = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  useEffect(() => {
    const professionalStars: Star[] = [
      { id: 1, x: 50, y: 15, size: 20, delay: 0, label: 'Лидер' },
      { id: 2, x: 30, y: 30, size: 16, delay: 0.2, label: 'Архитектор' },
      { id: 3, x: 70, y: 30, size: 16, delay: 0.2, label: 'Стратег' },
      { id: 4, x: 20, y: 50, size: 14, delay: 0.4, label: 'Инноватор' },
      { id: 5, x: 50, y: 45, size: 18, delay: 0.4, label: 'Координатор' },
      { id: 6, x: 80, y: 50, size: 14, delay: 0.4, label: 'Эксперт' },
      { id: 7, x: 35, y: 70, size: 15, delay: 0.6, label: 'Аналитик' },
      { id: 8, x: 65, y: 70, size: 15, delay: 0.6, label: 'Креатор' },
      { id: 9, x: 50, y: 85, size: 12, delay: 0.8, label: 'Наставник' },
    ];
    setStars(professionalStars);
  }, []);

  const skills: Skill[] = [
    { name: 'Лидерство', level: 95, icon: 'Crown', color: '#FFD700' },
    { name: 'Стратегия', level: 90, icon: 'Target', color: '#4A90E2' },
    { name: 'Инновации', level: 88, icon: 'Lightbulb', color: '#FF6B6B' },
    { name: 'Коммуникация', level: 92, icon: 'MessageSquare', color: '#51CF66' },
    { name: 'Анализ', level: 87, icon: 'BarChart', color: '#9775FA' },
    { name: 'Исполнение', level: 93, icon: 'CheckCircle', color: '#FFD700' },
  ];

  const coreValues = [
    { title: 'Целостность', description: 'Честность в каждом действии', icon: 'Shield' },
    { title: 'Совершенство', description: 'Стремление к лучшему', icon: 'Star' },
    { title: 'Сотрудничество', description: 'Сила команды', icon: 'Users' },
    { title: 'Рост', description: 'Постоянное развитие', icon: 'TrendingUp' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Users" className="text-primary" size={24} />
              <h1 className="text-2xl font-bold text-primary">Профессионалы</h1>
            </div>
            <Link to="/">
              <Button variant="outline" size="sm">
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                К варианту 1
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="animate-fade-in">
                <Badge className="mb-6 bg-primary/10 text-primary border-primary/30">
                  Созвездие Профессионалов
                </Badge>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                  Команда <span className="text-primary">Экспертов</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Девять ярких звёзд, объединённых единой целью — создавать выдающиеся результаты.
                  Каждая роль — это ключевой элемент успеха.
                </p>

                <div className="space-y-4">
                  {coreValues.map((value, index) => (
                    <Card
                      key={value.title}
                      className="p-6 bg-card/50 border-border hover:border-primary/50 transition-all hover:scale-105 animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon name={value.icon as any} className="text-primary" size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-1">
                            {value.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{value.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative w-full aspect-square max-w-2xl mx-auto">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <radialGradient id="starGlow">
                      <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#4A90E2" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="connectionLine" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4A90E2" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#FFD700" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>

                  <line x1="50" y1="15" x2="30" y2="30" stroke="url(#connectionLine)" strokeWidth="0.4" />
                  <line x1="50" y1="15" x2="70" y2="30" stroke="url(#connectionLine)" strokeWidth="0.4" />
                  <line x1="30" y1="30" x2="20" y2="50" stroke="url(#connectionLine)" strokeWidth="0.4" />
                  <line x1="30" y1="30" x2="50" y2="45" stroke="url(#connectionLine)" strokeWidth="0.4" />
                  <line x1="70" y1="30" x2="80" y2="50" stroke="url(#connectionLine)" strokeWidth="0.4" />
                  <line x1="70" y1="30" x2="50" y2="45" stroke="url(#connectionLine)" strokeWidth="0.4" />
                  <line x1="20" y1="50" x2="35" y2="70" stroke="url(#connectionLine)" strokeWidth="0.4" />
                  <line x1="80" y1="50" x2="65" y2="70" stroke="url(#connectionLine)" strokeWidth="0.4" />
                  <line x1="50" y1="45" x2="35" y2="70" stroke="url(#connectionLine)" strokeWidth="0.4" />
                  <line x1="50" y1="45" x2="65" y2="70" stroke="url(#connectionLine)" strokeWidth="0.4" />
                  <line x1="35" y1="70" x2="50" y2="85" stroke="url(#connectionLine)" strokeWidth="0.4" />
                  <line x1="65" y1="70" x2="50" y2="85" stroke="url(#connectionLine)" strokeWidth="0.4" />

                  {stars.map((star) => (
                    <g
                      key={star.id}
                      onMouseEnter={() => setHoveredStar(star.id)}
                      onMouseLeave={() => setHoveredStar(null)}
                      style={{ cursor: 'pointer' }}
                    >
                      <circle
                        cx={star.x}
                        cy={star.y}
                        r={hoveredStar === star.id ? star.size / 2.5 : star.size / 3.5}
                        fill="url(#starGlow)"
                        className="transition-all duration-300"
                      />
                      <circle
                        cx={star.x}
                        cy={star.y}
                        r={star.size / 5}
                        fill="#FFD700"
                        className="star-twinkle"
                        style={{ animationDelay: `${star.delay}s` }}
                      />
                      <circle
                        cx={star.x}
                        cy={star.y}
                        r={star.size / 8}
                        fill="#FFFFFF"
                        className="star-twinkle"
                        style={{ animationDelay: `${star.delay + 0.2}s` }}
                      />
                      {hoveredStar === star.id && (
                        <text
                          x={star.x}
                          y={star.y - star.size / 2.5 - 2}
                          textAnchor="middle"
                          fill="#FFD700"
                          fontSize="3.5"
                          fontWeight="bold"
                          className="animate-fade-in"
                        >
                          {star.label}
                        </text>
                      )}
                    </g>
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Ключевые <span className="text-primary">Компетенции</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Навыки, которые определяют наш профессионализм
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="p-8 bg-card border-border hover:border-primary/50 transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${skill.color}20` }}
                  >
                    <Icon name={skill.icon as any} style={{ color: skill.color }} size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{skill.name}</h3>
                      <span className="text-lg font-bold" style={{ color: skill.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: skill.color,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/30 animate-fade-in">
            <Icon name="Rocket" className="text-primary mx-auto mb-6" size={64} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Готовы покорять новые высоты?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Созвездие Профессионалов — это не просто команда, это система взаимодействия,
              где каждый эксперт дополняет других, создавая синергию успеха.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {['Опыт', 'Качество', 'Надёжность', 'Инновации', 'Результат'].map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-base py-2 px-4 border-primary/30 text-primary hover:bg-primary/10"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            Созвездие Профессионалы — символ командной экспертизы
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Professionals;
