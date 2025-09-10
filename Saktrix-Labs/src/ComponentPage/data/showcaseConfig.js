import {
  AnimatedGradientButton,
  BouncyIconButton,
  SuccessCheckButton,
  PulseAddButton,
  HeartbeatButton,
  StarButton,
  SendButton,
  SearchButton,
  DownloadButton,
  UploadButton,
  DangerDeleteButton,
  EditButton,
  ShareButton,
  BellNotificationButton,
  UserProfileButton,
  SettingsButton,
  LockButton,
  CameraButton,
  GiftButton,
  CloudButton,
  GlobeButton
} from "../components/showcase/showcase-items/AnimatedButtonsShowcase";

import {
  NeonPulseButton,
  HologramButton,
  OrbitingGlowButton,
  LiquidMorphButton,
  CyberRippleButton,
  PrismShiftButton,
  MatrixCodeButton,
  GalacticBeamButton,
  QuantumFlipButton,
  AuroraFlowButton,
  StarlightButton,
  MagnetHoverButton,
  DNAHelixButton,
  AIScanButton,
  SolarFlareButton,
  PlasmaBurstButton,
  NeuralPulseButton,
  InfinityLoopButton,
  TimeWarpButton,
  CrystalShineButton,
  ZeroGravityButton,
  CyberCircuitButton,
  EnergyOrbButton,
  PixelGlitchButton
} from "../components/showcase/showcase-items/FuturisticButtonsShowcase";

import GradientButtonShowcase from "../components/showcase/showcase-items/GradientButtonShowcase";
import OutlineButtonShowcase from "../components/showcase/showcase-items/OutlineButtonShowcase";
import IconButtonShowcase from "../components/showcase/showcase-items/IconButtonShowcase";
import LoadingButtonShowcase from "../components/showcase/showcase-items/LoadingButtonShowcase";
import AnimatedCardShowcase from "../components/showcase/showcase-items/AnimatedCardShowcase";
import {
  NeuralGlowCard,
  QuantumFlipCard,
  DataStreamCard,
  HologramCard,
  SynapsePulseCard,
  CyberPrismCard,
  MatrixRainCard,
  AIAvatarCard,
  PredictiveInsightCard,
  NeonGridCard,
  AdaptiveShadowCard,
  FloatingOrbitCard,
  FractalGlowCard,
  FutureVisionCard,
  SmartExpandCard,
  BioPulseCard,
  CyberneticFrameCard,
  ParallaxDepthCard,
  AuroraFlowCard,
  GlitchEffectCard,
  AIChatCard,
  RoboAssistantCard,
  SentimentAnalysisCard,
  AITimelineCard,
  VoiceRecognitionCard,
  AIPredictionCard,
  DataEncryptionCard,
  AICollaborationCard,
  AIArtCard,
  AILoaderCard
} from "../components/showcase/showcase-items/AICardsShowcase";
import HologramModal from "../components/showcase/modals/HologramModal";
import NeuralSyncModal from "../components/showcase/modals/NeuralSyncModal";
import QuantumFadeModal from "../components/showcase/modals/QuantumFadeModal";
import DataStreamModal from "../components/showcase/modals/DataStreamModal";
import CyberDrawerModal from "../components/showcase/modals/CyberDrawerModal";
import PrismShiftModal from "../components/showcase/modals/PrismShiftModal";
import MatrixRainModal from "../components/showcase/modals/MatrixRainModal";
import AIScanModal from "../components/showcase/modals/AIScanModal";
import BioPulseModal from "../components/showcase/modals/BioPulseModal";
import GlitchModal from "../components/showcase/modals/GlitchModal";
import AuroraModal from "../components/showcase/modals/AuroraModal";
import TeleportModal from "../components/showcase/modals/TeleportModal";
import InputFieldShowcase from "../components/showcase/showcase-items/InputFieldShowcase";
import ToggleSwitchShowcase from "../components/showcase/showcase-items/ToggleSwitchShowcase";

import MatrixInput from "../components/showcase/forms/MatrixInput";
import VoiceCommandInput from "../components/showcase/forms/VoiceCommandInput";
import CyberCheckbox from "../components/showcase/forms/CyberCheckbox";
import QuantumRadio from "../components/showcase/forms/QuantumRadio";

import FuturisticSelect from "../components/showcase/forms/FuturisticSelect";
import BiometricToggle from "../components/showcase/forms/BiometricToggle";
import HologramTextarea from "../components/showcase/forms/HologramTextarea";
import NeuralSlider from "../components/showcase/forms/NeuralSlider";

import SynapseSwitch from "../components/showcase/forms/SynapseSwitch";
import AuroraDropdown from "../components/showcase/forms/AuroraDropdown";
import GlitchPasswordInput from "../components/showcase/forms/GlitchPasswordInput";
import RoboStepper from "../components/showcase/forms/RoboStepper";

import AdaptiveRange from "../components/showcase/forms/AdaptiveRange";
import PulseRadioGroup from "../components/showcase/forms/PulseRadioGroup";
import SmartFileUpload from "../components/showcase/forms/SmartFileUpload";
import DataStreamTextarea from "../components/showcase/forms/DataStreamTextarea";

