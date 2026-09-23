import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '~/components/App/App';

const layoutMedia = window.matchMedia('(min-width: 768px)');
const themeMedia = window.matchMedia('(prefers-color-scheme: dark)');

const applyLayout = () =>
    (document.documentElement.dataset.layout = layoutMedia.matches ? 'split' : 'compact');
const applyTheme = () =>
    (document.documentElement.dataset.theme = themeMedia.matches ? 'dark' : 'light');

applyLayout();
applyTheme();

layoutMedia.addEventListener('change', applyLayout);
themeMedia.addEventListener('change', applyTheme);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
