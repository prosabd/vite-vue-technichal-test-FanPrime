import swal from 'sweetalert2'

export function useSwal() {
  const fire = (title, text, icon) => {
    swal.fire({
      title,
      text,
      icon,
    });
  };

  return {
    fire,
  };
}