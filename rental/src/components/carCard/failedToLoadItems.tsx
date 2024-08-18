const FailedToLoadItems: React.FC<{ error: Error }> = (props) => {
  return (
    <div>
      <p>{props.error.message}</p>
    </div>
  );
};

export default FailedToLoadItems;
