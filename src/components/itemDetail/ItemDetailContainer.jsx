import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getDoc, doc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const itemCollection = collection(db, "products");
    const ref = doc(itemCollection, id);

    getDoc(ref).then((res) => {
      setProduct({
        id: res.id,
        ...res.data(),
      });
    });
  }, [id]);

  return (
    <div>
      <ItemDetail
        sx={{ paddingTop:"50px" }}
        product={product} />
    </div>
  );
};

export default ItemDetailContainer;
