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
    },
    '18': {
      id: '18',
      title: 'Paradigms to Profit / Masterclass Reel',
      category: '18 / SOCIAL & CAMPAIGN REEL',
      tag: 'social',
      image: 'assets/projects/thumb_d1.png',
      video: 'assets/videos/video_d1.mp4',
      description: 'High-retention social reel produced for Alana O\'Regan (Alive Experience), featuring Bob Proctor\'s "Paradigms to Profit" masterclass, dynamic animated kinetic captions, picture-in-picture presenter framing, and branded visual hierarchy.',
      specs: {
        resolution: '1080x1920 Vertical HD',
        fps: '30 fps High-Definition',
        ratio: '9:16 Vertical Reel',
        audio: 'Studio Mastered Dialogue & Voiceover'
      },
      tools: ['CapCut Pro', 'Adobe Premiere Pro', 'After Effects', 'AI Kinetic Typography'],
      promptFormula: 'high-converting vertical social reel, 9:16 aspect ratio, branded header "alive experience", Bob Proctor and Alana O\'Regan masterclass graphics, high-contrast kinetic typography, punchy pacing',
      pills: ['Short-Form Reel', 'Kinetic Typography', 'Brand Repurposing']
    },
    '19': {
      id: '19',
      title: 'Creative Process / Mindset Blueprint',
      category: '19 / EDUCATIONAL SHORT-FORM',
      tag: 'social',
      image: 'assets/projects/thumb_d2.png',
      video: 'assets/videos/video_d2.mp4',
      description: 'Engaging educational short-form reel illustrating "The Creative Process: Fantasy, Theory (Goal), and Fact" with integrated diagram visualization, synchronized kinetic captions, and multi-element branding.',
      specs: {
        resolution: '1080x1920 Vertical HD',
        fps: '30 fps High-Definition',
        ratio: '9:16 Vertical Reel',
        audio: 'Clear Dialogue Master & Acoustic EQ'
      },
      tools: ['CapCut Pro', 'Adobe Premiere Pro', 'After Effects', 'AI Kinetic Typography'],
      promptFormula: 'vertical educational coaching reel, 9:16 layout, Alive Experience branded header, creative process diagram animation, speaker picture-in-picture reaction, high-contrast dynamic captions',
      pills: ['Educational Reel', 'Kinetic Subtitles', 'Alive Experience']
    },
    '20': {
      id: '20',
      title: 'New Standard / Luxury Estate Living',
      category: '20 / ARCHITECTURAL & REAL ESTATE FILM',
      tag: 'brand',
      image: 'assets/projects/thumb_d3.png',
      video: 'assets/videos/video_d3.mp4',
      description: 'Cinematic luxury real estate architectural showcase directing aerial drone flyovers, sunlit interior walkthroughs, manicured landscape views, and high-conversion commercial narration for modern estate living.',
      specs: {
        resolution: '1920x1080 Full HD',
        fps: '30 fps Cinematic',
        ratio: '16:9 Landscape',
        audio: 'Studio Mastered Narration & Ambient Score'
      },
      tools: ['Runway Gen-3', 'Luma Dream Machine', 'After Effects', 'ElevenLabs Voice'],
      promptFormula: 'cinematic aerial drone shot of modern luxury gated villa estate, photorealistic architectural rendering, warm golden hour sunlight, lush manicured hedges and roads, smooth 4k gimbal push-in --ar 16:9',
      pills: ['Architectural Film', 'Real Estate Commercial', 'Cinematic Drone']
    },
    '21': {
      id: '21',
      title: 'Direct Response / Home Remodel UGC Hook',
      category: '21 / UGC & DIRECT-RESPONSE HOOK',
      tag: 'social',
      image: 'assets/projects/thumb_d4.png',
      video: 'assets/videos/video_d4.mp4',
      description: 'High-retention UGC direct-response hook ad for a bathroom remodeling service, featuring relatable storytelling, customer reaction framing, kinetic yellow caption blocks, and service pricing hook.',
      specs: {
        resolution: '1080x1920 Vertical HD',
        fps: '30 fps High-Definition',
        ratio: '9:16 Vertical Reel',
        audio: 'Crisp Dialogue & Street Ambience EQ'
      },
      tools: ['CapCut Pro', 'Premiere Pro', 'AI Kinetic Typography', 'Audio Sweetening'],
      promptFormula: 'vertical UGC creator style video, 9:16 aspect ratio, shocked female homeowner outside house, direct-to-camera conversation, high-contrast yellow subtitle banner "how much does an installation like this cost?", punchy pacing',
      pills: ['UGC Hook Ad', 'Direct Response', 'Home Remodeling']
    },
    '22': {
      id: '22',
      title: 'Apex Cinema / Bugatti Hypercar Commercial',
      category: '22 / LUXURY AUTOMOTIVE & BRAND COMMERCIAL',
      tag: 'brand',
      image: 'assets/projects/thumb_d5.png',
      video: 'assets/videos/video_d5.mp4',
      description: 'High-octane luxury automotive commercial directing photorealistic generative camera sweeps, reflections, obsidian marble showroom lighting, and studio sound mastering for elite hypercars.',
      specs: {
        resolution: '1920x1080 Full HD',
        fps: '30 fps Cinematic',
        ratio: '16:9 Landscape',
        audio: 'Studio Mastered Engine Acoustics & Score'
      },
      tools: ['Runway Gen-3', 'Luma Dream Machine', 'After Effects', 'AI Sound Design'],
      promptFormula: 'cinematic commercial shot of Bugatti Chiron hypercar parked in ultra-luxury minimalist showroom, glossy obsidian marble reflections, rim lighting, 8k raytracing, camera push-in --ar 16:9',
      pills: ['Automotive Commercial', 'Hypercar Cinema', 'Luxury Brand Film']
    },
    '23': {
      id: '23',
      title: 'Shiro / Haute Gastronomy & Culinary Artistry',
      category: '23 / FINE DINING & CULINARY BRAND FILM',
      tag: 'brand',
      image: 'assets/projects/thumb_d6.png',
      video: 'assets/videos/video_d6.mp4',
      description: 'Atmospheric luxury culinary commercial showcasing master omakase chefs, delicate glazing sauce pour, and warm celebratory dining.',
      specs: {
        resolution: '854x480 High-Definition',
        fps: '30 fps Cinematic',
        ratio: '16:9 Landscape',
        audio: 'Warm Ambience, Kitchen Foley & Orchestral Dining Score'
      },
      tools: ['Runway Gen-3 Alpha', 'Midjourney v6.1', 'DaVinci Resolve Studio', 'Kling AI'],
      promptFormula: 'cinematic luxury restaurant commercial, master Japanese omakase chef precision slicing and pouring rich glaze over seared culinary dish, shallow depth of field, warm ambient wood interior lighting, elegant dining guests raising glasses, slow pan 4k macro --ar 16:9',
      pills: ['Culinary Cinema', 'Macro Gastronomy', 'Luxury Brand Spot']
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

    // Pause any card hover preview videos
    document.querySelectorAll('.work-video-preview').forEach(v => {
      v.pause();
    });
    document.querySelectorAll('.work-card.is-previewing').forEach(c => {
      c.classList.remove('is-previewing');
    });

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
      const currentTitle = data.title;
      const contactSection = document.getElementById('projectInquiryForm');
      if (contactSection) {
        const projectSelect = document.getElementById('inquiryProjectType');
        if (projectSelect) {
          projectSelect.value = data.title;
        }
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = `contact.html?project=${encodeURIComponent(currentTitle)}`;
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

  // 8. Dynamic Hover Video Previews for Portfolio Cards
  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || window.matchMedia('(hover: none)').matches;

  workCards.forEach(card => {
    const id = card.getAttribute('data-id');
    const data = projectsData[id];
    if (!data || !data.video) return;

    // Create a lazy preview video element
    const previewVideo = document.createElement('video');
    previewVideo.className = 'work-video-preview';
    previewVideo.muted = true;
    previewVideo.loop = true;
    previewVideo.playsInline = true;
    previewVideo.setAttribute('playsinline', '');
    previewVideo.setAttribute('muted', '');
    previewVideo.preload = 'none';
    previewVideo.dataset.src = data.video;

    // Smooth reveal once initial frame data is ready
    previewVideo.addEventListener('loadeddata', () => {
      previewVideo.classList.add('video-ready');
    });

    // Place video before overlay so dark gradient stays on top
    const overlay = card.querySelector('.work-overlay');
    if (overlay) {
      card.insertBefore(previewVideo, overlay);
    } else {
      card.appendChild(previewVideo);
    }

    if (!isTouchDevice) {
      let hoverTimeout = null;
      let playPromise = null;

      card.addEventListener('mouseenter', () => {
        hoverTimeout = setTimeout(() => {
          if (!previewVideo.src) {
            previewVideo.src = previewVideo.dataset.src;
            previewVideo.load();
          }
          card.classList.add('is-previewing');
          playPromise = previewVideo.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {});
          }
        }, 90);
      });

      card.addEventListener('mouseleave', () => {
        if (hoverTimeout) {
          clearTimeout(hoverTimeout);
          hoverTimeout = null;
        }
        card.classList.remove('is-previewing');
        if (playPromise !== undefined && playPromise) {
          playPromise.then(() => {
            previewVideo.pause();
            previewVideo.currentTime = 0;
          }).catch(() => {
            previewVideo.pause();
          });
        } else {
          previewVideo.pause();
          previewVideo.currentTime = 0;
        }
      });
    }
  });

  // 9. Quick Inquiry Form Submission to iniesta.automation@gmail.com
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
        // Check if opened via local file protocol (file://)
        if (window.location.protocol === 'file:') {
          inquiryStatus.className = 'form-status-msg error';
          inquiryStatus.innerHTML = `
            <strong>Local Preview Notice:</strong> Browser security restricts external form submission when opening HTML directly from disk (<code>file:///</code>).<br>
            Please test this on your live site: <a href="https://inioluwa-portfolio-self.vercel.app/#contact" target="_blank" style="color: var(--cyan); text-decoration: underline;">inioluwa-portfolio-self.vercel.app</a> or via local server (<code>python -m http.server 3000</code>).
          `;
          inquiryStatus.style.display = 'block';
          return;
        }

        // Dynamically update the hidden fields
        const subjectField = document.getElementById('formSubject');
        if (subjectField) {
          subjectField.value = `New AI Video Portfolio Inquiry from ${name} (${projectType})`;
        }
        const replyToField = document.getElementById('formReplyTo');
        if (replyToField) {
          replyToField.value = email;
        }

        // Send structured JSON payload to FormSubmit so every field is guaranteed to display clearly
        const payload = {
          "Client Name": name,
          "Client Email": email,
          "Project Category": projectType,
          "Project Overview & Timeline": message,
          "_replyto": email,
          "_subject": `New Inquiry from ${name} - ${projectType}`,
          "_template": "box"
        };

        const response = await fetch('https://formsubmit.co/ajax/iniesta.automation@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const result = await response.json();

        // Check success
        if (response.ok && (result.success === 'true' || result.success === true)) {
          inquiryStatus.className = 'form-status-msg success';
          inquiryStatus.innerHTML = `
            <strong>Inquiry Sent Successfully!</strong><br>
            Thank you, <strong>${name}</strong>. Your project details have been emailed directly to <strong>iniesta.automation@gmail.com</strong>. Inioluwa will reply to <em>${email}</em> promptly.
          `;
          inquiryStatus.style.display = 'block';
          inquiryForm.reset();

        } else if (result.message && result.message.toLowerCase().includes('activat')) {
          // FormSubmit needs 1-click email activation
          inquiryStatus.className = 'form-status-msg error';
          inquiryStatus.innerHTML = `
            <strong>One-Time Activation Required:</strong><br>
            FormSubmit has sent an activation link to <strong>iniesta.automation@gmail.com</strong>.<br>
            Please open your <strong>Gmail inbox</strong> (or Spam/Promotions tab), look for an email from <em>FormSubmit</em>, and click <strong>"Activate Form"</strong>.<br>
            Once clicked, this form is permanently activated and every inquiry will be delivered to your inbox automatically!
          `;
          inquiryStatus.style.display = 'block';

        } else if (result.message && (result.message.toLowerCase().includes('web server') || result.message.toLowerCase().includes('html file'))) {
          inquiryStatus.className = 'form-status-msg error';
          inquiryStatus.innerHTML = `
            <strong>Web Server Required:</strong> FormSubmit requires requests to come from a live web server.<br>
            Please submit this on your live Vercel site: <a href="https://inioluwa-portfolio-self.vercel.app/#contact" target="_blank" style="color: var(--cyan); text-decoration: underline;">inioluwa-portfolio-self.vercel.app</a>.
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
          <strong>Notice:</strong> Direct form transmission could not connect (${err.message || 'Network blocked'}).<br>
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

  // 10. Multi-Turn Interactive WhatsApp AI Chatbot (+2348135384333)
  const waLauncherBtn = document.getElementById('waLauncherBtn');
  const waChatWindow = document.getElementById('waChatWindow');
  const waCloseBtn = document.getElementById('waCloseBtn');
  const waChatBody = document.getElementById('waChatBody');
  const waChatFooter = document.getElementById('waChatFooter');
  const waChatInput = document.getElementById('waChatInput');
  const waUnreadBadge = document.getElementById('waUnreadBadge');

  const WA_PHONE = '2348135384333'; // Direct Nigerian WhatsApp format for 08135384333
  const PHONE_LINE_1 = '08106273746';
  const PHONE_LINE_2 = '08135384333';

  // Conversational state to qualify client before WhatsApp hand-off
  let chatState = {
    step: 0, // 0: Service, 1: Format/Length, 2: Timeline, 3: Client Details / Notes, 4: Handover
    inBriefMode: false,
    service: '',
    format: '',
    timeline: '',
    notes: '',
    clientName: ''
  };

  // Trained Knowledge Base for Inioluwa (AI Video Specialist & Creative Technologist)
  const BOT_KNOWLEDGE = {
    pricing: {
      title: "💰 Pricing & Investment Guide",
      html: `
        <p><strong>Transparent, Efficiency-Led Investment:</strong></p>
        <p style="margin-top: 6px;">Because we use cutting-edge generative AI (Runway Gen-3, Kling 1.5, Midjourney, ComfyUI), our production budgets represent <strong>up to 70% cost savings</strong> compared to traditional $15,000–$50,000+ camera crews.</p>
        <ul style="margin: 8px 0 8px 18px; line-height: 1.5; font-size: 0.85rem; color: #bed2ea;">
          <li><strong>⚡ High-Retention Social Hooks / Ads (9:16):</strong> Rapid 24–48h turnaround for Meta & TikTok ads.</li>
          <li><strong>🎬 Cinematic Brand Films & Commercials:</strong> Custom multi-shot narrative spots with sound design.</li>
          <li><strong>🤖 Multilingual AI Avatars / Training:</strong> Photorealistic spokespersons without studio overhead.</li>
          <li><strong>📦 Monthly Content Retainers:</strong> Volume packages for high-growth brands and creators.</li>
        </ul>
        <p style="font-size: 0.82rem; color: #9eb8d5;">Every project includes <strong>100% full commercial rights</strong> and <strong>2 rounds of revisions</strong>. We also support Upwork Escrow milestone contracts.</p>
      `,
      chips: [
        { label: '📝 Start Project Brief & Quote', action: 'START_BRIEF' },
        { label: '💬 Get Custom Quote on WhatsApp', action: 'DIRECT_WA' },
        { label: '🛠️ What AI Tools Do You Use?', action: 'QUERY_TOOLS' }
      ]
    },

    tools: {
      title: "🛠️ AI Video Production Stack",
      html: `
        <p><strong>Production-Grade AI & Post-Production Suite:</strong></p>
        <p style="margin-top: 6px;">We don't rely on generic consumer filters. We engineer consistent, photorealistic visual pipelines with:</p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin: 8px 0; font-size: 0.82rem;">
          <div style="background: rgba(255,255,255,0.04); padding: 6px 8px; border-radius: 6px; border-left: 2px solid var(--cyan, #23e7f1);"><strong>Runway Gen-3</strong><br><span style="color:#9eb8d5;">Cinematic motion synthesis</span></div>
          <div style="background: rgba(255,255,255,0.04); padding: 6px 8px; border-radius: 6px; border-left: 2px solid var(--red, #ff3857);"><strong>Kling AI 1.5 & Luma</strong><br><span style="color:#9eb8d5;">Dynamic physics & camera</span></div>
          <div style="background: rgba(255,255,255,0.04); padding: 6px 8px; border-radius: 6px; border-left: 2px solid #10b981;"><strong>Midjourney & Flux</strong><br><span style="color:#9eb8d5;">Master visual concepts</span></div>
          <div style="background: rgba(255,255,255,0.04); padding: 6px 8px; border-radius: 6px; border-left: 2px solid #f59e0b;"><strong>ElevenLabs Voice</strong><br><span style="color:#9eb8d5;">Lifelike voice cloning</span></div>
          <div style="background: rgba(255,255,255,0.04); padding: 6px 8px; border-radius: 6px; border-left: 2px solid #8b5cf6;"><strong>DaVinci Resolve</strong><br><span style="color:#9eb8d5;">Color grading & pacing</span></div>
          <div style="background: rgba(255,255,255,0.04); padding: 6px 8px; border-radius: 6px; border-left: 2px solid var(--cyan, #23e7f1);"><strong>Topaz Video AI</strong><br><span style="color:#9eb8d5;">4K UHD upscaling</span></div>
        </div>
        <p style="font-size: 0.82rem; color: #9eb8d5;">Character faces and clothing are locked using reference LoRA weights & ComfyUI to guarantee shot-to-shot consistency.</p>
      `,
      chips: [
        { label: '🌟 See Projects Created With These', action: 'QUERY_PORTFOLIO' },
        { label: '⏱️ What Are Delivery Times?', action: 'QUERY_TIMELINE' },
        { label: '📝 Build a Project Brief', action: 'START_BRIEF' }
      ]
    },

    timeline: {
      title: "⏱️ Delivery & Turnaround Schedules",
      html: `
        <p><strong>Fast, Reliable Production Cycles:</strong></p>
        <ul style="margin: 8px 0 8px 18px; line-height: 1.5; font-size: 0.85rem; color: #bed2ea;">
          <li><strong>⚡ Fast Track (24–48 Hours):</strong> Video edits, short-form TikTok/Reels hooks, and rapid concept drafts.</li>
          <li><strong>🚀 Standard Sprint (3–5 Business Days):</strong> Complete multi-shot commercial brand films with voiceover and 4K master.</li>
          <li><strong>🗓️ Multi-Asset Campaigns (1–2 Weeks):</strong> Full brand libraries (10–20 variations in 16:9, 9:16, and 1:1).</li>
        </ul>
        <p style="font-size: 0.82rem; color: #9eb8d5;">Need a same-week launch? Mention your deadline in your WhatsApp brief and we'll prioritize your queue.</p>
      `,
      chips: [
        { label: '⚡ Fast Track Brief (24-48h)', action: 'TIMELINE_FAST' },
        { label: '🚀 Standard Brief (3-5 Days)', action: 'TIMELINE_STANDARD' },
        { label: '💬 Message on WhatsApp Directly', action: 'DIRECT_WA' }
      ]
    },

    services: {
      title: "🎬 9 Core Creative Capabilities",
      html: `
        <p>Inioluwa delivers end-to-end AI video production across <strong>9 core disciplines</strong>:</p>
        <ol style="margin: 8px 0 8px 18px; line-height: 1.5; font-size: 0.85rem; color: #bed2ea;">
          <li><strong>AI Video Generation:</strong> Commercial brand films & surreal set pieces.</li>
          <li><strong>Video Editing & Post:</strong> High-tempo retention pacing & sound design.</li>
          <li><strong>Prompt Architecture:</strong> Repeatable prompt formulas & LoRA tuning.</li>
          <li><strong>AI Avatars:</strong> Multilingual digital presenters & spokespeople.</li>
          <li><strong>UGC Hook Ads:</strong> Direct-response video ads for TikTok & Meta.</li>
          <li><strong>Motion Graphics & VFX:</strong> Kinetic typography & 3D HUD elements.</li>
          <li><strong>Audio Engineering:</strong> ElevenLabs voice synthesis & film scoring.</li>
          <li><strong>4K Video Upscaling:</strong> Topaz 4K enhancement & detail restoration.</li>
          <li><strong>Visual Storyboarding:</strong> Midjourney & Flux conceptual art.</li>
        </ol>
      `,
      chips: [
        { label: '📝 Start an Intake Brief', action: 'START_BRIEF' },
        { label: '💰 How Much Does It Cost?', action: 'QUERY_PRICING' },
        { label: '💬 Chat With Inioluwa on WhatsApp', action: 'DIRECT_WA' }
      ]
    },

    portfolio: {
      title: "🌟 23 Live Video Productions",
      html: `
        <p>Explore 23 live AI video productions featured in our portfolio:</p>
        <ul style="margin: 8px 0 8px 18px; line-height: 1.5; font-size: 0.85rem; color: #bed2ea;">
          <li><strong>Project 23 (Shiro Omakase):</strong> Haute culinary brand film with macro food cinematography.</li>
          <li><strong>Project 22 (Apex Cinema Bugatti):</strong> Hypercar commercial with showroom camera sweeps.</li>
          <li><strong>Project 21 (UGC Hook):</strong> High-conversion direct response reel with kinetic captions.</li>
          <li><strong>Project 20 (Luxury Real Estate):</strong> Architectural flythrough & interior lighting.</li>
        </ul>
        <p style="font-size: 0.82rem; color: #9eb8d5;">Every project includes full prompt formulas and technical specs.</p>
      `,
      chips: [
        { label: '🌐 Open Full 23-Project Portfolio', action: 'NAV_PORTFOLIO' },
        { label: '📱 View TikTok (@iniesta.automation1)', action: 'NAV_TIKTOK' },
        { label: '📝 Build a Similar Video Brief', action: 'START_BRIEF' }
      ]
    },

    revisions: {
      title: "🔄 Revisions & Quality Assurance",
      html: `
        <p><strong>Your Complete Satisfaction Is Guaranteed:</strong></p>
        <p style="margin-top: 6px;">Every production includes <strong>two comprehensive revision rounds</strong>:</p>
        <ul style="margin: 8px 0 8px 18px; line-height: 1.5; font-size: 0.85rem; color: #bed2ea;">
          <li><strong>Round 1 (Rough Cut):</strong> Review scene direction, character actions, pacing, and voiceover script.</li>
          <li><strong>Round 2 (Fine Polish):</strong> Color grading adjustments, audio balance, title tweaks, and master 4K delivery.</li>
        </ul>
        <p style="font-size: 0.82rem; color: #9eb8d5;">Prompt-level iterations happen in hours instead of costly reshoots.</p>
      `,
      chips: [
        { label: '📝 Build a Project Brief', action: 'START_BRIEF' },
        { label: '💬 Discuss on WhatsApp', action: 'DIRECT_WA' }
      ]
    },

    contact: {
      title: "📬 Contact & Studio Channels",
      html: `
        <p><strong>Connect Directly With Inioluwa:</strong></p>
        <ul style="margin: 8px 0 8px 18px; line-height: 1.6; font-size: 0.85rem; color: #bed2ea;">
          <li>💬 <strong>WhatsApp:</strong> <a href="https://wa.me/2348135384333" target="_blank" style="color:var(--cyan,#23e7f1); text-decoration:underline;">08135384333 (+2348135384333)</a></li>
          <li>📞 <strong>Direct Phone 1:</strong> <a href="tel:08106273746" style="color:var(--cyan,#23e7f1); text-decoration:underline;">08106273746</a></li>
          <li>📧 <strong>Direct Email:</strong> <a href="mailto:iniesta.automation@gmail.com" style="color:var(--cyan,#23e7f1); text-decoration:underline;">iniesta.automation@gmail.com</a></li>
          <li>📱 <strong>TikTok:</strong> <a href="https://www.tiktok.com/@iniesta.automation1" target="_blank" style="color:var(--cyan,#23e7f1); text-decoration:underline;">@iniesta.automation1</a></li>
          <li>💼 <strong>Upwork Profile:</strong> <a href="https://www.upwork.com/freelancers/~01050dd7c24906844a" target="_blank" style="color:var(--cyan,#23e7f1); text-decoration:underline;">Upwork Escrow Verified</a></li>
        </ul>
        <p style="font-size: 0.82rem; color: #9eb8d5;">Studio operations are based in Nigeria, serving international clients across North America, Europe, the Middle East, and Africa.</p>
      `,
      chips: [
        { label: '💬 Open WhatsApp Chat (08135384333)', action: 'DIRECT_WA' },
        { label: '📝 Build Your Brief First', action: 'START_BRIEF' }
      ]
    },

    process: {
      title: "🗺️ 6-Stage Production Workflow",
      html: `
        <p><strong>From Raw Idea to 4K Master in 6 Steps:</strong></p>
        <ol style="margin: 8px 0 8px 18px; line-height: 1.5; font-size: 0.85rem; color: #bed2ea;">
          <li><strong>Discovery & Creative Brief:</strong> We align on script, target audience, and visual tone.</li>
          <li><strong>Concept Art & Storyboarding:</strong> Midjourney/Flux visual seeds and character styling.</li>
          <li><strong>Generative Video Synthesis:</strong> Runway Gen-3 & Kling camera choreography.</li>
          <li><strong>Voice Synthesis & Audio Scoring:</strong> ElevenLabs narration and spatial sound effects.</li>
          <li><strong>Editorial & Color Grading:</strong> DaVinci Resolve timing, transitions, and text animations.</li>
          <li><strong>Topaz 4K UHD Master Delivery:</strong> Formatted for your exact platforms.</li>
        </ol>
      `,
      chips: [
        { label: '📝 Start Step 1: Project Brief', action: 'START_BRIEF' },
        { label: '💰 What About Pricing?', action: 'QUERY_PRICING' },
        { label: '💬 Chat on WhatsApp', action: 'DIRECT_WA' }
      ]
    }
  };

  // Smart Intent Detection Engine
  function detectQueryIntent(text) {
    const q = text.toLowerCase().trim();

    if (/\b(price|pricing|cost|how much|rate|rates|quote|quotation|budget|cheap|expensive|fee|fees|dollars|naira|\$|₦)\b/.test(q)) {
      return 'pricing';
    }
    if (/\b(tool|tools|software|stack|runway|midjourney|kling|luma|sora|elevenlabs|topaz|comfyui|flux|davinci|premiere)\b/.test(q)) {
      return 'tools';
    }
    if (/\b(timeline|time|how long|delivery|turnaround|deadline|fast|rush|urgent|hours|days|weeks)\b/.test(q)) {
      return 'timeline';
    }
    if (/\b(service|services|capabilities|what do you do|what can you do|offer|offers|package|packages)\b/.test(q)) {
      return 'services';
    }
    if (/\b(portfolio|project|projects|example|examples|sample|samples|work|video|videos|bugatti|shiro|real estate|food)\b/.test(q)) {
      return 'portfolio';
    }
    if (/\b(revision|revisions|changes|edit|corrections|modify|redo|guarantee)\b/.test(q)) {
      return 'revisions';
    }
    if (/\b(contact|phone|number|call|email|reach|whatsapp|location|where are you|nigeria|lagos|talk)\b/.test(q)) {
      return 'contact';
    }
    if (/\b(process|workflow|steps|how does it work|how it works|how do we start)\b/.test(q)) {
      return 'process';
    }
    if (/\b(tiktok|tik tok|social|instagram|reels)\b/.test(q)) {
      return 'portfolio';
    }
    if (/\b(upwork|contract|escrow|freelancer)\b/.test(q)) {
      return 'pricing';
    }
    if (/\b(hi|hello|hey|good morning|good afternoon|good evening|greetings)\b/.test(q)) {
      return 'greeting';
    }
    if (/\b(start|brief|order|book|hire|create|make a video|new video)\b/.test(q)) {
      return 'start_brief';
    }

    return null;
  }

  function toggleWaChat(forceOpen = null) {
    if (!waChatWindow || !waLauncherBtn) return;
    const shouldOpen = forceOpen !== null ? forceOpen : !waChatWindow.classList.contains('open');

    if (shouldOpen) {
      waChatWindow.classList.add('open');
      waLauncherBtn.classList.add('open');
      waLauncherBtn.setAttribute('aria-expanded', 'true');
      if (waUnreadBadge) waUnreadBadge.style.display = 'none';
      if (window.lucide) window.lucide.createIcons();
      setTimeout(() => {
        if (waChatInput) waChatInput.focus();
      }, 250);
    } else {
      waChatWindow.classList.remove('open');
      waLauncherBtn.classList.remove('open');
      waLauncherBtn.setAttribute('aria-expanded', 'false');
    }
  }

  if (waLauncherBtn) {
    waLauncherBtn.addEventListener('click', () => toggleWaChat());
  }

  if (waCloseBtn) {
    waCloseBtn.addEventListener('click', () => toggleWaChat(false));
  }

  // Auto trigger unread notification badge after 3.5 seconds
  setTimeout(() => {
    if (waUnreadBadge && (!waChatWindow || !waChatWindow.classList.contains('open'))) {
      waUnreadBadge.style.display = 'flex';
    }
  }, 3500);

  function createTimeStr() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function appendChatBubble(sender, htmlContent, actionBtn = null) {
    if (!waChatBody) return;
    const bubble = document.createElement('div');
    bubble.className = `wa-bubble ${sender}`;

    let actionHtml = '';
    if (actionBtn) {
      actionHtml = `
        <a href="${actionBtn.url}" target="_blank" rel="noopener noreferrer" class="wa-direct-btn">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.02L7.55 18.84L4.44 19.66L5.27 16.63L5.07 16.31C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.03C9.36 7.03 9.08 7.09 8.84 7.35C8.61 7.61 7.94 8.23 7.94 9.5C7.94 10.77 8.86 12 9 12.18C9.13 12.35 10.8 14.93 13.36 16.03C15.5 16.95 15.93 16.76 16.39 16.72C16.85 16.68 17.89 16.11 18.11 15.5C18.33 14.88 18.33 14.36 18.26 14.25C18.2 14.13 18.03 14.07 17.77 13.94C17.51 13.82 16.24 13.19 16 13.11C15.77 13.02 15.6 12.98 15.43 13.23C15.26 13.49 14.77 14.07 14.62 14.25C14.47 14.42 14.33 14.44 14.07 14.31C13.81 14.19 12.98 13.91 12 13.04C11.24 12.36 10.72 11.53 10.57 11.27C10.43 11.01 10.55 10.87 10.68 10.74C10.8 10.62 10.94 10.43 11.08 10.28C11.22 10.13 11.27 10.02 11.36 9.84C11.44 9.67 11.4 9.52 11.34 9.4C11.28 9.27 10.78 8.04 10.57 7.54C10.37 7.06 10.16 7.12 10 7.12C9.86 7.11 9.69 7.03 9.53 7.03Z"/>
          </svg>
          <span>${actionBtn.text}</span>
        </a>
      `;
    }

    bubble.innerHTML = `
      <div class="wa-bubble-content">
        ${htmlContent}
        ${actionHtml}
      </div>
      <span class="wa-bubble-time">${createTimeStr()}</span>
    `;

    waChatBody.appendChild(bubble);
    waChatBody.scrollTop = waChatBody.scrollHeight;
  }

  function showBotTyping(callback, delay = 450) {
    if (!waChatBody) return;
    const typingBubble = document.createElement('div');
    typingBubble.className = 'wa-bubble bot wa-typing-indicator';
    typingBubble.innerHTML = `
      <div class="wa-bubble-content">
        <div class="wa-typing-dots">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
    waChatBody.appendChild(typingBubble);
    waChatBody.scrollTop = waChatBody.scrollHeight;

    setTimeout(() => {
      typingBubble.remove();
      callback();
    }, delay);
  }

  function renderChips(optionsList, onSelect) {
    if (!waChatBody) return;
    const container = document.createElement('div');
    container.className = 'wa-quick-replies';

    optionsList.forEach(opt => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'wa-chip';
      btn.innerHTML = `<span>${opt.label}</span> <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>`;

      btn.addEventListener('click', () => {
        container.querySelectorAll('.wa-chip').forEach(b => {
          b.classList.add('disabled');
        });
        btn.classList.add('selected');
        onSelect(opt);
      });

      container.appendChild(btn);
    });

    waChatBody.appendChild(container);
    waChatBody.scrollTop = waChatBody.scrollHeight;
    if (window.lucide) window.lucide.createIcons();
  }

  function generateWhatsAppUrl(state) {
    let msg = `Hi Inioluwa! I just configured an AI video project brief on your portfolio:\n\n`;
    if (state.service) msg += `📌 Service: ${state.service}\n`;
    if (state.format) msg += `📐 Format & Length: ${state.format}\n`;
    if (state.timeline) msg += `⏱️ Timeline: ${state.timeline}\n`;
    if (state.clientName) msg += `👤 Client / Brand: ${state.clientName}\n`;
    if (state.notes && state.notes !== state.clientName) msg += `📝 Notes / Vision: ${state.notes}\n`;
    msg += `\nI'd like to discuss creative direction and get this scheduled with you!`;

    return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`;
  }

  function handleActionChip(actionCode) {
    if (actionCode === 'START_BRIEF') {
      startBriefFlow();
    } else if (actionCode === 'DIRECT_WA') {
      window.open(generateWhatsAppUrl(chatState), '_blank', 'noopener,noreferrer');
    } else if (actionCode === 'QUERY_PRICING') {
      respondWithKnowledge('pricing');
    } else if (actionCode === 'QUERY_TOOLS') {
      respondWithKnowledge('tools');
    } else if (actionCode === 'QUERY_TIMELINE') {
      respondWithKnowledge('timeline');
    } else if (actionCode === 'QUERY_PORTFOLIO') {
      respondWithKnowledge('portfolio');
    } else if (actionCode === 'QUERY_SERVICES') {
      respondWithKnowledge('services');
    } else if (actionCode === 'NAV_PORTFOLIO') {
      window.location.href = 'portfolio.html';
    } else if (actionCode === 'NAV_TIKTOK') {
      window.open('https://www.tiktok.com/@iniesta.automation1', '_blank', 'noopener,noreferrer');
    } else if (actionCode === 'TIMELINE_FAST') {
      chatState.service = chatState.service || 'AI Video Production';
      chatState.format = chatState.format || '15-30s Social Cut (9:16)';
      askClientDetails('Fast Track (24–48 Hours)');
    } else if (actionCode === 'TIMELINE_STANDARD') {
      chatState.service = chatState.service || 'AI Commercial Brand Film';
      chatState.format = chatState.format || '60s Narrative (16:9)';
      askClientDetails('Standard (3–5 Days)');
    }
  }

  function respondWithKnowledge(topicKey, prependNote = '') {
    const item = BOT_KNOWLEDGE[topicKey];
    if (!item) return;

    showBotTyping(() => {
      appendChatBubble('bot', `
        ${prependNote ? `<p style="margin-bottom:6px;">${prependNote}</p>` : ''}
        <div style="margin-bottom:4px; font-weight:700; color:var(--cyan,#23e7f1); font-size:0.9rem;">${item.title}</div>
        ${item.html}
      `);

      renderChips(item.chips, (opt) => {
        appendChatBubble('user', `<p>${opt.label}</p>`);
        handleActionChip(opt.action);
      });
    }, 400);
  }

  function showFinalHandover() {
    chatState.step = 4;
    chatState.inBriefMode = false;
    showBotTyping(() => {
      const waUrl = generateWhatsAppUrl(chatState);

      const summaryHtml = `
        <p>🎉 <strong>Project Brief Complete!</strong></p>
        <p style="margin-top: 4px;">I've organized your project specifications into a custom intake card:</p>
        <div class="wa-summary-card">
          <div class="wa-summary-header">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Project Intake Summary</span>
          </div>
          <div class="wa-summary-row">
            <span class="wa-summary-label">Service</span>
            <span class="wa-summary-val">${chatState.service || 'Custom AI Video'}</span>
          </div>
          <div class="wa-summary-row">
            <span class="wa-summary-label">Format</span>
            <span class="wa-summary-val">${chatState.format || 'Standard Cut'}</span>
          </div>
          <div class="wa-summary-row">
            <span class="wa-summary-label">Timeline</span>
            <span class="wa-summary-val">${chatState.timeline || 'Standard (3–5 Days)'}</span>
          </div>
          ${chatState.clientName ? `
          <div class="wa-summary-row">
            <span class="wa-summary-label">Client / Brand</span>
            <span class="wa-summary-val">${chatState.clientName}</span>
          </div>` : ''}
          ${chatState.notes && chatState.notes !== chatState.clientName ? `
          <div class="wa-summary-row">
            <span class="wa-summary-label">Vision Notes</span>
            <span class="wa-summary-val">${chatState.notes}</span>
          </div>` : ''}
        </div>
        <p style="font-size: 0.84rem; color: #bed2ea; margin-top: 4px;">Click the button below to send this complete brief directly to Inioluwa's WhatsApp (<strong>08135384333</strong>) — everything is pre-formatted for an immediate response:</p>
        <div class="wa-handover-actions">
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="wa-handover-btn">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.02L7.55 18.84L4.44 19.66L5.27 16.63L5.07 16.31C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.03C9.36 7.03 9.08 7.09 8.84 7.35C8.61 7.61 7.94 8.23 7.94 9.5C7.94 10.77 8.86 12 9 12.18C9.13 12.35 10.8 14.93 13.36 16.03C15.5 16.95 15.93 16.76 16.39 16.72C16.85 16.68 17.89 16.11 18.11 15.5C18.33 14.88 18.33 14.36 18.26 14.25C18.2 14.13 18.03 14.07 17.77 13.94C17.51 13.82 16.24 13.19 16 13.11C15.77 13.02 15.6 12.98 15.43 13.23C15.26 13.49 14.77 14.07 14.62 14.25C14.47 14.42 14.33 14.44 14.07 14.31C13.81 14.19 12.98 13.91 12 13.04C11.24 12.36 10.72 11.53 10.57 11.27C10.43 11.01 10.55 10.87 10.68 10.74C10.8 10.62 10.94 10.43 11.08 10.28C11.22 10.13 11.27 10.02 11.36 9.84C11.44 9.67 11.4 9.52 11.34 9.4C11.28 9.27 10.78 8.04 10.57 7.54C10.37 7.06 10.16 7.12 10 7.12C9.86 7.11 9.69 7.03 9.53 7.03Z"/>
            </svg>
            <span>Send Brief to Inioluwa on WhatsApp ↗</span>
          </a>
          <button type="button" class="wa-secondary-btn" id="waRestartBtn">
            <span>🔄 Edit Brief / Ask Questions</span>
          </button>
        </div>
      `;

      appendChatBubble('bot', summaryHtml);
      if (window.lucide) window.lucide.createIcons();

      const restartBtn = document.getElementById('waRestartBtn');
      if (restartBtn) {
        restartBtn.addEventListener('click', () => {
          startConversation();
        });
      }
    }, 550);
  }

  // Step 3: Timeline chosen -> Ask Client details / brief notes
  function askClientDetails(timelineChosen) {
    chatState.timeline = timelineChosen;
    chatState.step = 3;
    chatState.inBriefMode = true;

    showBotTyping(() => {
      appendChatBubble('bot',
        `<p>Got it — timeline noted as <strong>${timelineChosen}</strong>.</p>` +
        `<p style="margin-top: 6px;">Lastly, what is your <strong>name or brand name</strong>, and do you have any specific vision or reference in mind?</p>` +
        `<p style="margin-top: 4px; font-size: 0.8rem; color: #9eb8d5;"><em>(Type your message below, or click 'Skip' to finalize)</em></p>`
      );

      if (waChatInput) {
        waChatInput.placeholder = 'Type your name or project notes...';
        waChatInput.focus();
      }

      renderChips([
        { label: '⏩ Skip notes & finish brief', action: 'FINISH_SKIP' },
        { label: '💬 Send brief directly to WhatsApp', action: 'DIRECT_WA' }
      ], (opt) => {
        appendChatBubble('user', `<p>${opt.label}</p>`);
        showFinalHandover();
      });
    });
  }

  // Step 2: Format selection -> Ask Timeline
  function askTimeline(formatChosen) {
    chatState.format = formatChosen;
    chatState.step = 2;
    chatState.inBriefMode = true;

    showBotTyping(() => {
      appendChatBubble('bot', 
        `<p>Noted! <strong>${formatChosen}</strong> is a great choice.</p>` +
        `<p style="margin-top: 6px;">How soon do you need the final cut delivered?</p>`
      );

      renderChips([
        { label: '⚡ Fast Track (24–48 Hours)', value: 'Fast Track (24–48 Hours)' },
        { label: '🚀 Standard (3–5 Days)', value: 'Standard (3–5 Days)' },
        { label: '🗓️ Flexible (1–2 Weeks)', value: 'Flexible (1–2 Weeks)' },
        { label: '💬 Skip & Chat on WhatsApp now', value: 'DIRECT' }
      ], (opt) => {
        appendChatBubble('user', `<p>${opt.label}</p>`);
        if (opt.value === 'DIRECT') {
          showFinalHandover();
        } else {
          askClientDetails(opt.value);
        }
      });
    });
  }

  // Step 1: Service chosen -> Ask format
  function askFormat(serviceChosen) {
    chatState.service = serviceChosen;
    chatState.step = 1;
    chatState.inBriefMode = true;

    let insight = 'Brand films deliver cinematic authority with Runway Gen-3 & Midjourney visual direction.';
    if (serviceChosen.includes('UGC')) insight = 'UGC hooks use kinetic typography and relatable framing to maximize ad retention on Meta & TikTok.';
    else if (serviceChosen.includes('Avatar')) insight = 'AI Avatars produce high-fidelity digital spokespeople and multilingual presenters without studio costs.';
    else if (serviceChosen.includes('Motion')) insight = 'Motion graphics & VFX add 3D camera sweeps, grading, and title sequences to your footage.';

    showBotTyping(() => {
      appendChatBubble('bot',
        `<p>Awesome! ${insight}</p>` +
        `<p style="margin-top: 6px;">What <strong>aspect ratio & length</strong> best fits your distribution?</p>`
      );

      renderChips([
        { label: '📱 15s–30s Vertical Hook (Reels / TikTok 9:16)', value: '15-30s Vertical (9:16)' },
        { label: '🖥️ 60s–90s Landscape Film (YouTube / Web 16:9)', value: '60-90s Landscape (16:9)' },
        { label: '📦 Multi-Format Asset Bundle (16:9 + 9:16)', value: 'Multi-Format Asset Bundle' },
        { label: '💡 Need Creative Guidance', value: 'Creative Guidance' }
      ], (opt) => {
        appendChatBubble('user', `<p>${opt.label}</p>`);
        askTimeline(opt.value);
      });
    });
  }

  function startBriefFlow() {
    chatState.inBriefMode = true;
    chatState.step = 0;

    showBotTyping(() => {
      appendChatBubble('bot',
        `<p>Let's configure your production brief in 3 quick taps:</p>` +
        `<p style="margin-top: 6px;"><strong>Step 1:</strong> What type of production are you looking to create?</p>`
      );

      renderChips([
        { label: '🎬 Brand Film / Commercial', value: 'Brand Film / Commercial' },
        { label: '⚡ UGC Hook & Video Ads', value: 'UGC Hook & Video Ads' },
        { label: '🤖 AI Avatars & Talking Heads', value: 'AI Avatars & Talking Heads' },
        { label: '🎨 Motion Graphics & VFX', value: 'Motion Graphics & VFX' },
        { label: '💬 General Inquiry / Direct Quote', value: 'General Inquiry' }
      ], (opt) => {
        appendChatBubble('user', `<p>${opt.label}</p>`);
        askFormat(opt.value);
      });
    });
  }

  // Step 0: Initial Greeting with Rich Hub
  function startConversation() {
    if (!waChatBody) return;
    waChatBody.innerHTML = `
      <div class="wa-chat-timestamp">Today</div>
      <div class="wa-bubble bot">
        <div class="wa-bubble-content">
          <p>Hey there! 👋 Welcome to <strong>Iniesta Automation Hub</strong>.</p>
          <p style="margin-top: 6px;">I'm Inioluwa's interactive AI assistant. You can ask me anything about our <strong>pricing, turnaround times, AI tools (Runway/Kling), or 23 portfolio projects</strong> — or start an instant project brief for WhatsApp!</p>
          <p style="margin-top: 6px; font-weight: 600; color: var(--cyan, #23e7f1);">How can I assist you right now?</p>
        </div>
        <span class="wa-bubble-time">${createTimeStr()}</span>
      </div>
    `;

    chatState = { step: 0, inBriefMode: false, service: '', format: '', timeline: '', notes: '', clientName: '' };
    if (waChatInput) waChatInput.placeholder = 'Ask a question or type your project brief...';

    renderChips([
      { label: '📝 Start Project Brief & Quote', action: 'START_BRIEF' },
      { label: '💰 Pricing & Investment Guide', action: 'QUERY_PRICING' },
      { label: '🛠️ AI Tools (Runway/Kling/Sora)', action: 'QUERY_TOOLS' },
      { label: '⏱️ Delivery & Turnaround Times', action: 'QUERY_TIMELINE' },
      { label: '🌟 23 Live Portfolio Projects', action: 'QUERY_PORTFOLIO' },
      { label: '💬 Direct WhatsApp to Inioluwa', action: 'DIRECT_WA' }
    ], (opt) => {
      appendChatBubble('user', `<p>${opt.label}</p>`);
      handleActionChip(opt.action);
    });
  }

  // Initialize initial conversation state
  startConversation();

  // Chat Footer Form Send (Freeform text handling with intent detection)
  if (waChatFooter && waChatInput) {
    waChatFooter.addEventListener('submit', (e) => {
      e.preventDefault();
      const userText = waChatInput.value.trim();
      if (!userText) return;

      appendChatBubble('user', `<p>${userText}</p>`);
      waChatInput.value = '';

      // Check if user is asking a question using our NLP intent detector
      const detectedIntent = detectQueryIntent(userText);

      if (detectedIntent === 'greeting') {
        showBotTyping(() => {
          appendChatBubble('bot', `
            <p>Hello! Great to meet you. 👋</p>
            <p style="margin-top:6px;">I'm here to assist with any questions about Inioluwa's AI video productions, pricing, or getting your project booked.</p>
          `);
          renderChips([
            { label: '📝 Start Project Brief', action: 'START_BRIEF' },
            { label: '💰 Check Pricing', action: 'QUERY_PRICING' },
            { label: '🛠️ Tools & Models Used', action: 'QUERY_TOOLS' },
            { label: '💬 Chat on WhatsApp', action: 'DIRECT_WA' }
          ], (opt) => {
            appendChatBubble('user', `<p>${opt.label}</p>`);
            handleActionChip(opt.action);
          });
        });
        return;
      }

      if (detectedIntent === 'start_brief') {
        startBriefFlow();
        return;
      }

      // If a knowledge intent was detected, answer it immediately!
      if (detectedIntent && BOT_KNOWLEDGE[detectedIntent]) {
        respondWithKnowledge(detectedIntent);
        return;
      }

      // If user is currently inside the step-by-step brief intake:
      if (chatState.inBriefMode) {
        if (chatState.step === 0) {
          askFormat(userText);
        } else if (chatState.step === 1) {
          askTimeline(userText);
        } else if (chatState.step === 2) {
          askClientDetails(userText);
        } else {
          chatState.notes = userText;
          chatState.clientName = userText;
          showFinalHandover();
        }
        return;
      }

      // Default smart conversational fallback:
      showBotTyping(() => {
        appendChatBubble('bot', `
          <p>Thanks for your message: <em>"${userText}"</em>.</p>
          <p style="margin-top: 6px;">I can connect you directly with <strong>Inioluwa on WhatsApp (+2348135384333)</strong> with your message attached, or we can configure a tailored production brief right here:</p>
        `);

        chatState.notes = userText;

        renderChips([
          { label: '💬 Send this to Inioluwa on WhatsApp', action: 'DIRECT_WA' },
          { label: '📝 Configure a Full Project Brief', action: 'START_BRIEF' },
          { label: '💰 View Pricing & Packages', action: 'QUERY_PRICING' },
          { label: '🛠️ View AI Tools & Stack', action: 'QUERY_TOOLS' }
        ], (opt) => {
          appendChatBubble('user', `<p>${opt.label}</p>`);
          handleActionChip(opt.action);
        });
      });
    });
  }


  // 12. Interactive FAQ Accordion Functionality
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (!item) return;
      const isOpen = item.classList.contains('active');
      
      // Close other accordion items in the same container for cleaner reading
      const parentGrid = item.closest('.faq-grid');
      if (parentGrid) {
        parentGrid.querySelectorAll('.faq-item.active').forEach(openItem => {
          if (openItem !== item) openItem.classList.remove('active');
        });
      }

      item.classList.toggle('active', !isOpen);
    });
  });

  // 13. URL Query Parameter Support for Inquiries (?service=... or ?project=...)
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    const projectParam = urlParams.get('project');
    const projectIdParam = urlParams.get('id');

    // Auto prefill service selector on contact form
    if (serviceParam) {
      const projectSelect = document.getElementById('inquiryProjectType');
      if (projectSelect) {
        const lowerSearch = serviceParam.toLowerCase();
        for (let i = 0; i < projectSelect.options.length; i++) {
          const optVal = projectSelect.options[i].value.toLowerCase();
          if (optVal.includes(lowerSearch) || lowerSearch.includes(optVal)) {
            projectSelect.selectedIndex = i;
            break;
          }
        }
      }
    }

    // Auto prefill project inquiry message
    if (projectParam) {
      const messageField = document.getElementById('inquiryMessage');
      if (messageField && !messageField.value) {
        messageField.value = `Hi Inioluwa, I reviewed your project "${projectParam}" and would like to discuss producing a similar video production.`;
      }
    }

    // Auto open project modal if ?id=X is passed
    if (projectIdParam && projectsData[projectIdParam]) {
      setTimeout(() => {
        openProjectModal(projectIdParam);
      }, 300);
    }
  } catch (err) {
    console.debug('URL search params parsing notice:', err);
  }
});

