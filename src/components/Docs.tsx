

type GoogleDocViewerProps = {
  docId: string;
  height?: string;
};

export const GoogleDocViewer = ({ docId, height = '450px' }: GoogleDocViewerProps) => {
  return (
    <iframe
      src={`${docId}`}
      width="100%"
      height={height}
      title="Google Document"
      style={{ border: 'none' }}
    />
  );
};