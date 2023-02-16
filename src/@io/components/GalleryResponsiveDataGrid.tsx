import { IGalleryDataElement, ITransitionGroupElement } from '@io/interfaces';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import placeholderImage from 'resources/icon-no-image-white.svg';
import './GalleryResponsiveDataGrid.scss';

interface IGalleryResponsiveDataGridProps {
  transitionGroupElements: ITransitionGroupElement[];
  isDialogOpen: boolean;
  setIsDialogOpen: (bool: boolean) => void;
  handleImageOnClick: (
    element: Partial<IGalleryDataElement>,
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => void;
}

export const GalleryResponsiveDataGrid = (props: Partial<IGalleryResponsiveDataGridProps>) => {
  // let highestImage: number;

  // React.useEffect(() => {
  //   if (props.transitionGroupElements) {
  //     highestImage = props.transitionGroupElements.reduce((acc, element) => {
  //       if (element.image) {
  //         const img = new Image();
  //         img.src = element.image;
  //         img.onload = () => {
  //           const scaledImageHeight = (img.height * 100) / img.width;
  //           acc = acc > scaledImageHeight ? acc : scaledImageHeight;
  //         };
  //       }
  //       return acc;
  //     }, 0);
  //   }
  // }, [props.transitionGroupElements]);

  const onImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = placeholderImage;
  };

  console.log('[ GalleryResponsiveDataGrid ] transitionGroupElements:', props.transitionGroupElements);

  return (
    <Box sx={{ flexGrow: 1, p: '0 10vw' }}>
      <Grid container spacing={{ xs: 4, md: 2 }}>
        {props.transitionGroupElements?.map(({ isVisible, nodeRef, image, title }, index) => (
          <CSSTransition
            key={index}
            in={isVisible}
            appear={true}
            nodeRef={nodeRef}
            timeout={1000}
            classNames='gallery--transition'
          >
            <Grid xs={12} md={3} key={index}>
              <div className='img--container'>
                <img
                  className='img'
                  src={image}
                  alt={title}
                  onClick={(event: React.MouseEvent<HTMLImageElement, MouseEvent>) =>
                    props.handleImageOnClick && props.handleImageOnClick({ image, title }, event)
                  }
                  onError={onImageError}
                />
                <p className='title'>{title}</p>
              </div>
            </Grid>
          </CSSTransition>
        ))}
      </Grid>
    </Box>
  );
};
