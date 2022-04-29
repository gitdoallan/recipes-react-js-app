/*eslint template-curly-spacing: [2, "always"]*/
import { useEffect, useState } from 'react';

const useImage = (fileName) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    import(`../images/${ fileName }.svg`)
      .then((response) => response.default).then((img) => { setImage(img); })
      .catch((err) => { setError(err); })
      .finally(() => setLoading(false));
  }, [fileName]);

  return {
    loading,
    error,
    image,
  };
};

export default useImage;
