export default function useRefresh() {
  return () => {
    window.location.reload();
  };
}
