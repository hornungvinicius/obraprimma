import { gsap } from 'gsap';

// Entrada única por página: as linhas do título sobem de dentro de uma máscara,
// os blocos de imagem do topo abrem de baixo para cima. Nada anima com a rolagem.
const mm = gsap.matchMedia();

mm.add('(prefers-reduced-motion: no-preference)', () => {
  const linhas = gsap.utils.toArray<HTMLElement>('[data-entra="linha"] > span');
  const imagens = gsap.utils.toArray<HTMLElement>('[data-entra="imagem"]');
  const resto = gsap.utils.toArray<HTMLElement>('[data-entra="texto"]');
  gsap.set('[data-entra]', { visibility: 'visible' });

  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  if (linhas.length) tl.from(linhas, { yPercent: 105, duration: 1.2, stagger: 0.08 });
  if (imagens.length)
    tl.from(imagens, { clipPath: 'inset(100% 0 0 0)', duration: 1.3, stagger: 0.08 }, 0.25);
  if (resto.length) tl.from(resto, { autoAlpha: 0, y: 10, duration: 0.8, stagger: 0.05 }, 0.5);
});
