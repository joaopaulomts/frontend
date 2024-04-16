export default function GenericComponent({ children }) {
  return (
    <div>
      <h3>HTML passado pelo component pai!</h3>
      {children}
    </div>
  );
}
