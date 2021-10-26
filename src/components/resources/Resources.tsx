type TResource = {
  id: number;
  title: string;
};

type TResources = {
  resources: TResource[];
};

const Resources = (props: TResources) => {
  return (
    <>
      {props.resources.map((resource) => {
        return <p key={resource.id}>{resource.title}</p>;
      })}
    </>
  );
};

export default Resources;
