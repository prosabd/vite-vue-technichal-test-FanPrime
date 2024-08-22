import Swal from 'sweetalert2'

export function useSwal() {
  const fire = (title, text, icon) => {
    Swal.fire({
      title,
      text,
      icon,
    });
  };

  return {
    fire,
  };
}