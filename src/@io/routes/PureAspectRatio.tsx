import React from 'react';
import './PureAspectRatio.scss';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { TextCalculateSvg, TextOutputSvg, TextPureAspectRatioSvg } from '@io/svgs';

// document.body.style.backgroundColor = '#333';

interface IState {
  application: 'illustrator' | 'photoshop' | '';
  valueInputWidth: string;
  valueInputHeight: string;
  output: string;
}

export function PureAspectRatio() {
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);
  const [state, setState] = React.useState<IState>({
    application: '',
    valueInputWidth: '',
    valueInputHeight: '',
    output: '',
  });

  const handleInputChange = (name: string) => event => setState({ ...state, [name]: event.target.value });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const w = parseFloat(state.valueInputWidth);
    const h = parseFloat(state.valueInputHeight);

    const maximumIllustratorArtboardSize = 16290;
    const illustratorFractionalAccuracy = 4;

    const maximumPhotoshopImageSize = 30000;
    const photoshopFractionalAccuracy = 2;

    let maximumSize = Number.MAX_SAFE_INTEGER; // 9007199254740992
    let fractionalAccuracy = 4;

    switch (state.application) {
      case 'illustrator':
        maximumSize = maximumIllustratorArtboardSize;
        fractionalAccuracy = illustratorFractionalAccuracy;
        break;
      case 'photoshop':
        maximumSize = maximumPhotoshopImageSize;
        fractionalAccuracy = photoshopFractionalAccuracy;
        break;
    }

    const fractionalAccuracyMultiplier = Math.pow(10, fractionalAccuracy);
    const fractionalLength = (n: number) => n.toString().split('.')[1]?.length ?? 0;
    const wholeNumber = (n: number) => Math.round(n * Math.pow(10, fractionalLength(n)));
    const wholeNumberWithAccuracy = (n: number) =>
      fractionalLength(n) > fractionalAccuracy
        ? Math.round(n * fractionalAccuracyMultiplier)
        : wholeNumber(n);

    const wwnwa = wholeNumberWithAccuracy(w);
    const hwnwa = wholeNumberWithAccuracy(h);

    let wms;
    if (wwnwa > maximumSize) wms = wwnwa;
    else wms = maximumSize;

    let hms = hwnwa > maximumSize ? wwnwa : maximumSize;

    let o = '';

    console.log('w', w);
    console.log('h', h);
    console.log('Number.isSafeInteger(w)', Number.isSafeInteger(w));
    console.log('Number.isSafeInteger(h)', Number.isSafeInteger(h));
    console.log('fractionalAccuracy', fractionalAccuracy);
    console.log('fractionalAccuracyMultiplier', fractionalAccuracyMultiplier);
    console.log('fractionalLength(w)', fractionalLength(w));
    console.log('fractionalLength(h)', fractionalLength(h));
    console.log('wholeNumber(w)', wholeNumber(w));
    console.log('wholeNumber(h)', wholeNumber(h));
    console.log('Number.isSafeInteger(wholeNumber(w))', Number.isSafeInteger(wholeNumber(w)));
    console.log('Number.isSafeInteger(wholeNumber(h))', Number.isSafeInteger(wholeNumber(h)));
    console.log('wholeNumberWithAccuracy(w)', wholeNumberWithAccuracy(w));
    console.log('wholeNumberWithAccuracy(h)', wholeNumberWithAccuracy(h));
    console.log(
      'Number.isSafeInteger(wholeNumberWithAccuracy(w))',
      Number.isSafeInteger(wholeNumberWithAccuracy(w)),
    );
    console.log(
      'Number.isSafeInteger(wholeNumberWithAccuracy(h))',
      Number.isSafeInteger(wholeNumberWithAccuracy(h)),
    );

    if (wwnwa > hwnwa) {
      let wr = wwnwa;
      let hr;
      while (wr > 0) {
        hr = Math.round(((h * wr) / w) * fractionalAccuracyMultiplier) / fractionalAccuracyMultiplier;
        if (hr % 1 === 0) {
          o += wr + ' x ' + hr + '<br />';
        }
        wr--;
      }
    } else {
      let wr;
      let hr = hwnwa;
      while (hr > 0) {
        wr = Math.round(((w * hr) / h) * fractionalAccuracyMultiplier) / fractionalAccuracyMultiplier;
        if (wr % 1 === 0) {
          o += wr + ' x ' + hr + '<br />';
        }
        hr--;
      }
    }

    setState({ ...state, output: o.slice(0, o.lastIndexOf('<br />')) });
  };

  return (
    <div className='routes--pure-ratio'>
      <div className='container'>
        <form className='form' onSubmit={handleSubmit}>
          <img className='img--title' src={TextOutputSvg} alt='logo' />
          <div className='output' ref={parent}>
            {state.output.split('<br />').map((v, i) => (
              <p key={i}>
                <code>{v}</code>
              </p>
            ))}
          </div>
          <div className='input--container'>
            <input
              className='input--width'
              type='number'
              name='width'
              placeholder='Enter width (px)'
              value={state.valueInputWidth}
              onChange={handleInputChange('valueInputWidth')}
            />
            <input
              className='input--height'
              type='number'
              name='height'
              placeholder='Enter height (px)'
              value={state.valueInputHeight}
              onChange={handleInputChange('valueInputHeight')}
            />
            <input className='input--submit--calculate' type='image' src={TextCalculateSvg} alt='Calculate' />
          </div>
          {/* <button onClick={() => enableAnimations(false)}>Disable</button> */}
        </form>
      </div>
    </div>
  );
}
