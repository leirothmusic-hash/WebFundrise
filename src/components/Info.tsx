import { Button } from './ui/button';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import backgroundImage from 'figma:asset/178fbba44f2295208e9cba82b89b3873a21fd90f.png';
import icrLogo from 'figma:asset/29a88d676009f1a55a5bd1912236bfe82ecb01ac.png';

export function Info() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-blue-900/85 to-blue-950/90"></div>
      </div>

      {/* Header with Back Button and Logo */}
      <header className="relative z-10 py-4 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/">
            <Button 
              variant="outline"
              className="bg-white/10 hover:bg-yellow-400 hover:text-blue-950 text-white border-white/30 backdrop-blur-sm transition flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </Link>
          
          <img 
            src={icrLogo} 
            alt="ICR Logo" 
            className="h-16 md:h-20 w-auto"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10 px-4 flex items-center justify-center pb-20">
        <div className="max-w-3xl mx-auto w-full">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-4 text-center">
              About
            </h2>
            
            <div className="space-y-4 text-blue-950/90 text-sm md:text-base leading-relaxed">
              <p>
                Padel is currently the fastest-growing sport in the world, and its rapid surge in popularity across the UK offers a unique opportunity to unite for a critical cause. We are harnessing this momentum to support the Institute of Cancer Research (ICR), turning the excitement of the game into tangible support for life-saving discovery. By combining the community spirit of Padel with the urgent need for research funding, we aim to turn every match into a victory against cancer.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-blue-950 mt-6 mb-3">
                Nominate - Play - Donate
              </h3>
              
              <p>
                Our goal is to create a viral rally for research that extends beyond the court. The process is simple: play a match, make a donation to the ICR, and share your support on social media using the hashtag <span className="font-bold text-blue-950">#PadelForICR</span>. To maximize our impact, tag and nominate three fellow players in your post—challenging them to take up the racket and keep the fundraising momentum moving forward.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Link to="/">
                <Button 
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 px-8 py-4 text-lg font-bold rounded-full shadow-xl transform transition hover:scale-105"
                >
                  Join the Movement
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-blue-950/90 text-white py-4 px-4 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* ICR Info */}
            <div className="text-center md:text-left">
              <span className="text-xs uppercase tracking-wider text-blue-200 mr-2">
                Supporting
              </span>
              <a 
                href="https://www.icr.ac.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-bold hover:text-yellow-400 transition"
              >
                www.icr.ac.uk
              </a>
            </div>

            {/* Collaborators */}
            <div className="text-center">
              <span className="text-xs uppercase tracking-wider text-blue-200 mr-2">
                Collaborators
              </span>
              <span className="text-sm font-bold">
                S3 Padel
              </span>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right text-xs text-blue-200">
              <p>&copy; {new Date().getFullYear()} #PadelForICR</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}