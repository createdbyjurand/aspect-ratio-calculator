import React from 'react';
import logo from './logo.svg';
import './SquareRatio.scss';

export default function SquareRatio() {
  const [inputWidth, setInputWidth] = React.useState<string>('');
  const [inputHeight, setInputHeight] = React.useState<string>('');
  const [inputCropWidth, setInputCropWidth] = React.useState<string>('');
  const [inputCropHeight, setInputCropHeight] = React.useState<string>('');
  const [outputWidth, setOutputWidth] = React.useState<string>('');
  const [outputHeight, setOutputHeight] = React.useState<string>('');
  const [outputWidthWithin, setOutputWidthWithin] = React.useState<string>('');
  const [outputHeightWithin, setOutputHeightWithin] = React.useState<string>('');

  /*
        const width = size.width;
        const height = size.height;
        const aspectRatio = width / height;

        let newWidth;
        let newHeight;

        const imageRatio = image.width / image.height;

        if (aspectRatio >= imageRatio) {
          newWidth = image.width;
          newHeight = image.width / aspectRatio;
        } else {
          newWidth = image.height * aspectRatio;
          newHeight = image.height;
        }
  */
  const calculate = (e: React.ChangeEvent<HTMLInputElement>) => {
    let scopeInputWidth = inputWidth;
    let scopeInputHeight = inputHeight;
    let scopeInputCropWidth = inputCropWidth;
    let scopeInputCropHeight = inputCropHeight;

    switch (e.target.placeholder) {
      case 'input width':
        scopeInputWidth = e.target.value;
        break;
      case 'input height':
        scopeInputHeight = e.target.value;
        break;
      case 'input crop width':
        scopeInputCropWidth = e.target.value;
        break;
      case 'input crop height':
        scopeInputCropHeight = e.target.value;
        break;
    }

    const cropRatio = +scopeInputCropWidth / +scopeInputCropHeight;
    const inputRatio = +scopeInputWidth / +scopeInputHeight;

    if (cropRatio < inputRatio) {
      setOutputWidthWithin(scopeInputCropWidth);
      setOutputHeightWithin(`${Math.round(+scopeInputCropWidth / inputRatio)}`);
    } else {
      setOutputWidthWithin(`${Math.round(+scopeInputCropHeight * inputRatio)}`);
      setOutputHeightWithin(scopeInputCropHeight);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.placeholder) {
      case 'input width':
        setInputWidth(e.target.value);
        calculate(e);
        break;
      case 'input height':
        setInputHeight(e.target.value);
        calculate(e);
        break;
      case 'input crop width':
        setInputCropWidth(e.target.value);
        calculate(e);
        break;
      case 'input crop height':
        setInputCropHeight(e.target.value);
        calculate(e);
        break;
      case 'output width':
        setOutputWidth(e.target.value);
        setOutputHeight(Math.round((+inputHeight * +e.target.value) / +inputWidth) + '');
        break;
      case 'output height':
        setOutputHeight(e.target.value);
        setOutputWidth(Math.round((+inputWidth * +e.target.value) / +inputHeight) + '');
        break;
    }
  };

  return (
    <div className='app'>
      <div className='app--header'>
        <img src={logo} className='app--logo' alt='logo' />
        <p>
          Welcome to <code>ratio calculator</code> created by Jurand.
        </p>
        <div className='app--row'>
          <div className='app--column'>
            <input
              className='app--input app--mb0'
              value={inputWidth}
              onChange={e => handleChange(e)}
              placeholder='input width'
            />
            <input
              className='app--input app--border-pink app--background-pink'
              value={inputCropWidth}
              onChange={e => handleChange(e)}
              placeholder='input crop width'
            />
          </div>
        </div>
        <div className='app--row'>
          <div className='app--column'>
            <input
              className='app--input app--mt0'
              placeholder='input height'
              value={inputHeight}
              onChange={e => handleChange(e)}
            />
            <input
              className='app--input app--mt0 app--mb0 app--border-pink app--background-pink'
              placeholder='input crop height'
              value={inputCropHeight}
              onChange={e => handleChange(e)}
            />
          </div>
          <div className='app--box' />
          <div>
            <input
              className='app--input app--mt0'
              value={outputHeight}
              onChange={e => handleChange(e)}
              placeholder='output height'
            />
            <div className='app--output app--mt0 app--mb0 app--background-pink'>{outputHeightWithin}</div>
          </div>
        </div>
        <div className='app--row'>
          <div>
            <input
              className='app--input'
              value={outputWidth}
              onChange={e => handleChange(e)}
              placeholder='output width'
            />
            <div className='app--output app--mt0 app--background-pink'>{outputWidthWithin}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
