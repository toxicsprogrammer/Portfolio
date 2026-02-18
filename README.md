# Portfolio Personal

Portfolio web moderno y responsive creado con React, TypeScript, Tailwind CSS y Framer Motion.

## Características

- **Diseño Moderno**: Interfaz atractiva con efectos de vidrio (glass morphism) y animaciones fluidas
- **Sección Hero**: Presentación impactante con estadísticas y llamadas a la acción
- **Proyectos**: Galería de proyectos con filtros por categoría (Frontend, Backend, Full Stack)
- **CV Dinámico**: Experiencia, educación y habilidades con animaciones y barras de progreso
- **Formulario de Contacto**: Sistema de contacto con integración de EmailJS
- **Responsive**: Diseño completamente adaptable a dispositivos móviles, tablets y desktop
- **Navegación Smooth**: Navegación suave entre secciones con detección automática de scroll

## Tecnologías Utilizadas

- **React 18** - Framework de JavaScript
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS utility-first
- **Framer Motion** - Librería de animaciones
- **EmailJS** - Servicio de envío de emails
- **React Icons** - Librería de iconos

## Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd toxics
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura EmailJS (opcional, para el formulario de contacto):
   - Crea una cuenta en [EmailJS](https://www.emailjs.com/)
   - Crea un servicio de email
   - Crea una plantilla de email
   - Reemplaza en `src/components/Contact.tsx`:
     - `YOUR_SERVICE_ID` con tu Service ID
     - `YOUR_TEMPLATE_ID` con tu Template ID
     - `YOUR_PUBLIC_KEY` con tu Public Key

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

5. Abre tu navegador en `http://localhost:5173`

## Personalización

### Datos Personales

Edita el archivo `src/data/portfolio.ts` para personalizar:
- Tus proyectos
- Experiencia laboral
- Educación
- Habilidades técnicas

### Información de Contacto

Actualiza en los componentes:
- `src/components/Hero.tsx` - Tu nombre
- `src/components/Navbar.tsx` - Links de redes sociales
- `src/components/Contact.tsx` - Tu email
- `src/components/Footer.tsx` - Tu nombre

### Colores y Estilos

Personaliza los colores en `tailwind.config.js`:
```javascript
colors: {
  primary: '#a277ff',     // Color primario
  secondary: '#61ffca',   // Color secundario
  dark: '#3d375e7f',        // Color de fondo oscuro
  light: '#edecee',       // Color de texto claro
}
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea la build de producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## Estructura del Proyecto

```
src/
├── components/        # Componentes React
│   ├── Navbar.tsx    # Barra de navegación
│   ├── Hero.tsx      # Sección hero/presentación
│   ├── Projects.tsx  # Sección de proyectos
│   ├── ProjectCard.tsx # Card individual de proyecto
│   ├── CV.tsx        # Sección de CV
│   ├── Contact.tsx   # Formulario de contacto
│   └── Footer.tsx    # Pie de página
├── data/             # Datos del portfolio
│   └── portfolio.ts  # Proyectos, experiencia, educación, skills
├── types/            # Tipos de TypeScript
│   └── index.ts      # Interfaces y tipos
├── App.tsx           # Componente principal
├── main.tsx          # Punto de entrada
└── index.css         # Estilos globales
```

## Deployment

### Vercel (Recomendado)

1. Push tu código a GitHub
2. Importa el proyecto en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente la configuración de Vite
4. Haz deploy

### Netlify

1. Push tu código a GitHub
2. Importa el proyecto en [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Haz deploy

### GitHub Pages

1. Instala gh-pages:
```bash
npm install -D gh-pages
```

2. Agrega scripts en `package.json`:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Deploy:
```bash
npm run deploy
```

## Próximas Mejoras

- [ ] Modo oscuro/claro
- [ ] Blog integrado
- [ ] Testimonios de clientes
- [ ] Galería de certificaciones
- [ ] Integración con CMS
- [ ] Versión en múltiples idiomas
- [ ] Análisis con Google Analytics

## Licencia

MIT License - Siéntete libre de usar este proyecto para tu propio portfolio.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme a través del formulario en el sitio web o directamente por email.

---

⭐ Si te gusta este proyecto, dale una estrella en GitHub!

