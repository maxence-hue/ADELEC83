// ========================================
// LOGIQUE FORMULAIRE CONDITIONNEL
// ========================================
const ownerOptions = document.querySelectorAll('.owner-option');
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const tenantMessage = document.getElementById('tenantMessage');

ownerOptions.forEach(option => {
  option.addEventListener('click', function() {
    const input = this.querySelector('input');
    input.checked = true;
    
    ownerOptions.forEach(opt => opt.classList.remove('selected'));
    this.classList.add('selected');
    
    if (typeof fbq !== 'undefined') {
      fbq('trackCustom', 'OwnerStatusSelected', {
        status: input.value === 'owner' ? 'proprietaire' : 'locataire'
      });
    }
    
    setTimeout(() => {
      if (input.value === 'owner') {
        step1.classList.remove('active');
        step2.classList.add('active');
        
        if (typeof fbq !== 'undefined') {
          fbq('track', 'InitiateCheckout', {
            content_name: 'Formulaire Devis Solaire',
            content_category: 'Solar Installation',
            value: 0,
            currency: 'EUR'
          });
        }
      } else {
        step1.classList.remove('active');
        tenantMessage.classList.add('active');
      }
    }, 300);
  });
});

// Fonction reset formulaire
function resetForm() {
  tenantMessage.classList.remove('active');
  step1.classList.add('active');
  ownerOptions.forEach(opt => {
    opt.classList.remove('selected');
    opt.querySelector('input').checked = false;
  });
}

// Fonction partage
function shareOffer() {
  const shareUrl = window.location.href;
  const shareText = "Découvre cette offre ADSolar : batterie photovoltaïque offerte pour toute installation solaire !";
  
  if (navigator.share) {
    navigator.share({
      title: 'Offre ADSolar - Batterie OFFERTE',
      text: shareText,
      url: shareUrl
    });
  } else {
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert('Lien copié ! Vous pouvez le partager à votre propriétaire.');
    });
  }
}

// Soumission formulaire vers webhook N8N
document.getElementById('leadForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const formData = new FormData(this);
  const data = {
    owner_status: 'proprietaire',
    code_postal: formData.get('code_postal'),
    ville: formData.get('ville'),
    prenom: formData.get('prenom'),
    nom: formData.get('nom'),
    telephone: formData.get('telephone'),
    email: formData.get('email'),
    source: 'landing_page_batterie_offerte',
    date_soumission: new Date().toISOString()
  };
  
  const submitBtn = this.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = 'Envoi en cours...';
  
  try {
    const response = await fetch('https://adsolar.app.n8n.cloud/webhook/a36ffb90-6e69-4065-91bd-9feced36c162', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    if (response.ok) {
      if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
          content_name: 'Demande Devis Batterie Offerte',
          content_category: 'Solar Installation',
          value: 0,
          currency: 'EUR'
        });
      }
      
      this.innerHTML = `
        <div style="text-align: center; padding: 20px;">
          <div style="width: 60px; height: 60px; background: #D4EDDA; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="#28A745" stroke-width="2" width="30" height="30"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22,4 12,14.01 9,11.01"></polyline></svg>
          </div>
          <h3 style="color: #28A745; margin-bottom: 12px;">Demande envoyée avec succès !</h3>
          <p style="color: #555; font-size: 0.95rem;">Un expert ADSolar vous rappelle sous 24h pour votre étude solaire gratuite.</p>
        </div>
      `;
    } else {
      throw new Error('Erreur serveur');
    }
  } catch (error) {
    console.error('Erreur:', error);
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
    alert('Une erreur est survenue. Veuillez réessayer ou nous appeler au 04 94 91 27 53.');
  }
});

// ========================================
// FAQ ACCORDION
// ========================================
function toggleFaq(button) {
  const item = button.parentElement;
  const isActive = item.classList.contains('active');
  
  document.querySelectorAll('.faq-item').forEach(faq => {
    faq.classList.remove('active');
  });
  
  if (!isActive) {
    item.classList.add('active');
  }
}

// ========================================
// ANIMATIONS AU SCROLL
// ========================================
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

fadeElements.forEach(el => observer.observe(el));

// ========================================
// SMOOTH SCROLL + TRACKING CTA
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (this.getAttribute('href') === '#formulaire' && typeof fbq !== 'undefined') {
      fbq('trackCustom', 'CTAClick', {
        button_text: this.textContent.trim().substring(0, 50),
        destination: 'formulaire'
      });
    }
    
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ========================================
// META PIXEL - TRACKING SCROLL DEPTH
// ========================================
let scrollTracked = {
  '25': false,
  '50': false,
  '75': false,
  '100': false
};

window.addEventListener('scroll', function() {
  const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
  
  if (typeof fbq !== 'undefined') {
    if (scrollPercent >= 25 && !scrollTracked['25']) {
      fbq('trackCustom', 'ScrollDepth', { percent: 25 });
      scrollTracked['25'] = true;
    }
    if (scrollPercent >= 50 && !scrollTracked['50']) {
      fbq('trackCustom', 'ScrollDepth', { percent: 50 });
      scrollTracked['50'] = true;
    }
    if (scrollPercent >= 75 && !scrollTracked['75']) {
      fbq('trackCustom', 'ScrollDepth', { percent: 75 });
      scrollTracked['75'] = true;
    }
    if (scrollPercent >= 95 && !scrollTracked['100']) {
      fbq('trackCustom', 'ScrollDepth', { percent: 100 });
      scrollTracked['100'] = true;
    }
  }
});

// ========================================
// META PIXEL - TRACKING VUE FORMULAIRE
// ========================================
const formSection = document.getElementById('formulaire');
const formObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && typeof fbq !== 'undefined') {
      fbq('track', 'ViewContent', {
        content_name: 'Section Formulaire',
        content_category: 'Lead Form',
        content_type: 'form_section'
      });
      formObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

if (formSection) {
  formObserver.observe(formSection);
}
