import { GlobalContext } from '@io/contexts';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Dialog.scss';
import { IGalleryDataElement } from '@io/interfaces';

interface IDialogProps {
  handleDialogOnClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  dialogData?: Partial<IGalleryDataElement>;
  isDialogOpen?: boolean;
}

export const Dialog = (props: IDialogProps) => {
  const isDialogOpen: boolean = props.isDialogOpen ?? false;
  const dialogData: Partial<IGalleryDataElement> = props.dialogData ?? {
    brand: 'no information',
    currency: '',
    image: '',
    price: 0,
    title: '',
    url: '',
  };

  return (
    <TransitionGroup component={null}>
      {isDialogOpen && (
        <CSSTransition classNames='dialog' timeout={300}>
          <div className='dialog--overlay' onClick={e => props.handleDialogOnClick(e)}>
            <div className='dialog'>
              <a href={dialogData.url} target='_blank' rel='noreferrer noopener'>
                <img src={dialogData.image} alt={dialogData.title} />
              </a>
              <p>
                <span>Brand:</span> {dialogData.brand}
              </p>
              <p>
                <span>Title:</span> {dialogData.title}
              </p>
              <p>
                <span>Price:</span> {`${dialogData.price} ${dialogData.currency}`}
              </p>
              <p>
                <span>Link:</span>
                <a href={dialogData.url} target='_blank' rel='noreferrer noopener'>
                  visit page
                </a>
              </p>
            </div>
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};
