import React, { useEffect, useState } from 'react';
import shareIcon from '../images/shareIcon.svg';

function ShareBtn() {
  const [shareBool, setShareBool] = useState(false);

  useEffect(() => {
    setShareBool(false);
  }, []);

  const handleShareClick = () => {
    if (!shareBool) {
      const endPoint = window.location.href;
      navigator.clipboard.writeText(endPoint);
      setShareBool(true);
    }
  };

  return (
    <div>
      <input
        data-testid="share-btn"
        type="button"
        src={ shareIcon }
        className="share-btn"
        onClick={ handleShareClick }
      />
      {shareBool && 'Link copied!'}
    </div>
  );
}

export default ShareBtn;
