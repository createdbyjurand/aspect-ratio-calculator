import { TextPureAspectRatioSvg, TextSquareAspectRatioSvg } from '@io/svgs';
import './Home.scss';

export const Home = () => (
  <div className='routes-home'>
    <div className='container'>
      <div className='text-box'>
        <img className='img--pure-aspect-ratio' src={TextPureAspectRatioSvg} alt='Pure Aspect Ratio' />
        <p>
          Is a calculator that takes size with decimal values and looks for a pure aspect ratio size that will
          not have a decimal value.
        </p>
        <img className='img--square-aspect-ratio' src={TextSquareAspectRatioSvg} alt='Square Aspect Ratio' />
        <p>Is a calculator that scales one rectangle to fit within the second rectangle.</p>
      </div>
    </div>
  </div>
);
