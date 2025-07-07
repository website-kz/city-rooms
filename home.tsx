import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const makeCall = () => {
    window.location.href = 'tel:+77477770259';
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/87477770259', '_blank');
  };

  const openTelegram = () => {
    window.open('https://t.me/87477770259', '_blank');
  };

  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleNavClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && target.href.includes('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(target.getAttribute('href') || '');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleNavClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleNavClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">City Rooms</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#rooms" className="text-gray-700 hover:text-blue-600 transition-colors">
                Номера
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Услуги
              </a>
              <a href="#locations" className="text-gray-700 hover:text-blue-600 transition-colors">
                Адреса
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Контакты
              </a>
            </div>
            <Button 
              onClick={makeCall}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium"
            >
              <i className="fas fa-phone mr-2"></i>
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center hotel-gradient">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">City Rooms</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Современные комфортабельные номера в самом центре города
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={makeCall}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
            >
              <i className="fas fa-phone mr-2"></i>
              Забронировать сейчас
            </Button>
            <div className="flex gap-4">
              <Button 
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-lg"
              >
                <i className="fab fa-whatsapp text-xl"></i>
              </Button>
              <Button 
                onClick={openTelegram}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-full shadow-lg"
              >
                <i className="fab fa-telegram text-xl"></i>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Быстрое бронирование</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами любым удобным способом</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-phone text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">Телефон</h3>
                <p className="text-gray-600 mb-6">Мгновенное бронирование по телефону</p>
                <Button 
                  onClick={makeCall}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium"
                >
                  Позвонить сейчас
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <i className="fab fa-whatsapp text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">WhatsApp</h3>
                <p className="text-gray-600 mb-6">Быстрые сообщения и фото номеров</p>
                <Button 
                  onClick={openWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium"
                >
                  Написать в WhatsApp
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <i className="fab fa-telegram text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">Telegram</h3>
                <p className="text-gray-600 mb-6">Удобное общение в мессенджере</p>
                <Button 
                  onClick={openTelegram}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium"
                >
                  Написать в Telegram
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Room Gallery */}
      <section id="rooms" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши номера</h2>
            <p className="text-xl text-gray-600">Современные и комфортабельные номера для вашего отдыха</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Современный номер с синей мебелью" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Стандартный номер</h3>
                <p className="text-gray-600 mb-4">Уютный номер с современным дизайном и всеми удобствами</p>
                <Button 
                  onClick={makeCall}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
                >
                  Забронировать
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Люкс номер с видом на город" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Люкс номер</h3>
                <p className="text-gray-600 mb-4">Просторный номер с панорамным видом на город</p>
                <Button 
                  onClick={makeCall}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
                >
                  Забронировать
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Премиум номер с современными удобствами" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Премиум номер</h3>
                <p className="text-gray-600 mb-4">Роскошный номер с премиальными удобствами</p>
                <Button 
                  onClick={makeCall}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
                >
                  Забронировать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Всё для вашего комфорта и удобства</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-wifi text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Бесплатный Wi-Fi</h3>
              <p className="text-gray-600">Высокоскоростной интернет во всех номерах</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-car text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Парковка</h3>
              <p className="text-gray-600">Бесплатная парковка для гостей</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-concierge-bell text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Консьерж</h3>
              <p className="text-gray-600">Круглосуточная служба поддержки</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-coffee text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Завтрак</h3>
              <p className="text-gray-600">Континентальный завтрак включен</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-dumbbell text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Фитнес-зал</h3>
              <p className="text-gray-600">Современный тренажерный зал</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-snowflake text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Кондиционер</h3>
              <p className="text-gray-600">Климат-контроль в каждом номере</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Безопасность</h3>
              <p className="text-gray-600">Круглосуточная охрана и видеонаблюдение</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-utensils text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Доставка еды</h3>
              <p className="text-gray-600">Обслуживание номеров 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши филиалы</h2>
            <p className="text-xl text-gray-600">Удобные локации в центре города</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow border">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-map-marker-alt text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">Филиал 1</h3>
                <p className="text-gray-600 mb-6">ул. Сейфуллина, 553</p>
                <Button 
                  onClick={makeCall}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium"
                >
                  Забронировать
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow border">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-map-marker-alt text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">Филиал 2</h3>
                <p className="text-gray-600 mb-6">ул. Желтоксан, 1</p>
                <Button 
                  onClick={makeCall}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium"
                >
                  Забронировать
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow border">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-map-marker-alt text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">Филиал 3</h3>
                <p className="text-gray-600 mb-6">ул. Пестовский, 41</p>
                <Button 
                  onClick={makeCall}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium"
                >
                  Забронировать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-blue-100">Мы всегда готовы помочь вам с бронированием</p>
          </div>
          <div className="max-w-md mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <Button 
                    onClick={makeCall}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-4 rounded-full font-semibold text-lg shadow-lg"
                  >
                    <i className="fas fa-phone mr-3"></i>
                    Позвонить: +7 747 777 0259
                  </Button>
                  <Button 
                    onClick={openWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full font-semibold text-lg shadow-lg"
                  >
                    <i className="fab fa-whatsapp mr-3"></i>
                    Написать в WhatsApp
                  </Button>
                  <Button 
                    onClick={openTelegram}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-full font-semibold text-lg shadow-lg"
                  >
                    <i className="fab fa-telegram mr-3"></i>
                    Написать в Telegram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">City Rooms</h3>
              <p className="text-gray-400">Современные номера в центре города для вашего комфорта</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Наши адреса</h4>
              <div className="space-y-2 text-gray-400">
                <p>ул. Сейфуллина, 553</p>
                <p>ул. Желтоксан, 1</p>
                <p>ул. Пестовский, 41</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p><i className="fas fa-phone mr-2"></i>+7 747 777 0259</p>
                <p><i className="fab fa-whatsapp mr-2"></i>WhatsApp</p>
                <p><i className="fab fa-telegram mr-2"></i>Telegram</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-gray-400">
                <p>Бесплатный Wi-Fi</p>
                <p>Парковка</p>
                <p>Консьерж 24/7</p>
                <p>Завтрак включен</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 City Rooms. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
