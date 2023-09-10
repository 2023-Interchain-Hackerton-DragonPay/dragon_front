function VisibilityExist({ children, visible, ...props }) {
  return (
    <div style={{ display: visible ? "flex" : "none" }} {...props}>
      {children}
    </div>
  );
}

export default VisibilityExist;
