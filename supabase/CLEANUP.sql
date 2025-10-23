-- ============================================
-- NETTOYAGE COMPLET SUPABASE - ADELEC83
-- ============================================
-- Supprime toutes les tables d'autres projets
-- Ne garde que les tables nécessaires pour ADELEC83

-- 1. SUPPRIMER LES ANCIENNES TABLES (si elles existent)
DROP TABLE IF EXISTS contact_requests CASCADE;
DROP TABLE IF EXISTS faq CASCADE;
DROP TABLE IF EXISTS temoignages CASCADE;
DROP TABLE IF EXISTS articles CASCADE;
DROP TABLE IF EXISTS realisations CASCADE;
DROP TABLE IF EXISTS pages CASCADE;
DROP TABLE IF EXISTS company_info CASCADE;

-- 2. CRÉER LES TABLES ADELEC83

-- Table: company_info (Informations de l'entreprise)
CREATE TABLE company_info (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: pages (Contenu des pages)
CREATE TABLE pages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  hero_title TEXT,
  hero_subtitle TEXT,
  content JSONB,
  meta_title TEXT,
  meta_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: realisations (Portfolio de projets)
CREATE TABLE realisations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL, -- 'photovoltaique', 'electricite', 'climatisation', 'bornes'
  location TEXT,
  date TEXT,
  image_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: articles (Blog)
CREATE TABLE articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  category TEXT,
  tags TEXT[],
  image_url TEXT,
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: temoignages (Témoignages clients)
CREATE TABLE temoignages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  author_name TEXT NOT NULL,
  location TEXT,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  content TEXT NOT NULL,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: faq (Questions fréquentes)
CREATE TABLE faq (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  active BOOLEAN DEFAULT TRUE,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: contact_requests (Demandes de contact)
CREATE TABLE contact_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new', -- 'new', 'read', 'replied'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. ACTIVER RLS (Row Level Security) - Optionnel
ALTER TABLE company_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE realisations ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE temoignages ENABLE ROW LEVEL SECURITY;
ALTER TABLE faq ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

-- Politique de lecture publique pour toutes les tables sauf contact_requests
CREATE POLICY "Public read access" ON company_info FOR SELECT USING (true);
CREATE POLICY "Public read access" ON pages FOR SELECT USING (true);
CREATE POLICY "Public read access" ON realisations FOR SELECT USING (true);
CREATE POLICY "Public read access" ON articles FOR SELECT USING (published = true);
CREATE POLICY "Public read access" ON temoignages FOR SELECT USING (true);
CREATE POLICY "Public read access" ON faq FOR SELECT USING (active = true);

-- 4. INSÉRER LES DONNÉES INITIALES

-- Informations entreprise
INSERT INTO company_info (key, value) VALUES
('stats', '{
  "annees_experience": 20,
  "installations": 600,
  "clients_satisfaits": 98,
  "employes": 10
}'::jsonb),
('contact', '{
  "phone": "04 94 00 00 00",
  "email": "contact@adelec83.fr",
  "address": "Solliès-Pont, Var (83)"
}'::jsonb);

-- Page d'accueil
INSERT INTO pages (slug, hero_title, hero_subtitle) VALUES
('accueil', 
 'Électricité, Climatisation et Panneaux Solaires dans le Var depuis 2005',
 'Votre partenaire local pour tous vos projets énergétiques');

-- Réalisations (exemples)
INSERT INTO realisations (title, description, category, location, date, image_url, featured, order_index) VALUES
('Installation photovoltaïque 9 kWc', 'Installation de 24 panneaux solaires sur toiture tuiles avec onduleur et monitoring', 'photovoltaique', 'Hyères', 'Mars 2024', '/images/realisations/solar-1.jpg', true, 1),
('Climatisation multi-split 4 pièces', 'Pose d''une climatisation réversible Daikin multi-split pour villa', 'climatisation', 'Toulon', 'Février 2024', '/images/realisations/clim-1.jpg', true, 2),
('Borne de recharge 7,4 kW', 'Installation d''une borne murale Wallbox avec gestion intelligente', 'bornes', 'La Crau', 'Janvier 2024', '/images/realisations/borne-1.jpg', true, 3),
('Rénovation électrique complète', 'Mise aux normes électriques maison années 70, nouveau tableau', 'electricite', 'Brignoles', 'Décembre 2023', '/images/realisations/elec-1.jpg', true, 4);

-- Articles de blog (exemples)
INSERT INTO articles (slug, title, excerpt, content, category, tags, published, published_at) VALUES
('panneaux-solaires-2025', 
 '5 raisons d''installer des panneaux solaires en 2025',
 'Découvrez pourquoi 2025 est l''année idéale pour passer à l''énergie solaire dans le Var',
 'Contenu complet de l''article...',
 'Panneaux solaires',
 ARRAY['photovoltaïque', 'économies', 'aides'],
 true,
 NOW()),
('choisir-climatisation', 
 'Comment choisir sa climatisation réversible ?',
 'Guide complet pour bien choisir votre système de climatisation',
 'Contenu complet de l''article...',
 'Climatisation',
 ARRAY['climatisation', 'conseils'],
 true,
 NOW());

-- Témoignages
INSERT INTO temoignages (author_name, location, rating, content, featured) VALUES
('Sophie M.', 'Hyères', 5, 'Installation de panneaux solaires parfaite ! Équipe professionnelle et à l''écoute. Je recommande vivement.', true),
('Marc D.', 'Toulon', 5, 'Pose d''une borne de recharge pour ma voiture électrique. Travail soigné et conforme aux normes.', true),
('Christine L.', 'La Crau', 5, 'Climatisation installée en un jour. Très satisfaite du résultat et du suivi. Entreprise sérieuse.', true);

-- FAQ
INSERT INTO faq (question, answer, active, order_index) VALUES
('Quels délais pour un devis ?', 'Nous nous engageons à vous fournir un devis détaillé sous 48h maximum après notre échange.', true, 1),
('Intervenez-vous sur les toits plats ?', 'Oui, nous réalisons des installations sur tous types de toitures : tuiles, ardoises, bac acier, toits plats.', true, 2),
('Peut-on combiner climatisation et panneaux solaires ?', 'Absolument ! C''est même une excellente combinaison pour optimiser votre autoconsommation.', true, 3),
('Quelle garantie sur les installations ?', 'Nous offrons une garantie décennale sur tous nos travaux.', true, 4),
('Les aides de l''État sont-elles encore disponibles ?', 'Oui, de nombreuses aides existent : prime à l''autoconsommation, obligation d''achat, prime ADVENIR.', true, 5),
('Proposez-vous un SAV ?', 'Oui, nous assurons le service après-vente de toutes nos installations.', true, 6);

-- 5. CRÉER DES INDEX POUR LA PERFORMANCE
CREATE INDEX idx_realisations_category ON realisations(category);
CREATE INDEX idx_realisations_featured ON realisations(featured);
CREATE INDEX idx_articles_slug ON articles(slug);
CREATE INDEX idx_articles_published ON articles(published);
CREATE INDEX idx_faq_active ON faq(active);
