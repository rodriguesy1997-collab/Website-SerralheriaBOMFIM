# Imagens do site

Coloque aqui fotos reais de projetos entregues (portões, grades, estruturas metálicas etc.).

Sugestão de uso com otimização automática do Next.js:

```tsx
import Image from "next/image";

<Image
  src="/images/portao-basculante-01.jpg"
  alt="Portão basculante de aço instalado em garagem residencial"
  width={800}
  height={600}
  className="rounded-lg object-cover"
/>
```

Formatos recomendados: `.jpg` ou `.webp`, largura mínima de 1200px para imagens de destaque (Hero) e
800px para cards de serviços/depoimentos.
