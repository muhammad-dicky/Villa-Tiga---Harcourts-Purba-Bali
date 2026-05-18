/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import WhyCanggu from './components/WhyCanggu';
import LifestyleGrid from './components/LifestyleGrid';
import LocationGrid from './components/LocationGrid';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';

export default function App() {
  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main>
          <Hero />
          <Intro />
          <WhyCanggu />
          <LifestyleGrid />
          <LocationGrid />
          <PhotoGallery />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
