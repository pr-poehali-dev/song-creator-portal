import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const albums = [
    {
      id: 1,
      title: "Россия и Сила",
      year: "2025",
      cover: "https://cdn.poehali.dev/files/4c98febb-f80b-42b8-abc4-044f244ffd1b.jpg",
      description: "Патриотический альбом о силе и величии Родины"
    }
  ];

  const galleryImages = [
    "https://cdn.poehali.dev/files/4c98febb-f80b-42b8-abc4-044f244ffd1b.jpg",
    "https://cdn.poehali.dev/files/7a662926-8331-434f-acd6-be27dee4c3eb.jpg",
    "https://cdn.poehali.dev/files/2a24d1b5-3f2c-4ba2-932d-e6ac92372a34.jpg"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('https://cdn.poehali.dev/files/7a662926-8331-434f-acd6-be27dee4c3eb.jpg')"
        }}
      />
      <div className="relative z-10">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Icon name="Music" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold font-[Montserrat]">NARGIZA</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#discography" className="hover:text-primary transition-colors">Дискография</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold font-[Montserrat] mb-6">
            Автор и исполнитель<br />
            <span className="text-primary">собственных песен</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-[Open_Sans]">
            Создаю атмосферную электронную музыку, сочетая современные звуки с живыми инструментами
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="font-[Open_Sans]">
              <Icon name="Play" size={20} className="mr-2" />
              Слушать музыку
            </Button>
            <Button variant="outline" size="lg" className="font-[Open_Sans]">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать треки
            </Button>
          </div>
        </div>
      </section>

      {/* Discography */}
      <section id="discography" className="py-20 bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold font-[Montserrat] text-center mb-12">Дискография</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album) => (
              <Card key={album.id} className="bg-background hover:bg-accent transition-colors group cursor-pointer">
                <CardContent className="p-6">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={album.cover} 
                      alt={album.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-xl font-semibold font-[Montserrat] mb-2">{album.title}</h4>
                  <p className="text-muted-foreground font-[Open_Sans] mb-2">{album.year}</p>
                  <p className="text-sm text-muted-foreground font-[Open_Sans] mb-4">{album.description}</p>
                  <Button variant="ghost" size="sm" className="w-full">
                    <Icon name="Play" size={16} className="mr-2" />
                    Воспроизвести
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold font-[Montserrat] text-center mb-12">Галерея</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold font-[Montserrat] mb-8">Связаться со мной</h3>
          <div className="flex justify-center space-x-8">
            <a href="#" className="flex flex-col items-center space-y-2 hover:text-primary transition-colors">
              <Icon name="Instagram" size={32} />
              <span className="font-[Open_Sans]">Instagram</span>
            </a>
            <a href="#" className="flex flex-col items-center space-y-2 hover:text-primary transition-colors">
              <Icon name="Youtube" size={32} />
              <span className="font-[Open_Sans]">YouTube</span>
            </a>
            <a href="#" className="flex flex-col items-center space-y-2 hover:text-primary transition-colors">
              <Icon name="Mail" size={32} />
              <span className="font-[Open_Sans]">Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground font-[Open_Sans]">
            © 2024 NARGIZA. Все права защищены.
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Index;