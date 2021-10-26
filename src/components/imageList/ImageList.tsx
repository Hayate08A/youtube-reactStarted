import Masonry from 'react-masonry-component';

type TImage = {
  pageURL: string;
  id: string;
  tags: string;
  webformatURL: string;
};

type TImageList = {
  images: TImage[];
};

export const ImageList = (props: TImageList) => {
  const images = props.images.map((image) => {
    return (
      <a
        href={image.pageURL}
        key={image.id}
        target='_blank'
        rel='noopener noreferrer'
        className='ui medium image'
      >
        <img src={image.webformatURL} alt={image.tags} />
      </a>
    );
  });
  return <Masonry className='image_list'>{images}</Masonry>;
};

export default ImageList;
