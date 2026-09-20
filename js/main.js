/**
 * INIOLUWA — AI Video Specialist & Iniesta Automation Hub
 * Main Interactive Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Project Data Catalog for Lightbox & Modal Exploration
  const projectsData = {
    '1': {
      id: '1',
      title: 'Signal / Commercial Showcase',
      category: '01 / BRAND FILM',
      tag: 'brand',
      image: 'assets/projects/project-1.jpg',
      video: 'assets/videos/featured_reel.mp4',
      description: 'High-impact commercial video direction showcasing versatile generative environments, virtual screens, character consistency, and precision sound design.',
      specs: {
        resolution: '4K UHD (3840x2160)',
        fps: '24 fps Cinematic',
        ratio: '16:9 Broadcast',
        audio: 'Dolby Atmos Mastered'
      },
      tools: ['Runway Gen-3 Alpha', 'Midjourney v6.1', 'Topaz Video AI', 'Adobe Premiere Pro'],
      promptFormula: 'cinematic studio presenter in navy suit surrounded by floating holographic screens displaying video narratives, volumetric studio lighting, 8k --ar 16:9',
      pills: ['Runway Gen-3', 'Commercial Direction', '4K UHD']
    },
    '2': {
      id: '2',
      title: 'Haven / Luxury Walk-In Concept',
      category: '02 / ARCHITECTURAL CINEMA',
      tag: 'brand',
      image: 'assets/projects/thumb_3.png',
      video: 'assets/videos/video_3.mp4',
      description: 'Photorealistic spatial interior cinematography highlighting ambient architectural lighting, bespoke wardrobe textures, and warm cinematic color grading.',
      specs: {
        resolution: '1080p DCI Master',
        fps: '24 fps Cinematic',
        ratio: '16:9 Spatial',
        audio: 'Ambient Acoustic Haze'
      },
      tools: ['Luma Dream Machine', 'ComfyUI', 'DaVinci Resolve', 'Topaz Video AI'],
      promptFormula: 'interior architectural walkthrough of luxury walk-in closet, warm wood textures, LED backlight shelving, Gucci boutique boxes, steadycam glide --motion 6',
      pills: ['Luma AI', 'Spatial Architecture', 'Interior']
    },
    '3': {
      id: '3',
      title: 'Wild Horizon / Aerial Avian Motion',
      category: '03 / NATURE & WILDLIFE',
      tag: 'motion',
      image: 'assets/projects/thumb_4.png',
      video: 'assets/videos/video_4.mp4',
      description: 'High-velocity aerial tracking shot capturing majestic bird flight over lush tropical canopies with natural aerodynamics and feather turbulence.',
      specs: {
        resolution: '1080p Full HD',
        fps: '30 fps Dynamic',
        ratio: '16:9 Widescreen',
        audio: 'Spatial Wind & Forest SFX'
      },
      tools: ['Kling AI v1.5', 'Midjourney v6', 'Premiere Pro', 'After Effects'],
      promptFormula: 'drone tracking shot following exotic eagle in soaring flight above rainforest mountain canopy, golden hour mist, hyperrealistic wings, 4k --motion 7',
      pills: ['Kling AI', 'Aerial Tracking', 'Wildlife']
    },
    '4': {
      id: '4',
      title: 'Fireside Companion / Narrative Short',
      category: '04 / ANIMATED STORY',
      tag: 'campaign',
      image: 'assets/projects/thumb_5.png',
      video: 'assets/videos/video_5.mp4',
      description: 'Heartwarming storybook character animation featuring a gentle timber wolf and kitten resting beside an alpine stone hearth fireplace.',
      specs: {
        resolution: '720p HD Story Master',
        fps: '24 fps Cinematic',
        ratio: '16:9 Storybook',
        audio: 'Crackling Fireplace & Strings'
      },
      tools: ['Midjourney Character LoRA', 'Runway Gen-3', 'Adobe Audition', 'CapCut Pro'],
      promptFormula: 'whimsical storybook aesthetic, gentle giant wolf curled on woven rug sleeping beside tiny kitten by warm stone fireplace, soft hearth glow, pixar style lighting',
      pills: ['Character LoRA', 'Narrative', 'Runway Gen-3']
    },
    '5': {
      id: '5',
      title: 'Aura Tech / Wireless Earbud Reveal',
      category: '05 / PRODUCT COMMERCIAL',
      tag: 'brand',
      image: 'assets/projects/thumb_7.png',
      video: 'assets/videos/video_7.mp4',
      description: 'Sleek, moody commercial product spot showcasing industrial design, reflective matte-black curves, and dynamic product turntable movement.',
      specs: {
        resolution: '1080p Studio Master',
        fps: '30 fps Smooth',
        ratio: '16:9 Commercial',
        audio: 'Electronic Beat & Bass Swell'
      },
      tools: ['ComfyUI', 'Kling AI', 'DaVinci Resolve Studio', 'Blender Hybrid'],
      promptFormula: 'commercial studio turntable shot of matte black sleek wireless earbuds, dramatic moody studio rim light, cyan backlight reflections, photorealistic 8k',
      pills: ['Commercial VFX', 'Industrial Design', 'Kling AI']
    },
    '6': {
      id: '6',
      title: 'Thermal Shield / Extreme Workwear',
      category: '06 / PRODUCT REEL',
      tag: 'social',
      image: 'assets/projects/thumb_b1.png',
      video: 'assets/videos/video_b1.mp4',
      description: 'High-durability outdoor winter glove commercial demonstrating thermal insulation, rugged leather grip, and water resistance in harsh mountain environments.',
      specs: {
        resolution: '1080p Social Reel',
        fps: '30 fps Dynamic',
        ratio: '16:9 Commercial',
        audio: 'Heavy Industrial Percussion'
      },
      tools: ['Runway Gen-3', 'Midjourney v6.1', 'CapCut Pro', 'Color Grading'],
      promptFormula: 'extreme close-up of tactical winter work gloves gripping ice tools in blizzard, snow dust particulate, photorealistic textures, cinematic commercial',
      pills: ['Product Reel', 'Outdoor Apparel', 'Runway Gen-3']
    },
    '7': {
      id: '7',
      title: 'RatedWorktops / Digital UI Platform',
      category: '07 / UI & MOTION STUDY',
      tag: 'motion',
      image: 'assets/projects/thumb_b2.png',
      video: 'assets/videos/video_b2.mp4',
      description: 'Dynamic digital platform promo showcasing responsive web and mobile interfaces for kitchen worktop estimates with crisp typography and motion graphics.',
      specs: {
        resolution: '1080p 60fps',
        fps: '60 fps High Velocity',
        ratio: '16:9 Motion',
        audio: 'Modern Upbeat Corporate SFX'
      },
      tools: ['After Effects', 'Figma Motion', 'Premiere Pro', 'Screen Studio'],
      promptFormula: 'smooth isometric 3D phone screen transitions, quartz kitchen worktops quote builder UI, modern micro-interactions and kinetic typography',
      pills: ['Motion Graphics', 'UI/UX Promo', 'SaaS Reel']
    },
    '8': {
      id: '8',
      title: 'Kinship / Emotional Narrative Drama',
      category: '08 / CINEMATIC DRAMA',
      tag: 'campaign',
      image: 'assets/projects/thumb_b3.png',
      video: 'assets/videos/video_b3.mp4',
      description: 'Deeply emotional dramatic storytelling piece capturing intimate family connections, unspoken tension, and cinematic lighting continuity.',
      specs: {
        resolution: '1080p DCI Anamorphic',
        fps: '24 fps Cinematic',
        ratio: '2.39:1 Film',
        audio: 'Emotive Orchestral Score'
      },
      tools: ['Kling AI v1.5', 'Midjourney v6', 'DaVinci Resolve Studio', 'Topaz Video AI'],
      promptFormula: '35mm film still of emotional reunion scene in warm twilight living room, expressive tearful gaze, anamorphic bokeh, cinematic drama, kodak 5219',
      pills: ['Emotional Story', 'Anamorphic 35mm', 'Kling AI']
    },
    '9': {
      id: '9',
      title: 'Solace / Character Vignette',
      category: '09 / VISUAL ESSAY',
      tag: 'campaign',
      image: 'assets/projects/thumb_b4.png',
      video: 'assets/videos/video_b4.mp4',
      description: 'Atmospheric character study exploring quiet introspection, soft natural ambient lighting, and subtle micro-expressions.',
      specs: {
        resolution: '1080p HD',
        fps: '24 fps Organic',
        ratio: '16:9 Cinematic',
        audio: 'Subtle Ambient Strings'
      },
      tools: ['Luma Dream Machine', 'Runway Gen-3', 'Adobe Audition'],
      promptFormula: 'shallow depth of field close up of contemplative young protagonist by rainy cafe window, golden interior bokeh, melancholic warmth, photoreal',
      pills: ['Character Study', 'Luma Dream Machine', 'Atmospheric']
    },
    '10': {
      id: '10',
      title: 'Scale & Launch / E-Commerce Growth',
      category: '10 / COMMERCIAL CAMPAIGN',
      tag: 'social',
      image: 'assets/projects/thumb_b5.png',
      video: 'assets/videos/video_b5.mp4',
      description: 'Fast-paced, high-converting commercial promo engineered for Amazon, Shopify, and e-commerce founders seeking rapid brand acceleration.',
      specs: {
        resolution: '1080p High Bitrate',
        fps: '30 fps Punchy',
        ratio: '16:9 Ad Master',
        audio: 'Punchy Commercial Beat'
      },
      tools: ['Premiere Pro', 'Runway Gen-3', 'After Effects', 'ElevenLabs'],
      promptFormula: 'energetic modern e-commerce entrepreneur reviewing digital revenue analytics, rapid kinetic split screens, vibrant corporate color grade',
      pills: ['E-Commerce Ad', 'Growth Campaign', 'Viral Rhythm']
    },
    '11': {
      id: '11',
      title: 'Terra Drone / Landscape Aerial Study',
      category: '11 / DRONE CINEMATOGRAPHY',
      tag: 'motion',
      image: 'assets/projects/thumb_b6.png',
      video: 'assets/videos/video_b6.mp4',
      description: 'Sweeping aerial documentary shot tracking community landscapes, rolling countryside terrain, and expansive natural horizons.',
      specs: {
        resolution: '1080p Drone Master',
        fps: '30 fps Ultra-Smooth',
        ratio: '16:9 Aerial',
        audio: 'Spatial Nature Soundscape'
      },
      tools: ['Kling AI v1.5', 'ComfyUI', 'Premiere Pro', 'Topaz Gigapixel'],
      promptFormula: 'wide aerial drone orbit over coastal hillside village at dawn, sun flare on camera lens, hyperdetailed vegetation, photoreal 8k',
      pills: ['Drone Tracking', 'Aerial Cinema', 'Kling AI']
    },
    '12': {
      id: '12',
      title: 'Atelier / Luxury Stationery Aesthetic',
      category: '12 / LIFESTYLE CINEMA',
      tag: 'social',
      image: 'assets/projects/thumb_b7.png',
      video: 'assets/videos/video_b7.mp4',
      description: 'Warm, minimalist desk aesthetic commercial highlighting leather journals, handcrafted stationery, and modern creative workspace rituals.',
      specs: {
        resolution: '1080p High Contrast',
        fps: '24 fps Film Look',
        ratio: '16:9 Editorial',
        audio: 'Lofi Acoustic & Ambient Rain'
      },
      tools: ['Runway Gen-3', 'Midjourney v6.1', 'DaVinci Resolve Studio'],
      promptFormula: 'cinematic top-down and 45 degree macro shots of bespoke leather journal on walnut desk, brass fountain pen gliding, steam rising from coffee, kodak portra',
      pills: ['Lifestyle Editorial', 'Macro Detail', 'Runway Gen-3']
    },
    '13': {
      id: '13',
      title: 'Equinox / Renewable Energy Infrastructure',
      category: '13 / CLEAN ENERGY CINEMA',
      tag: 'brand',
      image: 'assets/projects/thumb_c1.png',
      video: 'assets/videos/video_c1.mp4',
      description: 'Sweeping aerial documentary capturing golden-hour wind turbine fields, expansive green power grids, and cinematic landscape lighting.',
      specs: {
        resolution: '4K UHD 3840x2160',
        fps: '24 fps Cinematic',
        ratio: '16:9 Landscape',
        audio: 'Ambient Acoustic & Drone Score'
      },
      tools: ['Runway Gen-3 Alpha', 'Midjourney v6.1', 'DaVinci Resolve', 'Premiere Pro'],
      promptFormula: 'ultra-wide 8k aerial drone shot sweeping over rolling green hills dotted with modern white wind turbines during a dramatic golden hour sunset, anamorphic lens flare, photorealistic cinematic lighting --ar 16:9',
      pills: ['Renewable Energy', 'Aerial Drone', 'Runway Gen-3']
    },
    '14': {
      id: '14',
      title: 'Vanguard / Heavy Industry & Rig Operations',
      category: '14 / INDUSTRIAL CAMPAIGN',
      tag: 'campaign',
      image: 'assets/projects/thumb_c2.png',
      video: 'assets/videos/video_c2.mp4',
      description: 'Intense on-site documentary sequence following industrial field engineers walking against the backdrop of a massive energy rig complex.',
      specs: {
        resolution: '1080x1920 Vertical HD',
        fps: '30 fps Mobile',
        ratio: '9:16 Vertical',
        audio: 'Industrial Ambient & Low Rumbles'
      },
      tools: ['Kling AI', 'Luma Dream Machine', 'Premiere Pro', 'DaVinci Resolve'],
      promptFormula: 'cinematic portrait shot of four diverse offshore industrial engineers wearing safety helmets and orange high-vis suits walking confidently toward camera, towering oil refinery rig and steam behind them, 35mm film grain, dynamic low angle --ar 9:16',
      pills: ['Industrial Cinema', 'Fieldwork Documentary', 'Kling AI']
    },
    '15': {
      id: '15',
      title: 'Genesis / The Creator\'s Silhouette',
      category: '15 / NARRATIVE CHIAROSCURO',
      tag: 'brand',
      image: 'assets/projects/thumb_c3.png',
      video: 'assets/videos/video_c3.mp4',
      description: 'Intimate, high-contrast monochrome aesthetic capturing deep focus, contemplative solitude, and the raw spark of written ideation.',
      specs: {
        resolution: '1080x1920 Vertical HD',
        fps: '24 fps Film Look',
        ratio: '9:16 Vertical',
        audio: 'Intimate Piano & Room Tone'
      },
      tools: ['Midjourney v6.1', 'Luma Dream Machine', 'DaVinci Resolve', 'Topaz Video AI'],
      promptFormula: 'dramatic chiaroscuro portrait in high-contrast black and white, solitary man seated at desk in thought, intense shaft of directional top-light cutting through darkness, particles drifting in light beam, 50mm f/1.2 lens, emotive film look --ar 9:16',
      pills: ['Monochrome', 'Chiaroscuro', 'Luma Dream Machine']
    },
    '16': {
      id: '16',
      title: 'Atlas / Next-Gen Continental Navigation',
      category: '16 / INTERACTIVE STORYTELLING',
      tag: 'social',
      image: 'assets/projects/thumb_c4.png',
      video: 'assets/videos/video_c4.mp4',
      description: 'Vibrant lifestyle tech sequence blending outdoor realism with interactive 3D holographic continental map data and travel visualization.',
      specs: {
        resolution: '1920x1080 Full HD',
        fps: '30 fps Dynamic',
        ratio: '16:9 Landscape',
        audio: 'Uplifting Afro-Electronic Beat'
      },
      tools: ['Runway Gen-3 Alpha', 'After Effects', 'Midjourney v6.1', 'Premiere Pro'],
      promptFormula: 'medium shot of two joyful African travelers on a mountain overlook interacting with a glowing golden holographic 3D data map floating in mid-air, motion tracking graphics, photorealistic sunlight, cinematic depth of field --ar 16:9',
      pills: ['Holographic UI', 'Travel Tech', 'Runway Gen-3']
    },
    '17': {
      id: '17',
      title: 'Commodity / Algorithmic Market Motion',
      category: '17 / 3D DATA VISUALIZATION',
      tag: 'motion',
      image: 'assets/projects/thumb_c5.png',
      video: 'assets/videos/video_c5.mp4',
      description: 'Futuristic financial motion design tracking golden energy barrels surrounded by floating algorithmic price tickers, heat maps, and volumetric rays.',
      specs: {
        resolution: '1080x1920 Vertical HD',
        fps: '30 fps Kinetic',
        ratio: '9:16 Vertical',
        audio: 'Electronic Glitch & Sub-Bass'
      },
      tools: ['Kling AI', 'Cinema 4D / After Effects', 'Runway Gen-3', 'DaVinci Resolve'],
      promptFormula: 'sleek 3D financial motion graphics, black and gold oil barrels stacked on dark reflective trading floor, surrounded by floating golden numerical tickers, glowing chart trajectories, volumetric golden dust, macro lens --ar 9:16',
      pills: ['FinTech Motion', '3D Kinetic Data', 'Kling AI']
    }
  };

  // 3. Sticky Navbar Scroll State
  const siteNav = document.querySelector('.site-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteNav.classList.add('scrolled');
    } else {
      siteNav.classList.remove('scrolled');
    }
  }, { passive: true });

  // 4. Mobile Menu Navigation
  const menuToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
        if (window.lucide) window.lucide.createIcons();
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.setAttribute('data-lucide', 'menu');
          if (window.lucide) window.lucide.createIcons();
        }
      });
    });
  }

  // 5. Active Navigation Link Spy
  const sections = document.querySelectorAll('section[id], header#top');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // 6. Featured Work Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const workCards = document.querySelectorAll('.work-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      workCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || filter === category) {
          card.style.display = 'block';
          card.style.animation = 'revealUp 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 7. Lightbox Modal Interaction
  const modal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalMedia = document.getElementById('modalMedia');
  const modalVideo = document.getElementById('modalVideo');
  const modalKicker = document.getElementById('modalKicker');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalSpecs = document.getElementById('modalSpecs');
  const modalPrompt = document.getElementById('modalPrompt');
  const modalTools = document.getElementById('modalTools');
  const modalInquireBtn = document.getElementById('modalInquireBtn');

  function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data || !modal) return;

    // Handle video vs image preview
    if (data.video && modalVideo) {
      modalVideo.style.display = 'block';
      modalVideo.src = data.video;
      modalVideo.currentTime = 0;
      modalVideo.play().catch(() => {});
      modalMedia.style.display = 'none';
    } else {
      if (modalVideo) {
        modalVideo.pause();
        modalVideo.style.display = 'none';
        modalVideo.removeAttribute('src');
      }
      modalMedia.style.display = 'block';
      modalMedia.src = data.image;
      modalMedia.alt = data.title;
    }

    modalKicker.textContent = data.category;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.description;

    // Specs
    modalSpecs.innerHTML = `
      <div class="modal-spec-item">
        <div class="label">Resolution</div>
        <div class="value">${data.specs.resolution}</div>
      </div>
      <div class="modal-spec-item">
        <div class="label">Framerate</div>
        <div class="value">${data.specs.fps}</div>
      </div>
      <div class="modal-spec-item">
        <div class="label">Aspect Ratio</div>
        <div class="value">${data.specs.ratio}</div>
      </div>
      <div class="modal-spec-item">
        <div class="label">Sound Master</div>
        <div class="value">${data.specs.audio}</div>
      </div>
    `;

    // Prompt Formula
    modalPrompt.textContent = data.promptFormula;

    // Tools
    modalTools.innerHTML = data.tools
      .map(tool => `<span class="tool-badge"><i data-lucide="cpu" class="w-3.5 h-3.5"></i> ${tool}</span>`)
      .join('');

    // Inquire Button link
    modalInquireBtn.onclick = () => {
      closeProjectModal();
      const projectSelect = document.getElementById('inquiryProjectType');
      if (projectSelect) {
        projectSelect.value = data.title;
      }
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (window.lucide) window.lucide.createIcons();
  }

  function closeProjectModal() {
    if (!modal) return;
    if (modalVideo) {
      modalVideo.pause();
      modalVideo.currentTime = 0;
    }
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Bind clicks to project cards
  workCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const id = card.getAttribute('data-id');
      openProjectModal(id);
    });
  });

  // Also bind hero showreel trigger
  const heroShowreel = document.getElementById('heroShowreelTrigger');
  if (heroShowreel) {
    heroShowreel.addEventListener('click', () => {
      openProjectModal('1');
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
    }
  });

  // 8. Quick Inquiry Form Submission to iniesta.automation@gmail.com
  const inquiryForm = document.getElementById('projectInquiryForm');
  const inquiryStatus = document.getElementById('inquiryStatusMsg');
  const inquirySubmitBtn = document.getElementById('inquirySubmitBtn');

  if (inquiryForm && inquiryStatus) {
    inquiryForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('inquiryName').value.trim();
      const email = document.getElementById('inquiryEmail').value.trim();
      const projectType = document.getElementById('inquiryProjectType').value;
      const message = document.getElementById('inquiryMessage').value.trim();

      if (!name || !email || !message) return;

      // Set loading state
      if (inquirySubmitBtn) {
        inquirySubmitBtn.disabled = true;
        inquirySubmitBtn.innerHTML = `
          <span class="form-spinner"></span>
          <span>Sending Inquiry...</span>
        `;
      }

      inquiryStatus.className = 'form-status-msg';
      inquiryStatus.style.display = 'none';

      try {
        // Dynamically update the hidden _subject field with the user's name
        const subjectField = document.getElementById('formSubject');
        if (subjectField) {
          subjectField.value = `New AI Video Portfolio Inquiry from ${name}`;
        }

        // Use FormData from the actual form — FormSubmit processes name attributes natively
        const formData = new FormData(inquiryForm);

        const response = await fetch('https://formsubmit.co/ajax/iniesta.automation@gmail.com', {
          method: 'POST',
          headers: {
            'Accept': 'application/json'
          },
          body: formData
        });

        const result = await response.json();

        // Strictly check success — FormSubmit returns success:"false" for activation & errors
        if (response.ok && (result.success === 'true' || result.success === true)) {
          inquiryStatus.className = 'form-status-msg success';
          inquiryStatus.innerHTML = `
            <strong>Inquiry Sent Successfully!</strong><br>
            Thank you, <strong>${name}</strong>. Your project details have been emailed directly to <strong>iniesta.automation@gmail.com</strong>. Inioluwa will reply to <em>${email}</em> promptly.
          `;
          inquiryStatus.style.display = 'block';
          inquiryForm.reset();

        } else if (result.message && result.message.toLowerCase().includes('activation')) {
          // FormSubmit needs email activation — guide the user
          inquiryStatus.className = 'form-status-msg error';
          inquiryStatus.innerHTML = `
            <strong>Almost there!</strong> The form service requires a one-time activation.<br>
            An activation email was sent to <strong>iniesta.automation@gmail.com</strong>.<br>
            Please check your <strong>Gmail inbox</strong> (and Spam/Promotions tabs) for an email from <em>FormSubmit.co</em>,
            click the <strong>"Activate Form"</strong> button, then re-submit your inquiry.
          `;
          inquiryStatus.style.display = 'block';

        } else {
          throw new Error(result.message || 'Submission error');
        }
      } catch (err) {
        console.warn('FormSubmit AJAX notice:', err);
        // Fallback: If network or blocker interrupts, provide direct mailto link
        const subject = encodeURIComponent(`Project Inquiry: ${projectType} - ${name}`);
        const body = encodeURIComponent(`Hi Inioluwa,\n\nName: ${name}\nEmail: ${email}\nProject Category: ${projectType}\n\nProject Overview:\n${message}\n\nSent from your AI Video Specialist portfolio.`);
        const mailtoLink = `mailto:iniesta.automation@gmail.com?subject=${subject}&body=${body}`;

        inquiryStatus.className = 'form-status-msg error';
        inquiryStatus.innerHTML = `
          <strong>Notice:</strong> Direct form transmission could not connect.<br>
          <a href="${mailtoLink}" style="color: var(--cyan); text-decoration: underline; font-weight: 700; display: inline-block; margin-top: 0.4rem;">
            Click here to send directly via your email app to iniesta.automation@gmail.com ↗
          </a>
        `;
        inquiryStatus.style.display = 'block';
      } finally {
        if (inquirySubmitBtn) {
          inquirySubmitBtn.disabled = false;
          inquirySubmitBtn.innerHTML = `
            <span>Submit Inquiry</span>
            <i data-lucide="send" class="w-4 h-4"></i>
          `;
          if (window.lucide) window.lucide.createIcons();
        }
        setTimeout(() => {
          inquiryStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      }
    });
  }
});
