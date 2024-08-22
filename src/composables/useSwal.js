import Swal from 'sweetalert2'

// Fonction qui retourne un message d'alerte de type Swal pour faciliter et reduire le code dans les vues
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