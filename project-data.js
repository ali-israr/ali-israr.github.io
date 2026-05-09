const PROJECTS = [
  {
    title: "Tactual Communication - Speech",
    slug: "tactual-communication-speech",
    pdf: "Personal Website - Speech.pdf",
    summary: "Tactual displays and coding strategies for communicating speech-derived information through the skin.",
    details: [
      "During his Ph.D., Ali investigated the communication capabilities of the skin to mediate useful information, asking whether the skin can transfer high-bandwidth information derived from speech and whether tactual codes can be discerned, learned, retained, and scaled over time.",
      "The work builds from the historical Tadoma method, where individuals place a hand on a speaker's face and extract speech information by tracking facial actions through touch.",
      "The project includes multi-finger tactual (tactile + kinesthetics) displays, consonantal contrast coding, frequency and amplitude discrimination, tactile speech communication, and tactile aids for learning speech production."
    ],
    images: [
      "Tactual Communication of speech - Tadoma.jpg",
      "Tactual Communication of speech - 3 finger device.png",
      "Tactual Communication of speech - response.png",
      "Tactual Communication of speech - mapping.png",
      "Tactual Communication of speech - vibration-coding.png",
      "Tactual Communication of speech - decision-space.png",
      "Tactual Communication of speech - vowel-performance.png",
      "Tactual Communication of speech - forearm-setup.png",
      "Tactual Communication of speech - subjective-location.png",
      "Tactual Communication of speech - location-mapping.png"
    ],
    links: [
      { label: "Controller design and consonantal contrast coding", url: "https://www.researchgate.net/profile/Ali-Israr-2/publication/26277654_Controller_design_and_consonantal_contrast_coding_using_a_multi-finger_tactual_display/links/00b7d537e220ed9cfa000000/Controller-design-and-consonantal-contrast-coding-using-a-multi-finger-tactual-display.pdf" },
      { label: "Frequency and amplitude discrimination", url: "https://www.researchgate.net/profile/Ali-Israr-2/publication/6658694_Frequency_and_amplitude_discrimination_along_the_kinesthetic-cutaneous_continuum_in_the_presence_of_masking_stimuli/links/00b7d537e220f13873000000/Frequency-and-amplitude-discrimination-along-the-kinesthetic-cutaneous-continuum-in-the-presence-of-masking-stimuli.pdf" },
      { label: "Discrimination of vowels", url: "https://engineering.purdue.edu/~hongtan/pubs/PDFfiles/C83_IsrarReedTan_HS2008.pdf" },
      { label: "Speech presentation on the forearm", url: "https://mahilab.rice.edu/sites/default/files/publications/HS10_Wong-Israr-O%27Malley.pdf" },
      { label: "Thesis: Tactual transmission of phonetic features", url: "https://docs.lib.purdue.edu/dissertations/AAI3294269/" }
    ]
  },
  {
    title: "Understanding Skin Dynamics",
    slug: "understanding-skin-dynamics",
    pdf: "Personal Website - SkinDynamics.pdf",
    summary: "Mechanical, perceptual, and device-design studies of skin deformation, detection thresholds, and hand impedance.",
    details: [
      "Force and displacement are key parameters for transducer selection during device design. This work reports force and displacement levels at detection threshold levels for 10-500 Hz cutaneous stimulation using stylus-hold and ball or puck-hold postures.",
      "The project also investigates mechanical impedance of the hand and sensitivity of the finger for mixed reality force feedback.",
      "A related motorcycle handlebar study developed a perception-based quantitative model relating broadband vibrations transmitted through a handlebar to a rider's hands."
    ],
    images: [
      "Understanding Skin Dynamics - stylus-hold.png",
      "Understanding Skin Dynamics - ball-hold.png",
      "Understanding Skin Dynamics - apparatus.png",
      "Understanding Skin Dynamics - detection-threshold.png",
      "Understanding Skin Dynamics - mechanical-impedance.png",
      "Understanding Skin Dynamics - skin-deformation.png",
      "Understanding Skin Dynamics - exp-setup.png",
      "Understanding Skin Dynamics - force-deformation.png",
      "motorcycle handlebar - setup.png",
      "motorcycle handlebar - results.png"
    ],
    links: [
      { label: "Mechanical impedance of the hand", url: "https://engineering.purdue.edu/~hongtan/pubs/PDFfiles/C72_IsrarChoiTan_WHC2007.pdf" },
      { label: "Detection threshold and mechanical impedance", url: "https://engineering.purdue.edu/~hongtan/pubs/PDFfiles/C70_IsrarChoiTan_IROS2006.pdf" },
      { label: "Sensitivity at the edges of the finger", url: "https://ieeexplore.ieee.org/abstract/document/11475177" },
      { label: "Motorcycle handlebar vibration model", url: "https://engineering.purdue.edu/~hongtan/pubs/PDFfiles/C80_Israr_etal_IMECE2007.pdf" }
    ]
  },
  {
    title: "Synthesis of an Adjustable Six-Bar Linkage",
    slug: "synthesis-of-an-adjustable-six-bar-linkage",
    pdf: "Personal Website - SixBar.pdf",
    summary: "Kinematic analysis and synthesis of a variable-speed adjustable six-bar linkage.",
    details: [
      "This work investigates the kinematics of an adjustable six-bar linkage where rotation of an input crank is converted into oscillation of an output link.",
      "The single-degree-of-freedom planar linkage functions as a variable-speed transmission mechanism, with an adjustable control arm that changes the output oscillation for each input revolution.",
      "The analysis uses kinematic coefficients with respect to an independent variable and kinematic inversion to decouple the position equations."
    ],
    images: ["adjustable six-bar linkage-main.png"],
    links: [
      { label: "Kinematic analysis and synthesis paper", url: "https://www.researchgate.net/profile/Ali-Israr-2/publication/228524027_Kinematic_analysis_and_synthesis_of_an_adjustable_six-bar_linkage/links/5c968c2d92851cf0ae93ec62/Kinematic-analysis-and-synthesis-of-an-adjustable-six-bar-linkage.pdf" }
    ]
  },
  {
    title: "Understanding Human Motor Control",
    slug: "understanding-human-motor-control",
    pdf: "Personal Website - MotorControl.pdf",
    summary: "Human motor control studies of skill acquisition, retention, transfer, adaptation, and tactile respiratory feedback.",
    details: [
      "In postdoctoral work with Prof. Marcia O'Malley, Ali investigated human motor control during dynamic manual tasks and how haptic feedback closes the internal sensory-motor control loop.",
      "The project includes studies on discrimination of virtual dynamic systems, magnitude and phase cues in adaptation, motor adaptation under varying dynamics, and performance measures in virtual training.",
      "A tactile Respiratory Management System explored tactile feedback for maintaining uniform and steady breathing patterns during lung cancer radiotherapy treatment."
    ],
    images: [
      "human motor control - adaptation-setup.png",
      "human motor control - adaptation-profiles.png",
      "human motor control - jnd-apparatus.png",
      "human motor control - jnp-profiles.png",
      "human motor control - learning-setup.png",
      "human motor control - learning-profiles.png",
      "human motor control - trms-exp.png"
    ],
    links: [
      { label: "Passive and active discrimination", url: "https://ieeexplore.ieee.org/abstract/document/4689555" },
      { label: "Effects of dynamic cues on motor adaptation", url: "https://www.researchgate.net/publication/221011770_Effects_of_Magnitude_and_Phase_Cues_on_Human_Motor_Adaptation" },
      { label: "Rate of human motor adaptation", url: "https://www.researchgate.net/profile/Marcia-Omalley/publication/221012232_Rate_of_human_motor_adaptation_under_varying_system_dynamics/links/02e7e531a8c91a2a98000000/Rate-of-human-motor-adaptation-under-varying-system-dynamics.pdf" },
      { label: "Expertise-based performance measures", url: "https://www.researchgate.net/publication/220089845_Expertise-Based_Performance_Measures_in_a_Virtual_Training_Environment" },
      { label: "Respiratory motion tactile array", url: "https://www.researchgate.net/profile/Marcia-Omalley/publication/224399710_A_low_cost_vibrotactile_array_to_manage_respiratory_motion/links/02e7e531a8c8fe7f22000000/A-low-cost-vibrotactile-array-to-manage-respiratory-motion.pdf" }
    ]
  },
  {
    title: "Surround Haptics Displays",
    slug: "surround-haptics-displays",
    pdf: "Personal Website - SurroundHaptics.pdf",
    summary: "Spatial haptic rendering for chairs, rides, games, vests, toys, railings, and immersive entertainment.",
    details: [
      "This work explores new guest and home experiences by using tactile waveforms at a few locations on the skin to simulate continuous moving sensations in arbitrary directions.",
      "The approach was incorporated into a chair and extended conceptually to vests, toys, hand-held devices, seats, railings, belts, games, shows, and rides.",
      "The research includes Surround Haptics, Tactile Brush, apparent tactile motion models, immersive gaming seats, and ride-scale haptic experiences."
    ],
    images: [
      "surround haptics - video-placeholder.png",
      "surround haptics - snake.png",
      "surround haptics - users.png",
      "surround haptics - chair.jpg",
      "surround haptics - usecase.png",
      "surround haptics - tactilebrush-main.jpg",
      "surround haptics - tactilebrush-results.png",
      "surround haptics - controls-apparentmotion.png",
      "surround haptics - controls-results.png",
      "surround haptics - gaming-seat.png",
      "surround haptics - avatar-ride.png",
      "surround haptics - ride.JPG"
    ],
    links: [
      { label: "Exploring surround haptics displays", url: "https://dl.acm.org/doi/pdf/10.1145/1753846.1754121" },
      { label: "Surround Haptics: Shivers down the spine", url: "https://la.disneyresearch.com/wp-content/uploads/Surround-Haptics-Sending-Shivers-Down-Your-Spine-Paper.pdf" },
      { label: "Surround Haptics: Immersive games", url: "https://dl.acm.org/doi/pdf/10.1145/2212776.2212392" },
      { label: "SurroundHaptics video", url: "https://www.youtube.com/watch?v=GbjuAFxKobk" },
      { label: "Tactile Brush paper", url: "https://www.researchgate.net/profile/Ali-Israr-2/publication/221518352_Tactile_Brush_Drawing_on_skin_with_a_tactile_grid_display/links/00b7d537e220c5b806000000/Tactile-Brush-Drawing-on-skin-with-a-tactile-grid-display.pdf" },
      { label: "Control space of apparent haptic motion", url: "http://www.ivanpoupyrev.com/wp-content/uploads/2016/10/whc2011-israr-poupyrev-1.pdf" },
      { label: "Vybe haptic gaming pad video", url: "https://www.youtube.com/watch?v=H1ulb2CP7TQ" }
    ]
  },
  {
    title: "Teslatouch Displays",
    slug: "teslatouch-displays",
    pdf: "Personal Website - Teslatouch.pdf",
    summary: "Electrovibration displays render programmable friction, texture, and tactile feedback on touch surfaces.",
    details: [
      "TeslaTouch is a tactile display that provides sensations of texture, friction, and vibration using electrovibration. A transparent electrode coated with an insulator is excited by a periodic electrical signal whose properties control the sensation.",
      "The approach has no moving components, supports a wide range of tactile sensations, provides spatially uniform feedback, and can scale to many surface sizes and shapes.",
      "Applications include tactile mobile devices, transparent surfaces, mobile augmented reality, assistive learning, and navigation for visually impaired users."
    ],
    images: [
      "teslatouch - basic-operation.jpg",
      "teslatouch - basic-table.JPG",
      "teslatouch - basic-handheld.JPG",
      "teslatouch - blind-device.png",
      "teslatouch - blind-user.png",
      "teslatouch - blind-experiment.jpg",
      "teslatouch - palette-algo.png",
      "teslatouch - palette-study.png",
      "teslatouch - 3d-fossil.jpg",
      "teslatouch - 3d-jellyfish.png"
    ],
    links: [
      { label: "TeslaTouch electrovibration for touch surfaces", url: "https://la.disneyresearch.com/wp-content/uploads/teslatouchuist20101.pdf" },
      { label: "TeslaTouch video", url: "https://www.youtube.com/watch?v=MHNrQlpstJo" },
      { label: "Tactile display for visually impaired users", url: "https://dl.acm.org/doi/pdf/10.1145/1979742.1979705" },
      { label: "Tactile feedback on flat surfaces", url: "https://dl.acm.org/doi/pdf/10.1145/2212776.2223674" },
      { label: "A tactile palette for graphic content", url: "https://www.researchgate.net/publication/404301641_A_Tactile_Palette_to_Translate_Graphics_for_the_Visually_Impaired"},
      { label: "3D features on touch surfaces - paper", url: "https://www.researchgate.net/profile/Seung-Chan-Kim/publication/266654523_Tactile_rendering_of_3D_features_on_touch_surfaces/links/55ef1b3708ae0af8ee1b0deb/Tactile-rendering-of-3D-features-on-touch-surfaces.pdf"},
      { label: "3D features on touch surfaces - video", url: "https://www.youtube.com/watch?v=zo1n5CyCKr0" }
    ]
  },
  {
    title: "Designing Haptics",
    slug: "designing-haptics",
    pdf: "Personal Website - DesigningHaptics.pdf",
    summary: "Rapid haptic prototyping and evaluation across design, perception, and engineering dimensions.",
    details: [
      "This project explores haptics as an emerging design field, using off-the-shelf components and software tools to build rapid prototypes.",
      "The work evaluates haptic experiences along design, perception, and engineering axes, making the field more approachable for creators and researchers."
    ],
    images: [
      "Designing haptics - multifinger.png",
      "Designing haptics - thermal.png",
      "Designing haptics - handhelds.png"
    ],
    links: [
      { label: "Designing haptics paper", url: "https://dl.acm.org/doi/pdf/10.1145/2148131.2148215" }
    ]
  },
  {
    title: "Semantic based Parametric Haptics",
    slug: "semantic-based-parametric-haptics",
    pdf: "Personal Website - SemanticHaptics.pdf",
    summary: "Semantic haptic vocabularies for communication, storytelling, messaging, and media experiences.",
    details: [
      "This work develops semantic and parametric approaches for designing haptic feedback in communication, storytelling, and social networking.",
      "Feel Effects pair meaningful linguistic phrases with rendered haptic patterns, creating a foundational vocabulary of usable haptic sensations.",
      "FeelCraft and related systems connect media events, messages, and story content to expressive tactile output, including later explorations of haptic messaging, haptic learning and AI-assisted design."
    ],
    images: [
      "Semantic based haptics - feel-effects.jpg",
      "Semantic based haptics - feel-craft.png",
      "Semantic based haptics - feel-sleeve.png",
      "Semantic based haptics - feel-messenges.png",
      "Semantic based haptics - feel-messenger.jpg",
      "Semantic based haptics - stroytellings.png",
      "Semantic based haptics - LLM.png"
    ],
    links: [
      { label: "Feel Effects paper", url: "https://dl.acm.org/doi/pdf/10.1145/2641570" },
      { label: "Crafting tactile experiences ", url: "hhttps://dl.acm.org/doi/pdf/10.1145/2658779.2659109"},
      { label: "FeelCraft paper", url: "https://www.researchgate.net/profile/Ali-Israr-2/publication/289624243_FeelCraft_Crafting_tactile_experiences_for_media_using_a_feel_effect_library/links/5cd43d0692851c4eab8ee62f/FeelCraft-Crafting-tactile-experiences-for-media-using-a-feel-effect-library.pdf" },
      { label: "FeelCraft video", url: "https://www.youtube.com/watch?v=TEU6uuOfEAQ&t=4s" },
      { label: "FeelSleeve to enhance early reading", url: "https://dl.acm.org/doi/pdf/10.1145/2702123.2702396" },
      { label: "Feel Sleeve video", url: "https://www.youtube.com/watch?v=WXabCF19lFU" },
      { label: "Haptics for social networking", url: "https://dl.acm.org/doi/pdf/10.1145/2702613.2732814" },
      { label: "Haptic GPT video", url: "https://www.youtube.com/watch?v=CgmsDfiV6Aw" }
    ]
  },
  {
    title: "Freeform Electrostatic Speakers",
    slug: "freeform-electrostatic-speakers",
    pdf: "Personal Website - ElectrostaticSpeakers.pdf",
    summary: "Thin, flexible electrostatic loudspeakers for spatial sound from everyday surfaces and objects.",
    details: [
      "This project presents freeform interactive loudspeakers for creating spatial sound experiences from a variety of surfaces.",
      "Unlike conventional surround systems based on point sound sources, the proposed system creates directional sound that can be embedded into architecture, furniture, and everyday objects.",
      "The technology uses thin, flexible, lightweight, low-cost electrostatic loudspeakers in configurations such as single speakers, arrays, and tangible speakers."
    ],
    images: ["Freeform electrostatic speakers - main.png"],
    links: [
      { label: "Uminari: freeform interactive loudspeakers", url: "https://la.disneyresearch.com/wp-content/uploads/Uminari-Freeform-Interactive-Loudspeakers-Paper1.pdf" },
      { label: "Uminari video", url: "https://www.youtube.com/watch?v=Q4ZU364QdoM" },
      { label: "Ubisonus paper", url: "https://dl.acm.org/doi/pdf/10.1145/2658779.2659117" }
    ]
  },
  {
    title: "Stereohaptics",
    slug: "stereohaptics",
    pdf: "Personal Website - Stereohaptics.pdf",
    summary: "Audio-inspired tools and perceptual illusions for dynamic tactile media and spatial haptic effects.",
    details: [
      "Stereohaptics introduces a framework that uses audio infrastructure for haptic media production and playback.",
      "The engine processes embedded sensor inputs and renders high-definition haptic feedback on discrete actuator grids, exploiting tactile illusions to generate perceived objects and motion on, around, and through the body.",
      "The toolkit supports everyday handheld, wearable, augmented reality, virtual reality, and extended reality applications."
    ],
    images: [
      "stereohaptics-VR_gameplay.gif",
      "stereohaptics - main.png",
      "stereohaptics - pcb.png",
      "stereohaptics - sensors.png",
      "stereohaptics - workshop.png",
      "stereohaptics - prototyping.png",
      "stereohaptics - intermanual.png",
      "stereohaptics - mfilter.jpg",
      "stereohaptics - illusions.png",
      "stereohaptics - main-gameplay.png",
      "stereohaptics - tablet-playing.png",
      "stereohaptics_siggraph_kid.png"
    ],
    links: [
      { label: "Stereohaptics toolkit", url: "https://link.springer.com/chapter/10.1007/978-3-030-30033-3_17" },
      { label: "Stereo haptics workshop paper", url: "https://dl.acm.org/doi/pdf/10.1145/2839462.2854120" },
      { label: "Stereo haptics studio paper", url: "https://dl.acm.org/doi/pdf/10.1145/2929484.2970273" },
      { label: "WebAudioHaptics", url: "https://inria.hal.science/hal-01429161/" },
      { label: "Intermanual apparent tactile motion", url: "https://disneyresearch.s3.amazonaws.com/wp-content/uploads/20150719204348/Intermanual-Apparent-Tactile-Motion-on-Handheld-Tablets-Paper.pdf" },
      { label: "3D Intermanual apparent tactile motion", url: "https://www.siyanz.com/resources/papers/Intermanual-Apparent-Tactile-Motion.pdf" },
      { label: "Hand-to-hand illusion of movement", url: "https://dl.acm.org/doi/pdf/10.1145/3136755.3136777" },
      { label: "Stereohaptics AR demo", url: "https://www.youtube.com/watch?v=Ybs4gsXfgwM" },
      { label: "Po2: augmented haptics for interactive gameplay", url: "https://dl.acm.org/doi/pdf/10.1145/2782782.2792489" },
      { label: "Po2 gameplay video", url: "https://www.youtube.com/watch?v=avuVAMvRAxY" }
    ]
  },
  {
    title: "Multimodal Haptics",
    slug: "multimodal-haptics",
    pdf: "Personal Website - MultimodalHaptics.pdf",
    summary: "Cross-modal haptic work spanning vibration-color mappings, tactile content from sound, taste, smell, thermals and multimodal sonic fields.",
    details: [
      "This project gathers multimodal haptics research across cross-modal correspondences, tactile content with sound, and future touch, taste, and smell interfaces.",
      "It includes work on vibration-color correspondence and the Sonic Field music instrument, using color, sound, gestures, and sensory mappings as creative interaction material."
    ],
    images: [
      "Multimodal Haptics - color-2.png",
      "Multimodal Haptics - color-1.png",
      "Multimodal Haptics - heat.jpg",
      "Multimodal Haptics - sonicfiled-01.png",
      "Multimodal Haptics - sonicfiled-video.png"
    ],
    links: [
      { label: "Colors and vibrations correspondence paper", url: "https://la.disneyresearch.com/wp-content/uploads/Cross-modal-Correspondence-between-Vibrations-and-Colors-Paper.pdf" },
      { label: "Creating tactile content with sound", url: "https://patentimages.storage.googleapis.com/58/3d/9f/67f5035e41e852/US9147328.pdf" },
      { label: "Touch, taste, and smell user interfaces", url: "https://dl.acm.org/doi/pdf/10.1145/2851581.2856462" },
      { label: "Sensing the future of HCI", url: "https://dl.acm.org/doi/pdf/10.1145/2973568" },
      { label: "Sonic Field video", url: "https://www.youtube.com/watch?v=KCRt0F1eu6U" }
    ]
  },
  {
    title: "Tactile Animation",
    slug: "tactile-animation",
    pdf: "Personal Website - TactileAnimation.pdf",
    summary: "Direct manipulation tools for authoring phantom tactile motion across vibrotactile grids.",
    details: [
      "Tactile Animation introduces the tactile animation object, a directly manipulated phantom tactile sensation.",
      "The abstraction supports efficient, creative, iterative control of spatiotemporal sensations and can support a variety of tactile grids, including sparse displays.",
      "The work presents Mango, an editing tool for animators, including its rendering pipeline and perceptually optimized interpolation algorithm for sparse vibrotactile grids."
    ],
    images: [
      "Tactile Animation - framework.png",
      "Tactile Animation - use2.png"
    ],
    links: [
      { label: "Tactile animation paper", url: "https://dl.acm.org/doi/pdf/10.1145/2807442.2807470" },
      { label: "Tactile Animation video", url: "https://www.youtube.com/watch?v=u8ilmhHGsns" }
    ],
    citation: "Schneider, O. S., Israr, A., & MacLean, K. E. (2015). Tactile animation by direct manipulation of grid displays. In Proceedings of the 28th Annual ACM Symposium on User Interface Software & Technology (pp. 21-30)."
  },
  {
    title: "Augmented, Virtual and Mixed Reality",
    slug: "augmented-and-virtual-haptics",
    pdf: "Personal Website - AugmentedVirtual.pdf",
    summary: "Haptic playback, handheld devices, air-based touch, and shared mixed-reality experiences for AR and VR.",
    details: [
      "VR360HD is a VR360 video player with haptic feedback playback, using customized haptic effects associated with user activities, biofeedback, network messages, and timeline triggers.",
      "Haplug is a linear voice coil motor packaged between springs in a plug-like casing for dynamic VR interactions, rendering feelings for colors, objects, textures, and object behaviors.",
      "Magic Bench and Aireal extend haptics into mixed reality and mid-air tactile experiences for interactive media and shared environments."
    ],
    images: [
      "Augmented and Virtual haptics - magic-bench.gif",
      "Augmented and Virtual haptics - VR360-seat.png",
      "Augmented and Virtual haptics - haplug-design.png",
      "Augmented and Virtual haptics - haplug.gif",
      "Augmented and Virtual haptics - haplug-coffee.JPG",
      "Augmented and Virtual haptics - magic-bench.png",
      "Augmented and Virtual haptics - magic-bench2.png",
      "Augmented and Virtual haptics - Aireal-main.png",
      "Augmented and Virtual haptics - Aireal-device.png"
    ],
    links: [
      { label: "Haplug paper", url: "https://la.disneyresearch.com/wp-content/uploads/Haplug-A-Haptic-Plug-for-Dynamic-VR-Interactions-Paper.pdf" },
      { label: "Haplug video", url: "https://www.youtube.com/watch?v=ohhQ53A9fD8" },
      { label: "Magic Bench paper", url: "https://dl.acm.org/doi/pdf/10.1145/3089269.3089272" },
      { label: "Magic Bench video", url: "https://www.youtube.com/watch?v=JnLk2_Xbr90" },
      { label: "Aireal paper", url: "https://dl.acm.org/doi/pdf/10.1145/2461912.2462007" },
      { label: "Aireal video", url: "https://www.youtube.com/watch?v=xaFBjUJj00M&t=2s" },
      { label: "VR360HD paper", url: "https://dl.acm.org/doi/pdf/10.1145/2993369.2993404" }
    ]
  },
  {
    title: "Tactual Communication - Skin Hearing",
    slug: "tactual-communication-skin-hearing",
    pdf: "Personal Website - SkinHearing.pdf",
    summary: "Building 8's Skin Hearing program on tactile phonemic coding, learning, retention, and scalable language communication.",
    details: [
      "This continuation of Ali's Ph.D. work and is part of Building 8's Skin Hearing program, asking whether skin can communicate high-throughput verbal information and whether tactual codes are quickly learned, retained, and scaled.",
      "The project examines tactile symbols for phonemic communication, including recognition of tactile locations and movements on the forearm and association of tactile symbols to phonemes.",
      "The work also includes efficient evaluation of coding strategies, phonemic tactile display design, and wearable tactile approaches for speech communication."
    ],
    images: [
      "Tactual Communication - SkinHearing-uses1.png",
      "Tactual Communication - SkinHearing-uses2.png",
      "Tactual Communication - SkinHearing-study.png",
      "Tactual Communication - SkinHearing-Table.png"
    ],
    links: [
      { label: "Coding tactile symbols paper", url: "https://dl.acm.org/doi/pdf/10.1145/3173574.3173966" },
      { label: "Learning to feel words", url: "https://dl.acm.org/doi/pdf/10.1145/3225153.3225174" },
      { label: "Efficient coding strategies", url: "https://research.facebook.com/publications/efficient-evaluation-of-coding-strategies-for-transcutaneous-language-communication/" },
      { label: "Phonemic tactile display", url: "https://ai.meta.com/research/publications/a-phonemic-based-tactile-display-for-speech-communication/" },
      { label: "Acquisition of 500 English words", url: "https://par.nsf.gov/servlets/purl/10324646" },
      { label: " A multi-sensory approach", url: "https://dl.acm.org/doi/pdf/10.1145/3267242.3267244" },
      { label: "Multi-sensory stimuli improve distinguishability", url: "https://par.nsf.gov/servlets/purl/10110031" }
    ]
  },
  {
    title: "Tactual Communication - Social Touch",
    slug: "tactual-communication-social-touch",
    pdf: "Personal Website - SocialTouch.pdf",
    summary: "Wearable and mediated tactile systems for pleasant touch, social haptics, affect, and interpersonal communication.",
    details: [
      "This Building 8 program focused on understanding the construction and transmission of non-verbal social haptic signals, both naturally and with devices.",
      "The work includes wearable tactile devices that deliver smooth pleasant strokes on the forearm, psychophysical models of continuous illusory motion on vibrotactile arrays, and studies of pleasantness across frequency, amplitude, and duration.",
      "Partnerships with Stanford University and Linkoping University investigated neural and behavioral aspects of physical and simulated touch between people and between a user and a machine."
    ],
    images: [
      "Tactual Communication - SocialTouch-caressing.gif",
      "Tactual Communication - SocialTouch-apparentmotion-results.png",
      "Tactual Communication - SocialTouch-apparentmotion.png",
      "Tactual Communication - SocialTouch-gestures.png",
      "Tactual Communication - SocialTouch-setup.png",
      "Tactual Communication - SocialTouch-fMRI.png",
      "Tactual Communication - SocialTouch-glove.png",
      "Tactual Communication - SocialTouch-hapglove.png",
      "Tactual Communication - SocialTouch-patterns.png",
      "Tactual Communication - SocialTouch-sleeve.png"
    ],
    links: [
      { label: "Towards pleasant touch", url: "https://dl.acm.org/doi/pdf/10.1145/3170427.3188546" },
      { label: "Social haptic device", url: "https://ieeexplore.ieee.org/abstract/document/8357149" },
      { label: "Affective touch communication", url: "https://www.researchgate.net/profile/Sarah-Mcintyre-4/publication/332932462_Affective_touch_communication_in_close_adult_relationships/links/5cdc49fc458515712ead9dd8/Affective-touch-communication-in-close-adult-relationships.pdf" },
      { label: "Touch to peripheral nerve responses", url: "https://www.researchgate.net/profile/Sarah-Mcintyre-4/publication/334042081_From_Human-to-Human_Touch_to_Peripheral_Nerve_Responses/links/5d1392bd92851cf4404efab3/From-Human-to-Human-Touch-to-Peripheral-Nerve-Responses.pdf" },
      { label: "Uncovering human-to-human physical interactions ", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8419857/pdf/nihms-1734581.pdf" },
      { label: "The language of social touch", url: "https://journals.sagepub.com/doi/pdf/10.1177/09567976211059801" },
      { label: "Cortical processing in tactile communication", url: "https://royalsocietypublishing.org/rstb/article/379/1908/20230249/109529" },
      { label: "Data-driven stimulation for social touch information", url: "https://www.researchgate.net/profile/Sophia-Williams-16/publication/350457075_Data-driven_sparse_skin_stimulation_can_convey_social_touch_information_to_humans/links/6124baf81e95fe241af134dd/Data-driven-sparse-skin-stimulation-can-convey-social-touch-information-to-humans.pdf" },
      { label: "An Online Survey on mediated social touch", url: "https://arxiv.org/pdf/2104.00086" },
      { label: "Linking haptic parameters to the emotional space", url: "https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2022.826545/full" },
      { label: "When is a haptic message like an inside joke", url: "https://www.computer.org/csdl/journal/ta/2023/01/10042996/1KJrYw8DE2s" }
    ]
  },
  {
    title: "Soft Flexible Transducers",
    slug: "soft-flexible-transducers",
    pdf: "Personal Website - SoftTransducers.pdf",
    summary: "Soft, flexible, wearable, and textile-embedded haptic transducers and tactile sensors.",
    details: [
      "This project gathers soft and flexible haptic transducer research, including dielectric elastomer actuators, textile-embedded displays, flexible spiraling metasurfaces, tuned mass amplifiers, and foam magnetic tactile sensors.",
      "The work explores materials, mechanisms, and wearable embodiments for spatial computing input and expressive tactile output."
    ],
    images: [
      "Soft Flexible Transducers - DEA.png",
      "Soft Flexible Transducers - DEA2.png",
      "Soft Flexible Transducers - model.png",
      "Soft Flexible Transducers - metamaterials.png",
      "Soft Flexible Transducers - metamaterials-design.png",
      "Soft Flexible Transducers - foam.png",
      "Soft Flexible Transducers - wristband.png",
      "Soft Flexible Transducers - joystick.gif"
    ],
    links: [
      { label: "Wearable soft haptic communicator", url: "https://journals.sagepub.com/doi/full/10.1089/soro.2019.0113" },
      { label: "Textile-embedded DEA display", url: "https://journals.sagepub.com/doi/10.1089/soro.2021.0098" },
      { label: "Flexible spiraling metasurface", url: "https://www.researchgate.net/profile/Osama-Bilal/publication/342267103_A_Flexible_Spiraling-Metasurface_as_a_Versatile_Haptic_Interface/links/5efb8a88299bf18816f4a169/A-Flexible-Spiraling-Metasurface-as-a-Versatile-Haptic-Interface.pdf" },
      { label: "Tuned mass amplifier", url: "https://www.sciencedirect.com/science/article/abs/pii/S0167663621002155" },
      { label: "Foam magnetic tactile sensors", url: "https://www.researchgate.net/profile/Ali-Israr-2/publication/382591636_Foam_Magnetic_Tactile_Sensors_for_Spatial_Computing_Input/links/66a3fa6bde060e4c7e5dada2/Foam-Magnetic-Tactile-Sensors-for-Spatial-Computing-Input.pdf" }
    ]
  },
  {
    title: "XR Interactions",
    slug: "xr-interactions",
    pdf: "Personal Website - XR.pdf",
    summary: "Compact actuators, wrist haptics, bare-hand input, gaze typing, and spatial computing interaction systems.",
    details: [
      "XR Interactions includes Chasm, a compact broadband linear actuator that renders low-frequency skin stretch and high-frequency vibrations on wearable and handheld devices.",
      "The project also includes Tasbi, a multisensory squeeze and vibrotactile wrist haptic system for augmented and virtual reality.",
      "Additional work spans spatial computing accessories, bare-hand input, gaze typing, edge interactions, and free-viewpoint or mixed-reality interaction prototypes."
    ],
    images: [
      "XR Interactions - CHASM.gif",
      "XR Interactions - CHASM-cutaway.png",
      "XR Interactions - CHASM-VR.gif",
      "XR Interactions - CHASM-navigation.gif",
      "XR Interactions - TASBI.gif",
      "XR Interactions - VPS.png",
      "XR Interactions - head-haptics.png",
      "XR Interactions - spatial.png",
      "XR Interactions - BareHand.gif",
      "XR Interactions - Gaze_typing.gif",
      "XR Interactions - freeview.png",
      "XR Interactions - finger-edge.gif",
      "XR Interactions - Edge-interactions.gif"
    ],
    links: [
      { label: "Chasm video", url: "https://www.youtube.com/watch?v=yMt8wJU6hV4" },
      { label: "Chasm paper", url: "https://dl.acm.org/doi/pdf/10.1145/3313831.3376512" },
      { label: "Lead-screw skin-shear device", url: "https://ieeexplore.ieee.org/abstract/document/8816105" },
      { label: "VPS tactile display", url: "https://dl.acm.org/doi/pdf/10.1145/3328922" },
      { label: "Tasbi video", url: "https://www.youtube.com/watch?v=zYWbh4IrIn0" },
      { label: "Tasbi paper", url: "https://www.hbenko.com/publications/2019/TASBI%20whc19a-sub1021-i6.pdf" },
      { label: "Learning vibes", url: "https://www.aakargupta.com/Publications/Vibes-WHC2021.pdf" },
      { label: "Multichannel pneumatic analog control system ", url: "https://dl.acm.org/doi/pdf/10.1145/3411763.3451742" },
      { label: "Live free-viewpoint video with haptic feedback", url: "https://dl.acm.org/doi/pdf/10.1145/3641521.3664412" },
      { label: "Spatial computing head accessory", url: "https://www.researchgate.net/profile/Ali-Israr-2/publication/382104375_A_Stereohaptics_Accessory_for_Spatial_Computing_Platforms/links/6695405502e9686cd102115e/A-Stereohaptics-Accessory-for-Spatial-Computing-Platforms.pdf" },
      { label: "Finger attachment for Mixed Reality Force Feedback", url: "https://ieeexplore.ieee.org/abstract/document/11475177" }
    ]
  }
];
