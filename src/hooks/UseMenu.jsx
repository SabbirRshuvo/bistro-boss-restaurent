import axios from "axios";
import React, { useEffect, useState } from "react";

const UseMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/menu`).then((res) => {
      setMenu(res.data);
      setLoading(false);
    });
  }, []);
  return [menu, loading];
};

export default UseMenu;
