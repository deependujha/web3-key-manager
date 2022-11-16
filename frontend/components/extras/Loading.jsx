import React from 'react'
import ReactLoading from "react-loading";
import styles from "../../styles/Home.module.css";


const Loading = () => {
  return (
    <div
      className={`${styles.container} flex items-center justify-center h-screen`}
    >
      <div>
        <ReactLoading
          type="spinningBubbles"
          color="#ed2139"
          height={100}
          width={100}
        />
        <div className="my-4 text-lg">Loading.....</div>
      </div>
    </div>
  );
}

export default Loading