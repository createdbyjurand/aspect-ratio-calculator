import React from 'react';
import * as styles from './PureRatio.scss';

// document.body.style.backgroundColor = '#282828';

const inter = Inter({ subsets: ['latin'] });

export default function PureRatio() {
  console.log({ styles });

  const [hookState, setHookState] = React.useState<any>({
    valueInputWidth: '',
    valueInputHeight: '',
    output: '',
  });

  const handleInputChange = (name: string) => (event: any) =>
    setHookState({ ...hookState, [name]: event.target.value });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const w = parseFloat(hookState.valueInputWidth);
    const h = parseFloat(hookState.valueInputHeight);

    const fractionalAccuracy = 5;
    const fractionalAccuracyMultiplier = Math.pow(10, fractionalAccuracy);
    const fractionalLength = (n: number) => n.toString().split('.')[1]?.length ?? 0;
    const wholeNumber = (n: number) => n * Math.pow(10, fractionalLength(n));
    const wholeNumberWithAccuracy = (n: number) =>
      fractionalLength(n) > fractionalAccuracy
        ? Math.round(n * fractionalAccuracyMultiplier)
        : wholeNumber(n);

    const wwnwa = wholeNumberWithAccuracy(w);
    const hwnwa = wholeNumberWithAccuracy(h);

    let o = '';

    if (wwnwa > hwnwa) {
      let wr = wwnwa; // illustrator max: 16290
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
      let hr = hwnwa; // illustrator max: 16290
      while (hr > 0) {
        wr = Math.round(((w * hr) / h) * fractionalAccuracyMultiplier) / fractionalAccuracyMultiplier;
        if (wr % 1 === 0) {
          o += wr + ' x ' + hr + '<br />';
        }
        hr--;
      }
    }

    setHookState({ ...hookState, output: o.slice(0, o.lastIndexOf('<br />')) });
  };

  return (
    <div className={styles.pureRatioAppContainer}>
      <form className={styles.pureRatioForm} onSubmit={handleSubmit}>
        <p className={styles.pureRatioTitle}>Output:</p>
        <div className={styles.pureRatioOutput}>
          {hookState.output.split('<br />').map(e => (
            <p key={e.toString()}>{e}</p>
          ))}
        </div>
        <div className={styles.pureRatioInputContainer}>
          <input
            className={styles.pureRatioInputWidth}
            type='number'
            name='width'
            placeholder='Enter width (px)'
            value={hookState.valueInputWidth}
            onChange={handleInputChange('valueInputWidth')}
          />
          <input
            className={styles.pureRatioInputHeight}
            type='number'
            name='height'
            placeholder='Enter height (px)'
            value={hookState.valueInputHeight}
            onChange={handleInputChange('valueInputHeight')}
          />
          <input className={styles.pureRatioSubmit} type='submit' value='Calculate' />
        </div>
      </form>
    </div>
  );
}
