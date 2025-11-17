export default function SubmitButton({ id, buttonText }) {
  return (
    <button id={id} type="submit">
      {buttonText}
    </button>
  );
}
