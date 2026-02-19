import React from 'react';
import ReactDOM from 'react-dom/client';
import { Footer } from './components/Footer';

const footerRoot = document.getElementById('react-root-footer');

if (footerRoot) {
    ReactDOM.createRoot(footerRoot).render(<Footer />);
}
