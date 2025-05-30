
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const What = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to landing page when What is accessed
    navigate('/landing');
  }, [navigate]);

  return null;
};

export default What;
