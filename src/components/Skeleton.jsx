import React from "react";

const Skeleton = ({ className }) => (
  <div className={`animate-pulse rounded-2xl bg-slate-200/80 dark:bg-slate-800 ${className}`} />
);

export default Skeleton;
