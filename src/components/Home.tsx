import { Button } from './ui/button';
import { Link } from 'react-router';
import backgroundImage from 'figma:asset/178fbba44f2295208e9cba82b89b3873a21fd90f.png';
import icrLogo from 'figma:asset/29a88d676009f1a55a5bd1912236bfe82ecb01ac.png';

export function Home() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/60 to-blue-950/80"></div>
      </div>

      {/* Header with Logo and More Info Button */}
      <header className="relative z-10 py-4 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/info">
            <Button 
              variant="outline"
              className="bg-white/10 hover:bg-yellow-400 hover:text-blue-950 text-white border-white/30 backdrop-blur-sm transition"
            >
              More Information
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
      <main className="flex-1 flex items-center justify-center relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hashtag */}
          <div className="mb-6">
            <span className="text-5xl md:text-7xl font-bold text-white tracking-wider drop-shadow-lg">
              #PadelForICR
            </span>
          </div>

          {/* Slogan */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
              Serve. Rally. <span className="text-yellow-400">SMASH CANCER.</span>
            </h1>
          </div>

          {/* Donate Button */}
          <div className="mb-8">
            <Button 
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 px-12 py-8 text-2xl md:text-3xl font-bold rounded-full shadow-2xl transform transition hover:scale-105"
            >
              Donate Now
            </Button>
          </div>

          {/* Supporting Text */}
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Join us in the fight against cancer. Every serve, every rally brings us closer to victory.
          </p>
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