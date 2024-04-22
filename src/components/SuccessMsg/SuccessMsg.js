import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const SuccessMsg = ({ message }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (message && !isShown) {
      Swal.fire({
        icon: "success",
        title: "Buen Trabajo!",
        text: message,
      }).then(() => {
        setIsShown(true); // Indica que el mensaje ya se mostró
      });
    }
  }, [message, isShown]);

  return null;
};

  /* const [isVisible, setIsVisible] = useState(false); */

 /*  useEffect(() => {
    // Muestra la alerta solo si el prop show es true
    if (show) {
      const swalInstance = Swal.fire({
        icon: "success",
        title: "¡Bien Hecho!",
        text: message,
      });

      // Utiliza el evento didClose para realizar acciones después de cerrar el SweetAlert
      swalInstance.then((result) => {
        if (result.isDismissed) {
          // Hacer algo después de cerrar, si es necesario
        }
      });

      // Agrega la lógica para cerrar el SweetAlert después de un tiempo
      const timer = setTimeout(() => {
        swalInstance.close();
        setIsVisible(false); // Establece isVisible en false después de cerrar
      }, 3000);

      // Limpia el temporizador al desmontar el componente
      return () => clearTimeout(timer);
    }
  }, [message, show]);

  return isVisible ? null : <div style={{ display: "none" }} />;
};
 */
export default SuccessMsg;
