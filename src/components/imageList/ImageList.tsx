type TImage = {
  pageURL: string;
  id: string;
  tags: string;
  webFormatURL: string;
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
        <img src={image.webFormatURL} alt={image.tags} />
      </a>
    );
  });
  return <div>{images}</div>;
};

export default ImageList;
