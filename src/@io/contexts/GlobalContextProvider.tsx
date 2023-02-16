import { IGalleryDataElement } from '@io/interfaces';
import React from 'react';

interface IGlobalContext {
  reRender: React.Dispatch<React.SetStateAction<boolean>>;
  galleryData: {
    get: {
      allGalleryData: Partial<IGalleryDataElement>[];
      byTitle: (title: string, data?: Partial<IGalleryDataElement>[]) => Partial<IGalleryDataElement>[];
      byPrice: (
        priceMin: number,
        priceMax?: number,
        data?: Partial<IGalleryDataElement>[],
      ) => Partial<IGalleryDataElement>[];
      byCurrency: (currency: string, data?: Partial<IGalleryDataElement>[]) => Partial<IGalleryDataElement>[];
      byBrand: (brand: string, data?: Partial<IGalleryDataElement>[]) => Partial<IGalleryDataElement>[];
      partial: (
        perPage: number,
        page: number,
        data?: Partial<IGalleryDataElement>[],
      ) => Partial<IGalleryDataElement>[];
      numberOfPages: (perPage: number, data?: Partial<IGalleryDataElement>[]) => number;
    };
    set: {
      allGalleryData: (data: Partial<IGalleryDataElement>[]) => void;
    };
  };
}

export const GlobalContext = React.createContext<IGlobalContext | null>(null);

interface IGlobalContextProviderProps {
  children: React.ReactNode;
}

export const GlobalContextProvider = (props: IGlobalContextProviderProps) => {
  const [render, reRender] = React.useState<boolean>(false);
  const [getAllGalleryData, setAllGalleryData] = React.useState<Array<Partial<IGalleryDataElement>>>([]);

  return (
    <GlobalContext.Provider
      value={{
        reRender,
        galleryData: {
          get: {
            allGalleryData: getAllGalleryData,
            byTitle: (title: string, data: Partial<IGalleryDataElement>[] = getAllGalleryData) => [],
            byPrice: (
              priceMin: number,
              priceMax: number = priceMin,
              data: Partial<IGalleryDataElement>[] = getAllGalleryData,
            ) => {
              const found = data.filter(product => {
                if (product.price) return priceMin <= product.price && product.price <= priceMax;
                else return false;
              });
              if (!found) return [];
              return found;
            },
            byCurrency: (currency: string, data: Partial<IGalleryDataElement>[] = getAllGalleryData) => [],
            byBrand: (brand: string, data: Partial<IGalleryDataElement>[] = getAllGalleryData) => [],
            partial: (
              perPage: number,
              page: number,
              data: Partial<IGalleryDataElement>[] = getAllGalleryData,
            ) => {
              const pages = Math.ceil(data.length / perPage);

              if (page > pages || page < 1) page = 1;

              let index = 0;
              let offSet = perPage;

              if (page > 1) {
                index = page * perPage - perPage;
                offSet = index + perPage;
              }

              return data.slice(index, offSet);
            },
            numberOfPages: (perPage: number, data: Partial<IGalleryDataElement>[] = getAllGalleryData) =>
              Math.ceil(data.length / perPage),
          },
          set: {
            allGalleryData: setAllGalleryData,
          },
        },
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
