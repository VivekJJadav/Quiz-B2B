import { useState } from "react";


const IconWithErrorMessage = () => {
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const toggleErrorMessage = () => {
    setShowErrorMessage(!showErrorMessage);
  };

  return (
    <div className="icon-wrapper" onClick={toggleErrorMessage}>
      <img src="your_icon.png" alt="Icon" />
      {showErrorMessage && (
        <div className="error-message">The link does not exist!</div>
      )}
    </div>
  );
};

export default IconWithErrorMessage;
