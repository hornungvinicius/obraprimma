import { gsap } from 'gsap';

// Entrada única de cada página. Os quadros "pendurados" descem um pouco e assentam,
// o texto aparece linha a linha. Nada mais anima no scroll fora da seção de montagem.
const mm = gsap.matchMedia();

mm.add(
  {
    movimento: '(prefers-reduced-motion: no-preference)',
    reduzido: '(prefers-reduced-motion: reduce)',
  },
  (ctx) => {
    const { reduzido } = ctx.conditions as { reduzido: boolean };
    const itens = gsap.utils.toArray<HTMLElement>('[data-entra]');
    if (!itens.length) return;

    if (reduzido) {
      gsap.set(itens, { autoAlpha: 1 });
      return;
    }

    const texto = itens.filter((el) => el.dataset.entra === 'texto');
    const quadros = itens.filter((el) => el.dataset.entra === 'quadro');

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    if (texto.length) tl.fromTo(
      texto,
      { autoAlpha: 0, y: 18 },
      { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.09 },
    );
    if (quadros.length) tl.fromTo(
      quadros,
      { autoAlpha: 0, y: -26, rotation: (i) => (i % 2 ? 0.8 : -0.8), transformOrigin: '50% 0%' },
      {
        autoAlpha: 1,
        y: 0,
        rotation: 0,
        duration: 1.3,
        stagger: 0.14,
        ease: 'elastic.out(1, 0.75)',
      },
      0.15,
    );
  },
);