import QuantumDropdown from "../components/showcase/forms/QuantumDropdown";
import PrismCheckbox from "../components/showcase/forms/PrismCheckbox";
import AIAvatarInput from "../components/showcase/forms/AIAvatarInput";
import FractalTextarea from "../components/showcase/forms/FractalTextarea";

import ParallaxInput from "../components/showcase/forms/ParallaxInput";
import BioPulseSwitch from "../components/showcase/forms/BioPulseSwitch";
import SentimentSelect from "../components/showcase/forms/SentimentSelect";
import SmartExpandTextarea from "../components/showcase/forms/SmartExpandTextarea";

import FloatingOrbitSelect from "../components/showcase/forms/FloatingOrbitSelect";
import CyberneticInput from "../components/showcase/forms/CyberneticInput";
import AuroraSwitch from "../components/showcase/forms/AuroraSwitch";
import PredictiveTextarea from "../components/showcase/forms/PredictiveTextarea";


export const showcaseConfig = [
  {
    category: "Buttons",
    items: [
      {
        id: "gradient-button",
        name: "Gradient Button",
        description: "Flashy CTA with gradient styling.",
        component: GradientButtonShowcase,
        tags: ["Button", "Animation"],
        code: `
<button className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90 transition">
  Gradient Button
</button>
        `,
      },
      {
        id: "outline-button",
        name: "Outline Button",
        description: "Minimal button with border styling.",
        component: OutlineButtonShowcase,
        tags: ["Button", "Outline"],
        code: `
<button className="px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition">
  Outline Button
</button>
        `,
      },
      {
        id: "icon-button",
        name: "Icon Button",
        description: "Button with icon for actions/navigation.",
        component: IconButtonShowcase,
        tags: ["Button", "Icon"],
        code: `
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
  Next <FiArrowRight />
</button>
        `,
      },
      {
        id: "loading-button",
        name: "Loading Button",
        description: "Button with loading spinner on click.",
        component: LoadingButtonShowcase,
        tags: ["Button", "Loading"],
        code: `
const [loading, setLoading] = useState(false);

<button
  onClick={() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }}
  disabled={loading}
  className="px-4 py-2 rounded-lg bg-indigo-600 text-white flex items-center justify-center gap-2 disabled:opacity-50"
>
  {loading ? (
    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
  ) : (
    "Click Me"
  )}
</button>
        `,
      },
        // Animated Button Showcase Items
        {
          id: "animated-gradient-button",
          name: "Animated Gradient Button",
          description: "Gradient button with scale and color animation.",
          component: AnimatedGradientButton,
          tags: ["Button", "Gradient", "Animated"],
          code: `<AnimatedGradientButton />`,
        },
        {
          id: "bouncy-icon-button",
          name: "Bouncy Icon Button",
          description: "Icon button with bounce animation.",
          component: BouncyIconButton,
          tags: ["Button", "Icon", "Animated"],
          code: `<BouncyIconButton />`,
        },
        {
          id: "success-check-button",
          name: "Success Check Button",
          description: "Button with animated check icon.",
          component: SuccessCheckButton,
          tags: ["Button", "Success", "Animated"],
          code: `<SuccessCheckButton />`,
        },
        {
          id: "pulse-add-button",
          name: "Pulse Add Button",
          description: "Button with pulsing box-shadow animation.",
          component: PulseAddButton,
          tags: ["Button", "Add", "Animated"],
          code: `<PulseAddButton />`,
        },
        {
          id: "heartbeat-button",
          name: "Heartbeat Button",
          description: "Button with heartbeat scale animation.",
          component: HeartbeatButton,
          tags: ["Button", "Heart", "Animated"],
          code: `<HeartbeatButton />`,
        },
        {
          id: "star-button",
          name: "Star Button",
          description: "Button with star icon and rotation animation.",
          component: StarButton,
          tags: ["Button", "Star", "Animated"],
          code: `<StarButton />`,
        },
        {
          id: "send-button",
          name: "Send Button",
          description: "Button with send icon and slide animation.",
          component: SendButton,
          tags: ["Button", "Send", "Animated"],
          code: `<SendButton />`,
        },
        {
          id: "search-button",
          name: "Search Button",
          description: "Button with search icon and scale animation.",
          component: SearchButton,
          tags: ["Button", "Search", "Animated"],
          code: `<SearchButton />`,
        },
        {
          id: "download-button",
          name: "Download Button",
          description: "Button with download icon and downward animation.",
          component: DownloadButton,
          tags: ["Button", "Download", "Animated"],
          code: `<DownloadButton />`,
        },
        {
          id: "upload-button",
          name: "Upload Button",
          description: "Button with upload icon and upward animation.",
          component: UploadButton,
          tags: ["Button", "Upload", "Animated"],
          code: `<UploadButton />`,
        },
        {
          id: "danger-delete-button",
          name: "Danger Delete Button",
          description: "Button with delete icon and color animation.",
          component: DangerDeleteButton,
          tags: ["Button", "Delete", "Animated"],
          code: `<DangerDeleteButton />`,
        },
        {
          id: "edit-button",
          name: "Edit Button",
          description: "Button with edit icon and scale animation.",
          component: EditButton,
          tags: ["Button", "Edit", "Animated"],
          code: `<EditButton />`,
        },
        {
          id: "share-button",
          name: "Share Button",
          description: "Button with share icon and scale animation.",
          component: ShareButton,
          tags: ["Button", "Share", "Animated"],
          code: `<ShareButton />`,
        },
        {
          id: "bell-notification-button",
          name: "Bell Notification Button",
          description: "Button with bell icon and rotation animation.",
          component: BellNotificationButton,
          tags: ["Button", "Bell", "Animated"],
          code: `<BellNotificationButton />`,
        },
        {
          id: "user-profile-button",
          name: "User Profile Button",
          description: "Button with user icon and scale animation.",
          component: UserProfileButton,
          tags: ["Button", "User", "Animated"],
          code: `<UserProfileButton />`,
        },
        {
          id: "settings-button",
          name: "Settings Button",
          description: "Button with settings icon and rotation animation.",
          component: SettingsButton,
          tags: ["Button", "Settings", "Animated"],
          code: `<SettingsButton />`,
        },
        {
          id: "lock-button",
          name: "Lock Button",
          description: "Button with lock icon and scale animation.",
          component: LockButton,
          tags: ["Button", "Lock", "Animated"],
          code: `<LockButton />`,
        },
        {
          id: "camera-button",
          name: "Camera Button",
          description: "Button with camera icon and scale animation.",
          component: CameraButton,
          tags: ["Button", "Camera", "Animated"],
          code: `<CameraButton />`,
        },
        {
          id: "gift-button",
          name: "Gift Button",
          description: "Button with gift icon and scale animation.",
          component: GiftButton,
          tags: ["Button", "Gift", "Animated"],
          code: `<GiftButton />`,
        },
        {
          id: "cloud-button",
          name: "Cloud Button",
          description: "Button with cloud icon and scale animation.",
          component: CloudButton,
          tags: ["Button", "Cloud", "Animated"],
          code: `<CloudButton />`,
        },
        {
          id: "globe-button",
          name: "Globe Button",
          description: "Button with globe icon and scale animation.",
          component: GlobeButton,
          tags: ["Button", "Globe", "Animated"],
          code: `<GlobeButton />`,
        },
          // Futuristic AI-Inspired Buttons
          {
            id: "neon-pulse-button",
            name: "Neon Pulse Button",
            description: "Glowing border with pulsing effect.",
            component: NeonPulseButton,
            tags: ["Button", "Neon", "Pulse", "Futuristic"],
            code: `<NeonPulseButton />`,
          },
          {
            id: "hologram-button",
            name: "Hologram Button",
            description: "Glass effect with reflection hover.",
            component: HologramButton,
            tags: ["Button", "Hologram", "Futuristic"],
            code: `<HologramButton />`,
          },
          {
            id: "orbiting-glow-button",
            name: "Orbiting Glow Button",
            description: "Small orbs circling around.",
            component: OrbitingGlowButton,
            tags: ["Button", "Glow", "Orbit", "Futuristic"],
            code: `<OrbitingGlowButton />`,
          },
          {
            id: "liquid-morph-button",
            name: "Liquid Morph Button",
            description: "Blob-like morph animation.",
            component: LiquidMorphButton,
            tags: ["Button", "Liquid", "Morph", "Futuristic"],
            code: `<LiquidMorphButton />`,
          },
          {
            id: "cyber-ripple-button",
            name: "Cyber Ripple Button",
            description: "Expanding digital ripple.",
            component: CyberRippleButton,
            tags: ["Button", "Cyber", "Ripple", "Futuristic"],
            code: `<CyberRippleButton />`,
          },
          {
            id: "prism-shift-button",
            name: "Prism Shift Button",
            description: "Gradient shifts like a prism.",
            component: PrismShiftButton,
            tags: ["Button", "Prism", "Gradient", "Futuristic"],
            code: `<PrismShiftButton />`,
          },
          {
            id: "matrix-code-button",
            name: "Matrix Code Button",
            description: "Falling code rain on hover.",
            component: MatrixCodeButton,
            tags: ["Button", "Matrix", "Code", "Futuristic"],
            code: `<MatrixCodeButton />`,
          },
          {
            id: "galactic-beam-button",
            name: "Galactic Beam Button",
            description: "Animated light beam sweep.",
            component: GalacticBeamButton,
            tags: ["Button", "Galactic", "Beam", "Futuristic"],
            code: `<GalacticBeamButton />`,
          },
          {
            id: "quantum-flip-button",
            name: "Quantum Flip Button",
            description: "3D flip transition on hover.",
            component: QuantumFlipButton,
            tags: ["Button", "Quantum", "Flip", "Futuristic"],
            code: `<QuantumFlipButton />`,
          },
          {
            id: "aurora-flow-button",
            name: "Aurora Flow Button",
            description: "Aurora-borealis gradient waves.",
            component: AuroraFlowButton,
            tags: ["Button", "Aurora", "Flow", "Futuristic"],
            code: `<AuroraFlowButton />`,
          },
          {
            id: "starlight-button",
            name: "Starlight Button",
            description: "Sparkles that animate randomly.",
            component: StarlightButton,
            tags: ["Button", "Starlight", "Futuristic"],
            code: `<StarlightButton />`,
          },
          {
            id: "magnet-hover-button",
            name: "Magnet Hover Button",
            description: "Button pulls toward cursor.",
            component: MagnetHoverButton,
            tags: ["Button", "Magnet", "Hover", "Futuristic"],
            code: `<MagnetHoverButton />`,
          },
          {
            id: "dna-helix-button",
            name: "DNA Helix Button",
            description: "Rotating helix lines on hover.",
            component: DNAHelixButton,
            tags: ["Button", "DNA", "Helix", "Futuristic"],
            code: `<DNAHelixButton />`,
          },
          {
            id: "ai-scan-button",
            name: "AI Scan Button",
            description: "Scanning bar passes through.",
            component: AIScanButton,
            tags: ["Button", "AI", "Scan", "Futuristic"],
            code: `<AIScanButton />`,
          },
          {
            id: "solar-flare-button",
            name: "Solar Flare Button",
            description: "Fiery glowing flare effect.",
            component: SolarFlareButton,
            tags: ["Button", "Solar", "Flare", "Futuristic"],
            code: `<SolarFlareButton />`,
          },
          {
            id: "plasma-burst-button",
            name: "Plasma Burst Button",
            description: "Electric burst when clicked.",
            component: PlasmaBurstButton,
            tags: ["Button", "Plasma", "Burst", "Futuristic"],
            code: `<PlasmaBurstButton />`,
          },
          {
            id: "neural-pulse-button",
            name: "Neural Pulse Button",
            description: "Wave animation like neurons firing.",
            component: NeuralPulseButton,
            tags: ["Button", "Neural", "Pulse", "Futuristic"],
            code: `<NeuralPulseButton />`,
          },
          {
            id: "infinity-loop-button",
            name: "Infinity Loop Button",
            description: "Infinite gradient loop border.",
            component: InfinityLoopButton,
            tags: ["Button", "Infinity", "Loop", "Futuristic"],
            code: `<InfinityLoopButton />`,
          },
          {
            id: "time-warp-button",
            name: "Time Warp Button",
            description: "Distortion/ripple hover effect.",
            component: TimeWarpButton,
            tags: ["Button", "Time", "Warp", "Futuristic"],
            code: `<TimeWarpButton />`,
          },
          {
            id: "crystal-shine-button",
            name: "Crystal Shine Button",
            description: "Shining diagonal streak animation.",
            component: CrystalShineButton,
            tags: ["Button", "Crystal", "Shine", "Futuristic"],
            code: `<CrystalShineButton />`,
          },
          {
            id: "zero-gravity-button",
            name: "Zero Gravity Button",
            description: "Floating levitation effect.",
            component: ZeroGravityButton,
            tags: ["Button", "Zero Gravity", "Futuristic"],
            code: `<ZeroGravityButton />`,
          },
          {
            id: "cyber-circuit-button",
            name: "Cyber Circuit Button",
            description: "Animated circuit lines.",
            component: CyberCircuitButton,
            tags: ["Button", "Cyber", "Circuit", "Futuristic"],
            code: `<CyberCircuitButton />`,
          },
          {
            id: "energy-orb-button",
            name: "Energy Orb Button",
            description: "Glowing orb inside button.",
            component: EnergyOrbButton,
            tags: ["Button", "Energy", "Orb", "Futuristic"],
            code: `<EnergyOrbButton />`,
          },
          {
            id: "pixel-glitch-button",
            name: "Pixel Glitch Button",
            description: "Glitch/distorted hover effect.",
            component: PixelGlitchButton,
            tags: ["Button", "Pixel", "Glitch", "Futuristic"],
            code: `<PixelGlitchButton />`,
          },
    ],
  },
  {
    category: "Cards",
    items: [
      {
        id: "animated-card",
        name: "Animated Card",
        description: "Card with hover animations.",
        component: AnimatedCardShowcase,
        tags: ["Card", "Animation"],
        code: `
<motion.div whileHover={{ scale: 1.05 }} className="w-64 h-40 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center text-lg font-semibold cursor-pointer">
  ✨ Hover Me!
</motion.div>
        `,
      },
        // AI-Inspired Cards
        {
          id: "neural-glow-card",
          name: "Neural Glow Card",
          description: "Pulsing neon borders simulating brainwaves.",
          component: NeuralGlowCard,
          tags: ["Card", "Neural", "Glow", "AI"],
          code: `<NeuralGlowCard />`,
        }, // New AI Card Animations
        {
          id: "ai-chat-card",
          name: "AI Chat Card",
          description: "Animated chat bubbles with typing effect.",
          component: AIChatCard,
          tags: ["Card", "Chat", "AI", "Animated"],
          code: `<AIChatCard />`,
        },
        {
          id: "robo-assistant-card",
          name: "Robo Assistant Card",
          description: "Robot icon with wave animation.",
          component: RoboAssistantCard,
          tags: ["Card", "Robot", "Assistant", "AI", "Animated"],
          code: `<RoboAssistantCard />`,
        },
        {
          id: "sentiment-analysis-card",
          name: "Sentiment Analysis Card",
          description: "Color changes based on sentiment.",
          component: SentimentAnalysisCard,
          tags: ["Card", "Sentiment", "AI", "Animated"],
          code: `<SentimentAnalysisCard />`,
        },
        {
          id: "ai-timeline-card",
          name: "AI Timeline Card",
          description: "Animated timeline with progress.",
          component: AITimelineCard,
          tags: ["Card", "Timeline", "AI", "Animated"],
          code: `<AITimelineCard />`,
        },
        {
          id: "voice-recognition-card",
          name: "Voice Recognition Card",
          description: "Animated waveform.",
          component: VoiceRecognitionCard,
          tags: ["Card", "Voice", "Recognition", "AI", "Animated"],
          code: `<VoiceRecognitionCard />`,
        },
        {
          id: "ai-prediction-card",
          name: "AI Prediction Card",
          description: "Reveal prediction with flip.",
          component: AIPredictionCard,
          tags: ["Card", "Prediction", "AI", "Animated"],
          code: `<AIPredictionCard />`,
        },
        {
          id: "data-encryption-card",
          name: "Data Encryption Card",
          description: "Lock/unlock animation.",
          component: DataEncryptionCard,
          tags: ["Card", "Encryption", "AI", "Animated"],
          code: `<DataEncryptionCard />`,
        },
        {
          id: "ai-collaboration-card",
          name: "AI Collaboration Card",
          description: "Multiple avatars with join animation.",
          component: AICollaborationCard,
          tags: ["Card", "Collaboration", "AI", "Animated"],
          code: `<AICollaborationCard />`,
        },
        {
          id: "ai-art-card",
          name: "AI Art Card",
          description: "Animated generative art background.",
          component: AIArtCard,
          tags: ["Card", "Art", "AI", "Animated"],
          code: `<AIArtCard />`,
        },
        {
          id: "ai-loader-card",
          name: "AI Loader Card",
          description: "Futuristic loading spinner.",
          component: AILoaderCard,
          tags: ["Card", "Loader", "AI", "Animated"],
          code: `<AILoaderCard />`,
        },
        {
          id: "quantum-flip-card",
          name: "Quantum Flip Card",
          description: "Smooth 3D flip with perspective distortion.",
          component: QuantumFlipCard,
          tags: ["Card", "Quantum", "Flip", "AI"],
          code: `<QuantumFlipCard />`,
        },
        {
          id: "data-stream-card",
          name: "Data Stream Card",
          description: "Animated gradient lines flowing across background.",
          component: DataStreamCard,
          tags: ["Card", "Data", "Stream", "AI"],
          code: `<DataStreamCard />`,
        },
        {
          id: "hologram-card",
          name: "Hologram Card",
          description: "Transparent glassmorphism with a holographic shine.",
          component: HologramCard,
          tags: ["Card", "Hologram", "AI"],
          code: `<HologramCard />`,
        },
        {
          id: "synapse-pulse-card",
          name: "Synapse Pulse Card",
          description: "Borders pulse outward like neurons firing.",
          component: SynapsePulseCard,
          tags: ["Card", "Synapse", "Pulse", "AI"],
          code: `<SynapsePulseCard />`,
        },
        {
          id: "cyber-prism-card",
          name: "Cyber Prism Card",
          description: "Animated prism reflection effect on hover.",
          component: CyberPrismCard,
          tags: ["Card", "Cyber", "Prism", "AI"],
          code: `<CyberPrismCard />`,
        },
        {
          id: "matrix-rain-card",
          name: "Matrix Rain Card",
          description: "Background with falling code rain (Matrix-inspired).",
          component: MatrixRainCard,
          tags: ["Card", "Matrix", "Rain", "AI"],
          code: `<MatrixRainCard />`,
        },
        {
          id: "ai-avatar-card",
          name: "AI Avatar Card",
          description: "Floating avatar with tilt + parallax hover.",
          component: AIAvatarCard,
          tags: ["Card", "Avatar", "AI"],
          code: `<AIAvatarCard />`,
        },
        {
          id: "predictive-insight-card",
          name: "Predictive Insight Card",
          description: "Expands upward with reveal animation.",
          component: PredictiveInsightCard,
          tags: ["Card", "Predictive", "Insight", "AI"],
          code: `<PredictiveInsightCard />`,
        },
        {
          id: "neon-grid-card",
          name: "Neon Grid Card",
          description: "Background neon grid with hover tilt.",
          component: NeonGridCard,
          tags: ["Card", "Neon", "Grid", "AI"],
          code: `<NeonGridCard />`,
        },
        {
          id: "adaptive-shadow-card",
          name: "Adaptive Shadow Card",
          description: "Shadow morphs dynamically with cursor.",
          component: AdaptiveShadowCard,
          tags: ["Card", "Shadow", "Adaptive", "AI"],
          code: `<AdaptiveShadowCard />`,
        },
        {
          id: "floating-orbit-card",
          name: "Floating Orbit Card",
          description: "Icons orbiting around the card in motion.",
          component: FloatingOrbitCard,
          tags: ["Card", "Orbit", "Floating", "AI"],
          code: `<FloatingOrbitCard />`,
        },
        {
          id: "fractal-glow-card",
          name: "Fractal Glow Card",
          description: "Fractal-style background shifting colors.",
          component: FractalGlowCard,
          tags: ["Card", "Fractal", "Glow", "AI"],
          code: `<FractalGlowCard />`,
        },
        {
          id: "future-vision-card",
          name: "Future Vision Card",
          description: "Glass card with animated radial scan effect.",
          component: FutureVisionCard,
          tags: ["Card", "Future", "Vision", "AI"],
          code: `<FutureVisionCard />`,
        },
        {
          id: "smart-expand-card",
          name: "Smart Expand Card",
          description: "Expands smoothly into fullscreen on click.",
          component: SmartExpandCard,
          tags: ["Card", "Smart", "Expand", "AI"],
          code: `<SmartExpandCard />`,
        },
        {
          id: "bio-pulse-card",
          name: "Bio Pulse Card",
          description: "Gradient heartbeat animation running across.",
          component: BioPulseCard,
          tags: ["Card", "Bio", "Pulse", "AI"],
          code: `<BioPulseCard />`,
        },
        {
          id: "cybernetic-frame-card",
          name: "Cybernetic Frame Card",
          description: "Animated frame borders (glitch effect).",
          component: CyberneticFrameCard,
          tags: ["Card", "Cybernetic", "Frame", "AI"],
          code: `<CyberneticFrameCard />`,
        },
        {
          id: "parallax-depth-card",
          name: "Parallax Depth Card",
          description: "3D parallax with layers moving differently.",
          component: ParallaxDepthCard,
          tags: ["Card", "Parallax", "Depth", "AI"],
          code: `<ParallaxDepthCard />`,
        },
        {
          id: "aurora-flow-card",
          name: "Aurora Flow Card",
          description: "Aurora-like background waves flowing.",
          component: AuroraFlowCard,
          tags: ["Card", "Aurora", "Flow", "AI"],
          code: `<AuroraFlowCard />`,
        },
        {
          id: "glitch-effect-card",
          name: "Glitch Effect Card",
          description: "Digital glitch transition on hover/click.",
          component: GlitchEffectCard,
          tags: ["Card", "Glitch", "Effect", "AI"],
          code: `<GlitchEffectCard />`,
        },
    ],
  },
  {
    category: "Modals",
    items: [
      {
        id: "hologram-modal",
        name: "Hologram Modal",
        description: "Appears with glass blur + glowing holographic border.",
        component: HologramModal,
        tags: ["Modal", "Hologram", "AI", "Animated"],
        code: `<HologramModal open={open} onClose={closeHandler}>...</HologramModal>`
      },
      {
        id: "neural-sync-modal",
        name: "Neural Sync Modal",
        description: "Opens with ripple waves like a brain pulse.",
        component: NeuralSyncModal,
        tags: ["Modal", "Neural", "AI", "Animated"],
        code: `<NeuralSyncModal open={open} onClose={closeHandler}>...</NeuralSyncModal>`
      },
      {
        id: "quantum-fade-modal",
        name: "Quantum Fade Modal",
        description: "Fades in/out with particles scattering + reforming.",
        component: QuantumFadeModal,
        tags: ["Modal", "Quantum", "AI", "Animated"],
        code: `<QuantumFadeModal open={open} onClose={closeHandler}>...</QuantumFadeModal>`
      },
      {
        id: "data-stream-modal",
        name: "Data Stream Modal",
        description: "Animated gradient lines flow across background.",
        component: DataStreamModal,
        tags: ["Modal", "Data", "Stream", "AI", "Animated"],
        code: `<DataStreamModal open={open} onClose={closeHandler}>...</DataStreamModal>`
      },
      {
        id: "cyber-drawer-modal",
        name: "Cyber Drawer Modal",
        description: "Sliding drawer with neon edges.",
        component: CyberDrawerModal,
        tags: ["Modal", "Cyber", "Drawer", "AI", "Animated"],
        code: `<CyberDrawerModal open={open} onClose={closeHandler}>...</CyberDrawerModal>`
      },
      {
        id: "prism-shift-modal",
        name: "Prism Shift Modal",
        description: "Shimmering prism refraction when opening.",
        component: PrismShiftModal,
        tags: ["Modal", "Prism", "AI", "Animated"],
        code: `<PrismShiftModal open={open} onClose={closeHandler}>...</PrismShiftModal>`
      },
      {
        id: "matrix-rain-modal",
        name: "Matrix Rain Modal",
        description: "Background shows falling matrix code.",
        component: MatrixRainModal,
        tags: ["Modal", "Matrix", "Rain", "AI", "Animated"],
        code: `<MatrixRainModal open={open} onClose={closeHandler}>...</MatrixRainModal>`
      },
      {
        id: "ai-scan-modal",
        name: "AI Scan Modal",
        description: "Opens with a scanning laser effect.",
        component: AIScanModal,
        tags: ["Modal", "AI", "Scan", "Animated"],
        code: `<AIScanModal open={open} onClose={closeHandler}>...</AIScanModal>`
      },
      {
        id: "bio-pulse-modal",
        name: "Bio Pulse Modal",
        description: "Pulsing glow edges like a heartbeat.",
        component: BioPulseModal,
        tags: ["Modal", "Bio", "Pulse", "AI", "Animated"],
        code: `<BioPulseModal open={open} onClose={closeHandler}>...</BioPulseModal>`
      },
      {
        id: "glitch-modal",
        name: "Glitch Modal",
        description: "Appears with a digital glitch distortion.",
        component: GlitchModal,
        tags: ["Modal", "Glitch", "AI", "Animated"],
        code: `<GlitchModal open={open} onClose={closeHandler}>...</GlitchModal>`
      },
      {
        id: "aurora-modal",
        name: "Aurora Modal",
        description: "Gradient aurora animation flowing behind content.",
        component: AuroraModal,
        tags: ["Modal", "Aurora", "AI", "Animated"],
        code: `<AuroraModal open={open} onClose={closeHandler}>...</AuroraModal>`
      },
      {
        id: "teleport-modal",
        name: "Teleport Modal",
        description: "Scales down/up with teleportation-like blur.",
        component: TeleportModal,
        tags: ["Modal", "Teleport", "AI", "Animated"],
        code: `<TeleportModal open={open} onClose={closeHandler}>...</TeleportModal>`
      },
    ],
  },
  {
    category: "Forms",
    items: [
      {
        id: "input-field",
        name: "Input Field",
        description: "Basic styled input with label.",
        component: InputFieldShowcase,
        tags: ["Form", "Input"],
        code: `
<label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
  Username
</label>
<input
  id="username"
  type="text"
  placeholder="Enter your username"
  className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
/>
        `,
      },
      {
        id: "toggle-switch",
        name: "Toggle Switch",
        description: "Interactive on/off switch.",
        component: ToggleSwitchShowcase,
        tags: ["Form", "Toggle"],
        code: `
const [enabled, setEnabled] = useState(false);

<button
  onClick={() => setEnabled(!enabled)}
  className={\`w-12 h-6 flex items-center rounded-full p-1 transition \${enabled ? "bg-indigo-600" : "bg-gray-400"}\`}
>
  <div
    className={\`w-4 h-4 bg-white rounded-full shadow transform transition \${enabled ? "translate-x-6" : "translate-x-0"}\`}
  />
</button>
        `,
      },
        {
          id: "matrix-input",
          name: "Matrix Input",
          description: "Input styled with matrix code animation.",
          component: MatrixInput,
          tags: ["Form", "Input", "Matrix", "AI"],
          code: `<MatrixInput />`,
        },
        {
          id: "voice-command-input",
          name: "Voice Command Input",
          description: "Input field with microphone icon for voice commands.",
          component: VoiceCommandInput,
          tags: ["Form", "Input", "Voice", "AI"],
          code: `<VoiceCommandInput />`,
        },
        {
          id: "cyber-checkbox",
          name: "Cyber Checkbox",
          description: "Checkbox with cyberpunk neon effect.",
          component: CyberCheckbox,
          tags: ["Form", "Checkbox", "Cyber", "AI"],
          code: `<CyberCheckbox />`,
        },
        {
          id: "quantum-radio",
          name: "Quantum Radio",
          description: "Radio buttons with quantum-inspired animation.",
          component: QuantumRadio,
          tags: ["Form", "Radio", "Quantum", "AI"],
          code: `<QuantumRadio />`,
        },
          {
            id: "futuristic-select",
            name: "Futuristic Select",
            description: "Dropdown select with animated futuristic style.",
            component: FuturisticSelect,
            tags: ["Form", "Select", "Futuristic", "AI"],
            code: `<FuturisticSelect />`,
          },
          {
            id: "biometric-toggle",
            name: "Biometric Toggle",
            description: "Toggle switch with fingerprint icon and animation.",
            component: BiometricToggle,
            tags: ["Form", "Toggle", "Biometric", "AI"],
            code: `<BiometricToggle />`,
          },
          {
            id: "hologram-textarea",
            name: "Hologram Textarea",
            description: "Animated textarea with hologram effect.",
            component: HologramTextarea,
            tags: ["Form", "Textarea", "Hologram", "AI"],
            code: `<HologramTextarea />`,
          },
          {
            id: "neural-slider",
            name: "Neural Slider",
            description: "Range slider with neural-inspired animation.",
            component: NeuralSlider,
            tags: ["Form", "Slider", "Neural", "AI"],
            code: `<NeuralSlider />`,
          },
            {
              id: "synapse-switch",
              name: "Synapse Switch",
              description: "Switch with synapse pulse animation.",
              component: SynapseSwitch,
              tags: ["Form", "Switch", "Synapse", "AI"],
              code: `<SynapseSwitch />`,
            },
            {
              id: "aurora-dropdown",
              name: "Aurora Dropdown",
              description: "Dropdown with aurora-inspired animation.",
              component: AuroraDropdown,
              tags: ["Form", "Dropdown", "Aurora", "AI"],
              code: `<AuroraDropdown />`,
            },
            {
              id: "glitch-password-input",
              name: "Glitch Password Input",
              description: "Password input with glitch effect.",
              component: GlitchPasswordInput,
              tags: ["Form", "Input", "Password", "Glitch", "AI"],
              code: `<GlitchPasswordInput />`,
            },
            {
              id: "robo-stepper",
              name: "Robo Stepper",
              description: "Stepper input with robot icon and animation.",
              component: RoboStepper,
              tags: ["Form", "Stepper", "Robot", "AI"],
              code: `<RoboStepper />`,
            },
              {
                id: "adaptive-range",
                name: "Adaptive Range",
                description: "Range input with adaptive color animation.",
                component: AdaptiveRange,
                tags: ["Form", "Range", "Adaptive", "AI"],
                code: `<AdaptiveRange />`,
              },
              {
                id: "pulse-radio-group",
                name: "Pulse Radio Group",
                description: "Radio group with pulse animation.",
                component: PulseRadioGroup,
                tags: ["Form", "Radio", "Pulse", "AI"],
                code: `<PulseRadioGroup />`,
              },
              {
                id: "smart-file-upload",
                name: "Smart File Upload",
                description: "File upload with animated cloud icon.",
                component: SmartFileUpload,
                tags: ["Form", "File", "Upload", "AI"],
                code: `<SmartFileUpload />`,
              },
              {
                id: "data-stream-textarea",
                name: "Data Stream Textarea",
                description: "Textarea with streaming data animation.",
                component: DataStreamTextarea,
                tags: ["Form", "Textarea", "Data", "Stream", "AI"],
                code: `<DataStreamTextarea />`,
              },
                {
                  id: "quantum-dropdown",
                  name: "Quantum Dropdown",
                  description: "Dropdown with quantum-inspired animation.",
                  component: QuantumDropdown,
                  tags: ["Form", "Dropdown", "Quantum", "AI"],
                  code: `<QuantumDropdown />`,
                },
                {
                  id: "prism-checkbox",
                  name: "Prism Checkbox",
                  description: "Checkbox with prism color effect.",
                  component: PrismCheckbox,
                  tags: ["Form", "Checkbox", "Prism", "AI"],
                  code: `<PrismCheckbox />`,
                },
                {
                  id: "ai-avatar-input",
                  name: "AI Avatar Input",
                  description: "Input field with AI avatar icon.",
                  component: AIAvatarInput,
                  tags: ["Form", "Input", "Avatar", "AI"],
                  code: `<AIAvatarInput />`,
                },
                {
                  id: "fractal-textarea",
                  name: "Fractal Textarea",
                  description: "Textarea with fractal-inspired animation.",
                  component: FractalTextarea,
                  tags: ["Form", "Textarea", "Fractal", "AI"],
                  code: `<FractalTextarea />`,
                },
                  {
                    id: "parallax-input",
                    name: "Parallax Input",
                    description: "Input field with parallax animation.",
                    component: ParallaxInput,
                    tags: ["Form", "Input", "Parallax", "AI"],
                    code: `<ParallaxInput />`,
                  },
                  {
                    id: "bio-pulse-switch",
                    name: "Bio Pulse Switch",
                    description: "Switch with bio pulse animation.",
                    component: BioPulseSwitch,
                    tags: ["Form", "Switch", "Bio", "Pulse", "AI"],
                    code: `<BioPulseSwitch />`,
                  },
                  {
                    id: "sentiment-select",
                    name: "Sentiment Select",
                    description: "Dropdown for sentiment selection.",
                    component: SentimentSelect,
                    tags: ["Form", "Select", "Sentiment", "AI"],
                    code: `<SentimentSelect />`,
                  },
                  {
                    id: "smart-expand-textarea",
                    name: "Smart Expand Textarea",
                    description: "Textarea that expands/collapses with animation.",
                    component: SmartExpandTextarea,
                    tags: ["Form", "Textarea", "Expand", "AI"],
                    code: `<SmartExpandTextarea />`,
                  },
                    {
                      id: "floating-orbit-select",
                      name: "Floating Orbit Select",
                      description: "Dropdown with floating orbit animation.",
                      component: FloatingOrbitSelect,
                      tags: ["Form", "Select", "Orbit", "AI"],
                      code: `<FloatingOrbitSelect />`,
                    },
                    {
                      id: "cybernetic-input",
                      name: "Cybernetic Input",
                      description: "Input field with cybernetic style.",
                      component: CyberneticInput,
                      tags: ["Form", "Input", "Cybernetic", "AI"],
                      code: `<CyberneticInput />`,
                    },
                    {
                      id: "aurora-switch",
                      name: "Aurora Switch",
                      description: "Switch with aurora-inspired animation.",
                      component: AuroraSwitch,
                      tags: ["Form", "Switch", "Aurora", "AI"],
                      code: `<AuroraSwitch />`,
                    },
                    {
                      id: "predictive-textarea",
                      name: "Predictive Textarea",
                      description: "Textarea with predictive animation.",
                      component: PredictiveTextarea,
                      tags: ["Form", "Textarea", "Predictive", "AI"],
                      code: `<PredictiveTextarea />`,
                    },
    ],
  },
];
