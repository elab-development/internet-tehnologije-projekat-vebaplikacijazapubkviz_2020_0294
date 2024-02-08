# Kloniranje projekta i pokretanje lokalnog servera

1. Pozicionirati se u željeni direktorijum
2. Klonirati projekat u terminalu pomoću komande: `git clone https://github.com/elab-development/internet-tehnologije-projekat-vebaplikacijazapubkviz_2020_0294.git`
3. Otvoriti projekat u code editor-u (preporuka je Visual Studio Code)
4. Pokrenuti Apache i MySQL XAMPP module

# Pokretanje Laravel aplikacije

1. Pozicionirati se u laravel direktorijum komandom: `cd pubkvizbackend`
2. Instalirati composer, kako bi se kreirao vendor folder, komandom: `composer install`
3. Kreirati .env fajl komandom: `cp .env.example .env`
4. Generisati ključ aplikacije komandom: `php artisan key:generate`
5. Konfigurisati .env fajl:
   - Podesiti podatke o bazi: DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD
   - Podesiti cookie domene:
     - SESSION_DOMAIN=localhost
     - SANCTUM_STATEFUL_DOMAINS=localhost:3000
6. Kreirati bazu:
   - Pokrenuti migracije za kreiranje strukture baze komandom: `php artisan migrate`
   - Pokrenuti seeder za popunjavanje podataka u bazi komandom: `php artisan db:seed`
7. Pokrenuti aplikaciju komandom: `php artisan serve`

# Pokretanje React aplikacije

1. Vratiti se u početni direktorijum projekta komandom: `cd ..`
2. Pozicionirati se u react direktorijum komandom: `cd pubkvizfrontend`
3. Instalirati npm, kako bi se kreirao node_modules folder, komandom: `npm install`
4. Pokrenuti aplikaciju komandom: `npm start`

# Funkcionalnosti

U sistemu postoje tri uloge: neautentifikovani korisnici, takmičari i moderatori.

## Neautentifikovani korisnici

1. Moguće je registrovati se ili prijaviti na sistem.
2. Pristupiti scoreboard-u za različite sezone.
3. Pristupiti informacijama o događajima u kalendaru i preuzeti kalendar za određenu sezonu.
4. Testirati znanje odgovaranjem na pitanja koja se otvaraju klikom na ikonice u footer-u.

## Autentifikovani korisnici

Pored dodatnih imaju i iste funkcionalnosti na raspolaganju kao i neautentifikovani korisnici,
osim što umesto registracije i prijave imaju mogućnost odjave sa sistema.

### Takmičari

Potrebno je registrovati se kao novi takmičar.

1. U okviru My Team stranice mogu
   - Registrovati novi tim
   - Pridružiti se postojećem timu
   - Pogledati lične podatke i podatke članova tima
   - Pogledati grafički prikaz poena svog tima za određenu sezonu po mesecima

### Moderatori

Potrebno je prijaviti se kao postojeći moderator (username: moderator1, password: moderator1).

1. U okviru Events stranice mogu
   - Obrisati izabrani događaj u okviru modala sa informacijama o izabranom događaju
   - Dodati novu sezonu
   - Dodati novi događaj
2. U okviru Manage stranice mogu
   - Pretražiti/filtrirati događaje i timove po određenim kriterijumima
   - Uneti ili ažurirati poene izabranog tima za izabrani događaj
