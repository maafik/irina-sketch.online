import { useState } from "react";
import { ChevronLeft, ChevronRight, Send, Paperclip, Mic } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  messages: {
    text: string;
    time: string;
    isOutgoing: boolean;
    image?: string;
  }[];
  description: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Елена",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    messages: [
      { text: "Доброе утро!\nЭто просто чудо, я в восторге!\nКартинка получилась\nневероятно красивой!", time: "11:24", isOutgoing: false },
      { text: "", time: "11:24", isOutgoing: false, image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=300&h=400&fit=crop" },
      { text: "Вы настоящая волшебница!\nСпасибо вам огромное!", time: "11:25", isOutgoing: false },
      { text: "Очень рада, что\nвам понравилось! ❤️\nЖду вас снова!", time: "11:26", isOutgoing: true },
    ],
    description: "«Хотела картинку с цветами и птицами,\nнежные розы и колибри на ветке.\nВы потрясающе воплотили мою идею в реальность!»",
  },
  {
    id: 2,
    name: "Анна",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    messages: [
      { text: "Привет! Получилось\nидеально, как я и хотела!", time: "15:30", isOutgoing: false },
      { text: "Все друзья в восторге,\nспрашивают контакты мастера!", time: "15:31", isOutgoing: false },
      { text: "Спасибо за теплые слова! 🌸\nБуду рада видеть вас\nи ваших друзей!", time: "15:35", isOutgoing: true },
    ],
    description: "«Мечтала о минималистичном дизайне\nс геометрическими элементами.\nРезультат превзошел все ожидания!»",
  },
  {
    id: 3,
    name: "Мария",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    messages: [
      { text: "Здравствуйте! Хочу сказать\nогромное спасибо за работу!", time: "18:45", isOutgoing: false },
      { text: "Это мой первый заказ и\nвы сделали этот опыт\nнезабываемым!", time: "18:46", isOutgoing: false },
      { text: "Очень приятно! 💕\nПервый заказ — это\nособенный момент!", time: "18:50", isOutgoing: true },
    ],
    description: "",
  },
  {
    id: 4,
    name: "Виктория",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face",
    messages: [
      { text: "Привет! Наконец-то зажила!\nХочу показать результат 🔥", time: "14:12", isOutgoing: false },
      { text: "", time: "14:12", isOutgoing: false, image: "https://images.unsplash.com/photo-1590246814883-57c511c5e5c4?w=300&h=400&fit=crop" },
      { text: "Все спрашивают где делала!\nОтправляю всех к вам 😍", time: "14:13", isOutgoing: false },
      { text: "Вау, как красиво зажило! 🖤\nСпасибо за рекомендации!", time: "14:15", isOutgoing: true },
    ],
    description: "",
  },
  {
    id: 5,
    name: "Ксения",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
    messages: [
      { text: "Добрый день! Хотела\nеще раз поблагодарить!", time: "10:20", isOutgoing: false },
      { text: "Муж в восторге от\nновой картинки! 💫", time: "10:21", isOutgoing: false },
      { text: "Рада, что всем нравится!\nПриходите за следующей 😊", time: "10:25", isOutgoing: true },
    ],
    description: "",
  },
  {
    id: 6,
    name: "Дарья",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    messages: [
      { text: "Это было потрясающе!\nСовсем не больно 🙌", time: "16:40", isOutgoing: false },
      { text: "Боялась ужасно, но вы\nтак поддержали меня!", time: "16:41", isOutgoing: false },
      { text: "Вы справились отлично! 💪\nТеперь вы в числе\nмоих любимых художников!", time: "16:45", isOutgoing: true },
    ],
    description: "",
  },
  {
    id: 7,
    name: "Алина",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop&crop=face",
    messages: [
      { text: "Уже хочу записаться\nна вторую! 🦋", time: "19:15", isOutgoing: false },
      { text: "Подсела на красивые\nкартинки благодаря вам!", time: "19:16", isOutgoing: false },
      { text: "Жду вас! 🖤\nУже думаю над\nидеей для вас!", time: "19:20", isOutgoing: true },
    ],
    description: "",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative min-h-screen gradient-overlay overflow-hidden px-4 py-12 md:py-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-glow-gold rounded-full animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold italic text-gradient mb-3">
            Отзывы клиентов
          </h2>
          <p className="text-muted-foreground text-sm md:text-base tracking-widest uppercase">
            Ваши слова — лучшая награда!
          </p>
        </div>

        {/* Phone mockup */}
        <div className="relative flex items-center justify-center">
          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="nav-arrow absolute left-0 md:-left-16 z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="phone-mockup w-full max-w-[280px] md:max-w-[320px] animate-float">
            <div className="phone-screen">
              {/* Phone status bar */}
              <div className="flex justify-between items-center px-6 py-2 bg-zinc-800/50">
                <span className="text-xs text-foreground/70">12:24</span>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-2 border border-foreground/50 rounded-sm">
                    <div className="w-3/4 h-full bg-foreground/50 rounded-sm" />
                  </div>
                </div>
              </div>

              {/* Chat header */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border/30">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-primary/50"
                />
                <div>
                  <p className="text-sm font-medium text-foreground">{current.name}</p>
                  <p className="text-xs text-muted-foreground">была в сети недавно</p>
                </div>
              </div>

              {/* Messages */}
              <div className="px-3 py-4 space-y-3 h-[360px] md:h-[400px] overflow-hidden">
                {current.messages.map((message, idx) => (
                  <div
                    key={idx}
                    className={`flex ${message.isOutgoing ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`message-bubble ${message.isOutgoing ? "message-outgoing" : "message-incoming"}`}>
                      {message.image && (
                        <img
                          src={message.image}
                          alt="Image"
                          className="w-full max-w-[180px] rounded-xl mb-1"
                        />
                      )}
                      {message.text && (
                        <p className="whitespace-pre-line text-xs md:text-sm leading-relaxed">
                          {message.text}
                        </p>
                      )}
                      <p className={`text-[10px] mt-1 ${message.isOutgoing ? "text-primary/70 text-right" : "text-muted-foreground text-right"}`}>
                        {message.time} {message.isOutgoing && "✓✓"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input area */}
              <div className="flex items-center gap-2 px-3 py-3 bg-secondary/50 border-t border-border/30">
                <button className="p-2 text-muted-foreground">
                  <Paperclip className="w-5 h-5" />
                </button>
                <div className="flex-1 bg-muted rounded-full px-4 py-2">
                  <span className="text-xs text-muted-foreground">Сообщение</span>
                </div>
                <button className="p-2 text-muted-foreground">
                  <Mic className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={nextTestimonial}
            className="nav-arrow absolute right-0 md:-right-16 z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`dot-indicator ${idx === currentIndex ? "active" : ""}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;
