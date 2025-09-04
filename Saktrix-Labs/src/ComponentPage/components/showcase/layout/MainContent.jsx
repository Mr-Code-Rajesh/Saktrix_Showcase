import ShowcaseSection from "../files/ShowcaseSection";
import GradientButtonShowcase from "../showcase-items/GradientButtonShowcase";
import AnimatedCardShowcase from "../showcase-items/AnimatedCardShowcase";
import ModalShowcase from "../showcase-items/ModalShowcase";

export default function MainContent() {
  return (
    <main className="flex-1 max-w-3xl mx-auto p-6 space-y-16">
      <ShowcaseSection
        id="gradient-button"
        title="🌈 Gradient Button"
        description="Flashy CTA with gradient styling."
        Component={GradientButtonShowcase}
      />
      <ShowcaseSection
        id="animated-card"
        title="✨ Animated Card"
        description="Card with hover animations."
        Component={AnimatedCardShowcase}
      />
      <ShowcaseSection
        id="modal"
        title="📦 Modal"
        description="Popup modal with overlay."
        Component={ModalShowcase}
      />
    </main>
  );
}
